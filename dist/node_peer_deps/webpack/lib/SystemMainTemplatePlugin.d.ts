export = SystemMainTemplatePlugin;
/** @typedef {import("./Compilation")} Compilation */
/**
 * @typedef {Object} SystemMainTemplatePluginOptions
 * @param {string=} name the library name
 */
declare class SystemMainTemplatePlugin {
    /**
     * @param {SystemMainTemplatePluginOptions} options the plugin options
     */
    constructor(options: SystemMainTemplatePluginOptions);
    name: any;
    /**
     * @param {Compilation} compilation the compilation instance
     * @returns {void}
     */
    apply(compilation: Compilation): void;
}
declare namespace SystemMainTemplatePlugin {
    export { Compilation, SystemMainTemplatePluginOptions };
}
type Compilation = import("./Compilation");
type SystemMainTemplatePluginOptions = Object;
