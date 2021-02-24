export = RequireEnsureItemDependency;
declare const RequireEnsureItemDependency_base: typeof import("./ModuleDependency");
declare class RequireEnsureItemDependency extends RequireEnsureItemDependency_base {
    constructor(request: any);
    get type(): string;
}
declare namespace RequireEnsureItemDependency {
    export const Template: {
        new (): {
            apply(): void;
        };
    };
}
