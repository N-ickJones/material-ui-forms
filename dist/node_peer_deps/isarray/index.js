"use strict";
var toString = {}.toString;
module.exports = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
};
//# sourceMappingURL=index.js.map