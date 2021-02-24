import { useEffect } from 'react';
import Router from 'next/router';

//TODO Need to decouple the router to allow disconntect next and allow multiple routers
export const useWarnIfUnsavedChanges = (unsavedChanges: boolean) => {
  const message = 'You currently have unsaved changes. Are you sure you want to leave before saving?';

  useEffect(() => {
    const routeChangeStart = (url: string) => {
      if (Router.asPath !== url && unsavedChanges && !confirm(message)) {
        Router.events.emit('routeChangeError');
        Router.replace(Router, Router.asPath);
        //throw 'Abort route change. Please ignore this error.';
      }
    };

    const beforeUnload = (e: any) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = message;
        return message;
      }
      return "";
    };

    window.addEventListener('beforeunload', beforeUnload);
    Router.events.on('routeChangeStart', routeChangeStart);

    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
      Router.events.off('routeChangeStart', routeChangeStart);
    };
  }, [unsavedChanges]);
};