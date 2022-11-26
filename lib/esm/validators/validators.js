export var isRequired = {
    pattern: /^.+$/,
    message: "This field is required."
};
export var isUserName = {
    pattern: /^[a-zA-Z0-9-._+]*$/,
    message: "This field allows lowercase, uppercase, numbers, and -._+ characters only."
};
export var isOnlyLowerCase = {
    pattern: /^[a-z]*$/,
    message: "This field allows lowercase only."
};
export var isOnlyUpperCase = {
    pattern: /^[A-Z]*$/,
    message: "This field allows uppercase only."
};
export var isEmail = {
    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
    message: "Invalid email address"
};
export var isSocialSecurityNumber = {
    pattern: /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,
    message: "Invalid Social Security Number. e.g. 111-22-3333"
};
export var isOnlyNumbers = {
    pattern: /^[0-9]*$/,
    message: "This field allows numbers only."
};
export var hasLowerCase = {
    pattern: /[a-z]/,
    message: "This field requires a lowercase."
};
export var hasUpperCase = {
    pattern: /[A-Z]/,
    message: "This field requires an uppercase"
};
export var isDigit = {
    pattern: /^\d*$/,
    message: "This field requires a digit."
};
export var hasDigit = {
    pattern: /\d/,
    message: "This field requires a digit."
};
export var hasSpecialCharacter = {
    pattern: /\W/,
    message: "This field requires a special character."
};
export var isCity = {
    pattern: /^[a-zA-Z\s]{0,30}$/,
    message: "Invalid City (Text only, 30 characters max)"
};
export var isZip = {
    pattern: /^\d{5}(-\d{4})?$/,
    message: "Invalid Zipcode (e.g. 12345 or 12345-6789)"
};
export var isPhoneNumber = {
    pattern: /^((\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}|\s{0})$/,
    message: "Invalid Phone Number (e.g. (123) 456-7890, 1234567890, 123-456-7890)"
};
