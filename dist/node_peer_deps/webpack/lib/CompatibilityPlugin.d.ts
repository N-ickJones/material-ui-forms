export = CompatibilityPlugin;
/** @typedef {import("./Compiler")} Compiler */
declare class CompatibilityPlugin {
    /**
     * Apply the plugin
     * @param {Compiler} compiler Webpack Compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace CompatibilityPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
