export = FlagDependencyUsagePlugin;
declare class FlagDependencyUsagePlugin {
    apply(compiler: any): void;
}
declare namespace FlagDependencyUsagePlugin {
    export { Module, DependenciesBlock, UsedExports };
}
type Module = import("./Module");
type DependenciesBlock = import("./DependenciesBlock");
type UsedExports = boolean | string[];
