export = ImportEagerDependency;
declare const ImportEagerDependency_base: typeof import("./ModuleDependency");
declare class ImportEagerDependency extends ImportEagerDependency_base {
    constructor(request: any, originModule: any, range: any);
    originModule: any;
    range: any;
    get type(): string;
}
declare namespace ImportEagerDependency {
    export { ImportEagerDependencyTemplate as Template };
}
declare class ImportEagerDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
