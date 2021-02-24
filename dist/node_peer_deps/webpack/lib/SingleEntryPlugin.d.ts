export = SingleEntryPlugin;
/** @typedef {import("./Compiler")} Compiler */
declare class SingleEntryPlugin {
    /**
     * @param {string} entry entry request
     * @param {string} name entry name
     * @returns {SingleEntryDependency} the dependency
     */
    static createDependency(entry: string, name: string): import("./dependencies/SingleEntryDependency");
    /**
     * An entry plugin which will handle
     * creation of the SingleEntryDependency
     *
     * @param {string} context context path
     * @param {string} entry entry path
     * @param {string} name entry key name
     */
    constructor(context: string, entry: string, name: string);
    context: string;
    entry: string;
    name: string;
    /**
     * @param {Compiler} compiler the compiler instance
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace SingleEntryPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
