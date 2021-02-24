export = LocalModule;
declare class LocalModule {
    constructor(module: any, name: any, idx: any);
    module: any;
    name: any;
    idx: any;
    used: boolean;
    flagUsed(): void;
    variableName(): string;
}
