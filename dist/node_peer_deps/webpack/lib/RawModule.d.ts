export = RawModule;
declare const RawModule_base: typeof import("./Module");
declare class RawModule extends RawModule_base {
    constructor(source: any, identifier: any, readableIdentifier: any);
    sourceStr: any;
    identifierStr: any;
    readableIdentifierStr: any;
}
