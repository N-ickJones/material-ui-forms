export = Duplex;
declare function Duplex(options: any): Duplex;
declare class Duplex {
    constructor(options: any);
    readable: boolean;
    writable: boolean;
    allowHalfOpen: boolean;
    get writableHighWaterMark(): any;
    set destroyed(arg: any);
    get destroyed(): any;
    _destroy(err: any, cb: any): void;
}
