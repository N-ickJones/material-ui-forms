export = Node;
/**
 * Create a new AST `Node` with the given `val` and `type`.
 *
 * ```js
 * var node = new Node('*', 'Star');
 * var node = new Node({type: 'star', val: '*'});
 * ```
 * @name Node
 * @param {String|Object} `val` Pass a matched substring, or an object to merge onto the node.
 * @param {String} `type` The node type to use when `val` is a string.
 * @return {Object} node instance
 * @api public
 */
declare function Node(val: string | Object, type: string, parent: any): Object;
declare class Node {
    /**
     * Create a new AST `Node` with the given `val` and `type`.
     *
     * ```js
     * var node = new Node('*', 'Star');
     * var node = new Node({type: 'star', val: '*'});
     * ```
     * @name Node
     * @param {String|Object} `val` Pass a matched substring, or an object to merge onto the node.
     * @param {String} `type` The node type to use when `val` is a string.
     * @return {Object} node instance
     * @api public
     */
    constructor(val: string | Object, type: string, parent: any);
    type: string;
    val: string | Object;
    define(name: string, val: any): Object;
    isEmpty(fn: Function): boolean;
    push(node: Object): number;
    nodes: any;
    unshift(node: Object): number;
    pop(): number;
    shift(): Object;
    remove(node: Object): Object;
    find(type: string): Object;
    isType(type: string): boolean;
    hasType(type: string): boolean;
    set siblings(arg: any);
    get siblings(): any;
    set index(arg: any);
    get index(): any;
    set prev(arg: any);
    get prev(): any;
    set next(arg: any);
    get next(): any;
    get first(): any;
    get last(): any;
    get scope(): any;
}
declare namespace Node {
    export function isNode(node: Object): boolean;
}
