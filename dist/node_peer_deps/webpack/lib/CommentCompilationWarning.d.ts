export = CommentCompilationWarning;
declare const CommentCompilationWarning_base: typeof import("./WebpackError");
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Dependency").DependencyLocation} DependencyLocation */
declare class CommentCompilationWarning extends CommentCompilationWarning_base {
    /**
     *
     * @param {string} message warning message
     * @param {Module} module affected module
     * @param {DependencyLocation} loc affected lines of code
     */
    constructor(message: string, module: Module, loc: DependencyLocation);
    loc: import("./Dependency").SynteticDependencyLocation | import("./Dependency").RealDependencyLocation;
}
declare namespace CommentCompilationWarning {
    export { Module, DependencyLocation };
}
type Module = import("./Module");
type DependencyLocation = import("./Dependency").SynteticDependencyLocation | import("./Dependency").RealDependencyLocation;
