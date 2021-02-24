export = ContextDependency;
declare const ContextDependency_base: typeof import("../Dependency");
declare class ContextDependency extends ContextDependency_base {
    constructor(options: any);
    options: any;
    userRequest: any;
    /** @type {false | string} */
    critical: false | string;
    hadGlobalOrStickyRegExp: boolean;
    set async(arg: any);
    get async(): any;
}
