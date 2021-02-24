export = HarmonyExportExpressionDependency;
declare const HarmonyExportExpressionDependency_base: typeof import("./NullDependency");
declare class HarmonyExportExpressionDependency extends HarmonyExportExpressionDependency_base {
    constructor(originModule: any, range: any, rangeStatement: any, prefix: any);
    originModule: any;
    range: any;
    rangeStatement: any;
    prefix: any;
}
declare namespace HarmonyExportExpressionDependency {
    export { HarmonyExportDependencyTemplate as Template };
}
declare class HarmonyExportDependencyTemplate {
    apply(dep: any, source: any): void;
    getContent(module: any, used: any): string;
}
