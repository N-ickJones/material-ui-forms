/**
 * @class ParameterDefinition
 */
export class ParameterDefinition extends Definition {
    constructor(name: any, node: any, index: any, rest: any);
    /**
     * Whether the parameter definition is a part of a rest parameter.
     * @member {boolean} ParameterDefinition#rest
     */
    rest: any;
}
/**
 * @class Definition
 */
export class Definition {
    constructor(type: any, name: any, node: any, parent: any, index: any, kind: any);
    /**
     * @member {String} Definition#type - type of the occurrence (e.g. "Parameter", "Variable", ...).
     */
    type: any;
    /**
     * @member {espree.Identifier} Definition#name - the identifier AST node of the occurrence.
     */
    name: any;
    /**
     * @member {espree.Node} Definition#node - the enclosing node of the identifier.
     */
    node: any;
    /**
     * @member {espree.Node?} Definition#parent - the enclosing statement node of the identifier.
     */
    parent: any;
    /**
     * @member {Number?} Definition#index - the index in the declaration statement.
     */
    index: any;
    /**
     * @member {String?} Definition#kind - the kind of the declaration statement.
     */
    kind: any;
}
