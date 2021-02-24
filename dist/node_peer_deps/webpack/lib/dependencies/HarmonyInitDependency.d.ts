export = HarmonyInitDependency;
declare const HarmonyInitDependency_base: typeof import("./NullDependency");
declare class HarmonyInitDependency extends HarmonyInitDependency_base {
    constructor(originModule: any);
    originModule: any;
}
declare namespace HarmonyInitDependency {
    export { HarmonyInitDependencyTemplate as Template };
}
declare class HarmonyInitDependencyTemplate {
    apply(dep: any, source: any, runtime: any, dependencyTemplates: any): void;
}
