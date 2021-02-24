export = RequireResolveDependency;
declare const RequireResolveDependency_base: typeof import("./ModuleDependency");
declare class RequireResolveDependency extends RequireResolveDependency_base {
    constructor(request: any, range: any);
    range: any;
    get type(): string;
}
declare namespace RequireResolveDependency {
    export { ModuleDependencyAsId as Template };
}
declare const ModuleDependencyAsId: typeof import("./ModuleDependencyTemplateAsId");
