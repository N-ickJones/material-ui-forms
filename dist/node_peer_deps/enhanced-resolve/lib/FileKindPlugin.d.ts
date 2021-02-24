export = FileKindPlugin;
declare class FileKindPlugin {
    constructor(source: any, target: any);
    source: any;
    target: any;
    apply(resolver: any): void;
}
