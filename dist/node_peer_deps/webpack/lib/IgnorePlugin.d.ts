export = IgnorePlugin;
/** @typedef {import("../declarations/plugins/IgnorePlugin").IgnorePluginOptions} IgnorePluginOptions */
/** @typedef {import("./Compiler")} Compiler */
declare class IgnorePlugin {
    /**
     * @param {IgnorePluginOptions} options IgnorePlugin options
     */
    constructor(options: IgnorePluginOptions, ...args: any[]);
    options: import("../declarations/plugins/IgnorePlugin").IgnorePluginOptions;
    /**
     * Note that if "contextRegExp" is given, both the "resourceRegExp"
     * and "contextRegExp" have to match.
     *
     * @param {TODO} result result
     * @returns {TODO|null} returns result or null if result should be ignored
     */
    checkIgnore(result: any): any | null;
    /**
     * @param {Compiler} compiler Webpack Compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace IgnorePlugin {
    export { IgnorePluginOptions, Compiler };
}
type Compiler = import("./Compiler");
type IgnorePluginOptions = {
    contextRegExp?: RegExp | undefined;
    resourceRegExp?: RegExp | undefined;
} | {
    checkContext?: ((context: string) => boolean) | undefined;
    checkResource?: ((resource: string, context: string) => boolean) | undefined;
};
