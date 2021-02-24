export = SizeLimitsPlugin;
declare class SizeLimitsPlugin {
    constructor(options: any);
    hints: any;
    maxAssetSize: any;
    maxEntrypointSize: any;
    assetFilter: any;
    /**
     * @param {Compiler} compiler webpack compiler
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace SizeLimitsPlugin {
    export { Compiler, Entrypoint };
}
type Compiler = import("../Compiler");
type Entrypoint = import("../Entrypoint");
