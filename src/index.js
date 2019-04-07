

class WaveRender{
 
    constructor(container){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
       
        this.canvas.width = container.clientWidth; 
        this.canvas.height = container.clientHeight;
        this.halfHeight = this.canvas.height * 0.5;
        this.context.beginPath();
        this.context.moveTo(0, this.halfHeight);
        this.context.lineTo(this.canvas.width, this.halfHeight);
        this.context.stroke()
        container.appendChild(this.canvas);
    }

    // context;
    // canvas;
    // halfHeight;

    render(audioBuffer, startPercent, endPercent){
        const floatArrayData = audioBuffer.getChannelData(0);
        const startX = this.canvas.width * startPercent;
        const endX = this.canvas.width * endPercent;
        const stepnum = Math.max (Math.floor( devicePixelRatio * 100 *  (endX - startX) ) , 10);
        const stepIndex =  Math.floor(floatArrayData.length/stepnum);
        const stepX = ( endX - startX )/ stepnum;
        this.context.beginPath();
        for(let i = 0; i < stepnum; i++){
            const x = startX+ stepX*i;
            // console.log('x/devicePixelRatio： ', x, 'this.halfHeight + this.halfHeight*floatArrayData[i * stepIndex]: ', this.halfHeight + this.halfHeight*floatArrayData[i * stepIndex] )
            this.context.lineTo( x,  this.halfHeight + this.halfHeight*floatArrayData[i * stepIndex]);
        }
        this.context.stroke()
    }

    clear(){
        this.context.clearRect( 0,0,this.canvas.width, this.canvas.height);
    }


}




/**
 * An audio progresive decoder, only surport wav format in pacm encoding.
 */
class WavAsycDecoder{

    /**
     * the decoded data byte length of input ArrayBuffer.
     */
    // _decodedDataByteLength;

    // _audioContext;

    // _headerBuffer;


    // _perDataBufferPiceLength;


    // _dataBufferCache;

    // _dataBufferRangeList;

    // _cachedDataByteLength;

    // _totalDataBufferLength;

    // _tempBufferRange;

    // _lastCacheIndex;

    // _cacheOffset;

    /**
     * start decode when this method execute, if this method excute more than once, nothing will happend.
     * 
     * @param {ArrayBuffer} firstPiceArrayBuffer the first splice ArrayBuffer of wave audio data from xhr\fetch\file,
     *  also receive the whole ArrayBuffer.
     */
    decode(firstPiceArrayBuffer){

        this._dataBufferCache = [];

        this._dataBufferRangeList = [];
        
        const {  sampleRate, numOfChannels, headBuffer, dataBuffer, totalDataByteLength } = this._getWavInfo(firstPiceArrayBuffer);
        this._audioContext = new OfflineAudioContext(numOfChannels, sampleRate, sampleRate);
        
        this._totalDataBufferLength = totalDataByteLength;

        this._headerBuffer = headBuffer;
        this._perDataBufferPiceLength = sampleRate;
        this._decodedDataByteLength = 0;
        this._lastCacheIndex = 0;
        
        this._cachedDataByteLength= 0;

        this._cacheOffset = 0;
        
        this._cacheDataBufferList( dataBuffer );
        this._decodeBufferPice();
        this.decode = () => {};
        
    }

        /**
     * add the rest data to decode.
     *  
     * @param {ArrayBuffer} buffer the next pices ArrayBuffer of wave audio, you can append several times before complete,
     * when you append extra data, it will be iignore.
     */
    appendBuffer(buffer){
        const isCacheComplete = this._cachedDataByteLength >= this._totalDataBufferLength;
        const isWaitting = !this._dataBufferRangeList.length;
        this._cacheDataBufferList(buffer);
        if( !isCacheComplete && isWaitting ){
            this._decodeBufferPice();
        }
    }

    abort(){
        this._decodeBufferPice = () => {}
        this.appendBuffer = () => {}
        this.onprocess = () =>{}
        this.onwaitting = () => {}
        this._dataBufferCache = null;
        this._dataBufferRangeList = null;
        this.onabort();
    }

    _cacheDataBufferList( bufferPiece ){

        
        this._dataBufferCache.push( bufferPiece );

        const cacheIndex = this._dataBufferCache.length -1;

        let offset = 0;

        if( this._tempBufferRange){
            const maxLength = this._totalDataBufferLength - this._cachedDataByteLength;
            let needLength  = this._perDataBufferPiceLength - this._tempBufferRange.length;
            needLength = needLength <= maxLength? needLength : maxLength; 
            if( bufferPiece.byteLength >= needLength){
                this._tempBufferRange.segments.push({ cacheIndex, offset, length: needLength, cacheOffset: this._cacheOffset })
                this._tempBufferRange.length += needLength;
                this._cachedDataByteLength+= needLength;
                offset += needLength;
                this._dataBufferRangeList.push(this._tempBufferRange);
                
                this._tempBufferRange = null;
            }else{
                this._tempBufferRange.segments.push( { cacheIndex,  offset, length: bufferPiece.byteLength, cacheOffset: this._cacheOffset });
                this._tempBufferRange.length+=bufferPiece.byteLength;
                this._cachedDataByteLength+= bufferPiece.byteLength;
                offset+=bufferPiece.byteLength;
            }
        
        }
        const segmentNumber = Math.floor((bufferPiece.byteLength - offset) /this._perDataBufferPiceLength);

        for(let i =0 ; i < segmentNumber; i++ ){
            
            this._dataBufferRangeList.push({
                segments: [ { cacheIndex, offset, length: this._perDataBufferPiceLength, cacheOffset: this._cacheOffset} ],
                length: this._perDataBufferPiceLength,
            })
            offset += this._perDataBufferPiceLength;
            this._cachedDataByteLength += this._perDataBufferPiceLength;
        }

        const restCacheLength = bufferPiece.byteLength - offset; 
        if(restCacheLength){

            if( this._cachedDataByteLength + restCacheLength >= this._totalDataBufferLength ){
                const length = this._totalDataBufferLength - this._cachedDataByteLength;
                this._dataBufferRangeList.push({
                    segments: [ { cacheIndex, offset, length, cacheOffset: this._cacheOffset} ],
                    length,
                });
                this._cachedDataByteLength = this._totalDataBufferLength;
            }else{
                const length = bufferPiece.byteLength - offset;
                this._tempBufferRange = {
                    segments: [ { cacheIndex, offset, length, cacheOffset: this._cacheOffset} ],
                    length,
                }
                this._cachedDataByteLength+= length
            }
        }

    }

    
    _decodeBufferPice(){

            const dataRange = this._dataBufferRangeList.shift();
            if(dataRange){
                const audioData = this._getRangeAuidoBuffer(dataRange);

                // const audio = document.createElement('audio');
                // audio.controls = true;
                // audio.src = URL.createObjectURL(new File([audioData], 'audio.wav',{type: 'audo/wav'}));
                // document.body.appendChild(audio);
                
                this._audioContext.decodeAudioData(audioData, data => {
                    const rangeStart = this._decodedDataByteLength;
                    this._decodedDataByteLength += dataRange.length;
                    
                    if( this._decodedDataByteLength >= this._totalDataBufferLength ){ 
                        this._dataBufferCache = null;  
                        this.oncomplete();
                    }else{
                        this._decodeBufferPice();
                    }
                    this.onprocess({
                        data,
                        rangeStart,
                        rangeEnd: this._decodedDataByteLength,
                        total: this._totalDataBufferLength, 
                    });
                  
                    
                }, this.onerror);
            }else{
                this.onwaitting();
            }
 
    }

    _getRangeAuidoBuffer({segments, length: rangeLength}){
        // console.log( 'rangeLength: ', rangeLength,'segments: ', segments )
        const dataBuffer = new ArrayBuffer( this._headerBuffer.byteLength + rangeLength);
        const dataView = new Uint8Array(dataBuffer);
        let viewOffset = 0;

        this._setWavHeadDataLength(rangeLength);
        const headView = new Uint8Array( this._headerBuffer );
        dataView.set(headView);
        viewOffset+= this._headerBuffer.byteLength;

        segments.forEach( ({ cacheIndex, offset, length, cacheOffset }) => {
            
            if( cacheIndex - cacheOffset != this._lastCacheIndex ){
                this._dataBufferCache.shift();
                this._cacheOffset--;
                this._lastCacheIndex = cacheIndex - cacheOffset;
            }
            const curCacheIndex = cacheIndex + this._cacheOffset -  cacheOffset; 
            const buffer = this._dataBufferCache[ curCacheIndex ];
            const view = new Uint8Array( buffer, offset, length);
            dataView.set(view, viewOffset);
            viewOffset += length
        });
        
        return dataBuffer;
    }



    _setWavHeadDataLength(byteLength){
        const view = new DataView( this._headerBuffer );
        view.setUint32( this._dataLengthOffset, byteLength, true );
    }

    _getWavInfo(buffer){

        const view = new DataView( buffer );
    
        this._dataLengthOffset = 16 + 4 + 4 + view.getUint32( 16, true );
        const totalDataByteLength = view.getUint32( this._dataLengthOffset, true );
        const numOfChannels = view.getUint16( 22, true );
        const sampleRate = view.getUint32( 24, true );
        const headBuffer = buffer.slice(0, this._dataLengthOffset+4);
        const dataBuffer = buffer.slice(this._dataLengthOffset+4, this._dataLengthOffset+4 + totalDataByteLength);
        return {
            sampleRate,
            numOfChannels,
            headBuffer,
            dataBuffer,
            totalDataByteLength,  
        };
    }
  
    onprocess(data){

    }

    onwaitting(){

    }

    oncomplete(){

    }

    onabort(){

    }

    onerror(error){
        console.error(error);
    }
}


const waveRender = new WaveRender(document.querySelector('#container'))
let decorder;
let reader;
function onSelect(event){
    if(!event.target.files[0]) return;
    if(reader){
        reader.abort()
    }
    reader = new FileReader();
   
    let loadOffset = 0;
    if(decorder){
        decorder.abort();
    }
    decorder = new WavAsycDecoder();
    decorder.onprocess = data => { 
        waveRender.render(data.data, data.rangeStart/data.total,  data.rangeEnd/data.total );
       
    };
    decorder.onwaitting = () => {
        decorder.appendBuffer(reader.result.slice(loadOffset));
        loadOffset = reader.result.byteLength;
    }
    decorder.oncomplete = () => {
        console.log('complete....')
    }

    reader.onload = () => {
        if(0 === loadOffset&&reader.result){
            decorder.decode(reader.result);
            loadOffset = reader.result.byteLength;
        }
    }
    reader.readAsArrayBuffer(event.target.files[0]);
    waveRender.clear();
}


// const waveRender = new WaveRender(document.querySelector('#container'))
let fetchReader;
function onLoadAudio(url){
    if(decorder){

        decorder.abort();
        waveRender.clear()
    }
    decorder = new WavAsycDecoder();
    decorder.onprocess = data => { 
        waveRender.render(data.data, data.rangeStart/data.total,  data.rangeEnd/data.total );
       
    };
    decorder.oncomplete = () => console.log('cmp')
    try{
        loadAudio(url, decorder);
    }catch(e){
        console.error('e: ', e);
    }
    
}

function loadAudio(url, decorder){
    const controller = new AbortController()
    const signal = controller.signal;
    
    fetch(url,{ signal, method: 'GET'}).then( rsp => {

        fetchReader = rsp.body.getReader();

        decorder.onwaitting = () => fetchReader.read().then(data => {
            if(!data.done){
                const buffer = new ArrayBuffer(data.value.length);
                const view = new Uint8Array(buffer);
                view.set(data.value);
                decorder.appendBuffer(buffer);
                
            }

        });
        decorder.onabort = () => { 
            controller.abort(); 
            fetchReader.cancel() 
        };

        fetchReader.read().then( data => {
            const buffer = new ArrayBuffer(data.value.length);
            const view = new Uint8Array(buffer);
            view.set(data.value);
            decorder.decode(buffer);
        });

            

    }).catch(e =>{
        console.error(e)
    })
}