"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPhoneNumber = exports.isZip = exports.isCity = exports.hasSpecialCharacter = exports.hasDigit = exports.isDigit = exports.hasUpperCase = exports.hasLowerCase = exports.isOnlyNumbers = exports.isSocialSecurityNumber = exports.isEmail = exports.isOnlyUpperCase = exports.isOnlyLowerCase = exports.isUserName = exports.isRequired = void 0;
exports.isRequired = {
    pattern: /^.+$/,
    message: "This field is required."
};
exports.isUserName = {
    pattern: /^[a-zA-Z0-9-._+]*$/,
    message: "This field allows lowercase, uppercase, numbers, and -._+ characters only."
};
exports.isOnlyLowerCase = {
    pattern: /^[a-z]*$/,
    message: "This field allows lowercase only."
};
exports.isOnlyUpperCase = {
    pattern: /^[A-Z]*$/,
    message: "This field allows uppercase only."
};
exports.isEmail = {
    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
    message: "Invalid email address"
};
exports.isSocialSecurityNumber = {
    pattern: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
    message: "Invalid Social Security Number. e.g. 111-22-3333"
};
exports.isOnlyNumbers = {
    pattern: /^[0-9]*$/,
    message: "This field allows numbers only."
};
exports.hasLowerCase = {
    pattern: /[a-z]/,
    message: "This field requires a lowercase."
};
exports.hasUpperCase = {
    pattern: /[A-Z]/,
    message: "This field requires an uppercase"
};
exports.isDigit = {
    pattern: /^\d*$/,
    message: "This field requires a digit."
};
exports.hasDigit = {
    pattern: /\d/,
    message: "This field requires a digit."
};
exports.hasSpecialCharacter = {
    pattern: /\W/,
    message: "This field requires a special character."
};
exports.isCity = {
    pattern: /^[a-zA-Z\s]{0,30}$/,
    message: "Invalid City (Text only, 30 characters max)"
};
exports.isZip = {
    pattern: /^\d{5}(-\d{4})?$/,
    message: "Invalid Zipcode (e.g. 12345 or 12345-6789)"
};
exports.isPhoneNumber = {
    pattern: /^((\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}|\s{0})$/,
    message: "Invalid Phone Number (e.g. (123) 456-7890, 1234567890, 123-456-7890)"
};
