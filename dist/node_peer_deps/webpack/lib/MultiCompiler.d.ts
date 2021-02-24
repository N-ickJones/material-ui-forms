export = MultiCompiler;
declare const MultiCompiler_base: typeof import("../../tapable/lib/Tapable");
declare class MultiCompiler extends MultiCompiler_base {
    constructor(compilers: any);
    hooks: {
        done: import("../../tapable/lib/SyncHook");
        invalid: import("../../tapable/lib/MultiHook");
        run: import("../../tapable/lib/MultiHook");
        watchClose: import("../../tapable/lib/SyncHook");
        watchRun: import("../../tapable/lib/MultiHook");
        infrastructureLog: import("../../tapable/lib/MultiHook");
    };
    compilers: any;
    running: boolean;
    get outputPath(): any;
    set inputFileSystem(arg: void);
    get inputFileSystem(): void;
    set outputFileSystem(arg: void);
    get outputFileSystem(): void;
    getInfrastructureLogger(name: any): any;
    validateDependencies(callback: any): boolean;
    runWithDependencies(compilers: any, fn: any, callback: any): void;
    watch(watchOptions: any, handler: any): any;
    run(callback: any): any;
    purgeInputFileSystem(): void;
}
