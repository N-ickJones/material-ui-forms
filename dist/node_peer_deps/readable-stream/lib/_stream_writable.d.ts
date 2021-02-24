export = Writable;
declare function Writable(options: any): Writable;
declare class Writable {
    constructor(options: any);
    _writableState: WritableState;
    writable: boolean;
    _write: any;
    _writev: any;
    _destroy: any;
    _final: any;
    pipe(): void;
    write(chunk: any, encoding: any, cb: any): boolean;
    cork(): void;
    uncork(): void;
    setDefaultEncoding(encoding: any): Writable;
    get writableHighWaterMark(): any;
    end(chunk: any, encoding: any, cb: any): void;
    set destroyed(arg: boolean);
    get destroyed(): boolean;
    destroy: (err: any, cb: any) => any;
    _undestroy: () => void;
}
declare namespace Writable {
    export { WritableState };
}
declare function WritableState(options: any, stream: any): void;
declare class WritableState {
    constructor(options: any, stream: any);
    objectMode: any;
    highWaterMark: any;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: any;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    onwrite: (er: any) => void;
    writecb: any;
    writelen: number;
    bufferedRequest: any;
    lastBufferedRequest: any;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    bufferedRequestCount: number;
    corkedRequestsFree: CorkedRequest;
    getBuffer(): any[];
}
declare function CorkedRequest(state: any): void;
declare class CorkedRequest {
    constructor(state: any);
    next: any;
    entry: any;
    finish: () => void;
}
