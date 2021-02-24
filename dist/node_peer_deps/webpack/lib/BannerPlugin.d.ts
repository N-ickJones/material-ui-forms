export = BannerPlugin;
declare class BannerPlugin {
    /**
     * @param {BannerPluginArgument} options options object
     */
    constructor(options: BannerPluginArgument, ...args: any[]);
    /** @type {BannerPluginOptions} */
    options: BannerPluginOptions;
    banner: import("../declarations/plugins/BannerPlugin").BannerFunction;
    apply(compiler: any): void;
}
declare namespace BannerPlugin {
    export { BannerPluginArgument, BannerPluginOptions };
}
type BannerPluginOptions = import("../declarations/plugins/BannerPlugin").BannerPluginOptions;
type BannerPluginArgument = string | import("../declarations/plugins/BannerPlugin").BannerPluginOptions | import("../declarations/plugins/BannerPlugin").BannerFunction;
