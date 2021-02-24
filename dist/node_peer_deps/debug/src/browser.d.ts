/**
 * Colorize log arguments if enabled.
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
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
export function useColors(): any;
export var storage: any;
export function destroy(): void;
export var colors: string[];
export var log: (...data: any[]) => void;
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
    destroy: (() => void) | (() => void);
    names: any[];
    skips: any[];
    formatters: {};
    selectColor: (namespace: string) => string | number;
    /**
     * This is the web browser implementation of `debug()`.
     */
    formatArgs: typeof formatArgs;
    save: typeof save;
    load: typeof load;
    useColors: typeof useColors;
    storage: any;
    /**
     * Colors.
     */
    colors: string[];
    /**
     * Invokes `console.debug()` when available.
     * No-op when `console.debug` is not a "function".
     * If `console.debug` is not available, falls back
     * to `console.log`.
     *
     * @api public
     */
    log: (...data: any[]) => void;
};
export = _exports;
/**
 * Colorize log arguments if enabled.
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
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
declare function useColors(): any;
