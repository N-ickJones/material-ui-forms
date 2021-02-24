export = MultiEntryDependency;
declare const MultiEntryDependency_base: typeof import("../Dependency");
declare class MultiEntryDependency extends MultiEntryDependency_base {
    /**
     * @param {SingleEntryDependency[]} dependencies an array of SingleEntryDependencies
     * @param {string} name entry name
     */
    constructor(dependencies: SingleEntryDependency[], name: string);
    dependencies: import("./SingleEntryDependency")[];
    name: string;
    get type(): string;
}
declare namespace MultiEntryDependency {
    export { SingleEntryDependency };
}
type SingleEntryDependency = import("./SingleEntryDependency");
