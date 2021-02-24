export = DllEntryPlugin;
declare class DllEntryPlugin {
    constructor(context: any, entries: any, name: any);
    context: any;
    entries: any;
    name: any;
    apply(compiler: any): void;
}
