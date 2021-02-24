/**
 * @param {Module} module the module
 * @param {boolean} mangle mangle module and export names
 * @returns {UsedWasmDependency[]} used dependencies and (mangled) name
 */
export function getUsedDependencies(module: Module, mangle: boolean): UsedWasmDependency[];
export var MANGLED_MODULE: string;
export type Module = import("../Module");
export type UsedWasmDependency = {
    /**
     * the dependency
     */
    dependency: import("../dependencies/WebAssemblyImportDependency");
    /**
     * the export name
     */
    name: string;
    /**
     * the module name
     */
    module: string;
};
