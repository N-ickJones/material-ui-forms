export = WebAssemblyExportImportedDependency;
declare const WebAssemblyExportImportedDependency_base: typeof import("./ModuleDependency");
declare class WebAssemblyExportImportedDependency extends WebAssemblyExportImportedDependency_base {
    constructor(exportName: any, request: any, name: any, valueType: any);
    /** @type {string} */
    exportName: string;
    /** @type {string} */
    name: string;
    /** @type {string} */
    valueType: string;
    get type(): string;
}
