export = ModuleKindPlugin;
declare class ModuleKindPlugin {
    constructor(source: any, target: any);
    source: any;
    target: any;
    apply(resolver: any): void;
}
