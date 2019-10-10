import { Coordinate } from '../coordinate';
import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import { ObjectEvent } from '../Object';
import { Transform } from '../transform';
import Geometry from './Geometry';
import GeometryLayout from './GeometryLayout';

export default class SimpleGeometry extends Geometry {
    constructor();
    protected flatCoordinates: number[];
    protected layout: GeometryLayout;
    protected stride: number;
    protected getSimplifiedGeometryInternal(squaredTolerance: number): SimpleGeometry;
    protected setLayout(layout: GeometryLayout | undefined, coordinates: any[], nesting: number): void;
    getCoordinates(): any[];
    getFirstCoordinate(): Coordinate;
    getFlatCoordinates(): number[];
    getLastCoordinate(): Coordinate;
    getLayout(): GeometryLayout;
    getStride(): number;
    setCoordinates(coordinates: any[], opt_layout?: GeometryLayout): void;
    setFlatCoordinates(layout: GeometryLayout, flatCoordinates: number[]): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
export function getStrideForLayout(layout: GeometryLayout): number;
export function transformGeom2D(simpleGeometry: SimpleGeometry, transform: Transform, opt_dest?: number[]): number[];
