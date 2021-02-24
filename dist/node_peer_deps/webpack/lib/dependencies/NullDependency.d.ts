export = NullDependency;
declare const NullDependency_base: typeof import("../Dependency");
declare class NullDependency extends NullDependency_base {
    get type(): string;
}
declare namespace NullDependency {
    export { NullDependencyTemplate as Template };
}
declare class NullDependencyTemplate {
    apply(): void;
}
