export = ModuleTemplate;
declare const ModuleTemplate_base: typeof import("../../tapable/lib/Tapable");
declare class ModuleTemplate extends ModuleTemplate_base {
    constructor(runtimeTemplate: any, type: any);
    runtimeTemplate: any;
    type: any;
    hooks: {
        content: import("../../tapable/lib/SyncWaterfallHook");
        module: import("../../tapable/lib/SyncWaterfallHook");
        render: import("../../tapable/lib/SyncWaterfallHook");
        package: import("../../tapable/lib/SyncWaterfallHook");
        hash: import("../../tapable/lib/SyncHook");
    };
    /**
     * @param {Module} module the module
     * @param {TODO} dependencyTemplates templates for dependencies
     * @param {TODO} options render options
     * @returns {Source} the source
     */
    render(module: Module, dependencyTemplates: any, options: any): Source;
    updateHash(hash: any): void;
}
declare namespace ModuleTemplate {
    export { Source, Module };
}
type Module = import("./Module");
type Source = import("../../webpack-sources/lib/Source");
