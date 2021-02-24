export = HarmonyExportHeaderDependency;
declare const HarmonyExportHeaderDependency_base: typeof import("./NullDependency");
declare class HarmonyExportHeaderDependency extends HarmonyExportHeaderDependency_base {
    constructor(range: any, rangeStatement: any);
    range: any;
    rangeStatement: any;
}
declare namespace HarmonyExportHeaderDependency {
    export { HarmonyExportDependencyTemplate as Template };
}
declare class HarmonyExportDependencyTemplate {
    apply(dep: any, source: any): void;
}
