import { EventsKey, ListenerFunction } from '../events';
import BaseEvent from '../events/Event';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    className?: string;
    label?: string | HTMLElement;
    tipLabel?: string;
    duration?: number;
    autoHide?: boolean;
    render?: (p0: MapEvent) => void;
    resetNorth?: () => void;
    target?: HTMLElement | string;
}
export default class Rotate extends Control {
    constructor(opt_options?: Options & { [key: string]: any });
    on(type: string | string[], listener: ListenerFunction): EventsKey | EventsKey[];
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
export function render(mapEvent: MapEvent): void;
