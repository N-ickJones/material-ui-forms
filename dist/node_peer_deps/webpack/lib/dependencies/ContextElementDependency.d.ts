export = ContextElementDependency;
declare const ContextElementDependency_base: typeof import("./ModuleDependency");
declare class ContextElementDependency extends ContextElementDependency_base {
    constructor(request: any, userRequest: any);
    get type(): string;
}
