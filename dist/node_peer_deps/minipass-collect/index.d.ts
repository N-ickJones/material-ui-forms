export = Collect;
declare const Collect_base: {
    new (options: any): import("../minipass");
    [x: string]: any;
    isStream(s: any): boolean;
};
declare class Collect extends Collect_base {
    constructor(options: any);
}
declare namespace Collect {
    export { CollectPassThrough as PassThrough };
}
declare const CollectPassThrough_base: {
    new (options: any): import("../minipass");
    [x: string]: any;
    isStream(s: any): boolean;
};
declare class CollectPassThrough extends CollectPassThrough_base {
    constructor(options: any);
    [_data]: any[];
    [_length]: number;
}
declare const _data: unique symbol;
declare const _length: unique symbol;
