export var extend: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};
export var flatten: (arr: any) => any;
export var isObject: typeof import("../../isobject");
export var fillRange: typeof import("../../fill-range");
export var repeat: (ele: any, num: any) => any[];
export var unique: {
    (arr: any): any[];
    immutable: (arr: any) => any[];
};
export function define(obj: any, key: any, val: any): void;
export function isEmptySets(str: any): boolean;
export function isQuotedString(str: any): boolean;
export function createKey(pattern: any, options: any): any;
export function createOptions(options: any, ...args: any[]): any;
export function join(a: any, b: any, options: any): any;
export function split(str: any, options: any): string[];
export function expand(str: string, options: Object): Object;
export function escapeBrackets(options: any): undefined;
export function isQuantifier(str: any): boolean;
export function stringifyArray(arr: any): any[];
export function arrayify(arr: any): any;
export function isString(str: any): boolean;
export function last(arr: any, n: any): any;
export function escapeRegex(str: any): any;
