export = AsyncDependencyToInitialChunkError;
declare const AsyncDependencyToInitialChunkError_base: typeof import("./WebpackError");
/** @typedef {import("./Module")} Module */
declare class AsyncDependencyToInitialChunkError extends AsyncDependencyToInitialChunkError_base {
    /**
     * Creates an instance of AsyncDependencyToInitialChunkError.
     * @param {string} chunkName Name of Chunk
     * @param {Module} module module tied to dependency
     * @param {TODO} loc location of dependency
     */
    constructor(chunkName: string, module: Module, loc: any);
    loc: any;
}
declare namespace AsyncDependencyToInitialChunkError {
    export { Module };
}
type Module = import("./Module");
