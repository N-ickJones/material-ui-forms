export = UnsupportedDependency;
declare const UnsupportedDependency_base: typeof import("./NullDependency");
declare class UnsupportedDependency extends UnsupportedDependency_base {
    constructor(request: any, range: any);
    request: any;
    range: any;
}
declare namespace UnsupportedDependency {
    export { UnsupportedDependencyTemplate as Template };
}
declare class UnsupportedDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
