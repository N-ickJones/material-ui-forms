export = AliasPlugin;
declare class AliasPlugin {
    constructor(source: any, options: any, target: any);
    source: any;
    options: any[];
    target: any;
    apply(resolver: any): void;
}
