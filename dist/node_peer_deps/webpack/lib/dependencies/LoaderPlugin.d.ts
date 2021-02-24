export = LoaderPlugin;
/** @typedef {import("../Module")} Module */
/**
 * @callback LoadModuleCallback
 * @param {Error=} err error object
 * @param {string=} source source code
 * @param {object=} map source map
 * @param {Module=} module loaded module if successful
 */
declare class LoaderPlugin {
    apply(compiler: any): void;
}
declare namespace LoaderPlugin {
    export { Module, LoadModuleCallback };
}
type Module = import("../Module");
type LoadModuleCallback = (err?: Error | undefined, source?: string | undefined, map?: object | undefined, module?: Module | undefined) => any;
