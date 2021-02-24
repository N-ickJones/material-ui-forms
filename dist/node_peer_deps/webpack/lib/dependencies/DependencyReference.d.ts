export = DependencyReference;
/** @typedef {import("../Module")} Module */
declare class DependencyReference {
    /**
     * @param {DependencyReference[]} array an array (will be modified)
     * @returns {DependencyReference[]} the array again
     */
    static sort(array: DependencyReference[]): DependencyReference[];
    /**
     *
     * @param {Module} module the referenced module
     * @param {string[] | boolean} importedNames imported named from the module
     * @param {boolean=} weak if this is a weak reference
     * @param {number} order the order information or NaN if don't care
     */
    constructor(module: Module, importedNames: string[] | boolean, weak?: boolean | undefined, order?: number);
    module: import("../Module");
    importedNames: boolean | string[];
    weak: boolean;
    order: number;
}
declare namespace DependencyReference {
    export { Module };
}
type Module = import("../Module");
