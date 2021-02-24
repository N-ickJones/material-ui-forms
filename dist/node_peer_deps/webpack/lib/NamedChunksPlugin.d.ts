export = NamedChunksPlugin;
declare class NamedChunksPlugin {
    static defaultNameResolver(chunk: any): any;
    constructor(nameResolver: any);
    nameResolver: any;
    apply(compiler: any): void;
}
