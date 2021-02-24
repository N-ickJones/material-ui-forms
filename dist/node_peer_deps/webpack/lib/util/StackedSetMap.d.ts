export = StackedSetMap;
declare class StackedSetMap {
    constructor(parentStack: any);
    stack: any;
    map: Map<any, any>;
    add(item: any): void;
    set(item: any, value: any): void;
    delete(item: any): void;
    has(item: any): boolean;
    get(item: any): any;
    _compress(): void;
    asArray(): any[];
    asSet(): Set<any>;
    asPairArray(): [any, any][];
    asMap(): Map<any, any>;
    get size(): number;
    createChild(): StackedSetMap;
    set length(arg: void);
    get length(): void;
    push: any;
}
