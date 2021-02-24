export = HarmonyImportSideEffectDependency;
declare const HarmonyImportSideEffectDependency_base: typeof import("./HarmonyImportDependency");
declare class HarmonyImportSideEffectDependency extends HarmonyImportSideEffectDependency_base {
    constructor(request: any, originModule: any, sourceOrder: any, parserScope: any);
    get type(): string;
}
declare namespace HarmonyImportSideEffectDependency {
    export { HarmonyImportSideEffectDependencyTemplate as Template };
}
declare const HarmonyImportSideEffectDependencyTemplate_base: {
    new (): {
        apply(dep: any, source: any, runtime: any): void;
        getHarmonyInitOrder(dep: any): any;
        harmonyInit(dep: any, source: any, runtime: any, dependencyTemplates: any): void;
    };
    isImportEmitted(dep: any, source: any): any;
};
declare class HarmonyImportSideEffectDependencyTemplate extends HarmonyImportSideEffectDependencyTemplate_base {
}
