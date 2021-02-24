export = JsonParser;
declare class JsonParser {
    constructor(options: any);
    options: any;
    parse(source: any, state: any): any;
}
