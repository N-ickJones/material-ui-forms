export = UnsupportedWebAssemblyFeatureError;
declare const UnsupportedWebAssemblyFeatureError_base: typeof import("../WebpackError");
declare class UnsupportedWebAssemblyFeatureError extends UnsupportedWebAssemblyFeatureError_base {
    /** @param {string} message Error message */
    constructor(message: string);
    hideStack: boolean;
}
