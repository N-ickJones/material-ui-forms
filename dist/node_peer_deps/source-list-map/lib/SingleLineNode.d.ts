export = SingleLineNode;
declare class SingleLineNode {
    constructor(generatedCode: any, source: any, originalSource: any, line: any);
    generatedCode: any;
    originalSource: any;
    source: any;
    line: any;
    _numberOfLines: number;
    _endsWithNewLine: boolean;
    clone(): SingleLineNode;
    getGeneratedCode(): any;
    getMappings(mappingsContext: any): string;
    getNormalizedNodes(): SingleLineNode[];
    mapGeneratedCode(fn: any): SingleLineNode;
    merge(otherNode: any): false | SingleLineNode | import("./SourceNode");
    mergeSingleLineNode(otherNode: any): false | SingleLineNode | import("./SourceNode");
}
