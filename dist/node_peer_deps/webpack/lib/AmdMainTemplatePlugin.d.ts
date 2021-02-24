export = AmdMainTemplatePlugin;
/** @typedef {import("./Compilation")} Compilation */
/**
 * @typedef {Object} AmdMainTemplatePluginOptions
 * @param {string=} name the library name
 * @property {boolean=} requireAsWrapper
 */
declare class AmdMainTemplatePlugin {
    /**
     * @param {AmdMainTemplatePluginOptions} options the plugin options
     */
    constructor(options: AmdMainTemplatePluginOptions);
    name: any;
    requireAsWrapper: any;
    /**
     * @param {Compilation} compilation the compilation instance
     * @returns {void}
     */
    apply(compilation: Compilation): void;
}
declare namespace AmdMainTemplatePlugin {
    export { Compilation, AmdMainTemplatePluginOptions };
}
type Compilation = import("./Compilation");
type AmdMainTemplatePluginOptions = Object;
