export = globSync;
declare function globSync(pattern: any, options: any, ...args: any[]): any;
declare namespace globSync {
    export { GlobSync };
}
declare function GlobSync(pattern: any, options: any, ...args: any[]): any;
declare class GlobSync {
    constructor(pattern: any, options: any, ...args: any[]);
    matches: any[];
    _finish(): void;
    _process(pattern: any, index: any, inGlobStar: any): void;
    _processReaddir(prefix: any, read: any, abs: any, remain: any, index: any, inGlobStar: any): void;
    _emitMatch(index: any, e: any): void;
    _readdirInGlobStar(abs: any): any;
    _readdir(abs: any, inGlobStar: any): any;
    _readdirEntries(abs: any, entries: any): any;
    _readdirError(f: any, er: any): void;
    _processGlobStar(prefix: any, read: any, abs: any, remain: any, index: any, inGlobStar: any): void;
    _processSimple(prefix: any, index: any): void;
    _stat(f: any): any;
    _mark(p: any): any;
    _makeAbs(f: any): any;
}
