var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { sleep, a4 } from "..";
import { getPaperWidth, getPaperHeight, marginToPixels } from "../functions/functions";
export function useMuiPrinting(paper, margin) {
    var _this = this;
    var _a = useState(false), printMode = _a[0], setPrintMode = _a[1];
    var pageBreaks = [];
    var printComponentRef = useRef();
    var inputRefs = useRef([]);
    var defaultMargin = { top: 25, bottom: 25, left: 25, right: 25 };
    var paperStyle = {
        width: getPaperWidth(paper),
        minHeight: getPaperHeight(paper),
        padding: "".concat((margin === null || margin === void 0 ? void 0 : margin.top) || 25, "mm ").concat((margin === null || margin === void 0 ? void 0 : margin.right) || 25, "mm ").concat((margin === null || margin === void 0 ? void 0 : margin.bottom) || 25, "mm ").concat((margin === null || margin === void 0 ? void 0 : margin.left) || 25, "mm")
    };
    var addPageBreaks = function (paper, margin) { return __awaiter(_this, void 0, void 0, function () {
        var props, containerElementReact, containerTop, currentPageBottom, previousLocation, i, element, elementBottom, location_1, offsetMargin, prevElement;
        var _a;
        return __generator(this, function (_b) {
            props = {
                pageHeight: getPaperHeight(paper),
                marginTop: marginToPixels(paper, margin.top),
                marginBottom: marginToPixels(paper, margin.bottom)
            };
            containerElementReact = (_a = printComponentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (!containerElementReact)
                return [2 /*return*/];
            containerTop = containerElementReact.top;
            currentPageBottom = props.pageHeight;
            previousLocation = 0;
            for (i = 0; i < inputRefs.current.length; i++) {
                element = inputRefs.current[i];
                elementBottom = element === null || element === void 0 ? void 0 : element.getBoundingClientRect().bottom;
                location_1 = 0;
                if (elementBottom) {
                    location_1 = Math.abs(elementBottom - containerTop);
                }
                if (location_1 >= currentPageBottom - props.marginBottom) {
                    offsetMargin = Math.max(props.marginBottom, Math.abs(currentPageBottom - previousLocation)) + props.marginTop;
                    if (i > 0) {
                        prevElement = inputRefs.current[i - 1];
                        if (prevElement) {
                            pageBreaks.push({
                                element: prevElement,
                                marginBottom: prevElement.style.marginBottom
                            });
                            prevElement.style.marginBottom = "".concat(offsetMargin, "px");
                        }
                    }
                    else {
                        console.log('Element does not fit on page. Cannot configure page break');
                    }
                    currentPageBottom += props.pageHeight;
                }
                previousLocation = location_1;
            }
            return [2 /*return*/];
        });
    }); };
    var onBeforeGetContent = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPrintMode(true);
                    //Find a better way to ensure order of operations...
                    return [4 /*yield*/, sleep(3000)];
                case 1:
                    //Find a better way to ensure order of operations...
                    _a.sent();
                    return [4 /*yield*/, addPageBreaks(paper || a4, margin || defaultMargin)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var onAfterPrint = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            pageBreaks.forEach(function (pageBreak) {
                pageBreak.element.style.marginBottom = pageBreak.marginBottom;
            });
            pageBreaks.splice(0, pageBreaks.length);
            setPrintMode(false);
            return [2 /*return*/];
        });
    }); };
    var displayPrintFunc = useReactToPrint({
        //bodyClass: "",
        content: function () { return printComponentRef.current || null; },
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
    var displayPrint = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            displayPrintFunc && displayPrintFunc();
            return [2 /*return*/];
        });
    }); };
    var handlePrintRef = function (index) { return function (el) {
        inputRefs.current[index] = el;
    }; };
    return [paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef];
}
