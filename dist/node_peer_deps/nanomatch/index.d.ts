export = nanomatch;
/**
 * The main function takes a list of strings and one or more
 * glob patterns to use for matching.
 *
 * ```js
 * var nm = require('nanomatch');
 * nm(list, patterns[, options]);
 *
 * console.log(nm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {Array} `list` A list of strings to match
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */
declare function nanomatch(list: any[], patterns: string | Array, options: Object): any[];
declare namespace nanomatch {
    export function match(list: any[], pattern: string, options: Object): any[];
    export function isMatch(str: any, pattern: string, options: Object): boolean;
    export function some(list: string | any[], patterns: string | any[], options: Object): boolean;
    export function every(list: string | any[], patterns: string | any[], options: Object): boolean;
    export function any(str: string | any[], patterns: string | any[], options: Object): boolean;
    export function all(str: string | any[], patterns: string | any[], options: Object): boolean;
    export function not(list: any[], patterns: string | any[], options: Object): any[];
    export function contains(str: string, patterns: string | any[], options: Object): boolean;
    export function matchBase(pattern: any, options: any): boolean;
    export function matchKeys(obj: any, patterns: string | any[], options: Object): Object;
    export function matcher(pattern: string, options: Object): Function;
    export function capture(pattern: string, str: any, options: Object): boolean;
    export function makeRe(pattern: string, options: Object): RegExp;
    export function create(pattern: string, options: Object): Object;
    export function parse(pattern: any, options: Object): Object;
    export function compile(ast: string | Object, options: Object): Object;
    export function clearCache(): void;
    export { compilers };
    export { parsers };
    export { cache };
}
/**
 * Local dependencies
 */
declare var compilers: (nanomatch: any, options: any) => void;
declare var parsers: {
    (nanomatch: any, options: any): void;
    not: string;
};
declare var cache: typeof import("../fragment-cache");
