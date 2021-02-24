/**
 * intersect creates Set containing the intersection of elements between all sets
 * @param {Set[]} sets an array of sets being checked for shared elements
 * @returns {Set<TODO>} returns a new Set containing the intersecting items
 */
export function intersect(sets: Set[]): Set<any>;
/**
 * Checks if a set is the subset of another set
 * @param {Set<TODO>} bigSet a Set which contains the original elements to compare against
 * @param {Set<TODO>} smallSet the set whos elements might be contained inside of bigSet
 * @returns {boolean} returns true if smallSet contains all elements inside of the bigSet
 */
export function isSubset(bigSet: Set<any>, smallSet: Set<any>): boolean;
