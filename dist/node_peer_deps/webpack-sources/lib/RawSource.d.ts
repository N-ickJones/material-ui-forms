export = RawSource;
declare const RawSource_base: typeof import("./Source");
declare class RawSource extends RawSource_base {
    constructor(value: any);
    _value: any;
    listMap(options: any): import("../../source-list-map/lib/SourceListMap");
}
