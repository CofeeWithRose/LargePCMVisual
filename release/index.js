!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,i=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],s=Object.keys(a),c=0;c<s.length;++c){var f=s[c],h=a[f];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(t.push({obj:a,prop:f}),r.push(h))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var i="",a=0;a<n.length;++a){var s=n.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=n.charAt(a):s<128?i+=o[s]:s<2048?i+=o[192|s>>6]+o[128|63&s]:s<55296||s>=57344?i+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(a)),i+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var s=t;return i(t)&&!i(r)&&(s=a(t,o)),i(t)&&i(r)?(r.forEach(function(r,i){if(n.call(t,i)){var a=t[i];a&&"object"==typeof a&&r&&"object"==typeof r?t[i]=e(a,r,o):t.push(r)}else t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t},s)}}},function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.WaveRolling=n.WaveRolling},function(e,t,r){"use strict";var n,i=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){return e.call(this)||this}return i(t,e),t.create=function(e,t){var r=new this;return r.init(e,t),r},t.prototype.load=function(e,t){var r=this;this.decoder&&this.decoder.abort(),this.decoder=new this.plugins.Decorder,this.render.clear(),this.render.reset(),this.decoder.onprocess=function(e){var t=e.audioBuffer,n=e.startTime,i=e.endTime,o=e.duration;r.render.render(t,n/o,i/o)},this.decoder.onerror=this.onerror;var n=t||{data:null,method:null},i=n.data,o=n.method;this.loadAudio(e,i,o)},t.prototype.loadBlob=function(e){var t=this;this.decoder.decode(e),this.append=function(e){t.decoder.appendBuffer(e)}},t.prototype.append=function(e){},t.prototype.abort=function(){this.decoder&&this.decoder.abort(),this.onabort()},t.prototype.onerror=function(e){console.error(e)},t.prototype.onabort=function(){},t.prototype.loadAudio=function(e,t,r){var n=this,i=new AbortController,a=i.signal,s=this.plugins.DataTransformer(e,t,r),c=s.url,f=s.fetchOptions,h=o({signal:a,method:r},f);fetch(c,h).then(function(e){var t=e.body.getReader();n.decoder.onwaitting=function(){return t.read().then(function(e){if(!e.done){var t=new ArrayBuffer(e.value.length);new Uint8Array(t).set(e.value),n.decoder.appendBuffer(t)}}).catch(function(e){console.error(e)})},n.decoder.onabort=function(){i.abort(),t.cancel().catch(function(e){console.warn("WaveVisual load canceld.")})},t.read().then(function(e){var t=new ArrayBuffer(e.value.length);new Uint8Array(t).set(e.value),n.decoder.decode(t)})}).catch(function(e){console.error(e)})},t}(r(4).AWaveRolling);t.WaveRolling=a},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),o=r(6),a=r(7),s=r(8),c={Decorder:i.WavDecoder,Render:o.WaveRender,HDRender:a.HDWaveRender,DataTransformer:s.DataTransformer},f=function(){function e(){}return e.use=function(e){var t=Object.keys(e||{}).filter(function(e){return!c[e]});if(t.length)throw"[ "+t.join(" , ")+" ] is not support.";c=n({},c,e)},e.plugins=function(){return n({},c)},e.prototype.init=function(e,t){this.plugins=n({},c);var r=t||{color:"",scalable:!1},i=r.color,o=r.scalable;this.render=o?new this.plugins.HDRender:new this.plugins.Render,this.render.init(e,{color:i})},e}();t.AWaveRolling=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.decode=function(e){this.dataBufferCache=[],this.dataBufferRangeList=[];var t=this.getWavInfo(e),r=t.sampleRate,n=t.numOfChannels,i=t.headBuffer,o=t.dataBuffer,a=t.totalDataByteLength,s=t.bitWide,c=t.byteSpeed,f=t.duration;this.perDataBufferPiceLength=1*r*n*s/8,this.byteSpeed=c,this.duration=f;var h=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!h)throw this.onerror(new Error("Not Suport Error")),"Not Suport Error";this.audioContext=new h(1,this.perDataBufferPiceLength,44100),this.totalDataBufferLength=a,this.headerBuffer=i,this.decodedDataByteLength=0,this.lastCacheIndex=0,this.cachedDataByteLength=0,this.cacheOffset=0,this.cacheDataBufferList(o),this.decodeBufferPice(),this.decode=function(){}},e.prototype.appendBuffer=function(e){var t=this.cachedDataByteLength>=this.totalDataBufferLength,r=!this.dataBufferRangeList.length;this.cacheDataBufferList(e),!t&&r&&this.decodeBufferPice()},e.prototype.abort=function(){this.release(),this.onabort()},e.prototype.release=function(){this.dataBufferCache=null,this.dataBufferRangeList=null,this.perDataBufferPiceLength=null,this.byteSpeed=0,this.duration=0,this.audioContext=null,this.totalDataBufferLength=0,this.headerBuffer=null,this.decodedDataByteLength=0,this.lastCacheIndex=0,this.cachedDataByteLength=0,this.cacheOffset=0,this.decodeBufferPice=function(){},this.appendBuffer=function(){},this.onprocess=function(){},this.onwaitting=function(){}},e.prototype.cacheDataBufferList=function(e){this.dataBufferCache.push(e);var t=this.dataBufferCache.length-1,r=0;if(this.tempBufferRange){var n=this.totalDataBufferLength-this.cachedDataByteLength,i=this.perDataBufferPiceLength-this.tempBufferRange.length;i=i<=n?i:n,e.byteLength>=i?(this.tempBufferRange.segments.push({cacheIndex:t,offset:r,length:i,cacheOffset:this.cacheOffset}),this.tempBufferRange.length+=i,this.cachedDataByteLength+=i,r+=i,this.dataBufferRangeList.push(this.tempBufferRange),this.tempBufferRange=null):(this.tempBufferRange.segments.push({cacheIndex:t,offset:r,length:e.byteLength,cacheOffset:this.cacheOffset}),this.tempBufferRange.length+=e.byteLength,this.cachedDataByteLength+=e.byteLength,r+=e.byteLength)}for(var o=Math.floor((e.byteLength-r)/this.perDataBufferPiceLength),a=0;a<o;a++)this.dataBufferRangeList.push({segments:[{cacheIndex:t,offset:r,length:this.perDataBufferPiceLength,cacheOffset:this.cacheOffset}],length:this.perDataBufferPiceLength}),r+=this.perDataBufferPiceLength,this.cachedDataByteLength+=this.perDataBufferPiceLength;var s=e.byteLength-r;if(s)if(this.cachedDataByteLength+s>=this.totalDataBufferLength){var c=this.totalDataBufferLength-this.cachedDataByteLength;this.dataBufferRangeList.push({segments:[{cacheIndex:t,offset:r,length:c,cacheOffset:this.cacheOffset}],length:c}),this.cachedDataByteLength=this.totalDataBufferLength}else{var f=e.byteLength-r;this.tempBufferRange={segments:[{cacheIndex:t,offset:r,length:f,cacheOffset:this.cacheOffset}],length:f},this.cachedDataByteLength+=f}},e.prototype.decodeBufferPice=function(){var e=this,t=this.dataBufferRangeList.shift();if(t){var r=this.getRangeAuidoBuffer(t);this.audioContext.decodeAudioData(r,function(r){var n=e.decodedDataByteLength/e.byteSpeed;e.decodedDataByteLength+=t.length;var i=e.decodedDataByteLength>=e.totalDataBufferLength;i||e.decodeBufferPice(),e.onprocess({audioBuffer:r,startTime:n,endTime:e.decodedDataByteLength/e.byteSpeed,duration:e.duration}),i&&(e.dataBufferCache=null,e.oncomplete(),e.release())},this.onerror)}else this.onwaitting()},e.prototype.getRangeAuidoBuffer=function(e){var t=this,r=e.segments,n=e.length,i=new ArrayBuffer(this.headerBuffer.byteLength+n),o=new Uint8Array(i),a=0;this.setWavHeadDataLength(n);var s=new Uint8Array(this.headerBuffer);return o.set(s),a+=this.headerBuffer.byteLength,r.forEach(function(e){var r=e.cacheIndex,n=e.offset,i=e.length,s=e.cacheOffset;r-s!=t.lastCacheIndex&&(t.dataBufferCache.shift(),t.cacheOffset--,t.lastCacheIndex=r-s);var c=r+t.cacheOffset-s,f=t.dataBufferCache[c],h=new Uint8Array(f,n,i);o.set(h,a),a+=i}),i},e.prototype.setWavHeadDataLength=function(e){new DataView(this.headerBuffer).setUint32(this.dataLengthOffset,e,!0)},e.prototype.getWavInfo=function(e){var t=new DataView(e),r=this.getString(t,0,4),n=this.getString(t,8,4);if("RIFF"!==r||"WAVE"!==n)throw this.onerror(new Error("Format Error.")),"Format Error";this.dataLengthOffset=this.getDataOffset(t);var i=t.getUint32(this.dataLengthOffset,!0),o=t.getUint16(22,!0),a=t.getUint16(34,!0),s=t.getUint32(24,!0),c=t.getUint32(28,!0);return{bitWide:a,sampleRate:s,numOfChannels:o,headBuffer:e.slice(0,this.dataLengthOffset+4),dataBuffer:e.slice(this.dataLengthOffset+4,this.dataLengthOffset+4+i),totalDataByteLength:i,byteSpeed:c,duration:i/c}},e.prototype.getDataOffset=function(e){for(var t=20+e.getUint32(16,!0);;){if("data"===this.getString(e,t,4))return 4+t;t+=e.getUint32(t+4,!0)+4+4}},e.prototype.getString=function(e,t,r){for(var n="",i=0;i<r;i++)n+=String.fromCharCode(e.getUint8(t+i));return n},e.prototype.onprocess=function(e){},e.prototype.onwaitting=function(){},e.prototype.oncomplete=function(){},e.prototype.onabort=function(){},e.prototype.onerror=function(e){console.error(e)},e}();t.WavDecoder=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.init=function(e,t){var r=(t||{color:"black"}).color;this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=devicePixelRatio*Math.max(window.screen.width,window.screen.height),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.height=e.clientHeight,this.halfHeight=.5*this.canvas.height,this.color=r,this.reset(),e.appendChild(this.canvas)},e.prototype.setColor=function(){var e,t=this;this.color instanceof Array?(e=this.context.createLinearGradient(0,this.halfHeight,this.canvas.width,this.halfHeight),this.color.forEach(function(r,n){if("string"==typeof r)e.addColorStop(n/(t.color.length-1),r);else{var i=r.offset,o=r.value;e.addColorStop(i,o)}})):e=this.color,this.context.strokeStyle=e},e.prototype.reset=function(){this.setColor()},e.prototype.render=function(e,t,r){var n=e.getChannelData(0);n=n.map(function(e){return Math.abs(e)});var i=Math.floor(this.canvas.width*t),o=Math.ceil(this.canvas.width*r)-i||10,a=Math.floor(n.length/o)||1;this.context.beginPath(),this.context.lineWidth=1;for(var s=0;s<=o;s++){var c=i+s,f=Math.floor(a*s),h=this.halfHeight*n[f];this.context.moveTo(c,this.halfHeight),this.context.lineTo(c,this.halfHeight+h),this.context.moveTo(c,this.halfHeight),this.context.lineTo(c,this.halfHeight-h)}this.context.stroke()},e.prototype.clear=function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},e}();t.WaveRender=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.scaleX=1,this.scaleDelta=1,this.pointArray=new Array,this.onScroll=function(t){t.returnValue=!1;var r=t&&t.deltaY;r&&(r<0?e.scaleX+=e.scaleDelta:e.scaleX-=e.scaleDelta),e.scaleX=Math.max(e.scaleDelta,e.scaleX),e.drawTimer&&clearTimeout(e.drawTimer),e.drawTimer=setTimeout(function(){return e.draw()},200)}}return e.prototype.init=function(e,t){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.style.width="100%",this.clientWidth=e.clientWidth,this.svg.style.height=e.clientHeight+"px",this.halfHeight=.5*e.clientHeight,e.appendChild(this.svg),this.svg.addEventListener("wheel",this.onScroll)},e.prototype.getPoints=function(){for(var e="",t=Math.floor(.1/(this.scaleX*devicePixelRatio))||1,r=0;r<this.pointArray.length&&r*this.scaleX<this.clientWidth*devicePixelRatio;r+=t)e+=r*this.scaleX+","+this.pointArray[r]+" ";return e},e.prototype.draw=function(){var e='<polyline points="'+this.getPoints()+'" style="stroke-width:'+1/devicePixelRatio+'; stroke: red;" ></polyline>';this.svg.innerHTML=e},e.prototype.reset=function(){this.scaleX=1,this.scaleDelta=1,this.pointArray=new Array,this.render=this.firstRender},e.prototype.render=function(e,t,r){this.firstRender(e,t,r)},e.prototype.firstRender=function(e,t,r){var n=e.length/r-t;this.scaleX=this.clientWidth/n,this.scaleDelta=this.scaleX,this.afterRender(e,t,r),this.render=this.afterRender},e.prototype.afterRender=function(e,t,r){for(var n=e.getChannelData(0),i=0;i<n.length;i++)this.pointArray.push(this.halfHeight+this.halfHeight*n[i]);this.draw()},e.prototype.clear=function(){},e}();t.HDWaveRender=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);t.DataTransformer=function(e,t,r){return e=e||"","GET"===(r=r||"GET")?(e=e+"?"+(t=t instanceof FormData?null:n.stringify(t)),t=null):t=t instanceof FormData?t:JSON.stringify(t),{url:e,fetchOptions:{body:t,method:r}}}},function(e,t,r){"use strict";var n=r(10),i=r(11),o=r(1);e.exports={formats:o,parse:i,stringify:n}},function(e,t,r){"use strict";var n=r(0),i=r(1),o=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,f=function(e,t){c.apply(e,s(t)?t:[t])},h=Date.prototype.toISOString,l={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:i.formatters[i.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},u=function e(t,r,i,o,a,c,h,u,d,p,g,y,v){var m=t;if("function"==typeof h?m=h(r,m):m instanceof Date?m=p(m):"comma"===i&&s(m)&&(m=m.join(",")),null===m){if(o)return c&&!y?c(r,l.encoder,v):r;m=""}if("string"==typeof m||"number"==typeof m||"boolean"==typeof m||n.isBuffer(m))return c?[g(y?r:c(r,l.encoder,v))+"="+g(c(m,l.encoder,v))]:[g(r)+"="+g(String(m))];var b,w=[];if(void 0===m)return w;if(s(h))b=h;else{var O=Object.keys(m);b=u?O.sort(u):O}for(var B=0;B<b.length;++B){var D=b[B];a&&null===m[D]||(s(m)?f(w,e(m[D],"function"==typeof i?i(r,D):r,i,o,a,c,h,u,d,p,g,y,v)):f(w,e(m[D],r+(d?"."+D:"["+D+"]"),i,o,a,c,h,u,d,p,g,y,v)))}return w};e.exports=function(e,t){var r,n=e,c=function(e){if(!e)return l;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||l.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=i.formatters[r],a=l.filter;return("function"==typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:l.addQueryPrefix,allowDots:void 0===e.allowDots?l.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:l.charsetSentinel,delimiter:void 0===e.delimiter?l.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:l.encode,encoder:"function"==typeof e.encoder?e.encoder:l.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:l.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:l.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:l.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:l.strictNullHandling}}(t);"function"==typeof c.filter?n=(0,c.filter)("",n):s(c.filter)&&(r=c.filter);var h,d=[];if("object"!=typeof n||null===n)return"";h=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var p=a[h];r||(r=Object.keys(n)),c.sort&&r.sort(c.sort);for(var g=0;g<r.length;++g){var y=r[g];c.skipNulls&&null===n[y]||f(d,u(n[y],y,p,c.strictNullHandling,c.skipNulls,c.encode?c.encoder:null,c.filter,c.sort,c.allowDots,c.serializeDate,c.formatter,c.encodeValuesOnly,c.charset))}var v=d.join(c.delimiter),m=!0===c.addQueryPrefix?"?":"";return c.charsetSentinel&&("iso-8859-1"===c.charset?m+="utf8=%26%2310003%3B&":m+="utf8=%E2%9C%93&"),v.length>0?m+v:""}},function(e,t,r){"use strict";var n=r(0),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(n),s=a?n.slice(0,a.index):n,c=[];if(s){if(!r.plainObjects&&i.call(Object.prototype,s)&&!r.allowPrototypes)return;c.push(s)}for(var f=0;null!==(a=o.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&i.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+n.slice(a.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,a=e[i];if("[]"===a&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(s,10);r.parseArrays||""!==s?!isNaN(c)&&a!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(o=[])[c]=n:o[s]=n:o={0:n}}n=o}return n}(c,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return o;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?o.charset:e.charset;return{allowDots:void 0===e.allowDots?o.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:o.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:o.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:o.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:o.comma,decoder:"function"==typeof e.decoder?e.decoder:o.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:o.delimiter,depth:"number"==typeof e.depth?e.depth:o.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:o.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:o.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:o.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){var r,s={},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,h=c.split(t.delimiter,f),l=-1,u=t.charset;if(t.charsetSentinel)for(r=0;r<h.length;++r)0===h[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[r]?u="utf-8":"utf8=%26%2310003%3B"===h[r]&&(u="iso-8859-1"),l=r,r=h.length);for(r=0;r<h.length;++r)if(r!==l){var d,p,g=h[r],y=g.indexOf("]="),v=-1===y?g.indexOf("="):y+1;-1===v?(d=t.decoder(g,o.decoder,u),p=t.strictNullHandling?null:""):(d=t.decoder(g.slice(0,v),o.decoder,u),p=t.decoder(g.slice(v+1),o.decoder,u)),p&&t.interpretNumericEntities&&"iso-8859-1"===u&&(p=a(p)),p&&t.comma&&p.indexOf(",")>-1&&(p=p.split(",")),i.call(s,d)?s[d]=n.combine(s[d],p):s[d]=p}return s}(e,r):e,f=r.plainObjects?Object.create(null):{},h=Object.keys(c),l=0;l<h.length;++l){var u=h[l],d=s(u,c[u],r);f=n.merge(f,d,r)}return n.compact(f)}}])});