export = Transform;
declare function Transform(options: any): Transform;
declare class Transform {
    constructor(options: any);
    _transformState: {
        afterTransform: typeof afterTransform;
        needTransform: boolean;
        transforming: boolean;
        writecb: null;
        writechunk: null;
        writeencoding: null;
    };
    _transform: any;
    _flush: any;
    push(chunk: any, encoding: any): any;
    _write(chunk: any, encoding: any, cb: any): void;
    _read(n: any): void;
    _destroy(err: any, cb: any): void;
}
declare function afterTransform(er: any, data: any): any;
