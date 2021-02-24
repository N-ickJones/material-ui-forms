export = HarmonyImportSpecifierDependency;
declare const HarmonyImportSpecifierDependency_base: typeof import("./HarmonyImportDependency");
declare class HarmonyImportSpecifierDependency extends HarmonyImportSpecifierDependency_base {
    constructor(request: any, originModule: any, sourceOrder: any, parserScope: any, id: any, name: any, range: any, strictExportPresence: any);
    id: string | null;
    redirectedId: any;
    name: any;
    range: any;
    strictExportPresence: any;
    namespaceObjectAsContext: boolean;
    callArgs: any;
    call: any;
    directImport: any;
    shorthand: any;
    get type(): string;
    get _id(): any;
    _getErrors(): import("../HarmonyLinkingError")[] | undefined;
    getNumberOfIdOccurrences(): number;
}
declare namespace HarmonyImportSpecifierDependency {
    export { HarmonyImportSpecifierDependencyTemplate as Template };
}
declare const HarmonyImportSpecifierDependencyTemplate_base: {
    new (): {
        apply(dep: any, source: any, runtime: any): void;
        getHarmonyInitOrder(dep: any): any;
        harmonyInit(dep: any, source: any, runtime: any, dependencyTemplates: any): void;
    };
    isImportEmitted(dep: any, source: any): any;
};
declare class HarmonyImportSpecifierDependencyTemplate extends HarmonyImportSpecifierDependencyTemplate_base {
    getContent(dep: any, runtime: any): any;
}
