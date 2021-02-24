export = ExternalModuleFactoryPlugin;
declare class ExternalModuleFactoryPlugin {
    constructor(type: any, externals: any);
    type: any;
    externals: any;
    apply(normalModuleFactory: any): void;
}
