"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWarnIfUnsavedChanges = void 0;
var react_1 = require("react");
var router_1 = __importDefault(require("next/router"));
//TODO Need to decouple the router to allow disconntect next and allow multiple routers
var useWarnIfUnsavedChanges = function (unsavedChanges) {
    var message = 'You currently have unsaved changes. Are you sure you want to leave before saving?';
    (0, react_1.useEffect)(function () {
        var routeChangeStart = function (url) {
            if (router_1.default.asPath !== url && unsavedChanges && !confirm(message)) {
                router_1.default.events.emit('routeChangeError');
                router_1.default.replace(router_1.default, router_1.default.asPath);
                //throw 'Abort route change. Please ignore this error.';
            }
        };
        var beforeUnload = function (e) {
            if (unsavedChanges) {
                e.preventDefault();
                e.returnValue = message;
                return message;
            }
            return "";
        };
        window.addEventListener('beforeunload', beforeUnload);
        router_1.default.events.on('routeChangeStart', routeChangeStart);
        return function () {
            window.removeEventListener('beforeunload', beforeUnload);
            router_1.default.events.off('routeChangeStart', routeChangeStart);
        };
    }, [unsavedChanges]);
};
exports.useWarnIfUnsavedChanges = useWarnIfUnsavedChanges;
