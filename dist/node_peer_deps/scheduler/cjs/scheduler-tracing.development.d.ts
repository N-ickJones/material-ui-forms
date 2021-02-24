export var __interactionsRef: {
    current: Set<any>;
} | null;
export var __subscriberRef: {
    current: null;
} | null;
export function unstable_clear(callback: any): any;
export function unstable_getCurrent(): Set<any>;
export function unstable_getThreadID(): number;
export function unstable_subscribe(subscriber: any): void;
export function unstable_trace(name: any, timestamp: any, callback: any, ...args: any[]): any;
export function unstable_unsubscribe(subscriber: any): void;
export function unstable_wrap(callback: any, ...args: any[]): {
    (...args: any[]): any;
    cancel(): void;
};
