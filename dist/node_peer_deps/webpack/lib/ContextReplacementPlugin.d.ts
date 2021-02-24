export = ContextReplacementPlugin;
declare class ContextReplacementPlugin {
    constructor(resourceRegExp: any, newContentResource: any, newContentRecursive: any, newContentRegExp: any);
    resourceRegExp: any;
    newContentCallback: any;
    newContentResource: any;
    newContentCreateContextMap: any;
    newContentRecursive: any;
    newContentRegExp: any;
    apply(compiler: any): void;
}
