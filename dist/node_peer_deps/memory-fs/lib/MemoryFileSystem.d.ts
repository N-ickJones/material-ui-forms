export = MemoryFileSystem;
declare function MemoryFileSystem(data: any): void;
declare class MemoryFileSystem {
    constructor(data: any);
    data: any;
    meta(_path: any): any;
    existsSync(_path: any): boolean;
    statSync(_path: any): {
        isFile: typeof falseFn;
        isDirectory: typeof trueFn;
        isBlockDevice: typeof falseFn;
        isCharacterDevice: typeof falseFn;
        isSymbolicLink: typeof falseFn;
        isFIFO: typeof falseFn;
        isSocket: typeof falseFn;
    };
    readFileSync(_path: any, encoding: any): any;
    readdirSync(_path: any): string[];
    mkdirpSync(_path: any): void;
    mkdirSync(_path: any): void;
    _remove(_path: any, name: any, testFn: any): void;
    rmdirSync(_path: any): void;
    unlinkSync(_path: any): void;
    readlinkSync(_path: any): never;
    writeFileSync(_path: any, content: any, encoding: any): void;
    join: (path: any, request: any) => any;
    pathToArray: typeof pathToArray;
    normalize: (path: any) => any;
    createReadStream(path: any, options: any): any;
    createWriteStream(path: any, options: any): any;
    exists(path: any, callback: any): any;
    writeFile(path: any, content: any, encoding: any, callback: any): any;
}
declare function falseFn(): boolean;
declare function trueFn(): boolean;
declare function pathToArray(path: any): any;
