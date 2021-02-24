export function parseType(type: any): {
    type: any;
    features: any;
};
export function isTypeMatched(baseType: any, testedType: any): any;
export function isResourceTypeSupported(context: any, type: any): any;
export function isEnvironment(context: any, env: any): any;
export function isGlobMatched(glob: any, relativePath: any): boolean;
export function isConditionMatched(context: any, condition: any): any;
export function isKeyMatched(context: any, key: any): any;
export function getField(context: any, configuration: any, field: any): undefined;
export function getMain(context: any, configuration: any): undefined;
export function getExtensions(context: any, configuration: any): undefined;
export function matchModule(context: any, configuration: any, request: any): any;
export function matchType(context: any, configuration: any, relativePath: any): undefined;
