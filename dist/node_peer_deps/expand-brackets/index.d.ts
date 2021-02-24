export = brackets;
/**
 * Parses the given POSIX character class `pattern` and returns a
 * string that can be used for creating regular expressions for matching.
 *
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object}
 * @api public
 */
declare function brackets(pattern: string, options: Object): Object;
declare namespace brackets {
    export function match(arr: any[], pattern: string, options: Object): any[];
    export function isMatch(str: any, pattern: string, options: string): boolean;
    export function matcher(pattern: string, options: string): boolean;
    export function makeRe(pattern: string, options: Object): RegExp;
    export function create(pattern: string, options: Object): Object;
    export { compilers };
    export { parsers };
}
/**
 * Local dependencies
 */
declare var compilers: (brackets: any) => void;
declare var parsers: typeof import("./lib/parsers");
