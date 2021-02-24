export = ConstDependency;
declare const ConstDependency_base: typeof import("./NullDependency");
declare class ConstDependency extends ConstDependency_base {
    constructor(expression: any, range: any, requireWebpackRequire: any);
    expression: any;
    range: any;
    requireWebpackRequire: any;
}
declare namespace ConstDependency {
    export { ConstDependencyTemplate as Template };
}
declare class ConstDependencyTemplate {
    apply(dep: any, source: any): void;
}
