/// <reference types="safe-buffer" />
export var StringDecoder: typeof StringDecoder;
declare function StringDecoder(encoding: any): void;
declare class StringDecoder {
    constructor(encoding: any);
    encoding: any;
    text: typeof utf16Text;
    end: typeof utf16End;
    fillLast: typeof utf8FillLast;
    write: typeof simpleWrite;
    lastNeed: number;
    lastTotal: number;
    lastChar: import("safe-buffer").Buffer;
}
declare function utf16Text(buf: any, i: any): any;
declare class utf16Text {
    constructor(buf: any, i: any);
    lastNeed: number;
    lastTotal: number;
}
declare function utf16End(buf: any): any;
declare function utf8FillLast(buf: any): any;
declare function simpleWrite(buf: any): any;
export {};
