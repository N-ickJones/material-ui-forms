export = extglob;
/**
 * Convert the given `extglob` pattern into a regex-compatible string. Returns
 * an object with the compiled result and the parsed AST.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob('*.!(*a)'));
 * //=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */
declare function extglob(pattern: string, options: Object): string;
declare namespace extglob {
    export function match(list: any[], pattern: string, options: Object): any[];
    export function isMatch(str: any, pattern: string, options: string): boolean;
    export function contains(str: string, pattern: string, options: Object): boolean;
    export function matcher(pattern: string, options: string): boolean;
    export function create(pattern: any, options: Object): string;
    export function capture(pattern: string, str: any, options: Object): boolean;
    export function makeRe(pattern: string, options: Object): RegExp;
    export const cache: import("../fragment-cache");
    export function clearCache(): void;
    export { Extglob };
    export { compilers };
    export { parsers };
}
declare var Extglob: typeof import("./lib/extglob");
/**
 * Local dependencies
 */
declare var compilers: (extglob: any) => void;
declare var parsers: typeof import("./lib/parsers");
