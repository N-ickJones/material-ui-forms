"use strict";
var decodeUriComponent = require("decode-uri-component");
function customDecodeUriComponent(string) {
    // `decodeUriComponent` turns `+` into ` `, but that's not wanted.
    return decodeUriComponent(string.replace(/\+/g, "%2B"));
}
module.exports = customDecodeUriComponent;
//# sourceMappingURL=decode-uri-component.js.map