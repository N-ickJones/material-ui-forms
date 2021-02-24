export = WebAssemblyParser;
declare const WebAssemblyParser_base: typeof import("../../../tapable/lib/Tapable");
declare class WebAssemblyParser extends WebAssemblyParser_base {
    constructor(options: any);
    hooks: {};
    options: any;
    parse(binary: any, state: any): any;
}
declare namespace WebAssemblyParser {
    export { Module };
}
type Module = import("../Module");
