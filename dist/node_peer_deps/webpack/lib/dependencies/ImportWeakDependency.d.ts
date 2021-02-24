export = ImportWeakDependency;
declare const ImportWeakDependency_base: typeof import("./ModuleDependency");
declare class ImportWeakDependency extends ImportWeakDependency_base {
    constructor(request: any, originModule: any, range: any);
    originModule: any;
    range: any;
    get type(): string;
}
declare namespace ImportWeakDependency {
    export { ImportDependencyTemplate as Template };
}
declare class ImportDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
