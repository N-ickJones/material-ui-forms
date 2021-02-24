import { useRef, useEffect } from "react";

export function useUpdateEffect(effect: Function, dependencies: Array<any> = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencies);
}