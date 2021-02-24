export = ModuleNotFoundError;
declare const ModuleNotFoundError_base: typeof import("./WebpackError");
declare class ModuleNotFoundError extends ModuleNotFoundError_base {
    constructor(module: any, err: any);
    error: any;
}
