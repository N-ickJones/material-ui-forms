export = LoaderDependency;
declare const LoaderDependency_base: typeof import("./ModuleDependency");
declare class LoaderDependency extends LoaderDependency_base {
    /**
     * @param {string} request request string
     */
    constructor(request: string);
    get type(): string;
}
