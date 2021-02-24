export function format(f: any, ...args: any[]): string;
export function deprecate(fn: any, msg: any): any;
export function debuglog(set: any): any;
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
export function inspect(obj: Object, opts: Object, ...args: any[]): any;
export namespace inspect {
    export namespace colors {
        export const bold: number[];
        export const italic: number[];
        export const underline: number[];
        export const inverse: number[];
        export const white: number[];
        export const grey: number[];
        export const black: number[];
        export const blue: number[];
        export const cyan: number[];
        export const green: number[];
        export const magenta: number[];
        export const red: number[];
        export const yellow: number[];
    }
    export const styles: {
        special: string;
        number: string;
        boolean: string;
        undefined: string;
        null: string;
        string: string;
        date: string;
        regexp: string;
    };
}
export function isArray(ar: any): boolean;
export function isBoolean(arg: any): boolean;
export function isNull(arg: any): boolean;
export function isNullOrUndefined(arg: any): boolean;
export function isNumber(arg: any): boolean;
export function isString(arg: any): boolean;
export function isSymbol(arg: any): boolean;
export function isUndefined(arg: any): boolean;
export function isRegExp(re: any): boolean;
export function isObject(arg: any): boolean;
export function isDate(d: any): boolean;
export function isError(e: any): boolean;
export function isFunction(arg: any): boolean;
export function isPrimitive(arg: any): boolean;
export var isBuffer: (arg: any) => boolean;
export function log(...args: any[]): void;
export var inherits: any;
export function _extend(origin: any, add: any): any;
