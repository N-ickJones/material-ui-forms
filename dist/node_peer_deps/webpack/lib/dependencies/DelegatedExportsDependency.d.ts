export = DelegatedExportsDependency;
declare const DelegatedExportsDependency_base: typeof import("./NullDependency");
declare class DelegatedExportsDependency extends DelegatedExportsDependency_base {
    constructor(originModule: any, exports: any);
    originModule: any;
    exports: any;
}
