export = entry;
declare function entry(cache: any, key: any): Promise<{
    key: any;
    integrity: any;
    path: any;
    size: any;
    time: any;
    metadata: any;
} | null>;
declare namespace entry {
    export { entry, content, all };
}
declare function content(cache: any, integrity: any): Promise<any>;
declare function all(cache: any): any;
