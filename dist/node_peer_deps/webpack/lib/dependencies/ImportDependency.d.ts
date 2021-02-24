export = ImportDependency;
declare const ImportDependency_base: typeof import("./ModuleDependency");
declare class ImportDependency extends ImportDependency_base {
    constructor(request: any, originModule: any, block: any);
    originModule: any;
    block: any;
    get type(): string;
}
declare namespace ImportDependency {
    export { ImportDependencyTemplate as Template };
}
declare class ImportDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
