export = WebAssemblyJavascriptGenerator;
declare const WebAssemblyJavascriptGenerator_base: typeof import("../Generator");
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Dependency").DependencyTemplate} DependencyTemplate */
declare class WebAssemblyJavascriptGenerator extends WebAssemblyJavascriptGenerator_base {
}
declare namespace WebAssemblyJavascriptGenerator {
    export { NormalModule, RuntimeTemplate, Source, DependencyTemplate };
}
type NormalModule = import("../NormalModule");
type RuntimeTemplate = import("../RuntimeTemplate");
type Source = import("../../../webpack-sources/lib/Source");
type DependencyTemplate = {
    apply: (arg0: import("../Dependency"), arg1: import("../../../webpack-sources/lib/Source"), arg2: import("../RuntimeTemplate"), arg3: Map<Function, import("../Dependency").DependencyTemplate>) => void;
};
