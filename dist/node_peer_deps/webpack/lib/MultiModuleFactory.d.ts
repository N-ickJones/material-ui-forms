export = MultiModuleFactory;
declare const MultiModuleFactory_base: typeof import("../../tapable/lib/Tapable");
declare class MultiModuleFactory extends MultiModuleFactory_base {
    hooks: {};
    create(data: any, callback: any): void;
}
