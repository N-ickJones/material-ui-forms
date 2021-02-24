export = SourceMapDevToolPlugin;
declare class SourceMapDevToolPlugin {
    /**
     * @param {SourceMapDevToolPluginOptions} [options] options object
     * @throws {Error} throws error, if got more than 1 arguments
     */
    constructor(options?: import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions | undefined, ...args: any[]);
    /** @type {string | false} */
    sourceMapFilename: string | false;
    /** @type {string | false} */
    sourceMappingURLComment: string | false;
    /** @type {string | Function} */
    moduleFilenameTemplate: string | Function;
    /** @type {string | Function} */
    fallbackModuleFilenameTemplate: string | Function;
    /** @type {string} */
    namespace: string;
    /** @type {SourceMapDevToolPluginOptions} */
    options: SourceMapDevToolPluginOptions;
    /**
     * Apply compiler
     * @param {Compiler} compiler compiler instance
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace SourceMapDevToolPlugin {
    export { SourceMapDevToolPluginOptions, Chunk, Source, SourceMap, Module, Compilation, Compiler, SourceMapDefinition, SourceMapTask };
}
type SourceMapDevToolPluginOptions = import("../declarations/plugins/SourceMapDevToolPlugin").SourceMapDevToolPluginOptions;
type Compiler = import("./Compiler");
type Chunk = import("./Chunk");
type Source = import("../../webpack-sources/lib/Source");
type SourceMap = import("../../source-map/source-map").RawSourceMap;
type Module = import("./Module");
type Compilation = import("./Compilation");
type SourceMapDefinition = import("./Compilation");
type SourceMapTask = {
    asset: Source;
    modules?: Array<string | Module>;
    source: string;
    file: string;
    sourceMap: SourceMap;
    chunk: Chunk;
};
