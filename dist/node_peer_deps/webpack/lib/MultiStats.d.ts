export = MultiStats;
declare class MultiStats {
    constructor(stats: any);
    stats: any;
    hash: any;
    hasErrors(): any;
    hasWarnings(): any;
    toJson(options: any, forToString: any): {
        errors: any;
        warnings: any;
    };
    toString(options: any): any;
}
