export = WatchIgnorePlugin;
declare class WatchIgnorePlugin {
    /**
     * @param {WatchIgnorePluginOptions} paths list of paths
     */
    constructor(paths: import("../declarations/plugins/WatchIgnorePlugin").WatchIgnorePluginOptions);
    paths: import("../declarations/plugins/WatchIgnorePlugin").WatchIgnorePluginOptions;
    apply(compiler: any): void;
}
declare namespace WatchIgnorePlugin {
    export { WatchIgnorePluginOptions };
}
type WatchIgnorePluginOptions = (string | RegExp)[];
