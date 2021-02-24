export = Dependency;
/** @typedef {import("./Module")} Module */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/**
 * @typedef {Object} DependencyTemplate
 * @property {function(Dependency, Source, RuntimeTemplate, Map<Function, DependencyTemplate>): void} apply
 */
/** @typedef {Object} SourcePosition
 *  @property {number} line
 *  @property {number=} column
 */
/** @typedef {Object} RealDependencyLocation
 *  @property {SourcePosition} start
 *  @property {SourcePosition=} end
 *  @property {number=} index
 */
/** @typedef {Object} SynteticDependencyLocation
 *  @property {string} name
 *  @property {number=} index
 */
/** @typedef {SynteticDependencyLocation|RealDependencyLocation} DependencyLocation */
declare class Dependency {
    /** @type {Module|null} */
    module: Module | null;
    /** @type {boolean} */
    weak: boolean;
    /** @type {boolean} */
    optional: boolean;
    /** @type {DependencyLocation} */
    loc: SynteticDependencyLocation | RealDependencyLocation;
    getResourceIdentifier(): null;
    getReference(): import("./dependencies/DependencyReference") | null;
    getExports(): null;
    getWarnings(): null;
    getErrors(): null;
    updateHash(hash: any): void;
    disconnect(): void;
}
declare namespace Dependency {
    export { compare, Module, Source, RuntimeTemplate, DependencyTemplate, SourcePosition, RealDependencyLocation, SynteticDependencyLocation, DependencyLocation };
}
type Module = import("./Module");
type SynteticDependencyLocation = {
    name: string;
    index?: number | undefined;
};
type RealDependencyLocation = {
    start: SourcePosition;
    end?: SourcePosition | undefined;
    index?: number | undefined;
};
declare var compare: any;
type Source = import("../../webpack-sources/lib/Source");
type RuntimeTemplate = import("./RuntimeTemplate");
type DependencyTemplate = {
    apply: (arg0: Dependency, arg1: Source, arg2: RuntimeTemplate, arg3: Map<Function, DependencyTemplate>) => void;
};
type SourcePosition = {
    line: number;
    column?: number | undefined;
};
type DependencyLocation = SynteticDependencyLocation | RealDependencyLocation;
