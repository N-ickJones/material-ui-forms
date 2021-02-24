export = WebpackOptionsValidationError;
declare const WebpackOptionsValidationError_base: typeof import("./WebpackError");
declare class WebpackOptionsValidationError extends WebpackOptionsValidationError_base {
    static formatSchema(schema: any, prevSchemas: any): any;
    static formatValidationError(err: any): any;
    constructor(validationErrors: any);
    validationErrors: any;
}
