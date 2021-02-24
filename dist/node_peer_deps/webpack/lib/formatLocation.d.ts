export = formatLocation;
/**
 * @param {DependencyLocation|SourcePosition|string} loc location
 * @returns {string} formatted location
 */
declare function formatLocation(loc: DependencyLocation | SourcePosition | string): string;
declare namespace formatLocation {
    export { DependencyLocation, SourcePosition };
}
type DependencyLocation = import("./Dependency").SynteticDependencyLocation | import("./Dependency").RealDependencyLocation;
type SourcePosition = {
    line: number;
    column?: number | undefined;
};
