export = RequireEnsureDependency;
declare const RequireEnsureDependency_base: typeof import("./NullDependency");
declare class RequireEnsureDependency extends RequireEnsureDependency_base {
    constructor(block: any);
    block: any;
}
declare namespace RequireEnsureDependency {
    export { RequireEnsureDependencyTemplate as Template };
}
declare class RequireEnsureDependencyTemplate {
    apply(dep: any, source: any, runtime: any, ...args: any[]): void;
}
