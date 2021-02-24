export namespace Children {
    export function map(a: any, b: any, c: any): any;
    export function forEach(a: any, b: any, c: any): any;
    export function count(a: any): boolean | 1 | 0;
    export function toArray(a: any): any[];
    export function only(a: any): any;
}
export var Component: typeof F;
export var Fragment: number | symbol;
export var Profiler: number | symbol;
export var PureComponent: typeof H;
export var StrictMode: number | symbol;
export var Suspense: number | symbol;
export namespace __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED {
    export { Y as ReactCurrentDispatcher };
    export namespace ReactCurrentBatchConfig {
        export const suspense: null;
    }
    export { J as ReactCurrentOwner };
    export namespace IsSomeRendererActing {
        export const current: boolean;
    }
    export { l as assign };
}
export function cloneElement(a: any, b: any, c: any, ...args: any[]): {
    $$typeof: number | symbol;
    type: any;
    key: any;
    ref: any;
    props: any;
    _owner: any;
};
export function createContext(a: any, b: any): any;
export function createElement(a: any, b: any, c: any, ...args: any[]): {
    $$typeof: number | symbol;
    type: any;
    key: string | null;
    ref: any;
    props: {
        children: any;
    };
    _owner: null;
};
export function createFactory(a: any): (b?: any, c?: any, ...args: any[]) => {
    $$typeof: number | symbol;
    type: any;
    key: string | null;
    ref: any;
    props: {
        children: any;
    };
    _owner: null;
};
export function createRef(): {
    current: null;
};
export function forwardRef(a: any): {
    $$typeof: number | symbol;
    render: any;
};
export function isValidElement(a: any): boolean;
export function lazy(a: any): {
    $$typeof: number | symbol;
    _ctor: any;
    _status: number;
    _result: null;
};
export function memo(a: any, b: any): {
    $$typeof: number | symbol;
    type: any;
    compare: any;
};
export function useCallback(a: any, b: any): any;
export function useContext(a: any, b: any): any;
export function useDebugValue(): void;
export function useEffect(a: any, b: any): any;
export function useImperativeHandle(a: any, b: any, c: any): any;
export function useLayoutEffect(a: any, b: any): any;
export function useMemo(a: any, b: any): any;
export function useReducer(a: any, b: any, c: any): any;
export function useRef(a: any): any;
export function useState(a: any): any;
export var version: string;
declare function F(a: any, b: any, c: any): void;
declare class F {
    constructor(a: any, b: any, c: any);
    props: any;
    context: any;
    refs: {};
    updater: any;
    isReactComponent: {};
    setState(a: any, b: any): void;
    forceUpdate(a: any): void;
}
declare function H(a: any, b: any, c: any): void;
declare class H {
    constructor(a: any, b: any, c: any);
    props: any;
    context: any;
    refs: {};
    updater: any;
}
declare namespace Y {
    const current_1: null;
    export { current_1 as current };
}
declare namespace J {
    const current_2: null;
    export { current_2 as current };
}
declare var l: (target: any, source: any, ...args: any[]) => any;
export {};
