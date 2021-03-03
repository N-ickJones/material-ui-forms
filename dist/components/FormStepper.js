"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormStepper = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
function FormStepper(props) {
    const theme = core_1.useTheme();
    const handleNext = async () => {
        props.handleNext();
    };
    const handleBack = async () => {
        props.handleBack();
    };
    return (react_1.default.createElement(core_1.Grid, { className: props.className, style: props.style },
        react_1.default.createElement(core_1.MobileStepper, { className: props.upperClassName, style: props.upperStyle, variant: "progress", steps: props.steps, position: "static", activeStep: props.activeStep, nextButton: react_1.default.createElement(core_1.Button, { size: "small", onClick: handleNext, disabled: props.activeStep === props.steps },
                props.activeStep === props.steps - 1 ? "Submit" : "Next",
                theme.direction === "rtl" ? (react_1.default.createElement(icons_1.KeyboardArrowLeft, null)) : (react_1.default.createElement(icons_1.KeyboardArrowRight, null))), backButton: react_1.default.createElement(core_1.Button, { size: "small", onClick: handleBack, disabled: props.activeStep === 0 },
                theme.direction === "rtl" ? (react_1.default.createElement(icons_1.KeyboardArrowRight, null)) : (react_1.default.createElement(icons_1.KeyboardArrowLeft, null)),
                "Back") }),
        props.activeForm,
        !props.hideDotsStepper &&
            react_1.default.createElement(core_1.MobileStepper, { className: props.lowerClassName, style: props.lowerStyle, variant: "dots", steps: props.steps, position: "static", activeStep: props.activeStep, nextButton: react_1.default.createElement(core_1.Button, { size: "small", onClick: handleNext, disabled: props.activeStep === props.steps },
                    props.activeStep === props.steps - 1 ? "Submit" : "Next",
                    theme.direction === "rtl" ? (react_1.default.createElement(icons_1.KeyboardArrowLeft, null)) : (react_1.default.createElement(icons_1.KeyboardArrowRight, null))), backButton: react_1.default.createElement(core_1.Button, { size: "small", onClick: handleBack, disabled: props.activeStep === 0 },
                    theme.direction === "rtl" ? (react_1.default.createElement(icons_1.KeyboardArrowRight, null)) : (react_1.default.createElement(icons_1.KeyboardArrowLeft, null)),
                    "Back") })));
}
exports.FormStepper = FormStepper;
//# sourceMappingURL=FormStepper.js.map