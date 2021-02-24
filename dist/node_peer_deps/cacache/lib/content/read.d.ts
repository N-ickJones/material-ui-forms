export = read;
declare function read(cache: any, integrity: any, opts?: {}): Promise<any>;
declare namespace read {
    export { readSync as sync, readStream as stream, readStream, copy, hasContent };
}
declare function readSync(cache: any, integrity: any, opts?: {}): any;
declare function readStream(cache: any, integrity: any, opts?: {}): import("../../../minipass-pipeline");
declare function copy(cache: any, integrity: any, dest: any): Promise<any>;
declare function hasContent(cache: any, integrity: any): Promise<any>;
