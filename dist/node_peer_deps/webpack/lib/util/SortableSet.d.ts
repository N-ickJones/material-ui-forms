export = SortableSet;
/**
 * A subset of Set that offers sorting functionality
 * @template T item type in set
 * @extends {Set<T>}
 */
declare class SortableSet<T> extends Set<T> {
    /**
     * Create a new sortable set
     * @param {Iterable<T>=} initialIterable The initial iterable value
     * @typedef {function(T, T): number} SortFunction
     * @param {SortFunction=} defaultSort Default sorting function
     */
    constructor(initialIterable?: Iterable<T> | undefined, defaultSort?: ((arg0: T, arg1: T) => number) | undefined);
    /** @private @type {function(T, T): number}} */
    private _sortFn;
    /** @private @type {function(T, T): number} | null} */
    private _lastActiveSortFn;
    /** @private @type {Map<Function, T[]> | undefined} */
    private _cache;
    /** @private @type {Map<Function, T[]|string|number> | undefined} */
    private _cacheOrderIndependent;
    /**
     * Sort with a comparer function
     * @param {SortFunction} sortFn Sorting comparer function
     * @returns {void}
     */
    sortWith(sortFn: (arg0: T, arg1: T) => number): void;
    sort(): void;
    /**
     * Get data from cache
     * @param {function(SortableSet<T>): T[]} fn function to calculate value
     * @returns {T[]} returns result of fn(this), cached until set changes
     */
    getFromCache(fn: (arg0: SortableSet<T>) => T[]): T[];
    /**
     * @param {function(SortableSet<T>): string|number|T[]} fn function to calculate value
     * @returns {any} returns result of fn(this), cached until set changes
     */
    getFromUnorderedCache(fn: (arg0: SortableSet<T>) => string | number | T[]): any;
    /**
     * @private
     * @returns {void}
     */
    private _invalidateCache;
    /**
     * @private
     * @returns {void}
     */
    private _invalidateOrderedCache;
}
