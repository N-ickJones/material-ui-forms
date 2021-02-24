export = RequireResolveHeaderDependency;
declare const RequireResolveHeaderDependency_base: typeof import("./NullDependency");
declare class RequireResolveHeaderDependency extends RequireResolveHeaderDependency_base {
    constructor(range: any);
    range: any[];
}
declare namespace RequireResolveHeaderDependency {
    export { RequireResolveHeaderDependencyTemplate as Template };
}
declare class RequireResolveHeaderDependencyTemplate {
    apply(dep: any, source: any): void;
    applyAsTemplateArgument(name: any, dep: any, source: any): void;
}
