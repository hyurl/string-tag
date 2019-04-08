export type StringTag<T> = (strings: string[], ...data: any[]) => T;
export function stringTag<T = string>(ctor?: new (...args: any[]) => T): StringTag<T>;
export default stringTag;