export = LineToLineMappedSource;
declare const LineToLineMappedSource_base: typeof import("./Source");
declare class LineToLineMappedSource extends LineToLineMappedSource_base {
    constructor(value: any, name: any, originalSource: any);
    _value: any;
    _name: any;
    _originalSource: any;
    listMap(options: any): import("../../source-list-map/lib/SourceListMap");
}
