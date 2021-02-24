export = RemovedPluginError;
declare const RemovedPluginError_base: typeof import("./WebpackError");
declare class RemovedPluginError extends RemovedPluginError_base {
    constructor(message: any);
}
