import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { getPaperHeight, getPaperWidth, marginToPixels, PageBreakDiv, sleep } from '../functions/functions';
import { a4 } from '../options/paperOptions';
import { PaperMargin, PaperSize } from '../types/types';


export function useMuiPrinting(paper?: PaperSize, margin?: PaperMargin): [
    React.CSSProperties,
    React.MutableRefObject<HTMLDivElement | null>,
    boolean,
    () => Promise<void>,
    (index: number) => (el: HTMLDivElement | null) => void
] {

    const [printMode, setPrintMode] = useState(false);
    const pageBreaks = [] as PageBreakDiv[];
    const printComponentRef = useRef() as React.MutableRefObject<HTMLDivElement | null>;
    const inputRefs = useRef([] as (HTMLDivElement | null)[]);
    const defaultMargin = { top: 25, bottom: 25, left: 25, right: 25 } as PaperMargin

    const paperStyle = {
        width: getPaperWidth(paper),
        minHeight: getPaperHeight(paper),
        padding: `${margin?.top || 25}mm ${margin?.right || 25}mm ${margin?.bottom || 25}mm ${margin?.left || 25}mm`
    } as React.CSSProperties;

    const addPageBreaks = async (paper: PaperSize, margin: PaperMargin) => {
        const props = {
            pageHeight: getPaperHeight(paper),
            marginTop: marginToPixels(paper, margin.top),
            marginBottom: marginToPixels(paper, margin.bottom)
        }

        const containerElementReact = printComponentRef.current?.getBoundingClientRect();
        if (!containerElementReact) return;

        const containerTop = containerElementReact.top;
        let currentPageBottom = props.pageHeight;
        let previousLocation = 0;

        for (let i = 0; i < inputRefs.current.length; i++) {
            const element = inputRefs.current[i];
            const elementBottom = element?.getBoundingClientRect().bottom;

            let location = 0;
            if (elementBottom) {
                location = Math.abs(elementBottom - containerTop);
            }

            if (location >= currentPageBottom - props.marginBottom) {
                //Calculates the minimum between bottom margin and distance to bottom of the page then adds the margin top
                const offsetMargin = Math.max(props.marginBottom, Math.abs(currentPageBottom - previousLocation)) + props.marginTop;
                if (i > 0) {
                    const prevElement = inputRefs.current[i - 1];
                    if (prevElement) {
                        pageBreaks.push({
                            element: prevElement,
                            marginBottom: prevElement.style.marginBottom
                        })
                        prevElement.style.marginBottom = `${offsetMargin}px`;
                    }
                }
                else {
                    console.log('Element does not fit on page. Cannot configure page break')
                }
                currentPageBottom += props.pageHeight;
            }

            previousLocation = location;
        }
    }

    const onBeforeGetContent = async () => {
        setPrintMode(true);
        //Find a better way to ensure order of operations...
        await sleep(3000);
        await addPageBreaks(paper || a4, margin || defaultMargin);
    }

    const onAfterPrint = async () => {
        pageBreaks.forEach((pageBreak) => {
            pageBreak.element.style.marginBottom = pageBreak.marginBottom;
        })
        pageBreaks.splice(0, pageBreaks.length);
        setPrintMode(false);
    }

    const displayPrintFunc = useReactToPrint({
        //bodyClass: "",
        content: () => printComponentRef.current || null,
        //copyStyles: false,
        //documentTitle: `title`,
        //fonts: [{ family: "", source: "" }],
        onAfterPrint: onAfterPrint,
        onBeforeGetContent: onBeforeGetContent,
        //onBeforePrint: () => console.log('onBeforePrint'),
        //onPrintError: () => console.log('onPrintError?'),
        //pageStyle: pageStyle,
        //print: () => console.log('print'),
        //removeAfterPrint: false,
        //suppressErrors: false,
        //trigger: () => console.log('trigger')

    });
    const displayPrint = async () => {
        displayPrintFunc && displayPrintFunc();
    }

    const handlePrintRef = (index: number) => (el: HTMLDivElement | null) => {
        inputRefs.current[index] = el;
    }

    return [paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef]
}
