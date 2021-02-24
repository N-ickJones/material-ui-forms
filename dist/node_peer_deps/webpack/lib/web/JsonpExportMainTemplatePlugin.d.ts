export = JsonpExportMainTemplatePlugin;
declare class JsonpExportMainTemplatePlugin {
    /**
     * @param {string} name jsonp function name
     */
    constructor(name: string);
    name: string;
    apply(compilation: any): void;
}
