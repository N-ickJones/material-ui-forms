"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = exports.dateConvertVerbose = exports.dateConvert = exports.sleep = exports.getRandomInt = void 0;
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
//# sourceMappingURL=functions.js.map