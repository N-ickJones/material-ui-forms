"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMuiPrinting = void 0;
const material_ui_forms_1 = require("material-ui-forms");
const functions_1 = require("material-ui-forms/dist/functions/functions");
const react_1 = require("react");
const react_to_print_1 = require("react-to-print");
function useMuiPrinting(paper, margin) {
    const [printMode, setPrintMode] = react_1.useState(false);
    const pageBreaks = [];
    const printComponentRef = react_1.useRef();
    const inputRefs = react_1.useRef([]);
    const defaultMargin = { top: 25, bottom: 25, left: 25, right: 25 };
    const paperStyle = {
        width: functions_1.getPaperWidth(paper),
        minHeight: functions_1.getPaperHeight(paper),
        padding: `${(margin === null || margin === void 0 ? void 0 : margin.top) || 25}mm ${(margin === null || margin === void 0 ? void 0 : margin.right) || 25}mm ${(margin === null || margin === void 0 ? void 0 : margin.bottom) || 25}mm ${(margin === null || margin === void 0 ? void 0 : margin.left) || 25}mm`
    };
    const addPageBreaks = async (paper, margin) => {
        var _a;
        const props = {
            pageHeight: functions_1.getPaperHeight(paper),
            marginTop: functions_1.marginToPixels(paper, margin.top),
            marginBottom: functions_1.marginToPixels(paper, margin.bottom)
        };
        const containerElementReact = (_a = printComponentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!containerElementReact)
            return;
        const containerTop = containerElementReact.top;
        let currentPageBottom = props.pageHeight;
        let previousLocation = 0;
        for (let i = 0; i < inputRefs.current.length; i++) {
            const element = inputRefs.current[i];
            const elementTop = element === null || element === void 0 ? void 0 : element.getBoundingClientRect().bottom;
            let location = 0;
            if (elementTop) {
                location = Math.abs(elementTop - containerTop);
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
                        });
                        prevElement.style.marginBottom = `${offsetMargin}px`;
                    }
                }
                else {
                    console.log('Element does not fit on page. Cannot configure page break');
                }
                currentPageBottom += props.pageHeight;
            }
            previousLocation = location;
        }
    };
    const onBeforeGetContent = async () => {
        setPrintMode(true);
        //Find a better way to ensure order of operations...
        await material_ui_forms_1.sleep(3000);
        await addPageBreaks(paper || material_ui_forms_1.a4, margin || defaultMargin);
    };
    const onAfterPrint = async () => {
        pageBreaks.forEach((pageBreak) => {
            pageBreak.element.style.marginBottom = pageBreak.marginBottom;
        });
        pageBreaks.splice(0, pageBreaks.length);
        setPrintMode(false);
    };
    const displayPrintFunc = react_to_print_1.useReactToPrint({
        //bodyClass: "",
        content: () => printComponentRef.current || null,
        //copyStyles: false,
        //documentTitle: `title`,
        //fonts: [{ family: "", source: "" }],
        onAfterPrint: onAfterPrint,
        onBeforeGetContent: onBeforeGetContent,
    });
    const displayPrint = async () => {
        displayPrintFunc && displayPrintFunc();
    };
    const handlePrintRef = (index) => (el) => {
        inputRefs.current[index] = el;
    };
    return [paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef];
}
exports.useMuiPrinting = useMuiPrinting;
//# sourceMappingURL=useMuiPrinting.js.map