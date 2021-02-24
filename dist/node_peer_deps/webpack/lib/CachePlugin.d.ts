export = CachePlugin;
declare class CachePlugin {
    constructor(cache: any);
    cache: any;
    FS_ACCURACY: number;
    apply(compiler: any): void;
    watching: boolean | undefined;
    applyMtime(mtime: any): void;
}
