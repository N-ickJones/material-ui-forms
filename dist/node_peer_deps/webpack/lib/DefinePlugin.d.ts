export = DefinePlugin;
declare class DefinePlugin {
    static runtimeValue(fn: any, fileDependencies: any): RuntimeValue;
    /**
     * Create a new define plugin
     * @param {Record<string, CodeValue>} definitions A map of global object definitions
     */
    constructor(definitions: Record<string, CodeValue>);
    definitions: Record<string, string | number | Function | RegExp | Record<string, string | number | Function | RegExp | null | undefined> | RuntimeValue | null | undefined>;
    /**
     * Apply the plugin
     * @param {Compiler} compiler Webpack compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace DefinePlugin {
    export { Compiler, Parser, CodeValuePrimitive, CodeValue };
}
/** @typedef {import("./Compiler")} Compiler */
/** @typedef {import("./Parser")} Parser */
/** @typedef {null|undefined|RegExp|Function|string|number} CodeValuePrimitive */
/** @typedef {CodeValuePrimitive|Record<string, CodeValuePrimitive>|RuntimeValue} CodeValue */
declare class RuntimeValue {
    constructor(fn: any, fileDependencies: any);
    fn: any;
    fileDependencies: any;
    exec(parser: any): any;
}
type Compiler = import("./Compiler");
type CodeValue = string | number | Function | RegExp | Record<string, string | number | Function | RegExp | null | undefined> | RuntimeValue | null | undefined;
type Parser = import("./Parser");
type CodeValuePrimitive = string | number | Function | RegExp | null | undefined;
