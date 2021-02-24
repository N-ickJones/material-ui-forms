export = WasmMainTemplatePlugin;
declare class WasmMainTemplatePlugin {
    constructor({ generateLoadBinaryCode, supportsStreaming, mangleImports }: {
        generateLoadBinaryCode: any;
        supportsStreaming: any;
        mangleImports: any;
    });
    generateLoadBinaryCode: any;
    supportsStreaming: any;
    mangleImports: any;
    /**
     * @param {MainTemplate} mainTemplate main template
     * @returns {void}
     */
    apply(mainTemplate: MainTemplate): void;
}
declare namespace WasmMainTemplatePlugin {
    export { Module, MainTemplate };
}
type MainTemplate = import("../MainTemplate");
type Module = import("../Module");
