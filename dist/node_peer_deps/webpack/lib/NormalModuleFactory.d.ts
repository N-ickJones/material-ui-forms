export = NormalModuleFactory;
declare const NormalModuleFactory_base: typeof import("../../tapable/lib/Tapable");
declare class NormalModuleFactory extends NormalModuleFactory_base {
    constructor(context: any, resolverFactory: any, options: any);
    hooks: {
        resolver: import("../../tapable/lib/SyncWaterfallHook");
        factory: import("../../tapable/lib/SyncWaterfallHook");
        beforeResolve: import("../../tapable/lib/AsyncSeriesWaterfallHook");
        afterResolve: import("../../tapable/lib/AsyncSeriesWaterfallHook");
        createModule: import("../../tapable/lib/SyncBailHook");
        module: import("../../tapable/lib/SyncWaterfallHook");
        createParser: import("../../tapable/lib/HookMap");
        parser: import("../../tapable/lib/HookMap");
        createGenerator: import("../../tapable/lib/HookMap");
        generator: import("../../tapable/lib/HookMap");
    };
    resolverFactory: any;
    ruleSet: import("./RuleSet");
    cachePredicate: any;
    context: any;
    parserCache: any;
    generatorCache: any;
    create(data: any, callback: any): any;
    resolveRequestArray(contextInfo: any, context: any, array: any, resolver: any, callback: any): any;
    getParser(type: any, parserOptions: any): any;
    createParser(type: any, parserOptions?: {}): any;
    getGenerator(type: any, generatorOptions: any): any;
    createGenerator(type: any, generatorOptions?: {}): any;
    getResolver(type: any, resolveOptions: any): any;
}
