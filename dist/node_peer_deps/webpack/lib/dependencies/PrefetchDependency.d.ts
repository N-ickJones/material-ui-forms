export = PrefetchDependency;
declare const PrefetchDependency_base: typeof import("./ModuleDependency");
declare class PrefetchDependency extends PrefetchDependency_base {
    constructor(request: any);
    get type(): string;
}
