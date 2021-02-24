export = JavascriptModulesPlugin;
declare class JavascriptModulesPlugin {
    apply(compiler: any): void;
    renderJavascript(chunkTemplate: any, chunk: any, moduleTemplate: any, dependencyTemplates: any): import("../../webpack-sources/lib/ConcatSource");
}
