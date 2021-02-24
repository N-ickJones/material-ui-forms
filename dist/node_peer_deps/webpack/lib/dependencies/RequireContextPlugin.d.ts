export = RequireContextPlugin;
declare class RequireContextPlugin {
    constructor(modulesDirectories: any, extensions: any, mainFiles: any);
    modulesDirectories: any[];
    extensions: any[];
    mainFiles: any;
    apply(compiler: any): void;
}
