export = SetVarMainTemplatePlugin;
/** @typedef {import("./Compilation")} Compilation */
declare class SetVarMainTemplatePlugin {
    /**
     * @param {string} varExpression the accessor where the library is exported
     * @param {boolean} copyObject specify copying the exports
     */
    constructor(varExpression: string, copyObject: boolean);
    /** @type {string} */
    varExpression: string;
    /** @type {boolean} */
    copyObject: boolean;
    /**
     * @param {Compilation} compilation the compilation instance
     * @returns {void}
     */
    apply(compilation: Compilation): void;
}
declare namespace SetVarMainTemplatePlugin {
    export { Compilation };
}
type Compilation = import("./Compilation");
