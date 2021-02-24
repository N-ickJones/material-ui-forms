export = ConcordMainPlugin;
declare class ConcordMainPlugin {
    constructor(source: any, options: any, target: any);
    source: any;
    options: any;
    target: any;
    apply(resolver: any): void;
}
