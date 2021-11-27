"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.onChange = exports.formIsValid = exports.marginToPixels = exports.getPaperWidth = exports.getPaperHeight = exports.getOrdinal = exports.decrypt = exports.encrypt = exports.uuidv4 = exports.isValidId = exports.dateConvertVerbose = exports.dateConvert = exports.sleep = exports.getRandomInt = void 0;
var crypto_js_1 = require("crypto-js");
var __1 = require("..");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;
function sleep(milliseconds) {
    return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
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
exports.isValidId = function (id) {
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
exports.getPaperHeight = function (paper) {
    return paper ? paper.dpi * paper.height / paper.ratio : __1.a4.dpi * __1.a4.height / __1.a4.ratio;
};
exports.getPaperWidth = function (paper) {
    return paper ? paper.dpi * paper.width / paper.ratio : __1.a4.dpi * __1.a4.width / __1.a4.ratio;
    ;
};
exports.marginToPixels = function (paper, margin) {
    return paper.dpi * (margin ? margin : 25) / paper.ratio;
};
exports.formIsValid = function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputs, i, input, parent_1, inputParent, componentParent;
    var _a;
    return __generator(this, function (_b) {
        inputs = document.getElementsByTagName('input');
        for (i = 0; i < inputs.length; i++) {
            input = inputs[i];
            if (input.hasAttribute('aria-invalid') && input.getAttribute('aria-invalid') === "true") {
                parent_1 = input.parentElement;
                if (parent_1)
                    parent_1.classList.add('Mui-focused');
                return [2 /*return*/, false];
            }
            if ((input.hasAttribute('required') && input.value === "")) {
                inputParent = input.parentElement;
                //Outer Div
                if (inputParent) {
                    inputParent.classList.add('Mui-focused', 'Mui-error');
                    componentParent = inputParent.parentElement;
                    if (componentParent) {
                        (_a = componentParent.firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('Mui-focused', 'Mui-error');
                    }
                }
                return [2 /*return*/, false];
            }
        }
        return [2 /*return*/, true];
    });
}); };
exports.onChange = function (setState) { return function (e, property, value) {
    setState(function (current) {
        var _a;
        return (__assign(__assign({}, current), (_a = {}, _a[property] = value, _a)));
    });
}; };
//# sourceMappingURL=functions.js.map