export = NormalModuleReplacementPlugin;
declare class NormalModuleReplacementPlugin {
    constructor(resourceRegExp: any, newResource: any);
    resourceRegExp: any;
    newResource: any;
    apply(compiler: any): void;
}
