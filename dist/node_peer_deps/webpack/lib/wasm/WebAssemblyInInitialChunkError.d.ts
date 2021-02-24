export = WebAssemblyInInitialChunkError;
declare const WebAssemblyInInitialChunkError_base: typeof import("../WebpackError");
declare class WebAssemblyInInitialChunkError extends WebAssemblyInInitialChunkError_base {
    /**
     * @param {Module} module WASM module
     * @param {RequestShortener} requestShortener request shortener
     */
    constructor(module: Module, requestShortener: RequestShortener);
    hideStack: boolean;
}
declare namespace WebAssemblyInInitialChunkError {
    export { Module, RequestShortener };
}
type Module = import("../Module");
type RequestShortener = import("../RequestShortener");
