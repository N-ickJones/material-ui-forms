export = RequestShortener;
declare class RequestShortener {
    constructor(directory: any);
    currentDirectoryRegExp: RegExp;
    parentDirectoryRegExp: RegExp;
    buildinsAsModule: boolean;
    buildinsRegExp: RegExp;
    cache: Map<any, any>;
    shorten(request: any): any;
}
