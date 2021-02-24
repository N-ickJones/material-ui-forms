export var ls: (cache: any) => Promise<any>;
export var get: {
    (cache: any, key: any, opts: any): any;
    byDigest: (cache: any, digest: any, opts: any) => any;
    sync: {
        (cache: any, key: any, opts: any): any;
        byDigest: (cache: any, digest: any, opts: any) => any;
    };
    stream: (cache: any, key: any, opts?: {}) => import("../minipass/index.js") | import("../minipass-pipeline/index.js");
    info: (cache: any, key: any, opts?: {}) => any;
    hasContent: (cache: any, integrity: any) => Promise<any>;
    copy: (cache: any, key: any, dest: any, opts: any) => any;
};
export var put: typeof import("./put.js");
export var rm: typeof import("./rm.js");
export var clearMemoized: () => {};
export namespace tmp {
    export const mkdir: (cache: any, opts?: {}) => Promise<any>;
    export const withTmp: (cache: any, opts: any, cb: any) => any;
}
export var verify: typeof import("./lib/verify.js");
