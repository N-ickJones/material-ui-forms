export = ModuleReason;
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Dependency")} Dependency */
declare class ModuleReason {
    /**
     * @param {Module} module the referencing module
     * @param {Dependency} dependency the referencing dependency
     * @param {string=} explanation some extra detail
     */
    constructor(module: Module, dependency: Dependency, explanation?: string | undefined);
    module: import("./Module");
    dependency: import("./Dependency");
    explanation: string | undefined;
    _chunks: Set<any> | null;
    hasChunk(chunk: any): boolean;
    rewriteChunks(oldChunk: any, newChunks: any): void;
}
declare namespace ModuleReason {
    export { Module, Dependency };
}
type Module = import("./Module");
type Dependency = import("./Dependency");
