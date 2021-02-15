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
exports.FormStepper = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
function FormStepper(props) {
    //const classes = useStyles();
    //const theme = useTheme();
    const theme = { direction: "rtl" };
    const [submitted, setSubmitted] = react_1.useState(false);
    const handleNext = async () => {
        if (submitted)
            return;
        if (props.activeStep === props.steps - 1) {
            setSubmitted(true);
            props.handleSubmit();
        }
        else {
            props.handleNext();
        }
    };
    const handleBack = async () => {
        if (submitted)
            return;
        props.handleBack();
    };
    //Add Confirmation Alert on submit
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.MobileStepper, { variant: "dots", steps: props.steps, position: "static", activeStep: props.activeStep, 
            //className={classes.root}
            nextButton: react_1.default.createElement("div", null), backButton: react_1.default.createElement("div", null) }),
        props.activeForm,
        react_1.default.createElement(core_1.MobileStepper, { variant: "progress", steps: props.steps, position: "static", activeStep: props.activeStep, 
            ///className={classes.root}
            nextButton: react_1.default.createElement(core_1.Button, { size: "small", onClick: handleNext, disabled: props.activeStep === props.steps || submitted },
                props.activeStep === props.steps - 1 ? "Submit" : "Next",
                theme.direction === "rtl" ? (react_1.default.createElement(icons_1.KeyboardArrowLeft, null)) : (react_1.default.createElement(icons_1.KeyboardArrowRight, null))), backButton: react_1.default.createElement(core_1.Button, { size: "small", onClick: handleBack, disabled: props.activeStep === 0 || submitted },
                theme.direction === "rtl" ? (react_1.default.createElement(icons_1.KeyboardArrowRight, null)) : (react_1.default.createElement(icons_1.KeyboardArrowLeft, null)),
                "Back") })));
}
exports.FormStepper = FormStepper;
//# sourceMappingURL=FormStepper.js.map