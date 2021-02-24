export = ModuleHotDeclineDependency;
declare const ModuleHotDeclineDependency_base: typeof import("./ModuleDependency");
declare class ModuleHotDeclineDependency extends ModuleHotDeclineDependency_base {
    constructor(request: any, range: any);
    range: any;
    get type(): string;
}
declare namespace ModuleHotDeclineDependency {
    export { ModuleDependencyTemplateAsId as Template };
}
declare const ModuleDependencyTemplateAsId: typeof import("./ModuleDependencyTemplateAsId");
