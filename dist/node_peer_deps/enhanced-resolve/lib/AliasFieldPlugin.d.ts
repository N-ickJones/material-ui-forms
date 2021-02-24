export = AliasFieldPlugin;
declare class AliasFieldPlugin {
    constructor(source: any, field: any, target: any);
    source: any;
    field: any;
    target: any;
    apply(resolver: any): void;
}
