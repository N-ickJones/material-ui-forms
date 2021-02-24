export var extend: {
    <T, U>(target: T, source: U): T & U;
    <T_1, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};
export var SourceMap: typeof import("../../source-map/source-map");
export var sourceMapResolve: {
    resolveSourceMap: (code: any, codeUrl: any, read: any, callback: any) => void;
    resolveSourceMapSync: (code: any, codeUrl: any, read: any) => {
        sourceMappingURL: any;
        url: null;
        sourcesRelativeTo: any;
        map: any;
    } | {
        sourceMappingURL: any;
        url: unknown;
        sourcesRelativeTo: unknown;
        map: null;
    } | null;
    resolveSources: (map: any, mapUrl: any, read: any, options: any, callback: any) => void;
    resolveSourcesSync: (map: any, mapUrl: any, read: any, options: any) => {
        sourcesResolved: never[];
        sourcesContent: never[];
    };
    resolve: (code: any, codeUrl: any, read: any, options: any, callback: any) => void;
    resolveSync: (code: any, codeUrl: any, read: any, options: any) => {
        sourceMappingURL: any;
        url: null;
        sourcesRelativeTo: any;
        map: any;
    } | {
        sourceMappingURL: any;
        url: unknown;
        sourcesRelativeTo: unknown;
        map: null;
    } | null;
    parseMapToJSON: (string: any, data: any) => any;
};
export function unixify(fp: any): any;
export function isString(str: string): boolean;
export function arrayify(val: any): any[];
export function last(arr: any, n: any): any;
