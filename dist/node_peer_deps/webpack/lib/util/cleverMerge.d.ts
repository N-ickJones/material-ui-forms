/**
 * Merges two given objects and caches the result to avoid computation if same objects passed as arguments again.
 * @example
 * // performs cleverMerge(first, second), stores the result in WeakMap and returns result
 * cachedCleverMerge({a: 1}, {a: 2})
 * {a: 2}
 *  // when same arguments passed, gets the result from WeakMap and returns it.
 * cachedCleverMerge({a: 1}, {a: 2})
 * {a: 2}
 * @param {object} first first object
 * @param {object} second second object
 * @returns {object} merged object of first and second object
 */
export function cachedCleverMerge(first: object, second: object): object;
/**
 * Merges two objects. Objects are not deeply merged.
 * TODO webpack 5: merge objects deeply clever.
 * Arrays might reference the old value with "..."
 * @param {object} first first object
 * @param {object} second second object
 * @returns {object} merged object of first and second object
 */
export function cleverMerge(first: object, second: object): object;
