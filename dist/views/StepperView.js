"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperView = void 0;
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const FormStepper_1 = require("../components/FormStepper");
const functions_1 = require("../functions/functions");
function StepperView(props) {
    const [activeStep, setActiveStep] = react_1.useState(0);
    const submitButtonRef = react_1.useRef();
    react_1.useEffect(() => {
        if (props.localStorageKey && localStorage.getItem(props.localStorageKey)) {
            const cipherText = localStorage.getItem(props.localStorageKey);
            if (cipherText) {
                const num = parseInt(functions_1.decrypt(cipherText, props.localStorageKey));
                if (!isNaN(num) && num !== 0)
                    setActiveStep(num);
            }
        }
    }, []);
    react_1.useEffect(() => {
        props.localStorageKey && localStorage.setItem(props.localStorageKey, functions_1.encrypt(activeStep.toString(), props.localStorageKey));
    }, [activeStep]);
    const handleBack = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleNext = async () => {
        submitButtonRef.current.click();
    };
    function ActiveForm() {
        const onNext = async () => {
            if (activeStep < props.formsList.length - 1) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
            else if (activeStep === props.formsList.length - 1) {
                props.handleSubmit && props.handleSubmit();
            }
        };
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
            return (react_1.default.createElement(core_1.Typography, null, "Form Not Found"));
        }
    }
    return (react_1.default.createElement(FormStepper_1.FormStepper, { steps: props.formsList.length, activeStep: activeStep, handleNext: handleNext, handleBack: handleBack, activeForm: react_1.default.createElement(ActiveForm, null), hideDotsStepper: props.hideDotsStepper }));
}
exports.StepperView = StepperView;
//# sourceMappingURL=StepperView.js.map