import { IWaveRender, WaveRenderOptions } from "../interfaces/IWaveRender";
import { EventHandle } from "../../../main/implements/EventHandle";
import { WaveRenderEventsTrigger, WaveRenderEvents } from "../interfaces/IWaveRenderEvents";
export declare abstract class AWaveRender extends EventHandle<WaveRenderEventsTrigger, WaveRenderEvents> implements IWaveRender {
    constructor();
    abstract init(container: HTMLElement, options?: WaveRenderOptions): void;
    abstract reset(): void;
    abstract render(audioBuffer: AudioBuffer, startPercent: number, endPercent: number): void;
    abstract clear(): void;
}
