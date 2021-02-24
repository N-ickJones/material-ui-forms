export = UmdMainTemplatePlugin;
/** @typedef {string | string[] | LibraryCustomUmdObject} UmdMainTemplatePluginName */
/**
 * @typedef {Object} AuxiliaryCommentObject
 * @property {string} root
 * @property {string} commonjs
 * @property {string} commonjs2
 * @property {string} amd
 */
/**
 * @typedef {Object} UmdMainTemplatePluginOption
 * @property {boolean=} optionalAmdExternalAsGlobal
 * @property {boolean} namedDefine
 * @property {string | AuxiliaryCommentObject} auxiliaryComment
 */
declare class UmdMainTemplatePlugin {
    /**
     * @param {UmdMainTemplatePluginName} name the name of the UMD library
     * @param {UmdMainTemplatePluginOption} options the plugin option
     */
    constructor(name: UmdMainTemplatePluginName, options: UmdMainTemplatePluginOption);
    name: string | string[] | undefined;
    names: import("../declarations/WebpackOptions").LibraryCustomUmdObject | {
        commonjs: string | string[];
        root: string | string[];
        amd: string | string[];
    };
    optionalAmdExternalAsGlobal: boolean | undefined;
    namedDefine: boolean;
    auxiliaryComment: string | AuxiliaryCommentObject;
    /**
     * @param {Compilation} compilation the compilation instance
     * @returns {void}
     */
    apply(compilation: Compilation): void;
}
declare namespace UmdMainTemplatePlugin {
    export { LibraryCustomUmdObject, Compilation, UmdMainTemplatePluginName, AuxiliaryCommentObject, UmdMainTemplatePluginOption };
}
type AuxiliaryCommentObject = {
    root: string;
    commonjs: string;
    commonjs2: string;
    amd: string;
};
type Compilation = import("./Compilation");
type UmdMainTemplatePluginName = string | string[] | import("../declarations/WebpackOptions").LibraryCustomUmdObject;
type UmdMainTemplatePluginOption = {
    optionalAmdExternalAsGlobal?: boolean | undefined;
    namedDefine: boolean;
    auxiliaryComment: string | AuxiliaryCommentObject;
};
type LibraryCustomUmdObject = import("../declarations/WebpackOptions").LibraryCustomUmdObject;
