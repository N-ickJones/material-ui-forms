export = MinMaxSizeWarning;
declare const MinMaxSizeWarning_base: typeof import("../WebpackError");
declare class MinMaxSizeWarning extends MinMaxSizeWarning_base {
    constructor(keys: any, minSize: any, maxSize: any);
}
