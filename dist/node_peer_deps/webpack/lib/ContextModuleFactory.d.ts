export = ContextModuleFactory;
declare const ContextModuleFactory_base: typeof import("../../tapable/lib/Tapable");
declare class ContextModuleFactory extends ContextModuleFactory_base {
    constructor(resolverFactory: any);
    hooks: {
        /** @type {AsyncSeriesWaterfallHook<TODO>} */
        beforeResolve: any;
        /** @type {AsyncSeriesWaterfallHook<TODO>} */
        afterResolve: any;
        /** @type {SyncWaterfallHook<string[]>} */
        contextModuleFiles: any;
        /** @type {SyncWaterfallHook<TODO[]>} */
        alternatives: any;
    };
    resolverFactory: any;
    create(data: any, callback: any): void;
    resolveDependencies(fs: any, options: any, callback: any): any;
}
declare namespace ContextModuleFactory {
    export { Module };
}
type Module = import("./Module");
