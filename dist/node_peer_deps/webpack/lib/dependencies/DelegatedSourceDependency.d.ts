export = DelegatedSourceDependency;
declare const DelegatedSourceDependency_base: typeof import("./ModuleDependency");
declare class DelegatedSourceDependency extends DelegatedSourceDependency_base {
    constructor(request: any);
    get type(): string;
}
