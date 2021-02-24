declare function _exports(options: any): any;
declare namespace _exports {
    export { WatcherManager };
}
export = _exports;
declare class WatcherManager {
    constructor(options: any);
    options: any;
    directoryWatchers: Map<any, any>;
    getDirectoryWatcher(directory: any): any;
    watchFile(p: any, startTime: any): any;
    watchDirectory(directory: any, startTime: any): any;
}
