module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/simple-form.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/SimpleForm.tsx":
/*!***************************************!*\
  !*** ./src/components/SimpleForm.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-forms */ "material-ui-forms");
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\src\\components\\SimpleForm.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ContactForm() {
  const snackbar = Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["SnackBarComponent"])();
  const {
    0: sentMessage,
    1: setSentMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });

  const onClick = async () => {
    if (sentMessage) return;

    if (!(await Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["formIsValid"])())) {
      snackbar.setAlert(_objectSpread(_objectSpread({}, snackbar.error), {}, {
        message: "A validation error was detected in the form"
      }));
      return;
    } //Response Handling


    if (true) {
      setSentMessage(true);
      snackbar.setAlert(_objectSpread(_objectSpread({}, snackbar.success), {}, {
        message: "The message has been sent to Nicholas Jones."
      }));
    } else {}
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    style: {
      width: "100%",
      padding: "1rem"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(snackbar.component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "h6",
          align: "center",
          children: "Write a message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          label: "Firstname",
          name: "firstName",
          value: form.firstName,
          onChange: Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["onChange"])(setForm),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          label: "Lastname",
          name: "lastName",
          value: form.lastName,
          onChange: Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["onChange"])(setForm),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          label: "Email",
          name: "email",
          value: form.email,
          onChange: Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["onChange"])(setForm),
          required: true,
          validators: [material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["isEmail"]]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          label: "Subject",
          name: "subject",
          value: form.subject,
          onChange: Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["onChange"])(setForm),
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          label: "Message",
          name: "message",
          value: form.message,
          onChange: Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["onChange"])(setForm),
          multiline: true,
          required: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        item: true,
        xs: 12,
        justify: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: onClick,
          children: "Send Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/pages/simple-form.tsx":
/*!***********************************!*\
  !*** ./src/pages/simple-form.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleFormPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SimpleForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SimpleForm */ "./src/components/SimpleForm.tsx");

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\src\\pages\\simple-form.tsx";



function SimpleFormPage() {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    style: {
      marginTop: theme.spacing(5)
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      justify: "center",
      alignItems: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          maxWidth: 400
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SimpleForm__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "material-ui-forms":
/*!************************************!*\
  !*** external "material-ui-forms" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui-forms");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2ltcGxlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3NpbXBsZS1mb3JtLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hdGVyaWFsLXVpLWZvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInNuYWNrYmFyIiwiU25hY2tCYXJDb21wb25lbnQiLCJzZW50TWVzc2FnZSIsInNldFNlbnRNZXNzYWdlIiwidXNlU3RhdGUiLCJmb3JtIiwic2V0Rm9ybSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsIm9uQ2xpY2siLCJmb3JtSXNWYWxpZCIsInNldEFsZXJ0IiwiZXJyb3IiLCJzdWNjZXNzIiwid2lkdGgiLCJwYWRkaW5nIiwib25DaGFuZ2UiLCJpc0VtYWlsIiwiU2ltcGxlRm9ybVBhZ2UiLCJ0aGVtZSIsInVzZVRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtR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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvc2ltcGxlLWZvcm0udHN4XCIpO1xuIiwiaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBQYXBlciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBDdXN0b21UZXh0RmllbGQsIGZvcm1Jc1ZhbGlkLCBpc0VtYWlsLCBvbkNoYW5nZSwgU25hY2tCYXJDb21wb25lbnQgfSBmcm9tIFwibWF0ZXJpYWwtdWktZm9ybXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBzbmFja2JhciA9IFNuYWNrQmFyQ29tcG9uZW50KCk7XHJcbiAgY29uc3QgW3NlbnRNZXNzYWdlLCBzZXRTZW50TWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHN1YmplY3Q6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiXHJcbiAgfSk7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc2VudE1lc3NhZ2UpIHJldHVybjtcclxuICAgIGlmICghYXdhaXQgZm9ybUlzVmFsaWQoKSkge1xyXG4gICAgICBzbmFja2Jhci5zZXRBbGVydCh7IC4uLnNuYWNrYmFyLmVycm9yLCBtZXNzYWdlOiBcIkEgdmFsaWRhdGlvbiBlcnJvciB3YXMgZGV0ZWN0ZWQgaW4gdGhlIGZvcm1cIiB9KVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL1Jlc3BvbnNlIEhhbmRsaW5nXHJcbiAgICBpZiAodHJ1ZSkge1xyXG4gICAgICBzZXRTZW50TWVzc2FnZSh0cnVlKTtcclxuICAgICAgc25hY2tiYXIuc2V0QWxlcnQoeyAuLi5zbmFja2Jhci5zdWNjZXNzLCBtZXNzYWdlOiBcIlRoZSBtZXNzYWdlIGhhcyBiZWVuIHNlbnQgdG8gTmljaG9sYXMgSm9uZXMuXCIgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzbmFja2Jhci5zZXRBbGVydCh7IC4uLnNuYWNrYmFyLmVycm9yLCBtZXNzYWdlOiBcIlRoZSBhcHBsaWNhdGlvbiB3YXMgdW5hYmxlIHRvIHNlbmQgdGhlIG1lc3NhZ2UuIFlvdSBjYW4gc2VuZCBlbWFpbHMgdG8gbmljaG9sYXMuam9uZXNAdmlydHVhbC1jb2RleC5jb20uXCIgfSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMXJlbVwiIH19PlxyXG4gICAgICA8c25hY2tiYXIuY29tcG9uZW50IC8+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBhbGlnbj1cImNlbnRlclwiPldyaXRlIGEgbWVzc2FnZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEN1c3RvbVRleHRGaWVsZCBsYWJlbD1cIkZpcnN0bmFtZVwiIG5hbWU9XCJmaXJzdE5hbWVcIiB2YWx1ZT17Zm9ybS5maXJzdE5hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZShzZXRGb3JtKX0gcmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxDdXN0b21UZXh0RmllbGQgbGFiZWw9XCJMYXN0bmFtZVwiIG5hbWU9XCJsYXN0TmFtZVwiIHZhbHVlPXtmb3JtLmxhc3ROYW1lfSBvbkNoYW5nZT17b25DaGFuZ2Uoc2V0Rm9ybSl9IHJlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkIGxhYmVsPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17Zm9ybS5lbWFpbH0gb25DaGFuZ2U9e29uQ2hhbmdlKHNldEZvcm0pfSByZXF1aXJlZD17dHJ1ZX0gdmFsaWRhdG9ycz17W2lzRW1haWxdfSAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkIGxhYmVsPVwiU3ViamVjdFwiIG5hbWU9XCJzdWJqZWN0XCIgdmFsdWU9e2Zvcm0uc3ViamVjdH0gb25DaGFuZ2U9e29uQ2hhbmdlKHNldEZvcm0pfSByZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEN1c3RvbVRleHRGaWVsZCBsYWJlbD1cIk1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHZhbHVlPXtmb3JtLm1lc3NhZ2V9IG9uQ2hhbmdlPXtvbkNoYW5nZShzZXRGb3JtKX0gbXVsdGlsaW5lPXt0cnVlfSByZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlNlbmQgTWVzc2FnZTwvQnV0dG9uPjwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9QYXBlcj5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2ltcGxlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NpbXBsZUZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlRm9ybVBhZ2UgKCkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBzdHlsZT17e21hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KX19PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6IDQwMH19PlxyXG4gICAgICAgICAgPFNpbXBsZUZvcm0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==