import { Extent } from '../../extent';
import { FillStrokeState } from '../canvas';
import CanvasBuilder from './Builder';

export default class CanvasLineStringBuilder extends CanvasBuilder {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number);
    applyStroke(): void;
    applyStroke(state: FillStrokeState): void;
}
