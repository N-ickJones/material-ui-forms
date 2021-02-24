export = AMDRequireItemDependency;
declare const AMDRequireItemDependency_base: typeof import("./ModuleDependency");
declare class AMDRequireItemDependency extends AMDRequireItemDependency_base {
    constructor(request: any, range: any);
    range: any;
    get type(): string;
}
declare namespace AMDRequireItemDependency {
    export { ModuleDependencyTemplateAsRequireId as Template };
}
declare const ModuleDependencyTemplateAsRequireId: typeof import("./ModuleDependencyTemplateAsRequireId");
