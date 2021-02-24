export = ConcatSource;
declare const ConcatSource_base: typeof import("./Source");
declare class ConcatSource extends ConcatSource_base {
    constructor(...args: any[]);
    children: any[];
    add(item: any): void;
    listMap(options: any): import("../../source-list-map/lib/SourceListMap");
}
