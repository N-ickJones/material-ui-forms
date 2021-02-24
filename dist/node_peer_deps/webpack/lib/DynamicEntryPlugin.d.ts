export = DynamicEntryPlugin;
/** @typedef {import("../declarations/WebpackOptions").EntryDynamic} EntryDynamic */
/** @typedef {import("../declarations/WebpackOptions").EntryStatic} EntryStatic */
/** @typedef {import("./Compiler")} Compiler */
declare class DynamicEntryPlugin {
    /**
     * @param {string} context the context path
     * @param {EntryDynamic} entry the entry value
     */
    constructor(context: string, entry: EntryDynamic);
    context: string;
    entry: import("../declarations/WebpackOptions").EntryDynamic;
    /**
     * @param {Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace DynamicEntryPlugin {
    export { createDependency, EntryDynamic, EntryStatic, Compiler };
}
type Compiler = import("./Compiler");
type EntryDynamic = () => string | import("../declarations/WebpackOptions").EntryObject | import("../declarations/WebpackOptions").NonEmptyArrayOfUniqueStringValues | Promise<import("../declarations/WebpackOptions").EntryStatic>;
declare function createDependency(entry: string | string[], name: string): import("./dependencies/SingleEntryDependency") | import("./dependencies/MultiEntryDependency");
type EntryStatic = string | import("../declarations/WebpackOptions").EntryObject | import("../declarations/WebpackOptions").NonEmptyArrayOfUniqueStringValues;
