export = AMDDefineDependencyParserPlugin;
declare class AMDDefineDependencyParserPlugin {
    constructor(options: any);
    options: any;
    apply(parser: any): void;
    processArray(parser: any, expr: any, param: any, identifiers: any, namedModule: any): true | undefined;
    processItem(parser: any, expr: any, param: any, namedModule: any): true | undefined;
    processContext(parser: any, expr: any, param: any): true | undefined;
    processCallDefine(parser: any, expr: any, ...args: any[]): true | undefined;
    newDefineDependency(range: any, arrayRange: any, functionRange: any, objectRange: any, namedModule: any): import("./AMDDefineDependency");
    newRequireArrayDependency(depsArray: any, range: any): import("./AMDRequireArrayDependency");
    newRequireItemDependency(request: any, range: any): import("./AMDRequireItemDependency");
}
