export = Async;
declare function Async(): void;
declare class Async {
    _customScheduler: boolean;
    _isTickUsed: boolean;
    _lateQueue: import("./queue");
    _normalQueue: import("./queue");
    _haveDrainedQueues: boolean;
    drainQueues: () => void;
    _schedule: any;
    setScheduler(fn: any): any;
    hasCustomScheduler(): boolean;
    haveItemsQueued(): boolean;
    fatalError(e: any, isNode: any): void;
    throwLater(fn: any, arg: any, ...args: any[]): void;
    invokeLater: typeof AsyncInvokeLater;
    invoke: typeof AsyncInvoke;
    settlePromises: typeof AsyncSettlePromises;
    _drainQueues(): void;
    _queueTick(): void;
    _reset(): void;
}
declare namespace Async {
    export { firstLineError };
}
declare function AsyncInvokeLater(fn: any, receiver: any, arg: any): void;
declare function AsyncInvoke(fn: any, receiver: any, arg: any): void;
declare function AsyncSettlePromises(promise: any): void;
declare var firstLineError: any;
