export = ConcordExtensionsPlugin;
declare class ConcordExtensionsPlugin {
    constructor(source: any, options: any, target: any);
    source: any;
    options: any;
    target: any;
    apply(resolver: any): void;
}
