"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWarnIfUnsavedChanges = void 0;
const react_1 = require("react");
const router_1 = __importDefault(require("next/router"));
//TODO Need to decouple the router to allow disconntect next and allow multiple routers
exports.useWarnIfUnsavedChanges = (unsavedChanges) => {
    const message = 'You currently have unsaved changes. Are you sure you want to leave before saving?';
    react_1.useEffect(() => {
        const routeChangeStart = (url) => {
            if (router_1.default.asPath !== url && unsavedChanges && !confirm(message)) {
                router_1.default.events.emit('routeChangeError');
                router_1.default.replace(router_1.default, router_1.default.asPath);
                //throw 'Abort route change. Please ignore this error.';
            }
        };
        const beforeUnload = (e) => {
            if (unsavedChanges) {
                e.preventDefault();
                e.returnValue = message;
                return message;
            }
            return "";
        };
        window.addEventListener('beforeunload', beforeUnload);
        router_1.default.events.on('routeChangeStart', routeChangeStart);
        return () => {
            window.removeEventListener('beforeunload', beforeUnload);
            router_1.default.events.off('routeChangeStart', routeChangeStart);
        };
    }, [unsavedChanges]);
};
//# sourceMappingURL=useWarnIfUnsavedChanges.js.map