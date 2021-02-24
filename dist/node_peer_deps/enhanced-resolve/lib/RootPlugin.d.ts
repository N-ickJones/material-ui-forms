export = RootPlugin;
/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */
declare class RootPlugin {
    /**
     * @param {string | ResolveStepHook} source source hook
     * @param {Array<string>} root roots
     * @param {string | ResolveStepHook} target target hook
     * @param {boolean=} ignoreErrors ignore error during resolving of root paths
     */
    constructor(source: string | ResolveStepHook, root: Array<string>, target: string | ResolveStepHook, ignoreErrors?: boolean | undefined);
    root: string[];
    source: any;
    target: any;
    _ignoreErrors: boolean | undefined;
    /**
     * @param {Resolver} resolver the resolver
     * @returns {void}
     */
    apply(resolver: Resolver): void;
}
declare namespace RootPlugin {
    export { Resolver, ResolveStepHook };
}
type Resolver = import("./Resolver");
type ResolveStepHook = any;
