export = ProgressPlugin;
declare class ProgressPlugin {
    /**
     * @param {ProgressPluginArgument} options options
     */
    constructor(options: ProgressPluginArgument);
    profile: boolean | null | undefined;
    handler: import("../declarations/plugins/ProgressPlugin").HandlerFunction | undefined;
    modulesCount: number | undefined;
    showEntries: boolean | undefined;
    showModules: boolean | undefined;
    showActiveModules: boolean | undefined;
    apply(compiler: any): void;
}
declare namespace ProgressPlugin {
    export { defaultOptions, ProgressPluginArgument, ProgressPluginOptions };
}
type ProgressPluginArgument = import("../declarations/plugins/ProgressPlugin").ProgressPluginOptions | import("../declarations/plugins/ProgressPlugin").HandlerFunction;
declare namespace defaultOptions {
    export const profile: boolean;
    export const modulesCount: number;
    export const modules: boolean;
    export const activeModules: boolean;
    export const entries: boolean;
}
type ProgressPluginOptions = import("../declarations/plugins/ProgressPlugin").ProgressPluginOptions;
