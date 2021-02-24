export = ModulesInRootPlugin;
declare class ModulesInRootPlugin {
    constructor(source: any, path: any, target: any);
    source: any;
    path: any;
    target: any;
    apply(resolver: any): void;
}
