export = ResolverFactory;
declare const ResolverFactory_base: typeof import("../../tapable/lib/Tapable");
declare class ResolverFactory extends ResolverFactory_base {
    hooks: {
        resolveOptions: import("../../tapable/lib/HookMap");
        resolver: import("../../tapable/lib/HookMap");
    };
    cache2: Map<any, any>;
    get(type: any, resolveOptions: any): any;
    _create(type: any, resolveOptions: any): any;
}
declare namespace ResolverFactory {
    export { Resolver };
}
type Resolver = any;
