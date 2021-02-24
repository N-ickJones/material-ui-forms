export = RequireEnsureDependenciesBlock;
declare const RequireEnsureDependenciesBlock_base: typeof import("../AsyncDependenciesBlock");
declare class RequireEnsureDependenciesBlock extends RequireEnsureDependenciesBlock_base {
    constructor(expr: any, successExpression: any, errorExpression: any, chunkName: any, chunkNameRange: any, module: any, loc: any);
    expr: any;
    range: any[];
    chunkNameRange: any;
}
