export = ExternalsPlugin;
declare class ExternalsPlugin {
    constructor(type: any, externals: any);
    type: any;
    externals: any;
    apply(compiler: any): void;
}
