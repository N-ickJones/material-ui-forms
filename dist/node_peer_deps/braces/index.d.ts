export = braces;
/**
 * Convert the given `braces` pattern into a regex-compatible string. By default, only one string is generated for every input string. Set `options.expand` to true to return an array of patterns (similar to Bash or minimatch. Before using `options.expand`, it's recommended that you read the [performance notes](#performance)).
 *
 * ```js
 * var braces = require('braces');
 * console.log(braces('{a,b,c}'));
 * //=> ['(a|b|c)']
 *
 * console.log(braces('{a,b,c}', {expand: true}));
 * //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */
declare function braces(pattern: any, options: Object): string;
declare namespace braces {
    export function expand(pattern: string, options: Object): any[];
    export function optimize(pattern: string, options: Object): any[];
    export function create(pattern: string, options: Object): any[];
    export function makeRe(pattern: string, options: Object): RegExp;
    export function parse(pattern: string, options: Object): Object;
    export function compile(ast: string | Object, options: Object): Object;
    export function clearCache(): void;
    export { Braces };
    export { compilers };
    export { parsers };
    export { cache };
}
declare var Braces: typeof import("./lib/braces");
/**
 * Local dependencies
 */
declare var compilers: (braces: any, options: any) => void;
declare var parsers: (braces: any, options: any) => void;
declare var cache: {};
