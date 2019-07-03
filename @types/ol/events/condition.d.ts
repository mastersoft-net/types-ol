import { FALSE, TRUE } from '../functions';
import MapBrowserEvent from '../MapBrowserEvent';

export type Condition = (this: any, p0: MapBrowserEvent) => boolean;
export const always: typeof TRUE;
export const never: typeof FALSE;
export function altKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;
export function altShiftKeysOnly(mapBrowserEvent: MapBrowserEvent): boolean;
export function click(mapBrowserEvent: MapBrowserEvent): boolean;
export function doubleClick(mapBrowserEvent: MapBrowserEvent): boolean;
export function focus(event: MapBrowserEvent): boolean;
export function mouseActionButton(mapBrowserEvent: MapBrowserEvent): boolean;
export function mouseOnly(mapBrowserEvent: MapBrowserEvent): boolean;
export function noModifierKeys(mapBrowserEvent: MapBrowserEvent): boolean;
export function penOnly(mapBrowserEvent: MapBrowserEvent): boolean;
export function platformModifierKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;
export function pointerMove(mapBrowserEvent: MapBrowserEvent): boolean;
export function primaryAction(mapBrowserEvent: MapBrowserEvent): boolean;
export function shiftKeyOnly(mapBrowserEvent: MapBrowserEvent): boolean;
export function singleClick(mapBrowserEvent: MapBrowserEvent): boolean;
export function targetNotEditable(mapBrowserEvent: MapBrowserEvent): boolean;
export function touchOnly(mapBrowserEvent: MapBrowserEvent): boolean;
