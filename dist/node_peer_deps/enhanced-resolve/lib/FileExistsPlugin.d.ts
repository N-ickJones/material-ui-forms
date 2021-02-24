export = FileExistsPlugin;
declare class FileExistsPlugin {
    constructor(source: any, target: any);
    source: any;
    target: any;
    apply(resolver: any): void;
}
