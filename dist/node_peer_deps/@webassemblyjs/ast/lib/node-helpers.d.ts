export var __esModule: boolean;
export function numberLiteralFromRaw(rawValue: any, ...args: any[]): {
    type: string;
    value: any;
    raw: string;
};
export function instruction(id: any, ...args: any[]): {
    type: string;
    id: string;
    args: any;
};
export function objectInstruction(id: any, object: any, ...args: any[]): {
    type: string;
    id: string;
    args: any;
};
/**
 * Decorators
 */
export function withLoc(n: any, end: any, start: any): any;
export function withRaw(n: any, raw: any): any;
export function funcParam(valtype: any, id: any): {
    id: any;
    valtype: any;
};
export function indexLiteral(value: any): {
    type: string;
    value: any;
    raw: string;
};
export function memIndexLiteral(value: any): {
    type: string;
    value: any;
    raw: string;
};
