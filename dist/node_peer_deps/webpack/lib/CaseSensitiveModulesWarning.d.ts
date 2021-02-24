export = CaseSensitiveModulesWarning;
declare const CaseSensitiveModulesWarning_base: typeof import("./WebpackError");
declare class CaseSensitiveModulesWarning extends CaseSensitiveModulesWarning_base {
    /**
     * Creates an instance of CaseSensitiveModulesWarning.
     * @param {Module[]} modules modules that were detected
     */
    constructor(modules: Module[]);
}
declare namespace CaseSensitiveModulesWarning {
    export { Module };
}
type Module = import("./Module");
