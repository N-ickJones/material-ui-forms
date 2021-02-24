export var __esModule: boolean;
export var numberLiteralFromRaw: (rawValue: any, ...args: any[]) => {
    type: string;
    value: any;
    raw: string;
};
export var withLoc: (n: any, end: any, start: any) => any;
export var withRaw: (n: any, raw: any) => any;
export var funcParam: (valtype: any, id: any) => {
    id: any;
    valtype: any;
};
export var indexLiteral: (value: any) => {
    type: string;
    value: any;
    raw: string;
};
export var memIndexLiteral: (value: any) => {
    type: string;
    value: any;
    raw: string;
};
export var instruction: (id: any, ...args: any[]) => {
    type: string;
    id: string;
    args: any;
};
export var objectInstruction: (id: any, object: any, ...args: any[]) => {
    type: string;
    id: string;
    args: any;
};
export var traverse: (node: any, visitors: any, ...args: any[]) => void;
export var signatures: any;
export var cloneNode: (n: any) => {};
