export = RequireContextDependency;
declare const RequireContextDependency_base: typeof import("./ContextDependency");
declare class RequireContextDependency extends RequireContextDependency_base {
    constructor(options: any, range: any);
    range: any;
    get type(): string;
}
declare namespace RequireContextDependency {
    export { ModuleDependencyTemplateAsRequireId as Template };
}
declare const ModuleDependencyTemplateAsRequireId: typeof import("./ModuleDependencyTemplateAsRequireId");
