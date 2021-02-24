declare function _exports({ level, debug, console }: LoggerOptions): (arg0: string, arg1: LogTypeEnum, arg2: any[]) => void;
export = _exports;
export type LogTypeEnum = "info" | "error" | "clear" | "time" | "warn" | "profile" | "log" | "debug" | "trace" | "group" | "groupCollapsed" | "groupEnd" | "profileEnd" | "status";
export type FilterTypes = string | RegExp | ((value: string) => boolean) | import("../../declarations/WebpackOptions").FilterItemTypes[];
export type FilterItemTypes = string | RegExp | ((value: string) => boolean);
export type FilterFunction = (arg0: string) => boolean;
export type LoggerOptions = {
    /**
     * loglevel
     */
    level: false | true | "none" | "error" | "warn" | "info" | "log" | "verbose";
    /**
     * filter for debug logging
     */
    debug: FilterTypes | boolean;
    /**
     * the console to log to
     */
    console: Console & {
        status?: Function;
        logTime?: Function;
    };
};
export type LogLevel = number;
