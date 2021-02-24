export = Variable;
/**
 * A Variable represents a locally scoped identifier. These include arguments to
 * functions.
 * @class Variable
 */
declare class Variable {
    constructor(name: any, scope: any);
    /**
     * The variable name, as given in the source code.
     * @member {String} Variable#name
     */
    name: any;
    /**
     * List of defining occurrences of this variable (like in 'var ...'
     * statements or as parameter), as AST nodes.
     * @member {espree.Identifier[]} Variable#identifiers
     */
    identifiers: any[];
    /**
     * List of {@link Reference|references} of this variable (excluding parameter entries)
     * in its defining scope and all nested scopes. For defining
     * occurrences only see {@link Variable#defs}.
     * @member {Reference[]} Variable#references
     */
    references: any[];
    /**
     * List of defining occurrences of this variable (like in 'var ...'
     * statements or as parameter), as custom objects.
     * @member {Definition[]} Variable#defs
     */
    defs: any[];
    tainted: boolean;
    /**
     * Whether this is a stack variable.
     * @member {boolean} Variable#stack
     */
    stack: boolean;
    /**
     * Reference to the enclosing Scope.
     * @member {Scope} Variable#scope
     */
    scope: any;
}
declare namespace Variable {
    export const CatchClause: string;
    export const Parameter: string;
    export const FunctionName: string;
    export const ClassName: string;
    export const Variable: string;
    export const ImportBinding: string;
    export const ImplicitGlobalVariable: string;
}
