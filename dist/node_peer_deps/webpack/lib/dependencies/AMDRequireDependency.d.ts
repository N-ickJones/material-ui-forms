export = AMDRequireDependency;
declare const AMDRequireDependency_base: typeof import("./NullDependency");
declare class AMDRequireDependency extends AMDRequireDependency_base {
    constructor(block: any);
    block: any;
}
declare namespace AMDRequireDependency {
    export { AMDRequireDependencyTemplate as Template };
}
declare class AMDRequireDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
