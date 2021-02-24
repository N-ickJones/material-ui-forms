export = CommonJsRequireDependency;
declare const CommonJsRequireDependency_base: typeof import("./ModuleDependency");
declare class CommonJsRequireDependency extends CommonJsRequireDependency_base {
    constructor(request: any, range: any);
    range: any;
    get type(): string;
}
declare namespace CommonJsRequireDependency {
    export { ModuleDependencyTemplateAsId as Template };
}
declare const ModuleDependencyTemplateAsId: typeof import("./ModuleDependencyTemplateAsId");
