export = ModuleDependencyError;
declare const ModuleDependencyError_base: typeof import("./WebpackError");
/** @typedef {import("./Module")} Module */
declare class ModuleDependencyError extends ModuleDependencyError_base {
    /**
     * Creates an instance of ModuleDependencyError.
     * @param {Module} module module tied to dependency
     * @param {Error} err error thrown
     * @param {TODO} loc location of dependency
     */
    constructor(module: Module, err: Error, loc: any);
    loc: any;
    error: Error;
}
declare namespace ModuleDependencyError {
    export { Module };
}
type Module = import("./Module");
