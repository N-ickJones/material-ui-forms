export = HarmonyAcceptImportDependency;
declare const HarmonyAcceptImportDependency_base: typeof import("./HarmonyImportDependency");
declare class HarmonyAcceptImportDependency extends HarmonyAcceptImportDependency_base {
    constructor(request: any, originModule: any, parserScope: any);
    get type(): string;
}
declare namespace HarmonyAcceptImportDependency {
    export { HarmonyAcceptImportDependencyTemplate as Template };
}
declare const HarmonyAcceptImportDependencyTemplate_base: {
    new (): {
        apply(dep: any, source: any, runtime: any): void;
        getHarmonyInitOrder(dep: any): any;
        harmonyInit(dep: any, source: any, runtime: any, dependencyTemplates: any): void;
    };
    isImportEmitted(dep: any, source: any): any;
};
declare class HarmonyAcceptImportDependencyTemplate extends HarmonyAcceptImportDependencyTemplate_base {
}
