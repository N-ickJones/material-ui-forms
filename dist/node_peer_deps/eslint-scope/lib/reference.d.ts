export = Reference;
/**
 * A Reference represents a single occurrence of an identifier in code.
 * @class Reference
 */
declare class Reference {
    constructor(ident: any, scope: any, flag: any, writeExpr: any, maybeImplicitGlobal: any, partial: any, init: any);
    /**
     * Identifier syntax node.
     * @member {espreeIdentifier} Reference#identifier
     */
    identifier: any;
    /**
     * Reference to the enclosing Scope.
     * @member {Scope} Reference#from
     */
    from: any;
    /**
     * Whether the reference comes from a dynamic scope (such as 'eval',
     * 'with', etc.), and may be trapped by dynamic scopes.
     * @member {boolean} Reference#tainted
     */
    tainted: boolean;
    /**
     * The variable this reference is resolved with.
     * @member {Variable} Reference#resolved
     */
    resolved: any;
    /**
     * The read-write mode of the reference. (Value is one of {@link
     * Reference.READ}, {@link Reference.RW}, {@link Reference.WRITE}).
     * @member {number} Reference#flag
     * @private
     */
    private flag;
    /**
     * If reference is writeable, this is the tree being written to it.
     * @member {espreeNode} Reference#writeExpr
     */
    writeExpr: any;
    /**
     * Whether the Reference might refer to a partial value of writeExpr.
     * @member {boolean} Reference#partial
     */
    partial: any;
    /**
     * Whether the Reference is to write of initialization.
     * @member {boolean} Reference#init
     */
    init: any;
    __maybeImplicitGlobal: any;
    /**
     * Whether the reference is static.
     * @method Reference#isStatic
     * @returns {boolean} static
     */
    isStatic(): boolean;
    /**
     * Whether the reference is writeable.
     * @method Reference#isWrite
     * @returns {boolean} write
     */
    isWrite(): boolean;
    /**
     * Whether the reference is readable.
     * @method Reference#isRead
     * @returns {boolean} read
     */
    isRead(): boolean;
    /**
     * Whether the reference is read-only.
     * @method Reference#isReadOnly
     * @returns {boolean} read only
     */
    isReadOnly(): boolean;
    /**
     * Whether the reference is write-only.
     * @method Reference#isWriteOnly
     * @returns {boolean} write only
     */
    isWriteOnly(): boolean;
    /**
     * Whether the reference is read-write.
     * @method Reference#isReadWrite
     * @returns {boolean} read write
     */
    isReadWrite(): boolean;
}
declare namespace Reference {
    export { READ };
    export { WRITE };
    export { RW };
}
declare const READ: 1;
declare const WRITE: 2;
declare const RW: number;
