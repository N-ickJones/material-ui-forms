"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onChange = exports.formIsValid = exports.marginToPixels = exports.getPaperWidth = exports.getPaperHeight = exports.getOrdinal = exports.decrypt = exports.encrypt = exports.uuidv4 = exports.isValidId = exports.dateConvertVerbose = exports.dateConvert = exports.sleep = exports.getRandomInt = void 0;
const crypto_js_1 = require("crypto-js");
const paperOptions_1 = require("../options/paperOptions");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
exports.sleep = sleep;
function dateConvert(date) {
    if (!date)
        return undefined;
    return date.includes('T') ? date.split('T')[0] : date;
}
exports.dateConvert = dateConvert;
function dateConvertVerbose(date) {
    var rDate = new Date(date);
    return rDate.toString();
}
exports.dateConvertVerbose = dateConvertVerbose;
exports.isValidId = (id) => {
    return id < (Number.MAX_SAFE_INTEGER - 1000);
};
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.uuidv4 = uuidv4;
/**
 * Obfuscation use only
 * @param plainText
 * @param key
 */
function encrypt(plainText, key) {
    return crypto_js_1.AES.encrypt(plainText, key).toString();
}
exports.encrypt = encrypt;
/**
 * Obfuscation use only
 * @param cipherText
 * @param key
 */
function decrypt(cipherText, key) {
    return crypto_js_1.AES.decrypt(cipherText, key).toString(crypto_js_1.enc.Utf8);
}
exports.decrypt = decrypt;
function getOrdinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
exports.getOrdinal = getOrdinal;
exports.getPaperHeight = (paper) => {
    return paper ? paper.dpi * paper.height / paper.ratio : paperOptions_1.a4.dpi * paperOptions_1.a4.height / paperOptions_1.a4.ratio;
};
exports.getPaperWidth = (paper) => {
    return paper ? paper.dpi * paper.width / paper.ratio : paperOptions_1.a4.dpi * paperOptions_1.a4.width / paperOptions_1.a4.ratio;
    ;
};
exports.marginToPixels = (paper, margin) => {
    return paper.dpi * (margin ? margin : 25) / paper.ratio;
};
exports.formIsValid = async () => {
    var _a;
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        if (input.hasAttribute('aria-invalid') && input.getAttribute('aria-invalid') === "true") {
            const parent = input.parentElement;
            if (parent)
                parent.classList.add('Mui-focused');
            return false;
        }
        if ((input.hasAttribute('required') && input.value === "")) {
            const inputParent = input.parentElement;
            //Outer Div
            if (inputParent) {
                inputParent.classList.add('Mui-focused', 'Mui-error');
                //Outer Label
                const componentParent = inputParent.parentElement;
                if (componentParent) {
                    (_a = componentParent.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('Mui-focused', 'Mui-error');
                }
            }
            return false;
        }
    }
    return true;
};
exports.onChange = (setState) => (e, property, value) => {
    setState((current) => (Object.assign(Object.assign({}, current), { [property]: value })));
};
//# sourceMappingURL=functions.js.map