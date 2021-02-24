export = Resolver;
declare const Resolver_base: typeof import("../../tapable/lib/Tapable");
declare class Resolver extends Resolver_base {
    constructor(fileSystem: any);
    fileSystem: any;
    hooks: {
        resolveStep: any;
        noResolve: any;
        resolve: any;
        result: import("../../tapable/lib/AsyncSeriesHook");
    };
    ensureHook(name: any): any;
    getHook(name: any): any;
    resolveSync(context: any, path: any, request: any): undefined;
    resolve(context: any, path: any, request: any, resolveContext: any, callback: any): any;
    doResolve(hook: any, request: any, message: any, resolveContext: any, callback: any, ...args: any[]): any;
    parse(identifier: any): {
        request: string;
        query: string;
        module: boolean;
        directory: boolean;
        file: boolean;
    } | null;
    isModule(path: any): boolean;
    isDirectory(path: any): boolean;
    join(path: any, request: any): any;
    normalize(path: any): any;
}
