"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormStepper = void 0;
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
function FormStepper(props) {
    var _this = this;
    var theme = (0, material_1.useTheme)();
    var handleNext = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            props.handleNext();
            return [2 /*return*/];
        });
    }); };
    var handleBack = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            props.handleBack();
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement(material_1.Grid, { className: props.className, style: props.style },
        react_1.default.createElement(material_1.MobileStepper, { className: props.upperClassName, style: props.upperStyle, variant: "progress", steps: props.steps, position: "static", activeStep: props.activeStep, nextButton: react_1.default.createElement(material_1.Button, { size: "small", onClick: handleNext, disabled: props.activeStep === props.steps },
                props.activeStep === props.steps - 1 ? "Submit" : "Next",
                theme.direction === "rtl" ? (react_1.default.createElement(icons_material_1.KeyboardArrowLeft, null)) : (react_1.default.createElement(icons_material_1.KeyboardArrowRight, null))), backButton: react_1.default.createElement(material_1.Button, { size: "small", onClick: handleBack, disabled: props.activeStep === 0 },
                theme.direction === "rtl" ? (react_1.default.createElement(icons_material_1.KeyboardArrowRight, null)) : (react_1.default.createElement(icons_material_1.KeyboardArrowLeft, null)),
                "Back") }),
        props.activeForm,
        !props.hideDotsStepper &&
            react_1.default.createElement(material_1.MobileStepper, { className: props.lowerClassName, style: props.lowerStyle, variant: "dots", steps: props.steps, position: "static", activeStep: props.activeStep, nextButton: react_1.default.createElement(material_1.Button, { size: "small", onClick: handleNext, disabled: props.activeStep === props.steps },
                    props.activeStep === props.steps - 1 ? "Submit" : "Next",
                    theme.direction === "rtl" ? (react_1.default.createElement(icons_material_1.KeyboardArrowLeft, null)) : (react_1.default.createElement(icons_material_1.KeyboardArrowRight, null))), backButton: react_1.default.createElement(material_1.Button, { size: "small", onClick: handleBack, disabled: props.activeStep === 0 },
                    theme.direction === "rtl" ? (react_1.default.createElement(icons_material_1.KeyboardArrowRight, null)) : (react_1.default.createElement(icons_material_1.KeyboardArrowLeft, null)),
                    "Back") })));
}
exports.FormStepper = FormStepper;
