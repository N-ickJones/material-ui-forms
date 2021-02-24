export = HarmonyCompatibilityDependency;
declare const HarmonyCompatibilityDependency_base: typeof import("./NullDependency");
declare class HarmonyCompatibilityDependency extends HarmonyCompatibilityDependency_base {
    constructor(originModule: any);
    originModule: any;
}
declare namespace HarmonyCompatibilityDependency {
    export { HarmonyExportDependencyTemplate as Template };
}
declare class HarmonyExportDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
