export = AMDRequireDependenciesBlock;
declare const AMDRequireDependenciesBlock_base: typeof import("../AsyncDependenciesBlock");
declare class AMDRequireDependenciesBlock extends AMDRequireDependenciesBlock_base {
    constructor(expr: any, arrayRange: any, functionRange: any, errorCallbackRange: any, module: any, loc: any, request: any);
    expr: any;
    outerRange: any;
    arrayRange: any;
    functionBindThis: boolean;
    functionRange: any;
    errorCallbackBindThis: boolean;
    errorCallbackRange: any;
    bindThis: boolean;
    range: any;
    newRequireDependency(): import("./AMDRequireDependency");
}
