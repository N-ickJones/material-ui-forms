export = LoaderOptionsPlugin;
/** @typedef {import("../declarations/plugins/LoaderOptionsPlugin").LoaderOptionsPluginOptions} LoaderOptionsPluginOptions */
declare class LoaderOptionsPlugin {
    /**
     * @param {LoaderOptionsPluginOptions} options options object
     */
    constructor(options: LoaderOptionsPluginOptions);
    options: import("../declarations/plugins/LoaderOptionsPlugin").LoaderOptionsPluginOptions;
    apply(compiler: any): void;
}
declare namespace LoaderOptionsPlugin {
    export { LoaderOptionsPluginOptions };
}
type LoaderOptionsPluginOptions = import("../declarations/plugins/LoaderOptionsPlugin").LoaderOptionsPluginOptions;
