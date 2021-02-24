export = WebpackError;
declare class WebpackError extends Error {
    /**
     * Creates an instance of WebpackError.
     * @param {string=} message error message
     */
    constructor(message?: string | undefined);
    details: any;
    missing: any;
    origin: any;
    dependencies: any;
    module: any;
}
