declare function _exports(patterns: any, options: Object): RegExp;
declare namespace _exports {
    export { makeRe };
}
export = _exports;
/**
 * Create a regular expression from the given `pattern` string.
 *
 * @param {String|RegExp} `pattern` Pattern can be a string or regular expression.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */
declare function makeRe(pattern: string | RegExp, options: Object): RegExp;
