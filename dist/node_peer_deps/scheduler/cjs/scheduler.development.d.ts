export function unstable_now(): number;
export function unstable_shouldYield(): boolean;
export function unstable_forceFrameRate(): void;
export var unstable_IdlePriority: number;
export var unstable_ImmediatePriority: number;
export var unstable_LowPriority: number;
export var unstable_NormalPriority: number;
export namespace unstable_Profiling {
    export { startLoggingProfilingEvents };
    export { stopLoggingProfilingEvents };
    export { sharedProfilingBuffer };
}
export var unstable_UserBlockingPriority: number;
export function unstable_cancelCallback(task: any): void;
export function unstable_continueExecution(): void;
export function unstable_getCurrentPriorityLevel(): number;
export function unstable_getFirstCallbackNode(): any;
export function unstable_next(eventHandler: any): any;
export function unstable_pauseExecution(): void;
export function unstable_requestPaint(): void;
export function unstable_runWithPriority(priorityLevel: any, eventHandler: any): any;
export function unstable_scheduleCallback(priorityLevel: any, callback: any, options: any): {
    id: number;
    callback: any;
    priorityLevel: any;
    startTime: number;
    expirationTime: number;
    sortIndex: number;
};
export function unstable_wrapCallback(callback: any): (...args: any[]) => any;
declare function startLoggingProfilingEvents(): void;
declare function stopLoggingProfilingEvents(): any;
declare var sharedProfilingBuffer: ArrayBuffer | null;
export {};
