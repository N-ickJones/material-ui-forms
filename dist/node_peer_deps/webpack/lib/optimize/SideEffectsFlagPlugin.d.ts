export = SideEffectsFlagPlugin;
declare class SideEffectsFlagPlugin {
    static moduleHasSideEffects(moduleName: any, flagValue: any): any;
    apply(compiler: any): void;
}
declare namespace SideEffectsFlagPlugin {
    export { Module, Dependency, ExportInModule, ReexportInfo };
}
type Module = import("../Module");
type Dependency = import("../Dependency");
type ExportInModule = {
    /**
     * the module
     */
    module: Module;
    /**
     * the name of the export
     */
    exportName: string;
    /**
     * if the export is conditional
     */
    checked: boolean;
};
type ReexportInfo = {
    static: Map<string, ExportInModule[]>;
    dynamic: Map<Module, Set<string>>;
};
