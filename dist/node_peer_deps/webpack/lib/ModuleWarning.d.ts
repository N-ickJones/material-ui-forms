export = ModuleWarning;
declare const ModuleWarning_base: typeof import("./WebpackError");
declare class ModuleWarning extends ModuleWarning_base {
    constructor(module: any, warning: any, { from }?: {
        from?: any;
    });
    warning: any;
}
