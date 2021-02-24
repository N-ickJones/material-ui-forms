export = CachedSource;
declare const CachedSource_base: typeof import("./Source");
declare class CachedSource extends CachedSource_base {
    constructor(source: any);
    _source: any;
    _cachedSource: any;
    _cachedSize: any;
    _cachedMaps: {};
    listMap: (options: any) => any;
}
