export = minimatch;
declare function minimatch(p: any, pattern: any, options: any): any;
declare namespace minimatch {
    export { Minimatch };
    export const GLOBSTAR: {};
    export { filter };
    export function defaults(def: any): {
        (p: any, pattern: any, options: any): any;
        Minimatch(pattern: any, options: any): Minimatch;
    };
    export function braceExpand(pattern: any, options: any): any;
    export function makeRe(pattern: any, options: any): any;
    export function match(list: any, pattern: any, options: any): any;
}
declare function Minimatch(pattern: any, options: any): Minimatch;
declare class Minimatch {
    constructor(pattern: any, options: any);
    options: any;
    set: any[];
    pattern: any;
    regexp: any;
    negate: boolean;
    comment: boolean;
    empty: boolean;
    debug(): void;
    make: typeof make;
    parseNegate: typeof parseNegate;
    braceExpand: typeof braceExpand;
    parse: typeof parse;
    makeRe: typeof makeRe;
    match: typeof match;
    matchOne(file: any, pattern: any, partial: any): any;
}
declare namespace Minimatch {
    const GLOBSTAR_1: {};
    export { GLOBSTAR_1 as GLOBSTAR };
    export function defaults(def: any): (pattern: any, options: any) => Minimatch;
}
declare function filter(pattern: any, options: any): (p: any, i: any, list: any) => any;
declare function make(): void;
declare class make {
    comment: boolean;
    empty: boolean;
    globSet: any;
    debug: (...data: any[]) => void;
    globParts: any;
    set: any;
}
declare function parseNegate(): void;
declare class parseNegate {
    pattern: any;
    negate: boolean;
}
declare function braceExpand(pattern: any, options: any): any;
declare function parse(pattern: any, isSub: any): any;
declare function makeRe(): any;
declare class makeRe {
    regexp: boolean | RegExp;
}
declare function match(f: any, partial: any): any;
