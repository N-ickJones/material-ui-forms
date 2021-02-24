export = AMDRequireArrayDependency;
declare const AMDRequireArrayDependency_base: typeof import("../Dependency");
declare class AMDRequireArrayDependency extends AMDRequireArrayDependency_base {
    constructor(depsArray: any, range: any);
    depsArray: any;
    range: any;
    get type(): string;
}
declare namespace AMDRequireArrayDependency {
    export { AMDRequireArrayDependencyTemplate as Template };
}
declare class AMDRequireArrayDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
    getContent(dep: any, runtime: any): string;
    contentForDependency(dep: any, runtime: any): any;
}
