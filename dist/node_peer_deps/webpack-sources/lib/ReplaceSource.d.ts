export = ReplaceSource;
declare const ReplaceSource_base: typeof import("./Source");
declare class ReplaceSource extends ReplaceSource_base {
    constructor(source: any, name: any);
    _source: any;
    _name: any;
    /** @type {Replacement[]} */
    replacements: Replacement[];
    replace(start: any, end: any, newValue: any, name: any): void;
    insert(pos: any, newValue: any, name: any): void;
    original(): any;
    _sortReplacements(): void;
    _replaceString(str: any): string;
    listMap(options: any): any;
    _splitString(str: any, position: any): any[];
    _replaceInStringNode(output: any, replace: any, getOriginalSource: any, node: any, position: any, mapping: any): any;
}
declare class Replacement {
    constructor(start: any, end: any, content: any, insertIndex: any, name: any);
    start: any;
    end: any;
    content: any;
    insertIndex: any;
    name: any;
}
