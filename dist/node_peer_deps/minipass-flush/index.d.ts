export = Flush;
declare const Flush_base: {
    new (options: any): import("../minipass");
    [x: string]: any;
    isStream(s: any): boolean;
};
declare class Flush extends Flush_base {
    constructor(opt?: {});
    [_flush]: any;
    [_flushing]: boolean | undefined;
    [_flushed]: boolean | undefined;
}
declare const _flush: unique symbol;
declare const _flushing: unique symbol;
declare const _flushed: unique symbol;
