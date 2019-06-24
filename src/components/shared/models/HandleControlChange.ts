import { Value } from './Value';

export type HandleControlChange = (value: Value) => void;
export type HandleControlChangeExpanded = (value: Value, name: string) => void;
