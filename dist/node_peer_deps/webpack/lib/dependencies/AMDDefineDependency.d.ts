export = AMDDefineDependency;
declare const AMDDefineDependency_base: typeof import("./NullDependency");
declare class AMDDefineDependency extends AMDDefineDependency_base {
    constructor(range: any, arrayRange: any, functionRange: any, objectRange: any, namedModule: any);
    range: any;
    arrayRange: any;
    functionRange: any;
    objectRange: any;
    namedModule: any;
    localModule: any;
}
declare namespace AMDDefineDependency {
    export { AMDDefineDependencyTemplate as Template };
}
declare class AMDDefineDependencyTemplate {
    get definitions(): {
        f: string[];
        o: string[];
        of: string[];
        af: string[];
        ao: string[];
        aof: string[];
        lf: string[];
        lo: string[];
        lof: string[];
        laf: string[];
        lao: string[];
        laof: string[];
    };
    apply(dependency: any, source: any): void;
    localModuleVar(dependency: any): any;
    branch(dependency: any): string;
    replace(dependency: any, source: any, definition: any, text: any): void;
}
