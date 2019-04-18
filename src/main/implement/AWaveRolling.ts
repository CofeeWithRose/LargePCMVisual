import { WaveRollingPlugins, WaveRollingOptions, IWaveRolling, WaveRollingEvents, WaveRollingEventsTrigger } from "../interface/IWaveRolling";
import { WavDecoder } from "../../plugins/decoder/implement/WavDecoder";
import { WaveRender } from "../../plugins/render/implement/CanvasWaveRender";
import { SVGWaveRender } from "../../plugins/render/implement/SVGWaveRender";
import { DataTransformer } from "../../plugins/data_transformer/DataTransformer";
import { IWaveRender } from "../../plugins/render/interface/IWaveRender";
import { IWavDecoder } from "../../plugins/decoder/interface/IWavDecoder";
import { Emiter } from "../../util/event_emiter/Emiter";
import { IEmiter } from "../../util/event_emiter/IEmiter";
import { EventHandle } from "./EventHandle";

let PLUGINS: WaveRollingPlugins = {

    Decorder: WavDecoder,
    
    Render: WaveRender,
    
    HDRender: SVGWaveRender,

    DataTransformer,

}

export abstract class AWaveRolling extends EventHandle<WaveRollingEventsTrigger, WaveRollingEvents> implements IWaveRolling {

   protected constructor(){
    super();
    this.setTriggerProcesser('error', error => error );
    this.setTriggerProcesser('abort', () => null );
    // 图像未缩放.
    this.setTriggerProcesser('click', ({viewPercent}) => ({totalPercent: viewPercent}));
    this.setTriggerProcesser('wheel', ({viewPercent}) => ({totalPercent: viewPercent, startPercent: 0, endPercent: 1}));
   }


    protected plugins: WaveRollingPlugins;

    protected render: IWaveRender;
    
    protected decoder: IWavDecoder;

    /**
     * after use pugins, it will effect all the instance of WaveVisual later.
     * 
     * @param { { Decorder?, Render?, DataTransformer? } } plugins. 
     */
    static use(plugins: WaveRollingPlugins){
        
        const plugsKeys = Object.keys(plugins||{});
        const extraPluginKeys = plugsKeys.filter( name => !(<any>PLUGINS)[name]);
        if(extraPluginKeys.length){
            throw `[ ${ extraPluginKeys.join(' , ') } ] is not support.` 
        }
        PLUGINS = {
            ...PLUGINS,
            ...plugins,
        }
    }

    /**
     * list all plugins.
     */
    static plugins(){
        return { ...PLUGINS };
    }


    protected init(containner: HTMLElement, options?: WaveRollingOptions){
        this.plugins = { ...PLUGINS };
        const { color, scalable } = options||{ color: '', scalable: false };
        this.render = scalable? new this.plugins.HDRender() : new this.plugins.Render();
        this.render.init( containner, { color } );
    }

    abstract load(url: string): void;

    abstract loadBlob(arrayBuffer: ArrayBuffer): void;

    abstract append(arrayBuffer: ArrayBuffer): void;

    abstract abort(): void;

    abstract onerror(error: Error): void;
    
    abstract onabort(): void;

}