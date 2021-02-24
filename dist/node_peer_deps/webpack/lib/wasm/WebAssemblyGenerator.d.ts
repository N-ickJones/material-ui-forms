export = WebAssemblyGenerator;
declare const WebAssemblyGenerator_base: typeof import("../Generator");
declare class WebAssemblyGenerator extends WebAssemblyGenerator_base {
    constructor(options: any);
    options: any;
}
declare namespace WebAssemblyGenerator {
    export { Module, UsedWasmDependency, NormalModule, RuntimeTemplate, Source, DependencyTemplate, ArrayBufferTransform };
}
type Module = import("../Module");
type UsedWasmDependency = {
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
type NormalModule = import("../NormalModule");
type RuntimeTemplate = import("../RuntimeTemplate");
type Source = import("../../../webpack-sources/lib/Source");
type DependencyTemplate = {
    apply: (arg0: import("../Dependency"), arg1: import("../../../webpack-sources/lib/Source"), arg2: import("../RuntimeTemplate"), arg3: Map<Function, import("../Dependency").DependencyTemplate>) => void;
};
type ArrayBufferTransform = (ArrayBuffer: any) => ArrayBuffer;
