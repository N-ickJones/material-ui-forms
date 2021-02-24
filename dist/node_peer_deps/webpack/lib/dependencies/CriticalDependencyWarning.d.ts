export = CriticalDependencyWarning;
declare const CriticalDependencyWarning_base: typeof import("../WebpackError");
declare class CriticalDependencyWarning extends CriticalDependencyWarning_base {
    constructor(message: any);
}
