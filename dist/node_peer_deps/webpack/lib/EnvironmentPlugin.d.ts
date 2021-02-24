export = EnvironmentPlugin;
declare class EnvironmentPlugin {
    constructor(...keys: any[]);
    keys: any[];
    defaultValues: any;
    /**
     * @param {Compiler} compiler webpack compiler instance
     * @returns {void}
     */
    apply(compiler: Compiler): void;
}
declare namespace EnvironmentPlugin {
    export { Compiler };
}
type Compiler = import("./Compiler");
