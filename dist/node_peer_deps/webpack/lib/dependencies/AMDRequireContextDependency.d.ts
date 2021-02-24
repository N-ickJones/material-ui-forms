export = AMDRequireContextDependency;
declare const AMDRequireContextDependency_base: typeof import("./ContextDependency");
declare class AMDRequireContextDependency extends AMDRequireContextDependency_base {
    constructor(options: any, range: any, valueRange: any);
    range: any;
    valueRange: any;
    get type(): string;
}
declare namespace AMDRequireContextDependency {
    export const Template: typeof import("./ContextDependencyTemplateAsRequireCall");
}
