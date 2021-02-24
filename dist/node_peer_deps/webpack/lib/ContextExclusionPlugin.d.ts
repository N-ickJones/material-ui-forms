export = ContextExclusionPlugin;
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./ContextModuleFactory")} ContextModuleFactory */
declare class ContextExclusionPlugin {
    /**
     * @param {RegExp} negativeMatcher Matcher regular expression
     */
    constructor(negativeMatcher: RegExp);
    negativeMatcher: RegExp;
    /**
     * Apply the plugin
     * @param {Compiler} compiler Webpack Compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace ContextExclusionPlugin {
    export { Compiler, ContextModuleFactory };
}
type Compiler = import("./Compiler");
type ContextModuleFactory = import("./ContextModuleFactory");
