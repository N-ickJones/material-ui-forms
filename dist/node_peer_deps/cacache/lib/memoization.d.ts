export function clearMemoized(): {};
export function put(cache: any, entry: any, data: any, opts: any): void;
export namespace put {
    export { putDigest as byDigest };
}
export function get(cache: any, key: any, opts: any): any;
export namespace get {
    export { getDigest as byDigest };
}
declare function putDigest(cache: any, integrity: any, data: any, opts: any): void;
declare function getDigest(cache: any, integrity: any, opts: any): any;
export {};
