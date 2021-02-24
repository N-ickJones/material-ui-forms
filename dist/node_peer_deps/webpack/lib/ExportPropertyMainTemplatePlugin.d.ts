export = ExportPropertyMainTemplatePlugin;
declare class ExportPropertyMainTemplatePlugin {
    /**
     * @param {string|string[]} property the name of the property to export
     */
    constructor(property: string | string[]);
    property: string | string[];
    /**
     * @param {Compilation} compilation the compilation instance
     * @returns {void}
     */
    apply(compilation: Compilation): void;
}
declare namespace ExportPropertyMainTemplatePlugin {
    export { Compilation };
}
type Compilation = import("./Compilation");
