export = DllReferencePlugin;
/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptions} DllReferencePluginOptions */
/** @typedef {import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptionsManifest} DllReferencePluginOptionsManifest */
declare class DllReferencePlugin {
    /**
     * @param {DllReferencePluginOptions} options options object
     */
    constructor(options: DllReferencePluginOptions);
    options: import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptions;
    apply(compiler: any): void;
}
declare namespace DllReferencePlugin {
    export { DllReferencePluginOptions, DllReferencePluginOptionsManifest };
}
type DllReferencePluginOptions = {
    context?: string | undefined;
    extensions?: string[] | undefined;
    manifest: string | import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptionsManifest;
    name?: string | undefined;
    scope?: string | undefined;
    sourceType?: "var" | "this" | "global" | "jsonp" | "window" | "commonjs" | "commonjs2" | "amd" | "amd-require" | "umd" | "umd2" | "assign" | "commonjs-module" | undefined;
    type?: "object" | "require" | undefined;
} | {
    content: import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptionsContent;
    context?: string | undefined;
    extensions?: string[] | undefined;
    name: string;
    scope?: string | undefined;
    sourceType?: "var" | "this" | "global" | "jsonp" | "window" | "commonjs" | "commonjs2" | "amd" | "amd-require" | "umd" | "umd2" | "assign" | "commonjs-module" | undefined;
    type?: "object" | "require" | undefined;
};
type DllReferencePluginOptionsManifest = import("../declarations/plugins/DllReferencePlugin").DllReferencePluginOptionsManifest;
