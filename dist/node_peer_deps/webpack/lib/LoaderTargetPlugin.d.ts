export = LoaderTargetPlugin;
declare class LoaderTargetPlugin {
    constructor(target: any);
    target: any;
    apply(compiler: any): void;
}
