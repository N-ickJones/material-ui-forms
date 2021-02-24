export = SyncHook;
declare const SyncHook_base: typeof import("./Hook");
declare class SyncHook extends SyncHook_base {
    constructor(args: any);
}
