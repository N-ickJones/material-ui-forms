export = AppendPlugin;
declare class AppendPlugin {
    constructor(source: any, appending: any, target: any);
    source: any;
    appending: any;
    target: any;
    apply(resolver: any): void;
}
