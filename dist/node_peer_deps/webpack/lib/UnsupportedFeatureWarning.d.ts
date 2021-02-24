export = UnsupportedFeatureWarning;
declare const UnsupportedFeatureWarning_base: typeof import("./WebpackError");
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
declare class UnsupportedFeatureWarning extends UnsupportedFeatureWarning_base {
    /**
     * @param {Module} module module relevant to warning
     * @param {string} message description of warning
     * @param {DependencyLocation} loc location start and end positions of the module
     */
    constructor(module: Module, message: string, loc: DependencyLocation);
    loc: import("./Dependency").SynteticDependencyLocation | import("./Dependency").RealDependencyLocation;
    hideStack: boolean;
}
declare namespace UnsupportedFeatureWarning {
    export { Module, DependencyLocation };
}
type Module = import("./Module");
type DependencyLocation = import("./Dependency").SynteticDependencyLocation | import("./Dependency").RealDependencyLocation;
