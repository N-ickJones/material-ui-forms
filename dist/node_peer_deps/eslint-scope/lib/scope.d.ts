/**
 * @class Scope
 */
export class Scope {
    constructor(scopeManager: any, type: any, upperScope: any, block: any, isMethodDefinition: any);
    /**
     * One of 'module', 'block', 'switch', 'function', 'catch', 'with', 'function', 'class', 'global'.
     * @member {String} Scope#type
     */
    type: any;
    /**
    * The scoped {@link Variable}s of this scope, as <code>{ Variable.name
    * : Variable }</code>.
    * @member {Map} Scope#set
    */
    set: Map<any, any>;
    /**
     * The tainted variables of this scope, as <code>{ Variable.name :
     * boolean }</code>.
     * @member {Map} Scope#taints */
    taints: Map<any, any>;
    /**
     * Generally, through the lexical scoping of JS you can always know
     * which variable an identifier in the source code refers to. There are
     * a few exceptions to this rule. With 'global' and 'with' scopes you
     * can only decide at runtime which variable a reference refers to.
     * Moreover, if 'eval()' is used in a scope, it might introduce new
     * bindings in this or its parent scopes.
     * All those scopes are considered 'dynamic'.
     * @member {boolean} Scope#dynamic
     */
    dynamic: boolean;
    /**
     * A reference to the scope-defining syntax node.
     * @member {espree.Node} Scope#block
     */
    block: any;
    /**
    * The {@link Reference|references} that are not resolved with this scope.
    * @member {Reference[]} Scope#through
    */
    through: any[];
    /**
    * The scoped {@link Variable}s of this scope. In the case of a
    * 'function' scope this includes the automatic argument <em>arguments</em> as
    * its first element, as well as all further formal arguments.
    * @member {Variable[]} Scope#variables
    */
    variables: any[];
    /**
    * Any variable {@link Reference|reference} found in this scope. This
    * includes occurrences of local variables as well as variables from
    * parent scopes (including the global scope). For local variables
    * this also includes defining occurrences (like in a 'var' statement).
    * In a 'function' scope this does not include the occurrences of the
    * formal parameter in the parameter list.
    * @member {Reference[]} Scope#references
    */
    references: any[];
    /**
    * For 'global' and 'function' scopes, this is a self-reference. For
    * other scope types this is the <em>variableScope</em> value of the
    * parent scope.
    * @member {Scope} Scope#variableScope
    */
    variableScope: any;
    /**
    * Whether this scope is created by a FunctionExpression.
    * @member {boolean} Scope#functionExpressionScope
    */
    functionExpressionScope: boolean;
    /**
    * Whether this is a scope that contains an 'eval()' invocation.
    * @member {boolean} Scope#directCallToEvalScope
    */
    directCallToEvalScope: boolean;
    /**
    * @member {boolean} Scope#thisFound
    */
    thisFound: boolean;
    __left: any[];
    /**
    * Reference to the parent {@link Scope|scope}.
    * @member {Scope} Scope#upper
    */
    upper: any;
    /**
    * Whether 'use strict' is in effect in this scope.
    * @member {boolean} Scope#isStrict
    */
    isStrict: boolean;
    /**
    * List of nested {@link Scope}s.
    * @member {Scope[]} Scope#childScopes
    */
    childScopes: any[];
    __declaredVariables: any;
    __shouldStaticallyClose(scopeManager: any): any;
    __shouldStaticallyCloseForGlobal(ref: any): any;
    __staticCloseRef(ref: any): void;
    __dynamicCloseRef(ref: any): void;
    __globalCloseRef(ref: any): void;
    __close(scopeManager: any): any;
    __isValidResolution(ref: any, variable: any): boolean;
    __resolve(ref: any): boolean;
    __delegateToUpperScope(ref: any): void;
    __addDeclaredVariablesOfNode(variable: any, node: any): void;
    __defineGeneric(name: any, set: any, variables: any, node: any, def: any): void;
    __define(node: any, def: any): void;
    __referencing(node: any, assign: any, writeExpr: any, maybeImplicitGlobal: any, partial: any, init: any): void;
    __detectEval(): void;
    __detectThis(): void;
    __isClosed(): boolean;
    /**
     * returns resolved {Reference}
     * @method Scope#resolve
     * @param {Espree.Identifier} ident - identifier to be resolved.
     * @returns {Reference} reference
     */
    resolve(ident: any): import("./reference");
    /**
     * returns this scope is static
     * @method Scope#isStatic
     * @returns {boolean} static
     */
    isStatic(): boolean;
    /**
     * returns this scope has materialized arguments
     * @method Scope#isArgumentsMaterialized
     * @returns {boolean} arguemnts materialized
     */
    isArgumentsMaterialized(): boolean;
    /**
     * returns this scope has materialized `this` reference
     * @method Scope#isThisMaterialized
     * @returns {boolean} this materialized
     */
    isThisMaterialized(): boolean;
    isUsedName(name: any): boolean;
}
export class GlobalScope extends Scope {
    constructor(scopeManager: any, block: any);
    implicit: {
        set: Map<any, any>;
        variables: never[];
        /**
        * List of {@link Reference}s that are left to be resolved (i.e. which
        * need to be linked to the variable they refer to).
        * @member {Reference[]} Scope#implicit#left
        */
        left: never[];
    };
    __defineImplicit(node: any, def: any): void;
}
export class ModuleScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class FunctionExpressionNameScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class CatchScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class WithScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class BlockScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class SwitchScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class FunctionScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any, isMethodDefinition: any);
    __defineArguments(): void;
}
export class ForScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
export class ClassScope extends Scope {
    constructor(scopeManager: any, upperScope: any, block: any);
}
