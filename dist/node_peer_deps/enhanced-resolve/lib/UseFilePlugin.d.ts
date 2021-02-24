export = UseFilePlugin;
declare class UseFilePlugin {
    constructor(source: any, filename: any, target: any);
    source: any;
    filename: any;
    target: any;
    apply(resolver: any): void;
}
