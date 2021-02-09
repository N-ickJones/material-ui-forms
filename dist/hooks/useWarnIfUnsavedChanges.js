"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWarnIfUnsavedChanges = void 0;
const react_1 = require("react");
exports.useWarnIfUnsavedChanges = (unsavedChanges) => {
    const message = 'You currently have unsaved changes. Are you sure you want to leave before saving?';
    react_1.useEffect(() => {
        /*
        const routeChangeStart = (url: string) => {
          if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
            Router.events.emit('routeChangeError');
            Router.replace(Router, Router.asPath);
            //throw 'Abort route change. Please ignore this error.';
          }
        };
        */
        const beforeUnload = (e) => {
            if (unsavedChanges) {
                e.preventDefault();
                e.returnValue = message;
                return message;
            }
            return "";
        };
        window.addEventListener('beforeunload', beforeUnload);
        //Router.events.on('routeChangeStart', routeChangeStart);
        return () => {
            window.removeEventListener('beforeunload', beforeUnload);
            //Router.events.off('routeChangeStart', routeChangeStart);
        };
    }, [unsavedChanges]);
};
//# sourceMappingURL=useWarnIfUnsavedChanges.js.map