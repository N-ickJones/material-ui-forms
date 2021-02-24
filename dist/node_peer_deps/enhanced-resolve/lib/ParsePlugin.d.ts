export = ParsePlugin;
declare class ParsePlugin {
    constructor(source: any, target: any);
    source: any;
    target: any;
    apply(resolver: any): void;
}
