export = SourceMapSource;
declare const SourceMapSource_base: typeof import("./Source");
declare class SourceMapSource extends SourceMapSource_base {
    constructor(value: any, name: any, sourceMap: any, originalSource: any, innerSourceMap: any, removeOriginalSource: any);
    _value: any;
    _name: any;
    _sourceMap: any;
    _originalSource: any;
    _innerSourceMap: any;
    _removeOriginalSource: any;
    listMap(options: any): import("../../source-list-map/lib/SourceListMap");
}
