import { useEffect } from 'react';
import Router from 'next/router';
export var useWarnIfUnsavedChanges = function (unsavedChanges) {
    var message = 'You currently have unsaved changes. Are you sure you want to leave before saving?';
    useEffect(function () {
        var routeChangeStart = function (url) {
            if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
                Router.events.emit('routeChangeError');
                Router.replace(Router, Router.asPath);
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
        Router.events.on('routeChangeStart', routeChangeStart);
        return function () {
            window.removeEventListener('beforeunload', beforeUnload);
            Router.events.off('routeChangeStart', routeChangeStart);
        };
    }, [unsavedChanges]);
};
