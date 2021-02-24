export = JsonGenerator;
declare class JsonGenerator {
    generate(module: any, dependencyTemplates: any, runtimeTemplate: any): import("../../webpack-sources/lib/RawSource") | import("../../webpack-sources/lib/ConcatSource");
}
