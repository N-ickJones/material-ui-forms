export = NodeWatchFileSystem;
declare class NodeWatchFileSystem {
    constructor(inputFileSystem: any);
    inputFileSystem: any;
    watcherOptions: {
        aggregateTimeout: number;
    };
    watcher: import("../../../watchpack/lib/watchpack");
    watch(files: any, dirs: any, missing: any, startTime: any, options: any, callback: any, callbackUndelayed: any): {
        close: () => void;
        pause: () => void;
        getFileTimestamps: () => Map<any, any>;
        getContextTimestamps: () => Map<any, any>;
    };
}
