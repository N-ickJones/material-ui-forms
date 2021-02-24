export function parse(sri: any, opts: any): any;
export function stringify(obj: any, opts: any): any;
export function fromHex(hexDigest: any, algorithm: any, opts: any): any;
export function fromData(data: any, opts: any): any;
export function fromStream(stream: any, opts: any): Promise<any>;
export function checkData(data: any, sri: any, opts: any): any;
export function checkStream(stream: any, sri: any, opts: any): Promise<any>;
export function integrityStream(opts?: {}): IntegrityStream;
export function create(opts: any): {
    update: (chunk: any, enc: any) => any;
    digest: (enc: any) => any;
};
declare const IntegrityStream_base: {
    new (options: any): import("../minipass");
    [x: string]: any;
    isStream(s: any): boolean;
};
declare class IntegrityStream extends IntegrityStream_base {
    constructor(opts: any);
    size: number;
    opts: any;
    algorithms: any[];
    hashes: any[];
    sri: any;
    expectedSize: any;
    goodSri: boolean | undefined;
    algorithm: any;
    digests: any;
    optString: string | undefined;
    [_getOptions](): void;
    [_onEnd](): void;
}
declare const _getOptions: unique symbol;
declare const _onEnd: unique symbol;
export {};
