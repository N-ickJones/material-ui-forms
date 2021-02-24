export = AMDRequireDependenciesBlockParserPlugin;
declare class AMDRequireDependenciesBlockParserPlugin {
    constructor(options: any);
    options: any;
    processFunctionArgument(parser: any, expression: any): boolean;
    apply(parser: any): void;
    processArray(parser: any, expr: any, param: any): true | undefined;
    processItem(parser: any, expr: any, param: any): true | undefined;
    processContext(parser: any, expr: any, param: any): true | undefined;
    processArrayForRequestString(param: any): any;
    processItemForRequestString(param: any): any;
    processCallRequire(parser: any, expr: any, ...args: any[]): true | undefined;
    newRequireDependenciesBlock(expr: any, arrayRange: any, functionRange: any, errorCallbackRange: any, module: any, loc: any, request: any): import("./AMDRequireDependenciesBlock");
    newRequireItemDependency(request: any, range: any): import("./AMDRequireItemDependency");
    newRequireArrayDependency(depsArray: any, range: any): import("./AMDRequireArrayDependency");
}
