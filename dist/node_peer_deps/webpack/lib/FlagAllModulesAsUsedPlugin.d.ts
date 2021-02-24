export = FlagAllModulesAsUsedPlugin;
/** @typedef {import("./Compiler")} Compiler */
declare class FlagAllModulesAsUsedPlugin {
    constructor(explanation: any);
    explanation: any;
    /**
     * @param {Compiler} compiler webpack compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace FlagAllModulesAsUsedPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
