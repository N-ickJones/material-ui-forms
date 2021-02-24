export = Watching;
declare class Watching {
    constructor(compiler: any, watchOptions: any, handler: any);
    startTime: number | null;
    invalid: boolean;
    handler: any;
    callbacks: any[];
    closed: boolean;
    suspended: boolean;
    watchOptions: any;
    compiler: any;
    running: boolean;
    _go(): void;
    _getStats(compilation: any): import("./Stats");
    _done(err: any, compilation: any): void;
    watch(files: any, dirs: any, missing: any): void;
    pausedWatcher: any;
    watcher: any;
    invalidate(callback: any): false | undefined;
    _invalidate(): false | undefined;
    suspend(): void;
    resume(): void;
    close(callback: any): void;
}
