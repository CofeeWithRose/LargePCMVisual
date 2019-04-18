import { IWaveRender, WaveRenderOptions, WaveRenderEvents, WaveRenderEventsTrigger } from "../interface/IWaveRender";
import { EventHandle } from "../../../main/implement/EventHandle";
export declare abstract class AWaveRender extends EventHandle<WaveRenderEventsTrigger, WaveRenderEvents> implements IWaveRender {
    constructor();
    abstract init(container: HTMLElement, options?: WaveRenderOptions): void;
    abstract reset(): void;
    abstract render(audioBuffer: AudioBuffer, startPercent: number, endPercent: number): void;
    abstract clear(): void;
}
