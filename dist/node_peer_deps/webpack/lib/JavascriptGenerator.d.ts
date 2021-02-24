export = JavascriptGenerator;
declare class JavascriptGenerator {
    generate(module: any, dependencyTemplates: any, runtimeTemplate: any): import("../../webpack-sources/lib/RawSource") | import("../../webpack-sources/lib/ReplaceSource");
    sourceBlock(module: any, block: any, availableVars: any, dependencyTemplates: any, source: any, runtimeTemplate: any): void;
    sourceDependency(dependency: any, dependencyTemplates: any, source: any, runtimeTemplate: any): void;
    sourceVariables(variable: any, availableVars: any, dependencyTemplates: any, runtimeTemplate: any): {
        name: any;
        expression: any;
    } | undefined;
    variableInjectionFunctionWrapperStartCode(varNames: any): string;
    contextArgument(module: any, block: any): any;
    variableInjectionFunctionWrapperEndCode(module: any, varExpressions: any, block: any): string;
    splitVariablesInUniqueNamedChunks(vars: any): any;
}
