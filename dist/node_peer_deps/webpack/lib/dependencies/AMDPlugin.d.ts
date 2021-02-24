export = AMDPlugin;
declare class AMDPlugin {
    constructor(options: any, amdOptions: any);
    amdOptions: any;
    options: any;
    apply(compiler: any): void;
}
