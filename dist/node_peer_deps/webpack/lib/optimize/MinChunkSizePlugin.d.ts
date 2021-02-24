export = MinChunkSizePlugin;
/** @typedef {import("../../declarations/plugins/optimize/MinChunkSizePlugin").MinChunkSizePluginOptions} MinChunkSizePluginOptions */
declare class MinChunkSizePlugin {
    /**
     * @param {MinChunkSizePluginOptions} options options object
     */
    constructor(options: MinChunkSizePluginOptions);
    options: import("../../declarations/plugins/optimize/MinChunkSizePlugin").MinChunkSizePluginOptions;
    apply(compiler: any): void;
}
declare namespace MinChunkSizePlugin {
    export { MinChunkSizePluginOptions };
}
type MinChunkSizePluginOptions = import("../../declarations/plugins/optimize/MinChunkSizePlugin").MinChunkSizePluginOptions;
