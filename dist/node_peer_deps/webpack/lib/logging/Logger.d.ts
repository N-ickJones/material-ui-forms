export var LogType: Readonly<{
    error: "error";
    warn: "warn";
    info: "info";
    log: "log";
    debug: "debug";
    trace: "trace";
    group: "group";
    groupCollapsed: "groupCollapsed";
    groupEnd: "groupEnd";
    profile: "profile";
    profileEnd: "profileEnd";
    time: "time";
    clear: "clear";
    status: "status";
}>;
export var Logger: typeof WebpackLogger;
export type LogTypeEnum = "info" | "error" | "clear" | "time" | "warn" | "profile" | "log" | "debug" | "trace" | "group" | "groupCollapsed" | "groupEnd" | "profileEnd" | "status";
declare class WebpackLogger {
    /**
     * @param {function(LogTypeEnum, any[]=): void} log log function
     */
    constructor(log: (arg0: LogTypeEnum, arg1: any[] | undefined) => void);
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    log(...args: any[]): void;
    debug(...args: any[]): void;
    assert(assertion: any, ...args: any[]): void;
    trace(): void;
    clear(): void;
    status(...args: any[]): void;
    group(...args: any[]): void;
    groupCollapsed(...args: any[]): void;
    groupEnd(...args: any[]): void;
    profile(label: any): void;
    profileEnd(label: any): void;
    time(label: any): void;
    timeLog(label: any): void;
    timeEnd(label: any): void;
    [LOG_SYMBOL]: (arg0: LogTypeEnum, arg1?: any[] | undefined) => void;
    [TIMERS_SYMBOL]: any;
}
/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */
declare const LOG_SYMBOL: unique symbol;
declare const TIMERS_SYMBOL: unique symbol;
export {};
