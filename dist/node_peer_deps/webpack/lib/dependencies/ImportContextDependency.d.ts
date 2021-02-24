export = ImportContextDependency;
declare const ImportContextDependency_base: typeof import("./ContextDependency");
declare class ImportContextDependency extends ImportContextDependency_base {
    constructor(options: any, range: any, valueRange: any);
    range: any;
    valueRange: any;
    get type(): string;
}
declare namespace ImportContextDependency {
    export { ContextDependencyTemplateAsRequireCall as Template };
}
declare const ContextDependencyTemplateAsRequireCall: typeof import("./ContextDependencyTemplateAsRequireCall");
