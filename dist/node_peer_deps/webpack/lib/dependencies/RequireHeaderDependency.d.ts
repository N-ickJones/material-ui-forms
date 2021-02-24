export = RequireHeaderDependency;
declare const RequireHeaderDependency_base: typeof import("./NullDependency");
declare class RequireHeaderDependency extends RequireHeaderDependency_base {
    constructor(range: any);
    range: any[];
}
declare namespace RequireHeaderDependency {
    export { RequireHeaderDependencyTemplate as Template };
}
declare class RequireHeaderDependencyTemplate {
    apply(dep: any, source: any): void;
    applyAsTemplateArgument(name: any, dep: any, source: any): void;
}
