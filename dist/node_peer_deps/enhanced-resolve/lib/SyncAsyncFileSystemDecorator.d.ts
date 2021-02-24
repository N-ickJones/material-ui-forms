export = SyncAsyncFileSystemDecorator;
declare function SyncAsyncFileSystemDecorator(fs: any): void;
declare class SyncAsyncFileSystemDecorator {
    constructor(fs: any);
    fs: any;
    stat: (arg: any, callback: any) => any;
    readdir: (arg: any, callback: any) => any;
    readFile: (arg: any, callback: any) => any;
    readlink: (arg: any, callback: any) => any;
    readJson: (arg: any, callback: any) => any;
}
