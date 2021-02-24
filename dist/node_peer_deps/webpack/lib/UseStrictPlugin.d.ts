export = UseStrictPlugin;
/** @typedef {import("./Compiler")} Compiler */
declare class UseStrictPlugin {
    /**
     * @param {Compiler} compiler Webpack Compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace UseStrictPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
