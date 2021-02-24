export = Snapdragon;
/**
 * Create a new instance of `Snapdragon` with the given `options`.
 *
 * ```js
 * var snapdragon = new Snapdragon();
 * ```
 *
 * @param {Object} `options`
 * @api public
 */
declare function Snapdragon(options: Object): void;
declare class Snapdragon {
    /**
     * Create a new instance of `Snapdragon` with the given `options`.
     *
     * ```js
     * var snapdragon = new Snapdragon();
     * ```
     *
     * @param {Object} `options`
     * @api public
     */
    constructor(options: Object);
    options: any;
    compiler: import("./lib/compiler");
    parser: import("./lib/parser");
    capture(...args: any[]): Object;
    use(fn: Object): Snapdragon;
    parse(str: string, options: Object): Object;
    compile(ast: Object, options: Object): Object;
}
declare namespace Snapdragon {
    export { Compiler_1 as Compiler, Parser_1 as Parser };
}
declare var Compiler_1: typeof import("./lib/compiler");
declare var Parser_1: typeof import("./lib/parser");
