export = DllPlugin;
/** @typedef {import("../declarations/plugins/DllPlugin").DllPluginOptions} DllPluginOptions */
declare class DllPlugin {
    /**
     * @param {DllPluginOptions} options options object
     */
    constructor(options: DllPluginOptions);
    options: import("../declarations/plugins/DllPlugin").DllPluginOptions;
    apply(compiler: any): void;
}
declare namespace DllPlugin {
    export { DllPluginOptions };
}
type DllPluginOptions = import("../declarations/plugins/DllPlugin").DllPluginOptions;
