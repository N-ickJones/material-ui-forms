export = Hook;
declare class Hook {
    constructor(args: any);
    _args: any;
    taps: any[];
    interceptors: any[];
    call: any;
    promise: any;
    callAsync: any;
    _x: any;
    compile(options: any): void;
    _createCall(type: any): void;
    tap(options: any, fn: any): void;
    tapAsync(options: any, fn: any): void;
    tapPromise(options: any, fn: any): void;
    _runRegisterInterceptors(options: any): any;
    withOptions(options: any): any;
    isUsed(): boolean;
    intercept(interceptor: any): void;
    _resetCompilation(): void;
    _insert(item: any): void;
}
