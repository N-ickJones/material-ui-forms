export = Tapable;
declare function Tapable(): void;
declare class Tapable {
    _pluginCompat: import("./SyncBailHook");
    plugin: any;
    apply: any;
}
declare namespace Tapable {
    export function addCompatLayer(instance: any): void;
}
