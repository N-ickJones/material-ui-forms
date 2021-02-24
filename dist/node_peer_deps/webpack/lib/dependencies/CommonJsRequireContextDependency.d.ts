export = CommonJsRequireContextDependency;
declare const CommonJsRequireContextDependency_base: typeof import("./ContextDependency");
declare class CommonJsRequireContextDependency extends CommonJsRequireContextDependency_base {
    constructor(options: any, range: any, valueRange: any);
    range: any;
    valueRange: any;
    get type(): string;
}
declare namespace CommonJsRequireContextDependency {
    export { ContextDependencyTemplateAsRequireCall as Template };
}
declare const ContextDependencyTemplateAsRequireCall: typeof import("./ContextDependencyTemplateAsRequireCall");
