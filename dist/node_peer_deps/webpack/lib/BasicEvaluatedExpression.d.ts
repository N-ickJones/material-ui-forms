export = BasicEvaluatedExpression;
declare class BasicEvaluatedExpression {
    type: number;
    range: any;
    falsy: boolean;
    truthy: boolean;
    bool: any;
    number: any;
    regExp: any;
    string: any;
    quasis: any;
    parts: any;
    array: any;
    items: any;
    options: any;
    prefix: any;
    postfix: any;
    wrappedInnerExpressions: any;
    expression: any;
    isNull(): boolean;
    isString(): boolean;
    isNumber(): boolean;
    isBoolean(): boolean;
    isRegExp(): boolean;
    isConditional(): boolean;
    isArray(): boolean;
    isConstArray(): boolean;
    isIdentifier(): boolean;
    isWrapped(): boolean;
    isTemplateString(): boolean;
    isTruthy(): boolean;
    isFalsy(): boolean;
    asBool(): any;
    asString(): any;
    setString(string: any): BasicEvaluatedExpression;
    setNull(): BasicEvaluatedExpression;
    setNumber(number: any): BasicEvaluatedExpression;
    setBoolean(bool: any): BasicEvaluatedExpression;
    setRegExp(regExp: any): BasicEvaluatedExpression;
    setIdentifier(identifier: any): BasicEvaluatedExpression;
    identifier: any;
    setWrapped(prefix: any, postfix: any, innerExpressions: any): BasicEvaluatedExpression;
    setOptions(options: any): BasicEvaluatedExpression;
    addOptions(options: any): BasicEvaluatedExpression;
    setItems(items: any): BasicEvaluatedExpression;
    setArray(array: any): BasicEvaluatedExpression;
    setTemplateString(quasis: any, parts: any, kind: any): BasicEvaluatedExpression;
    templateStringKind: any;
    setTruthy(): BasicEvaluatedExpression;
    setFalsy(): BasicEvaluatedExpression;
    setRange(range: any): BasicEvaluatedExpression;
    setExpression(expression: any): BasicEvaluatedExpression;
}
