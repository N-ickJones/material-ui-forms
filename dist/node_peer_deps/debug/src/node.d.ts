/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */
export function init(debug: any): void;
/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */
export function log(...args: any[]): any;
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */
export function formatArgs(args: any): void;
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
export function save(namespaces: string): void;
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
export function load(): string;
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */
export function useColors(): any;
export var destroy: any;
export var colors: number[];
export var inspectOpts: {};
declare const _exports: {
    (namespace: string): Function;
    debug: {
        (namespace: string): Function;
        debug: any;
        default: any;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (name: string) => boolean;
        humanize: (val: string | number, options?: Object | undefined) => string | number;
        destroy: () => void;
        names: any[];
        skips: any[];
        formatters: {};
        selectColor: (namespace: string) => string | number;
    };
    default: {
        (namespace: string): Function;
        debug: any;
        default: any;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (name: string) => boolean;
        humanize: (val: string | number, options?: Object | undefined) => string | number;
        destroy: () => void;
        names: any[];
        skips: any[];
        formatters: {};
        selectColor: (namespace: string) => string | number;
    };
    coerce: (val: any) => any;
    disable: () => string;
    enable: (namespaces: string) => void;
    enabled: (name: string) => boolean;
    humanize: (val: string | number, options?: Object | undefined) => string | number;
    destroy: any;
    names: any[];
    skips: any[];
    formatters: {};
    selectColor: (namespace: string) => string | number;
    /**
     * This is the Node.js implementation of `debug()`.
     */
    init: typeof init;
    log: typeof log;
    formatArgs: typeof formatArgs;
    save: typeof save;
    load: typeof load;
    useColors: typeof useColors;
    /**
     * Colors.
     */
    colors: number[];
    /**
     * Build up the default `inspectOpts` object from the environment variables.
     *
     *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
     */
    inspectOpts: {};
};
export = _exports;
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */
declare function init(debug: any): void;
/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */
declare function log(...args: any[]): any;
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */
declare function formatArgs(args: any): void;
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
declare function save(namespaces: string): void;
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
declare function load(): string;
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */
declare function useColors(): any;
