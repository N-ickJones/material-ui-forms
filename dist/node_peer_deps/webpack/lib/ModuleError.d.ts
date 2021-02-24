export = ModuleError;
declare const ModuleError_base: typeof import("./WebpackError");
declare class ModuleError extends ModuleError_base {
    constructor(module: any, err: any, { from }?: {
        from?: any;
    });
    error: any;
}
