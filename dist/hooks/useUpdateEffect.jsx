import { useRef, useEffect } from "react";
export function useUpdateEffect(effect, dependencies = []) {
    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            effect();
        }
    }, dependencies);
}
