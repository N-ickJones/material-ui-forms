import React from 'react';
import { PaperMargin, PaperSize } from '../types/types';
export declare function useMuiPrinting(paper?: PaperSize, margin?: PaperMargin): [React.CSSProperties, React.MutableRefObject<HTMLDivElement | null>, boolean, () => Promise<void>, (index: number) => (el: HTMLDivElement | null) => void];
