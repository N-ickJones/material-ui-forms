export = HarmonyExportSpecifierDependency;
declare const HarmonyExportSpecifierDependency_base: typeof import("./NullDependency");
declare class HarmonyExportSpecifierDependency extends HarmonyExportSpecifierDependency_base {
    constructor(originModule: any, id: any, name: any);
    originModule: any;
    id: any;
    name: any;
}
declare namespace HarmonyExportSpecifierDependency {
    export { HarmonyExportSpecifierDependencyTemplate as Template };
}
declare class HarmonyExportSpecifierDependencyTemplate {
    apply(dep: any, source: any): void;
    getHarmonyInitOrder(dep: any): number;
    harmonyInit(dep: any, source: any, runtime: any): void;
    getContent(dep: any): string;
}
