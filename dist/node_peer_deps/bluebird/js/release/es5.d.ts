declare const _exports: {
    freeze: {
        <T>(a: T[]): readonly T[];
        <T_1 extends Function>(f: T_1): T_1;
        <T_2>(o: T_2): Readonly<T_2>;
    };
    defineProperty: (o: any, p: string | number | symbol, attributes: PropertyDescriptor & ThisType<any>) => any;
    getDescriptor: (o: any, p: string | number | symbol) => PropertyDescriptor | undefined;
    keys: {
        (o: object): string[];
        (o: {}): string[];
    };
    names: (o: any) => string[];
    getPrototypeOf: (o: any) => any;
    isArray: (arg: any) => arg is any[];
    isES5: any;
    propertyIsWritable: (obj: any, prop: any) => boolean;
} | {
    isArray: (obj: any) => boolean;
    keys: (o: any) => string[];
    names: (o: any) => string[];
    defineProperty: (o: any, key: any, desc: any) => any;
    getDescriptor: (o: any, key: any) => {
        value: any;
    };
    freeze: (obj: any) => any;
    getPrototypeOf: (obj: any) => any;
    isES5: any;
    propertyIsWritable: () => boolean;
};
export = _exports;
