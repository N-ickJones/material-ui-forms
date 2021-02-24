export = MultiHook;
declare class MultiHook {
    constructor(hooks: any);
    hooks: any;
    tap(options: any, fn: any): void;
    tapAsync(options: any, fn: any): void;
    tapPromise(options: any, fn: any): void;
    isUsed(): boolean;
    intercept(interceptor: any): void;
    withOptions(options: any): MultiHook;
}
