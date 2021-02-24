export = LocalModuleDependency;
declare const LocalModuleDependency_base: typeof import("./NullDependency");
declare class LocalModuleDependency extends LocalModuleDependency_base {
    constructor(localModule: any, range: any, callNew: any);
    localModule: any;
    range: any;
    callNew: any;
}
declare namespace LocalModuleDependency {
    export { LocalModuleDependencyTemplate as Template };
}
declare class LocalModuleDependencyTemplate {
    apply(dep: any, source: any): void;
}
