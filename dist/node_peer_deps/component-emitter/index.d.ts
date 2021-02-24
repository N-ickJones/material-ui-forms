export = Emitter;
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */
declare function Emitter(obj: any): Object | undefined;
declare class Emitter {
    /**
     * Initialize a new `Emitter`.
     *
     * @api public
     */
    constructor(obj: any);
    /**
     * Listen on the given `event` with `fn`.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
    on: (event: string, fn: Function) => Emitter;
    addEventListener(event: string, fn: Function): Emitter;
    _callbacks: any;
    once(event: string, fn: Function): Emitter;
    /**
     * Remove the given callback for `event` or all
     * registered callbacks.
     *
     * @param {String} event
     * @param {Function} fn
     * @return {Emitter}
     * @api public
     */
    off: (event: string, fn: Function, ...args: any[]) => Emitter;
    removeListener: (event: string, fn: Function, ...args: any[]) => Emitter;
    removeAllListeners: (event: string, fn: Function, ...args: any[]) => Emitter;
    removeEventListener(event: string, fn: Function, ...args: any[]): Emitter;
    emit(event: string, ...args: any[]): Emitter;
    listeners(event: string): any[];
    hasListeners(event: string): boolean;
}
