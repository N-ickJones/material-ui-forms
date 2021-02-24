export = DelegatedModuleFactoryPlugin;
declare class DelegatedModuleFactoryPlugin {
    constructor(options: any);
    options: any;
    apply(normalModuleFactory: any): void;
}
