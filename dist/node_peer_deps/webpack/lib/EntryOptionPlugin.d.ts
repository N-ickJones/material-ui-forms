export = EntryOptionPlugin;
declare class EntryOptionPlugin {
    /**
     * @param {Compiler} compiler the compiler instance one is tapping into
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace EntryOptionPlugin {
    export { EntryItem, Compiler };
}
type Compiler = import("./Compiler");
type EntryItem = string | import("../declarations/WebpackOptions").NonEmptyArrayOfUniqueStringValues;
