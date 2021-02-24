declare function _exports(context: any, path: any, request: any, resolveContext: any, callback: any): void;
declare namespace _exports {
    export function sync(context: any, path: any, request: any): any;
    export function context(context: any, path: any, request: any, resolveContext: any, callback: any): void;
    export namespace context {
        export function sync(context: any, path: any, request: any): any;
    }
    export function loader(context: any, path: any, request: any, resolveContext: any, callback: any): void;
    export namespace loader {
        export function sync_1(context: any, path: any, request: any): any;
        export { sync_1 as sync };
    }
    export function create(options: any): (context: any, path: any, request: any, resolveContext: any, callback: any) => void;
    export namespace create {
        export function sync_2(options: any): (context: any, path: any, request: any) => any;
        export { sync_2 as sync };
    }
    export { ResolverFactory };
    export { NodeJsInputFileSystem };
    export { CachedInputFileSystem };
}
export = _exports;
declare const ResolverFactory: typeof import("./ResolverFactory");
declare const NodeJsInputFileSystem: typeof import("./NodeJsInputFileSystem");
declare const CachedInputFileSystem: {
    new (fileSystem: any, duration: any): import("./CachedInputFileSystem");
};
