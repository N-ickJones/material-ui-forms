export = Generator;
/** @typedef {import("./NormalModule")} NormalModule */
/** @typedef {import("./RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./Dependency").DependencyTemplate} DependencyTemplate */
/**
 *
 */
declare class Generator {
    static byType(map: any): ByTypeGenerator;
    /**
     * @abstract
     * @param {NormalModule} module module for which the code should be generated
     * @param {Map<Function, DependencyTemplate>} dependencyTemplates mapping from dependencies to templates
     * @param {RuntimeTemplate} runtimeTemplate the runtime template
     * @param {string} type which kind of code should be generated
     * @returns {Source} generated code
     */
    generate(module: NormalModule, dependencyTemplates: Map<Function, DependencyTemplate>, runtimeTemplate: RuntimeTemplate, type: string): Source;
}
declare namespace Generator {
    export { NormalModule, RuntimeTemplate, Source, DependencyTemplate };
}
type NormalModule = import("./NormalModule");
type DependencyTemplate = {
    apply: (arg0: import("./Dependency"), arg1: import("../../webpack-sources/lib/Source"), arg2: import("./RuntimeTemplate"), arg3: Map<Function, import("./Dependency").DependencyTemplate>) => void;
};
type RuntimeTemplate = import("./RuntimeTemplate");
type Source = import("../../webpack-sources/lib/Source");
declare class ByTypeGenerator extends Generator {
    constructor(map: any);
    map: any;
}
