export = HotUpdateChunkTemplate;
declare const HotUpdateChunkTemplate_base: typeof import("../../tapable/lib/Tapable");
declare class HotUpdateChunkTemplate extends HotUpdateChunkTemplate_base {
    constructor(outputOptions: any);
    outputOptions: any;
    hooks: {
        modules: import("../../tapable/lib/SyncWaterfallHook");
        render: import("../../tapable/lib/SyncWaterfallHook");
        hash: import("../../tapable/lib/SyncHook");
    };
    render(id: any, modules: any, removedModules: any, hash: any, moduleTemplate: any, dependencyTemplates: any): any;
    updateHash(hash: any): void;
}
