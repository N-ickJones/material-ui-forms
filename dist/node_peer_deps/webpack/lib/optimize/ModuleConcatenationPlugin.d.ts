export = ModuleConcatenationPlugin;
declare class ModuleConcatenationPlugin {
    constructor(options: any);
    options: any;
    apply(compiler: any): void;
    _getImports(compilation: any, module: any): Set<any>;
    _tryToAdd(compilation: any, config: any, module: any, possibleModules: any, failureCache: any): any;
}
