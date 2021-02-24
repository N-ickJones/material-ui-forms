export = Watchpack;
declare const Watchpack_base: typeof import("../../events/events");
declare class Watchpack extends Watchpack_base {
    constructor(options: any);
    options: any;
    watcherOptions: any;
    watcherManager: any;
    watchers: any[];
    paused: boolean;
    aggregatedChanges: Set<any>;
    aggregatedRemovals: Set<any>;
    aggregateTimeout: number;
    _onTimeout(): void;
    watch(arg1: any, arg2: any, arg3: any): void;
    close(): void;
    pause(): void;
    getTimes(): any;
    getTimeInfoEntries(): Map<any, any>;
    _missingWatcher(file: any, watcher: any): any;
    _fileWatcher(file: any, watcher: any): any;
    _dirWatcher(item: any, watcher: any): any;
    _onChange(item: any, mtime: any, file: any, type: any): void;
    _onRemove(item: any, file: any, type: any): void;
}
