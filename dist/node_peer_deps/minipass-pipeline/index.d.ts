export = Pipeline;
declare const Pipeline_base: {
    new (options: any): import("../minipass");
    [x: string]: any;
    isStream(s: any): boolean;
};
declare class Pipeline extends Pipeline_base {
    constructor(opts: any, ...streams: any[]);
    push(...streams: any[]): void;
    unshift(...streams: any[]): void;
    [_linkStreams](streams: any): any;
    [_setTail](stream: any): void;
    [_onError](stream: any, er: any): void;
    [_onData](stream: any, chunk: any): void;
    [_onEnd](stream: any): void;
    [_setHead](stream: any): void;
    [_onDrain](stream: any): void;
    [_streams]: any[];
    [_tail]: any;
    [_head]: any;
}
declare const _linkStreams: unique symbol;
declare const _setTail: unique symbol;
declare const _onError: unique symbol;
declare const _onData: unique symbol;
declare const _onEnd: unique symbol;
declare const _setHead: unique symbol;
declare const _onDrain: unique symbol;
declare const _streams: unique symbol;
declare const _tail: unique symbol;
declare const _head: unique symbol;
