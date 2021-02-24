export = ModuleParseError;
declare const ModuleParseError_base: typeof import("./WebpackError");
/** @typedef {import("./Module")} Module */
declare class ModuleParseError extends ModuleParseError_base {
    /**
     * @param {Module} module the errored module
     * @param {string} source source code
     * @param {Error&any} err the parse error
     * @param {string[]} loaders the loaders used
     */
    constructor(module: Module, source: string, err: Error & any, loaders: string[]);
    loc: any;
    error: any;
}
declare namespace ModuleParseError {
    export { Module };
}
type Module = import("./Module");
