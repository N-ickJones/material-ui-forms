export = FragmentCache;
/**
 * Create a new `FragmentCache` with an optional object to use for `caches`.
 *
 * ```js
 * var fragment = new FragmentCache();
 * ```
 * @name FragmentCache
 * @param {String} `cacheName`
 * @return {Object} Returns the [map-cache][] instance.
 * @api public
 */
declare function FragmentCache(caches: any): Object;
declare class FragmentCache {
    /**
     * Create a new `FragmentCache` with an optional object to use for `caches`.
     *
     * ```js
     * var fragment = new FragmentCache();
     * ```
     * @name FragmentCache
     * @param {String} `cacheName`
     * @return {Object} Returns the [map-cache][] instance.
     * @api public
     */
    constructor(caches: any);
    caches: any;
    cache: (cacheName: string) => Object;
    set: (cacheName: any, key: string, val: any) => Object;
    has: (cacheName: any, key: string) => boolean;
    get: (name: string, key: any) => Object;
}
