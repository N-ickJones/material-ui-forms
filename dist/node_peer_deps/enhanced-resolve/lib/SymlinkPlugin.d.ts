export = SymlinkPlugin;
declare class SymlinkPlugin {
    constructor(source: any, target: any);
    source: any;
    target: any;
    apply(resolver: any): void;
}
