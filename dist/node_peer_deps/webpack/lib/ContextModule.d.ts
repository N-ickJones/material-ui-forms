export = ContextModule;
declare const ContextModule_base: typeof import("./Module");
/** @typedef {"sync" | "eager" | "weak" | "async-weak" | "lazy" | "lazy-once"} ContextMode Context mode */
/** @typedef {import("./dependencies/ContextElementDependency")} ContextElementDependency */
/**
 * @callback ResolveDependenciesCallback
 * @param {Error=} err
 * @param {ContextElementDependency[]} dependencies
 */
/**
 * @callback ResolveDependencies
 * @param {TODO} fs
 * @param {TODO} options
 * @param {ResolveDependenciesCallback} callback
 */
declare class ContextModule extends ContextModule_base {
    /**
     * @param {ResolveDependencies} resolveDependencies function to get dependencies in this context
     * @param {TODO} options options object
     */
    constructor(resolveDependencies: ResolveDependencies, options: any);
    resolveDependencies: ResolveDependencies;
    options: any;
    _contextDependencies: Set<string>;
    _identifier: string;
    prettyRegExp(regexString: any): any;
    _createIdentifier(): string;
    libIdent(options: any): string;
    getUserRequestMap(dependencies: any): any;
    getFakeMap(dependencies: any): any;
    getFakeMapInitStatement(fakeMap: any): string;
    getReturn(type: any): string;
    getReturnModuleObjectSource(fakeMap: any, fakeMapDataExpression?: string): string;
    getSyncSource(dependencies: any, id: any): string;
    getWeakSyncSource(dependencies: any, id: any): string;
    getAsyncWeakSource(dependencies: any, id: any): string;
    getEagerSource(dependencies: any, id: any): string;
    getLazyOnceSource(block: any, dependencies: any, id: any, runtimeTemplate: any): string;
    getLazySource(blocks: any, id: any): string;
    getSourceForEmptyContext(id: any): string;
    getSourceForEmptyAsyncContext(id: any): string;
    getSourceString(asyncMode: any, runtimeTemplate: any): string;
    getSource(sourceString: any): import("../../webpack-sources/lib/RawSource") | import("../../webpack-sources/lib/OriginalSource");
    set recursive(arg: any);
    get recursive(): any;
    set regExp(arg: any);
    get regExp(): any;
    set addon(arg: any);
    get addon(): any;
    set async(arg: any);
    get async(): any;
    set chunkName(arg: any);
    get chunkName(): any;
}
declare namespace ContextModule {
    export { ContextMode, ContextElementDependency, ResolveDependenciesCallback, ResolveDependencies };
}
type ResolveDependencies = (fs: any, options: any, callback: ResolveDependenciesCallback) => any;
/**
 * Context mode
 */
type ContextMode = "sync" | "weak" | "lazy" | "eager" | "lazy-once" | "async-weak";
type ContextElementDependency = import("./dependencies/ContextElementDependency");
type ResolveDependenciesCallback = (err?: Error | undefined, dependencies: ContextElementDependency[]) => any;
