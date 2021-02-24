export = ConcordModulesPlugin;
declare class ConcordModulesPlugin {
    constructor(source: any, options: any, target: any);
    source: any;
    options: any;
    target: any;
    apply(resolver: any): void;
}
