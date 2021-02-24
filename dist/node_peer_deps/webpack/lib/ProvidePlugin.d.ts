export = ProvidePlugin;
declare class ProvidePlugin {
    constructor(definitions: any);
    definitions: any;
    apply(compiler: any): void;
}
