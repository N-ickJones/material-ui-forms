export = DllModuleFactory;
declare const DllModuleFactory_base: typeof import("../../tapable/lib/Tapable");
declare class DllModuleFactory extends DllModuleFactory_base {
    hooks: {};
    create(data: any, callback: any): void;
}
