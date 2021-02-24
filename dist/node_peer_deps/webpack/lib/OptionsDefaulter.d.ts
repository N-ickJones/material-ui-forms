export = OptionsDefaulter;
/**
 * @typedef {'call' | 'make' | 'append'} ConfigType
 */
/**
 * @typedef {(options: object) => any} MakeConfigHandler
 */
/**
 * @typedef {(value: any, options: object) => any} CallConfigHandler
 */
/**
 * @typedef {any[]} AppendConfigValues
 */
declare class OptionsDefaulter {
    /**
     * Stores default options settings or functions for computing them
     */
    defaults: {};
    /**
     * Stores configuration for options
     * @type {{[key: string]: ConfigType}}
     */
    config: {
        [key: string]: "call" | "make" | "append";
    };
    /**
     * Enhancing {@param options} with default values
     * @param {object} options provided options
     * @returns {object} - enhanced options
     * @throws {Error} - will throw error, if configuration value is other then `undefined` or {@link ConfigType}
     */
    process(options: object): object;
    /**
     * Builds up default values
     * @param {string} name option path
     * @param {ConfigType | any} config if {@param def} is provided, then only {@link ConfigType} is allowed
     * @param {MakeConfigHandler | CallConfigHandler | AppendConfigValues} [def] defaults
     * @returns {void}
     */
    set(name: string, config: ConfigType | any, def?: any[] | ((options: object) => any) | ((value: any, options: object) => any) | undefined): void;
}
declare namespace OptionsDefaulter {
    export { ConfigType, MakeConfigHandler, CallConfigHandler, AppendConfigValues };
}
type ConfigType = "call" | "make" | "append";
type MakeConfigHandler = (options: object) => any;
type CallConfigHandler = (value: any, options: object) => any;
type AppendConfigValues = any[];
