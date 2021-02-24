export = HashedModuleIdsPlugin;
/** @typedef {import("../declarations/plugins/HashedModuleIdsPlugin").HashedModuleIdsPluginOptions} HashedModuleIdsPluginOptions */
declare class HashedModuleIdsPlugin {
    /**
     * @param {HashedModuleIdsPluginOptions=} options options object
     */
    constructor(options?: HashedModuleIdsPluginOptions | undefined);
    /** @type {HashedModuleIdsPluginOptions} */
    options: HashedModuleIdsPluginOptions;
    apply(compiler: any): void;
}
declare namespace HashedModuleIdsPlugin {
    export { HashedModuleIdsPluginOptions };
}
type HashedModuleIdsPluginOptions = import("../declarations/plugins/HashedModuleIdsPlugin").HashedModuleIdsPluginOptions;
