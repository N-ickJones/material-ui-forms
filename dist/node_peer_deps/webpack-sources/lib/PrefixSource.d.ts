export = PrefixSource;
declare const PrefixSource_base: typeof import("./Source");
declare class PrefixSource extends PrefixSource_base {
    constructor(prefix: any, source: any);
    _source: any;
    _prefix: any;
    listMap(options: any): any;
}
