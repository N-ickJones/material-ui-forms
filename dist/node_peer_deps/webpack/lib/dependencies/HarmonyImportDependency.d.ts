export = HarmonyImportDependency;
declare const HarmonyImportDependency_base: typeof import("./ModuleDependency");
declare class HarmonyImportDependency extends HarmonyImportDependency_base {
    constructor(request: any, originModule: any, sourceOrder: any, parserScope: any);
    redirectedModule: any;
    originModule: any;
    sourceOrder: any;
    parserScope: any;
    get _module(): any;
    getImportVar(): any;
    getImportStatement(update: any, runtime: any): any;
}
declare namespace HarmonyImportDependency {
    export { HarmonyImportDependencyTemplate as Template };
}
declare class HarmonyImportDependencyTemplate {
    static isImportEmitted(dep: any, source: any): any;
    apply(dep: any, source: any, runtime: any): void;
    getHarmonyInitOrder(dep: any): any;
    harmonyInit(dep: any, source: any, runtime: any, dependencyTemplates: any): void;
}
