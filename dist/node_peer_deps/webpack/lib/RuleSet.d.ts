export = RuleSet;
declare class RuleSet {
    static normalizeRules(rules: any, refs: any, ident: any): ({
        resource: any;
        realResource: any;
        resourceQuery: any;
        compiler: any;
        issuer: any;
        use: any;
        rules: (any | {
            use: {
                loader: string;
            }[];
        })[];
        oneOf: (any | {
            use: {
                loader: string;
            }[];
        })[];
    } | {
        use: {
            loader: string;
        }[];
    })[];
    static normalizeRule(rule: any, refs: any, ident: any): {
        resource: any;
        realResource: any;
        resourceQuery: any;
        compiler: any;
        issuer: any;
        use: any;
        rules: (any | {
            use: {
                loader: string;
            }[];
        })[];
        oneOf: (any | {
            use: {
                loader: string;
            }[];
        })[];
    } | {
        use: {
            loader: string;
        }[];
    };
    static buildErrorMessage(condition: any, error: any): string;
    static normalizeUse(use: any, ident: any): any;
    static normalizeUseItemString(useItemString: any): {
        loader: any;
        options: any;
    };
    static normalizeUseItem(item: any, ident: any): {
        loader: any;
        options: any;
    } | {
        options: any;
        ident: any;
    };
    static normalizeCondition(condition: any): any;
    constructor(rules: any);
    references: any;
    rules: ({
        resource: any;
        realResource: any;
        resourceQuery: any;
        compiler: any;
        issuer: any;
        use: any;
        rules: (any | {
            use: {
                loader: string;
            }[];
        })[];
        oneOf: (any | {
            use: {
                loader: string;
            }[];
        })[];
    } | {
        use: {
            loader: string;
        }[];
    })[];
    exec(data: any): any[];
    _run(data: any, rule: any, result: any): boolean;
    findOptionsByIdent(ident: any): any;
}
