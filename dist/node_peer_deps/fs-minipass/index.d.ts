export var ReadStream: typeof ReadStream;
export var ReadStreamSync: typeof ReadStreamSync;
export var WriteStream: typeof WriteStream;
export var WriteStreamSync: typeof WriteStreamSync;
declare const ReadStream_base: {
    new (options: any): import("../minipass");
    [x: string]: any;
    isStream(s: any): boolean;
};
declare class ReadStream extends ReadStream_base {
    constructor(path: any, opt: any);
    get fd(): any;
    get path(): string;
    [_open](): void;
    [_onopen](er: any, fd: any): void;
    [_makeBuf](): any;
    [_read](): any;
    [_onread](er: any, br: any, buf: any): void;
    [_close](): void;
    [_onerror](er: any): void;
    [_handleChunk](br: any, buf: any): boolean;
    [_errored]: boolean;
    [_fd]: any;
    [_path]: string;
    [_readSize]: any;
    [_reading]: boolean;
    [_size]: any;
    [_remain]: any;
    [_autoClose]: any;
}
declare class ReadStreamSync extends ReadStream {
    constructor(path: any, opt: any);
}
declare const WriteStream_base: typeof import("../events/events");
declare class WriteStream extends WriteStream_base {
    constructor(path: any, opt: any);
    readable: boolean;
    writable: boolean;
    get fd(): any;
    get path(): any;
    end(buf: any, enc: any): WriteStream;
    write(buf: any, enc: any): boolean;
    [_onerror](er: any): void;
    [_open](): void;
    [_onopen](er: any, fd: any): void;
    [_write](buf: any): void;
    [_onwrite](er: any, bw: any): void;
    [_flush](): void;
    [_close](): void;
    [_errored]: boolean;
    [_writing]: boolean;
    [_ended]: boolean;
    [_needDrain]: boolean;
    [_queue]: any[];
    [_path]: any;
    [_fd]: any;
    [_mode]: any;
    [_pos]: any;
    [_autoClose]: any;
    [_defaultFlag]: boolean;
    [_flags]: any;
    [_finished]: boolean | undefined;
}
declare class WriteStreamSync extends WriteStream {
    constructor(path: any, opt: any);
}
declare const _open: unique symbol;
declare const _onopen: unique symbol;
declare const _makeBuf: unique symbol;
declare const _read: unique symbol;
declare const _onread: unique symbol;
declare const _close: unique symbol;
declare const _onerror: unique symbol;
declare const _handleChunk: unique symbol;
declare const _errored: unique symbol;
declare const _fd: unique symbol;
declare const _path: unique symbol;
declare const _readSize: unique symbol;
declare const _reading: unique symbol;
declare const _size: unique symbol;
declare const _remain: unique symbol;
declare const _autoClose: unique symbol;
declare const _write: unique symbol;
declare const _onwrite: unique symbol;
declare const _flush: unique symbol;
declare const _writing: unique symbol;
declare const _ended: unique symbol;
declare const _needDrain: unique symbol;
declare const _queue: unique symbol;
declare const _mode: unique symbol;
declare const _pos: unique symbol;
declare const _defaultFlag: unique symbol;
declare const _flags: unique symbol;
declare const _finished: unique symbol;
export {};
