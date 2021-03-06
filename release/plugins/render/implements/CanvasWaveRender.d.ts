import { AWaveRender } from "./AWaveRender";
import { WaveRenderOptions } from "../interfaces/IWaveRender";
/**
 * create canvas and rend the data of audo on it.
 */
export declare class WaveRender extends AWaveRender {
    /**
     * initial the canvas.
     * @param { HTMLElement } container
     * @param { { color: Color | Array<Color>| Array<offset: number, value: Color >, Definition: 1 | 2 } } options
     */
    init(container: HTMLElement, options?: WaveRenderOptions): void;
    private color;
    private context;
    private canvas;
    private halfHeight;
    private setColor;
    reset(): void;
    render(audioBuffer: AudioBuffer, startPercent: number, endPercent: number): void;
    clear(): void;
}
