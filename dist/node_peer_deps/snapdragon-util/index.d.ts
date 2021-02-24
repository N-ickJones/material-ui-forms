export function isNode(node: Object): boolean;
export function noop(node: Object): undefined;
export function identity(node: Object): undefined;
export function append(val: any): Function;
export function toNoop(node: Object, nodes: any[]): void;
export function visit(node: Object, fn: Function): Object;
export function mapVisit(node: Object, fn: Function): Object;
export function addOpen(node: Object, Node: Function, val: any, filter: Function): Object;
export function addClose(node: Object, Node: Function, val: any, filter: Function): Object;
export function wrapNodes(node: Object, Node: Function, filter: Function): Object;
export function pushNode(parent: Object, node: Object): Object;
export function unshiftNode(parent: Object, node: Object): undefined;
export function popNode(node: Object): number | undefined;
export function shiftNode(node: Object): number | undefined;
export function removeNode(parent: Object, node: Object): Object | undefined;
export function isType(node: Object, type: string): boolean;
export function hasType(node: Object, type: string): boolean;
export function firstOfType(nodes: any[], type: string): Object | undefined;
export function findNode(nodes: any[], type: string | number): Object;
export function isOpen(node: Object): boolean;
export function isClose(node: Object): boolean;
export function hasOpen(node: Object): boolean;
export function hasClose(node: Object): boolean;
export function hasOpenAndClose(node: Object): boolean;
export function addType(state: Object, node: Object): any[];
export function removeType(state: Object, node: Object): any[];
export function isEmpty(node: Object, fn: Function): boolean;
export function isInsideType(state: Object, type: string): boolean;
export function isInside(state: Object, node: Object, type: string): boolean;
export function last(arr: any, n: number): undefined;
export function arrayify(val: any): any[];
export function stringify(val: any): any[];
export function trim(str: string): string;
