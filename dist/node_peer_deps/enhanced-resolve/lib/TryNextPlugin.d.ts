export = TryNextPlugin;
declare class TryNextPlugin {
    constructor(source: any, message: any, target: any);
    source: any;
    message: any;
    target: any;
    apply(resolver: any): void;
}
