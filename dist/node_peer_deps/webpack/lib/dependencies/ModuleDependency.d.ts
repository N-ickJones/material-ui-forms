export = ModuleDependency;
declare const ModuleDependency_base: typeof import("../Dependency");
declare class ModuleDependency extends ModuleDependency_base {
    /**
     * @param {string} request request path which needs resolving
     */
    constructor(request: string);
    request: string;
    userRequest: string;
}
