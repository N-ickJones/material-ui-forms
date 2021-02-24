export = RequireIncludeDependency;
declare const RequireIncludeDependency_base: typeof import("./ModuleDependency");
declare class RequireIncludeDependency extends RequireIncludeDependency_base {
    constructor(request: any, range: any);
    range: any;
    get type(): string;
}
declare namespace RequireIncludeDependency {
    export { RequireIncludeDependencyTemplate as Template };
}
declare class RequireIncludeDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
