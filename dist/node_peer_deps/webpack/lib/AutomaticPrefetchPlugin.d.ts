export = AutomaticPrefetchPlugin;
/** @typedef {import("./Compiler")} Compiler */
declare class AutomaticPrefetchPlugin {
    /**
     * Apply the plugin
     * @param {Compiler} compiler Webpack Compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace AutomaticPrefetchPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
