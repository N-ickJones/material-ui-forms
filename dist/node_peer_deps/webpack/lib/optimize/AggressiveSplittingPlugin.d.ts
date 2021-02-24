export = AggressiveSplittingPlugin;
declare class AggressiveSplittingPlugin {
    /**
     * @param {AggressiveSplittingPluginOptions=} options options object
     */
    constructor(options?: AggressiveSplittingPluginOptions | undefined);
    options: import("../../declarations/plugins/optimize/AggressiveSplittingPlugin").AggressiveSplittingPluginOptions;
    apply(compiler: any): void;
}
declare namespace AggressiveSplittingPlugin {
    export { AggressiveSplittingPluginOptions };
}
type AggressiveSplittingPluginOptions = import("../../declarations/plugins/optimize/AggressiveSplittingPlugin").AggressiveSplittingPluginOptions;
