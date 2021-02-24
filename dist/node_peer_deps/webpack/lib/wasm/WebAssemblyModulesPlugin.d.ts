export = WebAssemblyModulesPlugin;
declare class WebAssemblyModulesPlugin {
    constructor(options: any);
    options: any;
    /**
     * @param {Compiler} compiler compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
    renderWebAssembly(module: any, moduleTemplate: any, dependencyTemplates: any): any;
}
declare namespace WebAssemblyModulesPlugin {
    export { Compiler };
}
type Compiler = import("../Compiler");
