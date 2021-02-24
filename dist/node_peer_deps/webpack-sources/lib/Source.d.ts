export = Source;
declare class Source {
    source(): void;
    size(): any;
    map(options: any): null;
    sourceAndMap(options: any): {
        source: void;
        map: null;
    };
    node(): void;
    listNode(): void;
    updateHash(hash: any): void;
}
