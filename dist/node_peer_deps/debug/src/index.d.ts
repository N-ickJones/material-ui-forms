declare const _exports: {
    (namespace: string): Function;
    debug: {
        (namespace: string): Function;
        debug: any;
        default: any;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (name: string) => boolean;
        humanize: (val: string | number, options?: Object | undefined) => string | number;
        destroy: () => void;
        names: any[];
        skips: any[];
        formatters: {};
        selectColor: (namespace: string) => string | number;
    };
    default: {
        (namespace: string): Function;
        debug: any;
        default: any;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (name: string) => boolean;
        humanize: (val: string | number, options?: Object | undefined) => string | number;
        destroy: () => void;
        names: any[];
        skips: any[];
        formatters: {};
        selectColor: (namespace: string) => string | number;
    };
    coerce: (val: any) => any;
    disable: () => string;
    enable: (namespaces: string) => void;
    enabled: (name: string) => boolean;
    humanize: (val: string | number, options?: Object | undefined) => string | number;
    destroy: (() => void) | (() => void);
    names: any[];
    skips: any[];
    formatters: {};
    selectColor: (namespace: string) => string | number;
    /**
     * Detect Electron renderer / nwjs process, which is node, but we should
     * treat as a browser.
     */
    formatArgs: (args: any) => void;
    save: (namespaces: string) => void;
    load: () => string;
    useColors: () => any;
    storage: any;
    colors: string[];
    log: (...data: any[]) => void;
} | {
    (namespace: string): Function;
    debug: {
        (namespace: string): Function;
        debug: any;
        default: any;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (name: string) => boolean;
        humanize: (val: string | number, options?: Object | undefined) => string | number;
        destroy: () => void;
        names: any[];
        skips: any[];
        formatters: {};
        selectColor: (namespace: string) => string | number;
    };
    default: {
        (namespace: string): Function;
        debug: any;
        default: any;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (name: string) => boolean;
        humanize: (val: string | number, options?: Object | undefined) => string | number;
        destroy: () => void;
        names: any[];
        skips: any[];
        formatters: {};
        selectColor: (namespace: string) => string | number;
    };
    coerce: (val: any) => any;
    disable: () => string;
    enable: (namespaces: string) => void;
    enabled: (name: string) => boolean;
    humanize: (val: string | number, options?: Object | undefined) => string | number;
    destroy: any;
    names: any[];
    skips: any[];
    formatters: {};
    selectColor: (namespace: string) => string | number;
    init: (debug: any) => void;
    log: (...args: any[]) => any;
    formatArgs: (args: any) => void;
    save: (namespaces: string) => void;
    load: () => string;
    useColors: () => any;
    colors: number[];
    inspectOpts: {};
};
export = _exports;
