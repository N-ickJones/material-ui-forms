export = OccurrenceOrderChunkIdsPlugin;
/** @typedef {import("../../declarations/plugins/optimize/OccurrenceOrderChunkIdsPlugin").OccurrenceOrderChunkIdsPluginOptions} OccurrenceOrderChunkIdsPluginOptions */
declare class OccurrenceOrderChunkIdsPlugin {
    /**
     * @param {OccurrenceOrderChunkIdsPluginOptions=} options options object
     */
    constructor(options?: OccurrenceOrderChunkIdsPluginOptions | undefined);
    options: import("../../declarations/plugins/optimize/OccurrenceOrderChunkIdsPlugin").OccurrenceOrderChunkIdsPluginOptions;
    apply(compiler: any): void;
}
declare namespace OccurrenceOrderChunkIdsPlugin {
    export { OccurrenceOrderChunkIdsPluginOptions };
}
type OccurrenceOrderChunkIdsPluginOptions = import("../../declarations/plugins/optimize/OccurrenceOrderChunkIdsPlugin").OccurrenceOrderChunkIdsPluginOptions;
