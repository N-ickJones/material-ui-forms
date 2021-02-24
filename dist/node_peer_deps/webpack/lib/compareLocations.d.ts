declare function _exports(a: string | DependencyLocation, b: string | DependencyLocation): -1 | 0 | 1;
export = _exports;
export type DependencyLocation = import("./Dependency").SynteticDependencyLocation | import("./Dependency").RealDependencyLocation;
