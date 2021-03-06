export = LRUCache;
declare class LRUCache {
    constructor(options: any);
    set max(arg: any);
    get max(): any;
    set allowStale(arg: any);
    get allowStale(): any;
    set maxAge(arg: any);
    get maxAge(): any;
    set lengthCalculator(arg: any);
    get lengthCalculator(): any;
    get length(): number | undefined;
    get itemCount(): any;
    rforEach(fn: any, thisp: any): void;
    forEach(fn: any, thisp: any): void;
    keys(): any[];
    values(): any[];
    reset(): void;
    dump(): any[];
    dumpLru(): import("../yallist/yallist") | undefined;
    set(key: any, value: any, maxAge: any): boolean;
    has(key: any): boolean;
    get(key: any): any;
    peek(key: any): any;
    pop(): any;
    del(key: any): void;
    load(arr: any): void;
    prune(): void;
    [MAX]: any;
    [LENGTH_CALCULATOR]: any;
    [ALLOW_STALE]: any;
    [MAX_AGE]: any;
    [DISPOSE]: any;
    [NO_DISPOSE_ON_SET]: any;
    [UPDATE_AGE_ON_GET]: any;
    [LENGTH]: number | undefined;
    [CACHE]: Map<any, any> | undefined;
    [LRU_LIST]: import("../yallist/yallist") | undefined;
}
declare const MAX: unique symbol;
declare const LENGTH_CALCULATOR: unique symbol;
declare const ALLOW_STALE: unique symbol;
declare const MAX_AGE: unique symbol;
declare const DISPOSE: unique symbol;
declare const NO_DISPOSE_ON_SET: unique symbol;
declare const UPDATE_AGE_ON_GET: unique symbol;
declare const LENGTH: unique symbol;
declare const CACHE: unique symbol;
declare const LRU_LIST: unique symbol;
