export = EntryModuleNotFoundError;
declare const EntryModuleNotFoundError_base: typeof import("./WebpackError");
declare class EntryModuleNotFoundError extends EntryModuleNotFoundError_base {
    constructor(err: any);
    error: any;
}
