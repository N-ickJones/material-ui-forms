"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateEffect = void 0;
const react_1 = require("react");
function useUpdateEffect(effect, dependencies = []) {
    const isInitialMount = react_1.useRef(true);
    react_1.useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            effect();
        }
    }, dependencies);
}
exports.useUpdateEffect = useUpdateEffect;
//# sourceMappingURL=useUpdateEffect.js.map