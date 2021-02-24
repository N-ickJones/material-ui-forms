export var __esModule: boolean;
export function module(id: any, fields: any, metadata: any): {
    type: string;
    id: any;
    fields: any;
};
export function moduleMetadata(sections: any, functionNames: any, localNames: any, producers: any): {
    type: string;
    sections: any;
};
export function moduleNameMetadata(value: any): {
    type: string;
    value: string;
};
export function functionNameMetadata(value: any, index: any): {
    type: string;
    value: string;
    index: number;
};
export function localNameMetadata(value: any, localIndex: any, functionIndex: any): {
    type: string;
    value: string;
    localIndex: number;
    functionIndex: number;
};
export function binaryModule(id: any, blob: any): {
    type: string;
    id: any;
    blob: any;
};
export function quoteModule(id: any, string: any): {
    type: string;
    id: any;
    string: any;
};
export function sectionMetadata(section: any, startOffset: any, size: any, vectorOfSize: any): {
    type: string;
    section: any;
    startOffset: number;
    size: any;
    vectorOfSize: any;
};
export function producersSectionMetadata(producers: any): {
    type: string;
    producers: any;
};
export function producerMetadata(language: any, processedBy: any, sdk: any): {
    type: string;
    language: any;
    processedBy: any;
    sdk: any;
};
export function producerMetadataVersionedName(name: any, version: any): {
    type: string;
    name: string;
    version: string;
};
export function loopInstruction(label: any, resulttype: any, instr: any): {
    type: string;
    id: string;
    label: any;
    resulttype: any;
    instr: any;
};
export function instr(id: any, object: any, args: any, namedArgs: any): {
    type: string;
    id: string;
    args: any;
};
export function ifInstruction(testLabel: any, test: any, result: any, consequent: any, alternate: any): {
    type: string;
    id: string;
    testLabel: any;
    test: any;
    result: any;
    consequent: any;
    alternate: any;
};
export function stringLiteral(value: any): {
    type: string;
    value: string;
};
export function numberLiteral(value: any, raw: any): {
    type: string;
    value: number;
    raw: string;
};
export function longNumberLiteral(value: any, raw: any): {
    type: string;
    value: any;
    raw: string;
};
export function floatLiteral(value: any, nan: any, inf: any, raw: any): {
    type: string;
    value: number;
    raw: string;
};
export function elem(table: any, offset: any, funcs: any): {
    type: string;
    table: any;
    offset: any;
    funcs: any;
};
export function indexInFuncSection(index: any): {
    type: string;
    index: any;
};
export function valtypeLiteral(name: any): {
    type: string;
    name: any;
};
export function typeInstruction(id: any, functype: any): {
    type: string;
    id: any;
    functype: any;
};
export function start(index: any): {
    type: string;
    index: any;
};
export function globalType(valtype: any, mutability: any): {
    type: string;
    valtype: any;
    mutability: any;
};
export function leadingComment(value: any): {
    type: string;
    value: string;
};
export function blockComment(value: any): {
    type: string;
    value: string;
};
export function data(memoryIndex: any, offset: any, init: any): {
    type: string;
    memoryIndex: any;
    offset: any;
    init: any;
};
export function global(globalType: any, init: any, name: any): {
    type: string;
    globalType: any;
    init: any;
    name: any;
};
export function table(elementType: any, limits: any, name: any, elements: any): {
    type: string;
    elementType: any;
    limits: any;
    name: any;
};
export function memory(limits: any, id: any): {
    type: string;
    limits: any;
    id: any;
};
export function funcImportDescr(id: any, signature: any): {
    type: string;
    id: any;
    signature: any;
};
export function moduleImport(module: any, name: any, descr: any): {
    type: string;
    module: string;
    name: string;
    descr: any;
};
export function moduleExportDescr(exportType: any, id: any): {
    type: string;
    exportType: any;
    id: any;
};
export function moduleExport(name: any, descr: any): {
    type: string;
    name: string;
    descr: any;
};
export function limit(min: any, max: any): {
    type: string;
    min: number;
};
export function signature(params: any, results: any): {
    type: string;
    params: any;
    results: any;
};
export function program(body: any): {
    type: string;
    body: any;
};
export function identifier(value: any, raw: any): {
    type: string;
    value: string;
};
export function blockInstruction(label: any, instr: any, result: any): {
    type: string;
    id: string;
    label: any;
    instr: any;
    result: any;
};
export function callInstruction(index: any, instrArgs: any, numeric: any): {
    type: string;
    id: string;
    index: any;
};
export function callIndirectInstruction(signature: any, intrs: any): {
    type: string;
    id: string;
    signature: any;
};
export function byteArray(values: any): {
    type: string;
    values: any;
};
export function func(name: any, signature: any, body: any, isExternal: any, metadata: any): {
    type: string;
    name: any;
    signature: any;
    body: any;
};
export function internalBrUnless(target: any): {
    type: string;
    target: number;
};
export function internalGoto(target: any): {
    type: string;
    target: number;
};
export function internalCallExtern(target: any): {
    type: string;
    target: number;
};
export function internalEndAndReturn(): {
    type: string;
};
export var assertInternalCallExtern: ((n: any) => void) | undefined;
export var assertInternalGoto: ((n: any) => void) | undefined;
export var assertInternalBrUnless: ((n: any) => void) | undefined;
export var assertFunc: ((n: any) => void) | undefined;
export var assertByteArray: ((n: any) => void) | undefined;
export var assertCallIndirectInstruction: ((n: any) => void) | undefined;
export var assertCallInstruction: ((n: any) => void) | undefined;
export var assertBlockInstruction: ((n: any) => void) | undefined;
export var assertIdentifier: ((n: any) => void) | undefined;
export var assertProgram: ((n: any) => void) | undefined;
export var assertSignature: ((n: any) => void) | undefined;
export var assertLimit: ((n: any) => void) | undefined;
export var assertModuleExport: ((n: any) => void) | undefined;
export var assertModuleExportDescr: ((n: any) => void) | undefined;
export var assertModuleImport: ((n: any) => void) | undefined;
export var assertFuncImportDescr: ((n: any) => void) | undefined;
export var assertMemory: ((n: any) => void) | undefined;
export var assertTable: ((n: any) => void) | undefined;
export var assertGlobal: ((n: any) => void) | undefined;
export var assertData: ((n: any) => void) | undefined;
export var assertBlockComment: ((n: any) => void) | undefined;
export var assertLeadingComment: ((n: any) => void) | undefined;
export var assertGlobalType: ((n: any) => void) | undefined;
export var assertStart: ((n: any) => void) | undefined;
export var assertTypeInstruction: ((n: any) => void) | undefined;
export var assertValtypeLiteral: ((n: any) => void) | undefined;
export var assertIndexInFuncSection: ((n: any) => void) | undefined;
export var assertElem: ((n: any) => void) | undefined;
export var assertFloatLiteral: ((n: any) => void) | undefined;
export var assertLongNumberLiteral: ((n: any) => void) | undefined;
export var assertNumberLiteral: ((n: any) => void) | undefined;
export var assertStringLiteral: ((n: any) => void) | undefined;
export var assertIfInstruction: ((n: any) => void) | undefined;
export var assertInstr: ((n: any) => void) | undefined;
export var assertLoopInstruction: ((n: any) => void) | undefined;
export var assertProducerMetadataVersionedName: ((n: any) => void) | undefined;
export var assertProducerMetadata: ((n: any) => void) | undefined;
export var assertProducersSectionMetadata: ((n: any) => void) | undefined;
export var assertSectionMetadata: ((n: any) => void) | undefined;
export var assertQuoteModule: ((n: any) => void) | undefined;
export var assertBinaryModule: ((n: any) => void) | undefined;
export var assertLocalNameMetadata: ((n: any) => void) | undefined;
export var assertFunctionNameMetadata: ((n: any) => void) | undefined;
export var assertModuleNameMetadata: ((n: any) => void) | undefined;
export var assertModuleMetadata: ((n: any) => void) | undefined;
export var assertModule: ((n: any) => void) | undefined;
export var isIntrinsic: ((node: any) => boolean) | undefined;
export var isImportDescr: ((node: any) => boolean) | undefined;
export var isNumericLiteral: ((node: any) => boolean) | undefined;
export var isExpression: ((node: any) => boolean) | undefined;
export var isInstruction: ((node: any) => boolean) | undefined;
export var isBlock: ((node: any) => boolean) | undefined;
export var isNode: ((node: any) => boolean) | undefined;
export var isInternalEndAndReturn: ((n: any) => boolean) | undefined;
export var isInternalCallExtern: ((n: any) => boolean) | undefined;
export var isInternalGoto: ((n: any) => boolean) | undefined;
export var isInternalBrUnless: ((n: any) => boolean) | undefined;
export var isFunc: ((n: any) => boolean) | undefined;
export var isByteArray: ((n: any) => boolean) | undefined;
export var isCallIndirectInstruction: ((n: any) => boolean) | undefined;
export var isCallInstruction: ((n: any) => boolean) | undefined;
export var isBlockInstruction: ((n: any) => boolean) | undefined;
export var isIdentifier: ((n: any) => boolean) | undefined;
export var isProgram: ((n: any) => boolean) | undefined;
export var isSignature: ((n: any) => boolean) | undefined;
export var isLimit: ((n: any) => boolean) | undefined;
export var isModuleExport: ((n: any) => boolean) | undefined;
export var isModuleExportDescr: ((n: any) => boolean) | undefined;
export var isModuleImport: ((n: any) => boolean) | undefined;
export var isFuncImportDescr: ((n: any) => boolean) | undefined;
export var isMemory: ((n: any) => boolean) | undefined;
export var isTable: ((n: any) => boolean) | undefined;
export var isGlobal: ((n: any) => boolean) | undefined;
export var isData: ((n: any) => boolean) | undefined;
export var isBlockComment: ((n: any) => boolean) | undefined;
export var isLeadingComment: ((n: any) => boolean) | undefined;
export var isGlobalType: ((n: any) => boolean) | undefined;
export var isStart: ((n: any) => boolean) | undefined;
export var isTypeInstruction: ((n: any) => boolean) | undefined;
export var isValtypeLiteral: ((n: any) => boolean) | undefined;
export var isIndexInFuncSection: ((n: any) => boolean) | undefined;
export var isElem: ((n: any) => boolean) | undefined;
export var isFloatLiteral: ((n: any) => boolean) | undefined;
export var isLongNumberLiteral: ((n: any) => boolean) | undefined;
export var isNumberLiteral: ((n: any) => boolean) | undefined;
export var isStringLiteral: ((n: any) => boolean) | undefined;
export var isIfInstruction: ((n: any) => boolean) | undefined;
export var isInstr: ((n: any) => boolean) | undefined;
export var isLoopInstruction: ((n: any) => boolean) | undefined;
export var isProducerMetadataVersionedName: ((n: any) => boolean) | undefined;
export var isProducerMetadata: ((n: any) => boolean) | undefined;
export var isProducersSectionMetadata: ((n: any) => boolean) | undefined;
export var isSectionMetadata: ((n: any) => boolean) | undefined;
export var isQuoteModule: ((n: any) => boolean) | undefined;
export var isBinaryModule: ((n: any) => boolean) | undefined;
export var isLocalNameMetadata: ((n: any) => boolean) | undefined;
export var isFunctionNameMetadata: ((n: any) => boolean) | undefined;
export var isModuleNameMetadata: ((n: any) => boolean) | undefined;
export var isModuleMetadata: ((n: any) => boolean) | undefined;
export var isModule: ((n: any) => boolean) | undefined;
export var nodeAndUnionTypes: string[] | undefined;
export var unionTypesMap: {
    Module: string[];
    ModuleMetadata: string[];
    ModuleNameMetadata: string[];
    FunctionNameMetadata: string[];
    LocalNameMetadata: string[];
    BinaryModule: string[];
    QuoteModule: string[];
    SectionMetadata: string[];
    ProducersSectionMetadata: string[];
    ProducerMetadata: string[];
    ProducerMetadataVersionedName: string[];
    LoopInstruction: string[];
    Instr: string[];
    IfInstruction: string[];
    StringLiteral: string[];
    NumberLiteral: string[];
    LongNumberLiteral: string[];
    FloatLiteral: string[];
    Elem: string[];
    IndexInFuncSection: string[];
    ValtypeLiteral: string[];
    TypeInstruction: string[];
    Start: string[];
    GlobalType: string[];
    LeadingComment: string[];
    BlockComment: string[];
    Data: string[];
    Global: string[];
    Table: string[];
    Memory: string[];
    FuncImportDescr: string[];
    ModuleImport: string[];
    ModuleExportDescr: string[];
    ModuleExport: string[];
    Limit: string[];
    Signature: string[];
    Program: string[];
    Identifier: string[];
    BlockInstruction: string[];
    CallInstruction: string[];
    CallIndirectInstruction: string[];
    ByteArray: string[];
    Func: string[];
    InternalBrUnless: string[];
    InternalGoto: string[];
    InternalCallExtern: string[];
    InternalEndAndReturn: string[];
} | undefined;
export var assertInternalEndAndReturn: ((n: any) => void) | undefined;
