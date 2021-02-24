export = JoinRequestPlugin;
declare class JoinRequestPlugin {
    constructor(source: any, target: any);
    source: any;
    target: any;
    apply(resolver: any): void;
}
