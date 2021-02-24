export = ModuleAppendPlugin;
declare class ModuleAppendPlugin {
    constructor(source: any, appending: any, target: any);
    source: any;
    appending: any;
    target: any;
    apply(resolver: any): void;
}
