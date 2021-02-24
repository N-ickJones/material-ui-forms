export = NoModeWarning;
declare const NoModeWarning_base: typeof import("./WebpackError");
declare class NoModeWarning extends NoModeWarning_base {
    constructor(modules: any);
}
