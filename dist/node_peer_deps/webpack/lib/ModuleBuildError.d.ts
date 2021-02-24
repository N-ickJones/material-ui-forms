export = ModuleBuildError;
declare const ModuleBuildError_base: typeof import("./WebpackError");
declare class ModuleBuildError extends ModuleBuildError_base {
    constructor(module: any, err: any, { from }?: {
        from?: any;
    });
    error: any;
}
