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
exports.AutoField = void 0;
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const material_2 = require("@mui/material");
const useAutocomplete_1 = require("@mui/material/useAutocomplete");
function AutoField(props) {
    const [choiceValue, setChoiceValue] = react_1.useState(props.options ? props.options.find(item => item.value === props.value) : { label: "", value: "" });
    const onChange = (e, changeValue, reason) => {
        if (props.locked)
            return;
        switch (reason) {
            case "createOption":
                console.log('Autocomplete create-option not implemented');
                break;
            case "selectOption":
                props.onChange(e, props.name, (changeValue === null || changeValue === void 0 ? void 0 : changeValue.value) || "");
                changeValue && setChoiceValue(changeValue);
                break;
            case "removeOption":
                console.log('Autocomplete remove-option not implemented');
                break;
            case "clear":
                props.onChange(e, props.name, "");
                setChoiceValue({ label: "", value: "" });
                break;
            case "blur":
                console.log('Autocomplete blur not implemented');
                break;
        }
    };
    const handleOptionSelected = (option, value) => {
        if (value.value === "")
            return true;
        else
            return value.value === option.value;
    };
    return (react_1.default.createElement(material_2.Autocomplete, { className: props.className, style: props.style, options: props.options ? props.options : [], getOptionLabel: (option) => option.label, fullWidth: true, isOptionEqualToValue: handleOptionSelected, onChange: onChange, value: choiceValue || { label: "", value: "" }, getOptionDisabled: () => props.locked || false, renderInput: (params) => (react_1.default.createElement(material_1.TextField, Object.assign({}, params, { label: props.label, variant: props.variant || "outlined", inputProps: Object.assign(Object.assign({}, params.inputProps), { autoComplete: 'new-password' }), required: props.required }))), filterOptions: useAutocomplete_1.createFilterOptions({
            ignoreCase: true
        }) }));
}
exports.AutoField = AutoField;
//# sourceMappingURL=AutoField.js.map