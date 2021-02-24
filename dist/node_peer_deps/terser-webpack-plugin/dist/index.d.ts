export var __esModule: boolean;
declare var _default: typeof TerserPlugin | undefined;
export default _default;
declare class TerserPlugin {
    static isSourceMap(input: any): boolean;
    static buildSourceMap(inputSourceMap: any): import("../../source-map/source-map").SourceMapConsumer | null;
    static buildError(err: any, file: any, sourceMap: any, requestShortener: any): Error;
    static buildWarning(warning: any, file: any, sourceMap: any, requestShortener: any, warningsFilter: any): string | null;
    constructor(options?: {});
    options: {
        test: any;
        chunkFilter: any;
        warningsFilter: any;
        extractComments: any;
        sourceMap: any;
        cache: any;
        cacheKeys: any;
        parallel: any;
        include: any;
        exclude: any;
        minify: any;
        terserOptions: any;
    };
    apply(compiler: any): void;
}
