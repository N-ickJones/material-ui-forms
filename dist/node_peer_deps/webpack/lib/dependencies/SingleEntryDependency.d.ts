export = SingleEntryDependency;
declare const SingleEntryDependency_base: typeof import("./ModuleDependency");
declare class SingleEntryDependency extends SingleEntryDependency_base {
    /**
     * @param {string} request request path for entry
     */
    constructor(request: string);
    get type(): string;
}
