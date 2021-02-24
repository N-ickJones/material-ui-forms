export = PrefetchPlugin;
declare class PrefetchPlugin {
    constructor(context: any, request: any);
    request: any;
    context: any;
    apply(compiler: any): void;
}
