export = ProfilingPlugin;
declare class ProfilingPlugin {
    /**
     * @param {ProfilingPluginOptions=} opts options object
     */
    constructor(opts?: ProfilingPluginOptions | undefined);
    outputPath: string;
    apply(compiler: any): void;
}
declare namespace ProfilingPlugin {
    export { Profiler, ProfilingPluginOptions, Trace, PluginFunction };
}
type ProfilingPluginOptions = import("../../declarations/plugins/debug/ProfilingPlugin").ProfilingPluginOptions;
declare class Profiler {
    constructor(inspector: any);
    session: any;
    inspector: any;
    hasSession(): boolean;
    startProfiling(): Promise<void> | Promise<[any, any, any]>;
    sendCommand(method: any, params: any): Promise<any>;
    destroy(): Promise<void>;
    stopProfiling(): Promise<any>;
}
/**
 * an object that wraps Tracer and Profiler with a counter
 */
type Trace = {
    /**
     * instance of Tracer
     */
    trace: import("../../../chrome-trace-event/dist/trace-event").Tracer;
    /**
     * Counter
     */
    counter: number;
    /**
     * instance of Profiler
     */
    profiler: Profiler;
    /**
     * the end function
     */
    end: Function;
};
type PluginFunction = (...args: any[]) => void | Promise<any>;
