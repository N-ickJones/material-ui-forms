export = HarmonyExportImportedSpecifierDependency;
declare const HarmonyExportImportedSpecifierDependency_base: typeof import("./HarmonyImportDependency");
declare class HarmonyExportImportedSpecifierDependency extends HarmonyExportImportedSpecifierDependency_base {
    constructor(request: any, originModule: any, sourceOrder: any, parserScope: any, id: any, name: any, activeExports: any, otherStarExports: any, strictExportPresence: any);
    id: any;
    redirectedId: any;
    name: any;
    activeExports: any;
    otherStarExports: any;
    strictExportPresence: any;
    get type(): string;
    get _id(): any;
    getMode(ignoreUnused: any): ExportMode;
    _discoverActiveExportsFromOtherStartExports(): Set<any>;
    _getErrors(): import("../HarmonyLinkingError")[] | undefined;
    getHashValue(importedModule: any): string;
}
declare namespace HarmonyExportImportedSpecifierDependency {
    export { HarmonyExportImportedSpecifierDependencyTemplate as Template, Module, ExportModeType };
}
declare class ExportMode {
    /**
     * @param {ExportModeType} type type of the mode
     */
    constructor(type: ExportModeType);
    /** @type {ExportModeType} */
    type: ExportModeType;
    /** @type {string|null} */
    name: string | null;
    /** @type {Map<string, string>} */
    map: Map<string, string>;
    /** @type {Set<string>|null} */
    ignored: Set<string> | null;
    /** @type {Module|null} */
    module: Module | null;
    /** @type {string|null} */
    userRequest: string | null;
}
declare const HarmonyExportImportedSpecifierDependencyTemplate_base: {
    new (): {
        apply(dep: any, source: any, runtime: any): void;
        getHarmonyInitOrder(dep: any): any;
        harmonyInit(dep: any, source: any, runtime: any, dependencyTemplates: any): void;
    };
    isImportEmitted(dep: any, source: any): any;
};
declare class HarmonyExportImportedSpecifierDependencyTemplate extends HarmonyExportImportedSpecifierDependencyTemplate_base {
    getContent(dep: any): string;
    getReexportStatement(module: any, key: any, name: any, valueKey: any): string;
    getReexportFakeNamespaceObjectStatement(module: any, key: any, name: any): string;
    getConditionalReexportStatement(module: any, key: any, name: any, valueKey: any): string;
    getReturnValue(name: any, valueKey: any): any;
}
type Module = import("../Module");
type ExportModeType = "missing" | "unused" | "empty-star" | "reexport-non-harmony-default" | "reexport-named-default" | "reexport-namespace-object" | "reexport-non-harmony-default-strict" | "reexport-fake-namespace-object" | "rexport-non-harmony-undefined" | "safe-reexport" | "checked-reexport" | "dynamic-reexport";
