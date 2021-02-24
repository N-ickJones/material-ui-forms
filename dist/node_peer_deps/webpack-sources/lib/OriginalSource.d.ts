export = OriginalSource;
declare const OriginalSource_base: typeof import("./Source");
declare class OriginalSource extends OriginalSource_base {
    constructor(value: any, name: any);
    _value: any;
    _name: any;
    listMap(options: any): import("../../source-list-map/lib/SourceListMap");
}
