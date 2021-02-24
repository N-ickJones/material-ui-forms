export function insert(cache: any, key: any, integrity: any, opts?: {}): Promise<{
    key: any;
    integrity: any;
    path: any;
    size: any;
    time: any;
    metadata: any;
} | null>;
export namespace insert {
    export { insertSync as sync };
}
export function find(cache: any, key: any): any;
export namespace find {
    export { findSync as sync };
}
export function lsStream(cache: any): import("../../minipass");
export function ls(cache: any): Promise<any>;
export function bucketDir(cache: any): any;
export function bucketPath(cache: any, key: any): any;
export function hashKey(key: any): any;
export function hashEntry(str: any): any;
export class NotFoundError extends Error {
    constructor(cache: any, key: any);
    code: string;
    cache: any;
    key: any;
}
declare function insertSync(cache: any, key: any, integrity: any, opts?: {}): {
    key: any;
    integrity: any;
    path: any;
    size: any;
    time: any;
    metadata: any;
} | null;
declare function findSync(cache: any, key: any): any;
export {};
