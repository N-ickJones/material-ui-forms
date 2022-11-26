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
import { Typography } from "@mui/material";
import React, { useState, useRef } from "react";
import { FormStepper } from "..";
export function StepperView(props) {
    var _this = this;
    var _a = useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var submitButtonRef = useRef();
    /* //Disabled until a future release that fixes multiple bugs
    useEffect(() => {
        if (props.localStorageKey && localStorage.getItem(props.localStorageKey)) {
            const cipherText = localStorage.getItem(props.localStorageKey);
            if (cipherText) {
                const num = parseInt(decrypt(cipherText, props.localStorageKey));
                if(!isNaN(num) && num !== 0)
                    setActiveStep(num);
            }
        }
    }, [])

    useEffect(() => {
        props.localStorageKey && localStorage.setItem(props.localStorageKey, encrypt(activeStep.toString(), props.localStorageKey));
    }, [activeStep]);
    */
    var handleBack = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
            return [2 /*return*/];
        });
    }); };
    var handleNext = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            submitButtonRef.current.click();
            return [2 /*return*/];
        });
    }); };
    function ActiveForm() {
        var _this = this;
        var onNext = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (activeStep < props.formsList.length - 1) {
                    setActiveStep(function (prevActiveStep) { return prevActiveStep + 1; });
                }
                else if (activeStep === props.formsList.length - 1) {
                    props.handleSubmit && props.handleSubmit();
                }
                return [2 /*return*/];
            });
        }); };
        if (props.formsList[activeStep]) {
            return (props.formsList[activeStep]({
                onNext: onNext,
                submitButtonRef: submitButtonRef,
                defaultLocked: props.defaultLocked !== undefined ? props.defaultLocked : false,
                hideLockButton: props.hideLockButton !== undefined ? props.hideLockButton : true,
                hidePrintButton: props.hidePrintButton !== undefined ? props.hidePrintButton : true,
                hideSaveProgressButton: props.hideSaveProgressButton !== undefined ? props.hideSaveProgressButton : true
            }));
        }
        else {
            return (React.createElement(Typography, null, "Form Not Found"));
        }
    }
    return (React.createElement(FormStepper, { steps: props.formsList.length, activeStep: activeStep, handleNext: handleNext, handleBack: handleBack, activeForm: React.createElement(ActiveForm, null), hideDotsStepper: props.hideDotsStepper, className: props.className, style: props.style, upperClassName: props.upperClassName, upperStyle: props.upperStyle, lowerClassName: props.lowerClassName, lowerStyle: props.lowerStyle }));
}
