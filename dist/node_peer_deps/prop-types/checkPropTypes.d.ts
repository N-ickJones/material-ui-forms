export = checkPropTypes;
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
declare function checkPropTypes(typeSpecs: object, values: object, location: string, componentName: string, getStack: Function | null): void;
declare namespace checkPropTypes {
    export function resetWarningCache(): void;
}
