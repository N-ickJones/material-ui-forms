export = OccurrenceOrderModuleIdsPlugin;
/** @typedef {import("../../declarations/plugins/optimize/OccurrenceOrderModuleIdsPlugin").OccurrenceOrderModuleIdsPluginOptions} OccurrenceOrderModuleIdsPluginOptions */
declare class OccurrenceOrderModuleIdsPlugin {
    /**
     * @param {OccurrenceOrderModuleIdsPluginOptions=} options options object
     */
    constructor(options?: OccurrenceOrderModuleIdsPluginOptions | undefined);
    options: import("../../declarations/plugins/optimize/OccurrenceOrderModuleIdsPlugin").OccurrenceOrderModuleIdsPluginOptions;
    apply(compiler: any): void;
}
declare namespace OccurrenceOrderModuleIdsPlugin {
    export { OccurrenceOrderModuleIdsPluginOptions };
}
type OccurrenceOrderModuleIdsPluginOptions = import("../../declarations/plugins/optimize/OccurrenceOrderModuleIdsPlugin").OccurrenceOrderModuleIdsPluginOptions;
