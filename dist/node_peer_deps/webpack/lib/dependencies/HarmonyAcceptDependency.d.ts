export = HarmonyAcceptDependency;
declare const HarmonyAcceptDependency_base: typeof import("./NullDependency");
declare class HarmonyAcceptDependency extends HarmonyAcceptDependency_base {
    constructor(range: any, dependencies: any, hasCallback: any);
    range: any;
    dependencies: any;
    hasCallback: any;
}
declare namespace HarmonyAcceptDependency {
    export { HarmonyAcceptDependencyTemplate as Template };
}
declare class HarmonyAcceptDependencyTemplate {
    apply(dep: any, source: any, runtime: any): void;
}
