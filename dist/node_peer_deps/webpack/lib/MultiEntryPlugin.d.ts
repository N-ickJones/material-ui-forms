export = MultiEntryPlugin;
/** @typedef {import("./Compiler")} Compiler */
declare class MultiEntryPlugin {
    /**
     * @param {string[]} entries each entry path string
     * @param {string} name name of the entry
     * @returns {MultiEntryDependency} returns a constructed Dependency
     */
    static createDependency(entries: string[], name: string): import("./dependencies/MultiEntryDependency");
    /**
     * The MultiEntryPlugin is invoked whenever this.options.entry value is an array of paths
     * @param {string} context context path
     * @param {string[]} entries array of entry paths
     * @param {string} name entry key name
     */
    constructor(context: string, entries: string[], name: string);
    context: string;
    entries: string[];
    name: string;
    /**
     * @param {Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace MultiEntryPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
