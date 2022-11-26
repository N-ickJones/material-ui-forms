import { useRef, useEffect } from "react";
export function useUpdateEffect(effect, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var isInitialMount = useRef(true);
    useEffect(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            effect();
        }
    }, dependencies);
}
