/// <reference types="react" />
import { PaperSize, PaperMargin } from "..";
export declare function useMuiPrinting(paper?: PaperSize, margin?: PaperMargin): [React.CSSProperties, React.MutableRefObject<HTMLDivElement | null>, boolean, () => Promise<void>, (index: number) => (el: HTMLDivElement | null) => void];
