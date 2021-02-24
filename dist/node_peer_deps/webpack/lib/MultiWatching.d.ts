export = MultiWatching;
declare class MultiWatching {
    constructor(watchings: any, compiler: any);
    watchings: any;
    compiler: any;
    invalidate(): void;
    suspend(): void;
    resume(): void;
    close(callback: any): void;
}
