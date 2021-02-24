export = ModuleDependencyWarning;
declare const ModuleDependencyWarning_base: typeof import("./WebpackError");
declare class ModuleDependencyWarning extends ModuleDependencyWarning_base {
    constructor(module: any, err: any, loc: any);
    loc: any;
    error: any;
}
