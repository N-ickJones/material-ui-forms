export = MapCache;
/**
 * Creates a cache object to store key/value pairs.
 *
 * ```js
 * var cache = new MapCache();
 * ```
 *
 * @api public
 */
declare function MapCache(data: any): void;
declare class MapCache {
    /**
     * Creates a cache object to store key/value pairs.
     *
     * ```js
     * var cache = new MapCache();
     * ```
     *
     * @api public
     */
    constructor(data: any);
    __data__: any;
    set(key: string, value: any): Object;
    get(key: string): any;
    has(key: string): boolean;
    del(key: string): boolean;
}
