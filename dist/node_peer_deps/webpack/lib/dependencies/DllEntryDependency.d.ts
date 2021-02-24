export = DllEntryDependency;
declare const DllEntryDependency_base: typeof import("../Dependency");
declare class DllEntryDependency extends DllEntryDependency_base {
    constructor(dependencies: any, name: any);
    dependencies: any;
    name: any;
    get type(): string;
}
