declare function _exports(cache: any, key: any, opts: any): any;
declare namespace _exports {
    export function byDigest(cache: any, digest: any, opts: any): any;
    export function sync(cache: any, key: any, opts: any): any;
    export namespace sync {
        export function byDigest(cache: any, digest: any, opts: any): any;
    }
    export function stream(cache: any, key: any, opts?: {}): import("../minipass") | import("../minipass-pipeline");
    export namespace stream {
        export { getStreamDigest as byDigest };
    }
    export { info };
    export const hasContent: (cache: any, integrity: any) => Promise<any>;
    export function copy(cache: any, key: any, dest: any, opts: any): any;
    export namespace copy {
        export { cpDigest as byDigest };
    }
}
export = _exports;
declare function getStreamDigest(cache: any, integrity: any, opts?: {}): import("../minipass") | import("../minipass-pipeline");
declare function info(cache: any, key: any, opts?: {}): any;
declare function cpDigest(cache: any, digest: any, dest: any, opts: any): any;
