export = NaturalChunkOrderPlugin;
/** @typedef {import("../Compiler")} Compiler */
declare class NaturalChunkOrderPlugin {
    /**
     * @param {Compiler} compiler webpack compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace NaturalChunkOrderPlugin {
    export { Compiler };
}
type Compiler = import("../Compiler");
