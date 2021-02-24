export = WebpackOptionsApply;
declare const WebpackOptionsApply_base: typeof import("./OptionsApply");
/** @typedef {import("../declarations/WebpackOptions").WebpackOptions} WebpackOptions */
/** @typedef {import("./Compiler")} Compiler */
declare class WebpackOptionsApply extends WebpackOptionsApply_base {
}
declare namespace WebpackOptionsApply {
    export { WebpackOptions, Compiler };
}
type WebpackOptions = import("../declarations/WebpackOptions").WebpackOptions;
type Compiler = import("./Compiler");
