export = JsonExportsDependency;
declare const JsonExportsDependency_base: typeof import("./NullDependency");
declare class JsonExportsDependency extends JsonExportsDependency_base {
    constructor(exports: any);
    exports: any;
}
