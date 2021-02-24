export = UnsafeCachePlugin;
declare class UnsafeCachePlugin {
    constructor(source: any, filterPredicate: any, cache: any, withContext: any, target: any);
    source: any;
    filterPredicate: any;
    withContext: any;
    cache: any;
    target: any;
    apply(resolver: any): void;
}
