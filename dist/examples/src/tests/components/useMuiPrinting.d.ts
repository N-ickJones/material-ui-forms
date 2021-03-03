import { PaperMargin, PaperSize } from 'material-ui-forms/dist/types/types';
import React from 'react';
export declare function useMuiPrinting(paper?: PaperSize, margin?: PaperMargin): [React.CSSProperties, React.MutableRefObject<HTMLDivElement | null>, boolean, () => Promise<void>, (index: number) => (el: HTMLDivElement | null) => void];
