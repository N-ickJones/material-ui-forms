export = WebAssemblyImportDependency;
declare const WebAssemblyImportDependency_base: typeof import("./ModuleDependency");
/** @typedef {import("@webassemblyjs/ast").ModuleImportDescription} ModuleImportDescription */
declare class WebAssemblyImportDependency extends WebAssemblyImportDependency_base {
    /**
     * @param {string} request the request
     * @param {string} name the imported name
     * @param {ModuleImportDescription} description the WASM ast node
     * @param {false | string} onlyDirectImport if only direct imports are allowed
     */
    constructor(request: string, name: string, description: any, onlyDirectImport: false | string);
    /** @type {string} */
    name: string;
    /** @type {ModuleImportDescription} */
    description: any;
    /** @type {false | string} */
    onlyDirectImport: false | string;
    get type(): string;
}
declare namespace WebAssemblyImportDependency {
    export { ModuleImportDescription };
}
type ModuleImportDescription = any;
