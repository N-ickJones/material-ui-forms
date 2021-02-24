export = write;
declare function write(cache: any, data: any, opts?: {}): any;
declare namespace write {
    export { writeStream as stream };
}
declare function writeStream(cache: any, opts?: {}): CacacheWriteStream;
declare const CacacheWriteStream_base: typeof import("../../../minipass-flush");
declare class CacacheWriteStream extends CacacheWriteStream_base {
    constructor(cache: any, opts: any);
    opts: any;
    cache: any;
    inputStream: import("../../../minipass");
    handleContentP: any;
    flush(cb: any): void;
}
