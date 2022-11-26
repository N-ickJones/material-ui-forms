"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateEffect = void 0;
var react_1 = require("react");
function useUpdateEffect(effect, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var isInitialMount = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            effect();
        }
    }, dependencies);
}
exports.useUpdateEffect = useUpdateEffect;
