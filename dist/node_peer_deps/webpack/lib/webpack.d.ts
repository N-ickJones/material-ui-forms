export = webpack;
/** @typedef {import("../declarations/WebpackOptions").WebpackOptions} WebpackOptions */
/**
 * @param {WebpackOptions} options options object
 * @param {function(Error=, Stats=): void=} callback callback
 * @returns {Compiler | MultiCompiler} the compiler object
 */
declare function webpack(options: WebpackOptions, callback?: ((arg0: Error | undefined, arg1: any | undefined) => void) | undefined): import("./Compiler") | import("./MultiCompiler");
declare namespace webpack {
    export { WebpackOptionsDefaulter, WebpackOptionsApply, Compiler_1 as Compiler, MultiCompiler_1 as MultiCompiler, NodeEnvironmentPlugin, validate, validateSchema, WebpackOptionsValidationError, version, dependencies, optimize, web, webworker, node, debug, util, WebpackOptions };
}
type WebpackOptions = import("../declarations/WebpackOptions").WebpackOptions;
declare const WebpackOptionsDefaulter: typeof import("./WebpackOptionsDefaulter");
declare const WebpackOptionsApply: typeof import("./WebpackOptionsApply");
declare const Compiler_1: typeof import("./Compiler");
declare const MultiCompiler_1: {
    new (compilers: any): import("./MultiCompiler");
    addCompatLayer(instance: any): void;
};
declare const NodeEnvironmentPlugin: typeof import("./node/NodeEnvironmentPlugin");
declare var validate: (options?: any) => any[];
declare const validateSchema: (schema: any, options: any) => any[];
declare const WebpackOptionsValidationError: typeof import("./WebpackOptionsValidationError");
declare const version: string;
declare var dependencies: {};
declare var optimize: {};
declare var web: {};
declare var webworker: {};
declare var node: {};
declare var debug: {};
declare var util: {};
