export = DirectoryWatcher;
declare const DirectoryWatcher_base: typeof import("../../events/events");
declare class DirectoryWatcher extends DirectoryWatcher_base {
    constructor(watcherManager: any, directoryPath: any, options: any);
    watcherManager: any;
    options: any;
    path: any;
    /** @type {Map<string, { safeTime: number, timestamp: number }} */
    files: Map<string, {
        safeTime: number;
        timestamp: number;
    }>;
    /** @type {Map<string, number>} */
    filesWithoutCase: Map<string, number>;
    directories: Map<any, any>;
    lastWatchEvent: number;
    initialScan: boolean;
    ignored: any;
    nestedWatching: boolean;
    polledWatching: any;
    initialScanRemoved: Set<any>;
    initialScanFinished: number | undefined;
    /** @type {Map<string, Set<Watcher>>} */
    watchers: Map<string, Set<Watcher>>;
    parentWatcher: any;
    refs: number;
    _activeEvents: Map<any, any>;
    closed: boolean;
    scanning: boolean;
    scanAgain: boolean;
    scanAgainInitial: boolean;
    checkIgnore(path: any): any;
    createWatcher(): void;
    watcher: any;
    forEachWatcher(path: any, fn: any): void;
    setMissing(itemPath: any, initial: any, type: any): void;
    _cachedTimeInfoEntries: Map<any, any> | undefined;
    setFileTime(filePath: any, mtime: any, initial: any, ignoreWhenEqual: any, type: any): void;
    setDirectory(directoryPath: any, mtime: any, initial: any, type: any): void;
    createNestedWatcher(directoryPath: any): void;
    setNestedWatching(flag: any): void;
    watch(filePath: any, startTime: any): Watcher;
    onWatchEvent(eventType: any, filename: any): void;
    onWatcherError(err: any): void;
    onStatsError(err: any): void;
    onScanError(err: any): void;
    onDirectoryRemoved(reason: any): void;
    watchInParentDirectory(): void;
    doScan(initial: any): void;
    getTimes(): any;
    getTimeInfoEntries(): Map<any, any>;
    close(): void;
}
declare namespace DirectoryWatcher {
    export { EXISTANCE_ONLY_TIME_ENTRY };
}
declare const Watcher_base: typeof import("../../events/events");
declare class Watcher extends Watcher_base {
    constructor(directoryWatcher: any, filePath: any, startTime: any);
    directoryWatcher: any;
    path: any;
    startTime: number;
    _cachedTimeInfoEntries: any;
    checkStartTime(mtime: any, initial: any): boolean;
    close(): void;
}
declare const EXISTANCE_ONLY_TIME_ENTRY: Readonly<{}>;
