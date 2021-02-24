export = DescriptionFilePlugin;
declare class DescriptionFilePlugin {
    constructor(source: any, filenames: any, target: any);
    source: any;
    filenames: any[];
    target: any;
    apply(resolver: any): void;
}
