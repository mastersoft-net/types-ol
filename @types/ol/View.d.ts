import { Type } from './centerconstraint';
import { Coordinate } from './coordinate';
import { EventsKey, ListenerFunction } from './events';
import BaseEvent from './events/Event';
import { Extent } from './extent';
import SimpleGeometry from './geom/SimpleGeometry';
import BaseObject, { ObjectEvent } from './Object';
import { Pixel } from './pixel';
import { ProjectionLike } from './proj';
import Projection from './proj/Projection';
import { Type as Type_1 } from './resolutionconstraint';
import { Type as Type_2 } from './rotationconstraint';
import { Size } from './size';
import ViewHint from './ViewHint';

export interface Animation {
    sourceCenter?: Coordinate;
    targetCenter?: Coordinate;
    sourceResolution?: number;
    targetResolution?: number;
    sourceRotation?: number;
    targetRotation?: number;
    anchor?: Coordinate;
    start: number;
    duration: number;
    complete: boolean;
    easing: (p0: number) => number;
    callback: (p0: boolean) => void;
}
export interface AnimationOptions {
    center?: Coordinate;
    zoom?: number;
    resolution?: number;
    rotation?: number;
    anchor?: Coordinate;
    duration?: number;
    easing?: (p0: number) => number;
}
export interface Constraints {
    center: Type;
    resolution: Type_1;
    rotation: Type_2;
}
export interface FitOptions {
    size?: Size;
    padding?: number[];
    nearest?: boolean;
    minResolution?: number;
    maxZoom?: number;
    duration?: number;
    easing?: (p0: number) => number;
    callback?: (p0: boolean) => void;
}
export interface State {
    center: Coordinate;
    projection: Projection;
    resolution: number;
    rotation: number;
    zoom: number;
}
export interface ViewOptions {
    center?: Coordinate;
    constrainRotation?: boolean | number;
    enableRotation?: boolean;
    extent?: Extent;
    constrainOnlyCenter?: boolean;
    smoothExtentConstraint?: boolean;
    maxResolution?: number;
    minResolution?: number;
    maxZoom?: number;
    minZoom?: number;
    multiWorld?: boolean;
    constrainResolution?: boolean;
    smoothResolutionConstraint?: boolean;
    showFullExtent?: boolean;
    projection?: ProjectionLike;
    resolution?: number;
    resolutions?: number[];
    rotation?: number;
    zoom?: number;
    zoomFactor?: number;
}
export default class View extends BaseObject {
    constructor(opt_options?: ViewOptions & { [key: string]: any });
    adjustCenter(deltaCoordinates: Coordinate): void;
    adjustCenterInternal(deltaCoordinates: Coordinate): void;
    adjustResolution(ratio: number, opt_anchor?: Coordinate): void;
    adjustResolutionInternal(ratio: number, opt_anchor?: Coordinate): void;
    adjustRotation(delta: number, opt_anchor?: Coordinate): void;
    adjustRotationInternal(delta: number, opt_anchor?: Coordinate): void;
    adjustZoom(delta: number, opt_anchor?: Coordinate): void;
    animate(...var_args: (AnimationOptions | ((p0: boolean) => void))[]): void;
    animateInternal(...var_args: (AnimationOptions | ((p0: boolean) => void))[]): void;
    applyOptions_(options: ViewOptions): void;
    beginInteraction(): void;
    calculateCenterRotate(rotation: number, anchor: Coordinate): Coordinate;
    calculateCenterZoom(resolution: number, anchor: Coordinate): Coordinate;
    calculateExtent(opt_size?: Size): Extent;
    calculateExtentInternal(opt_size?: Size): Extent;
    cancelAnimations(): void;
    centerOn(coordinate: Coordinate, size: Size, position: Pixel): void;
    centerOnInternal(coordinate: Coordinate, size: Size, position: Pixel): void;
    endInteraction(opt_duration?: number, opt_resolutionDirection?: number, opt_anchor?: Coordinate): void;
    endInteractionInternal(opt_duration?: number, opt_resolutionDirection?: number, opt_anchor?: Coordinate): void;
    fit(geometryOrExtent: SimpleGeometry | Extent, opt_options?: FitOptions): void;
    fitInternal(geometry: SimpleGeometry, opt_options?: FitOptions): void;
    getAnimating(): boolean;
    getCenter(): Coordinate;
    getCenterInternal(): Coordinate;
    getConstrainedCenter(targetCenter: Coordinate | undefined, opt_targetResolution?: number): Coordinate;
    getConstrainedResolution(targetResolution: number | undefined, opt_direction?: number): number;
    getConstrainedZoom(targetZoom: number | undefined, opt_direction?: number): number;
    getConstrainResolution(): boolean;
    getConstraints(): Constraints;
    getHints(opt_hints?: number[]): number[];
    getInteracting(): boolean;
    getMaxResolution(): number;
    getMaxZoom(): number;
    getMinResolution(): number;
    getMinZoom(): number;
    getProjection(): Projection;
    getResolution(): number;
    getResolutionForExtent(extent: Extent, opt_size?: Size): number;
    getResolutionForExtentInternal(extent: Extent, opt_size?: Size): number;
    getResolutionForValueFunction(opt_power?: number): (p0: number) => number;
    getResolutionForZoom(zoom: number): number;
    getResolutions(): number[];
    getRotation(): number;
    getState(): State;
    getUpdatedOptions_(newOptions: ViewOptions): ViewOptions;
    getValueForResolutionFunction(opt_power?: number): (p0: number) => number;
    getZoom(): number;
    getZoomForResolution(resolution: number): number;
    isDef(): boolean;
    resolveConstraints(opt_duration?: number, opt_resolutionDirection?: number, opt_anchor?: Coordinate): void;
    setCenter(center: Coordinate | undefined): void;
    setCenterInternal(center: Coordinate | undefined): void;
    setConstrainResolution(enabled: boolean): void;
    setHint(hint: ViewHint, delta: number): number;
    setMaxZoom(zoom: number): void;
    setMinZoom(zoom: number): void;
    setResolution(resolution: number | undefined): void;
    setRotation(rotation: number): void;
    setViewportSize(opt_size?: Size): void;
    setZoom(zoom: number): void;
    updateAnimations_(): void;
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:center', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:center', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:center', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:resolution', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:resolution', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:resolution', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:rotation', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:rotation', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:rotation', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function createCenterConstraint(options: ViewOptions): Type;
export function createResolutionConstraint(options: ViewOptions): any;
export function createRotationConstraint(options: ViewOptions): Type_2;
export function isNoopAnimation(animation: Animation): boolean;
