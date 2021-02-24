export = RestrictionsPlugin;
declare class RestrictionsPlugin {
    constructor(source: any, restrictions: any);
    source: any;
    restrictions: any;
    apply(resolver: any): void;
}
