export = RequireResolveContextDependency;
declare const RequireResolveContextDependency_base: typeof import("./ContextDependency");
declare class RequireResolveContextDependency extends RequireResolveContextDependency_base {
    constructor(options: any, range: any, valueRange: any);
    range: any;
    valueRange: any;
    get type(): string;
}
declare namespace RequireResolveContextDependency {
    export { ContextDependencyTemplateAsId as Template };
}
declare const ContextDependencyTemplateAsId: typeof import("./ContextDependencyTemplateAsId");
