export = EntrypointsOverSizeLimitWarning;
declare const EntrypointsOverSizeLimitWarning_base: typeof import("../WebpackError");
declare class EntrypointsOverSizeLimitWarning extends EntrypointsOverSizeLimitWarning_base {
    constructor(entrypoints: any, entrypointLimit: any);
    entrypoints: any;
}
