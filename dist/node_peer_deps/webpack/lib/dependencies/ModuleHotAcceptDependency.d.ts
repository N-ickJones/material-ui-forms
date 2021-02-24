export = ModuleHotAcceptDependency;
declare const ModuleHotAcceptDependency_base: typeof import("./ModuleDependency");
declare class ModuleHotAcceptDependency extends ModuleHotAcceptDependency_base {
    constructor(request: any, range: any);
    range: any;
    get type(): string;
}
declare namespace ModuleHotAcceptDependency {
    export { ModuleDependencyTemplateAsId as Template };
}
declare const ModuleDependencyTemplateAsId: typeof import("./ModuleDependencyTemplateAsId");
