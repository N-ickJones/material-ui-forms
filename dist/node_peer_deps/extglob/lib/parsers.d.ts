export = parsers;
/**
 * Extglob parsers
 */
declare function parsers(extglob: any): void;
declare namespace parsers {
    export { TEXT_REGEX };
}
/**
 * Characters to use in text regex (we want to "not" match
 * characters that are matched by other parsers)
 */
declare var TEXT_REGEX: string;
