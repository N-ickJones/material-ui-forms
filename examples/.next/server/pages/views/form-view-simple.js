module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/views/form-view-simple.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/forms/ResidenceForm.tsx":
/*!************************************************!*\
  !*** ./src/components/forms/ResidenceForm.tsx ***!
  \************************************************/
/*! exports provided: ResidenceForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidenceForm", function() { return ResidenceForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-forms */ "material-ui-forms");
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\src\\components\\forms\\ResidenceForm.tsx";




function ResidenceForm(props) {
  const title = "Residence";
  const {
    index,
    values,
    onChange,
    printMode,
    locked
  } = props;

  const handleChange = (e, property, value) => {
    onChange(e, props.index, property, value);
  };

  const handleDelete = async () => {
    props.handleDelete && props.handleDelete(index);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        container: true,
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h5",
            children: [title, " - ", props.index + 1 !== 1 && `${Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["getOrdinal"])(props.index + 1)} `, "Most Recent"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          ml: "auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["AlertDialogButton"], {
            style: locked ? {
              display: "none"
            } : {},
            id: "deleteForm",
            label: "Delete",
            title: `Are you sure you want to delete this ${title}?`,
            description: `This will remove the ${title.toLowerCase()} from your profile.`,
            color: "secondary",
            backLabel: "Cancel",
            forwardLabel: "Delete",
            onSubmit: handleDelete,
            disabled: props.handleDelete === undefined
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["AutoField"], {
          label: "Type",
          name: "type",
          onChange: handleChange,
          value: values.type,
          locked: locked,
          required: false,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["residenceOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["CustomTextField"], {
          placeholder: "Enter the address line 1",
          label: "Address Line 1",
          name: "addressLine1",
          onChange: handleChange,
          value: values.addressLine1,
          validators: [],
          locked: locked,
          required: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["CustomTextField"], {
          placeholder: "Enter the address line 2",
          label: "Address Line 2",
          name: "addressLine2",
          onChange: handleChange,
          value: values.addressLine2,
          validators: [],
          locked: locked
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["AutoFreeField"], {
          placeholder: "Enter a city",
          label: "City",
          name: "city",
          onChange: handleChange,
          value: values.city,
          locked: locked,
          required: false,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["usCityOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["AutoField"], {
          label: "State",
          name: "state",
          onChange: handleChange,
          value: values.state,
          locked: locked,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["usStateOptions"],
          required: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["CustomTextField"], {
          placeholder: "Enter the zip code",
          label: "Zip Code",
          name: "zipCode",
          onChange: handleChange,
          value: values.zipCode,
          validators: [material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["isZip"]],
          locked: locked,
          required: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["AutoField"], {
          label: "Country",
          name: "country",
          onChange: handleChange,
          value: values.country,
          locked: locked,
          required: false,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_4__["countryOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./src/components/forms/ResidenceFormView2.tsx":
/*!*****************************************************!*\
  !*** ./src/components/forms/ResidenceFormView2.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResidenceFormView2; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-forms */ "material-ui-forms");
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/ResidenceController */ "./src/controllers/ResidenceController.ts");
/* harmony import */ var _ResidenceForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResidenceForm */ "./src/components/forms/ResidenceForm.tsx");

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\src\\components\\forms\\ResidenceFormView2.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function ResidenceFormView2(props) {
  const formHandlerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["FormHandler"]({
    controller: new _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__["ResidencesController"](),
    state: Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([])
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["FormViewAuto"], _objectSpread({
      FormElement: _ResidenceForm__WEBPACK_IMPORTED_MODULE_5__["ResidenceForm"],
      title: "Residences",
      minNodes: 1,
      maxNodes: 3,
      formHandlerRef: formHandlerRef
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/controllers/ResidenceController.ts":
/*!************************************************!*\
  !*** ./src/controllers/ResidenceController.ts ***!
  \************************************************/
/*! exports provided: RepoController, ResidencesController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoController", function() { return RepoController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidencesController", function() { return ResidencesController; });
/* harmony import */ var _mockApi_mockApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mockApi/mockApi */ "./src/mockApi/mockApi.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * ResidenceController: Common API Methods used for Web Forms
 * mockApi: Simulates an Axios API call to your server
 */

class RepoController {
  constructor(props) {
    _defineProperty(this, "key", void 0);

    _defineProperty(this, "controller", void 0);

    _defineProperty(this, "mockApi", void 0);

    this.key = props.key;
    this.controller = props.uri;
    this.mockApi = props.api;
  }

  async getAll() {
    try {
      const response = await this.mockApi.get(`${this.controller}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async get(id) {
    try {
      const response = await this.mockApi.get(`${this.controller}/${id}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async create(residence) {
    try {
      const response = await this.mockApi.post(`${this.controller}`, residence);
      if (response.status === 201) return response.data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async update(id, residence) {
    try {
      const response = await this.mockApi.put(`${this.controller}/${id}`, residence);
      if (response.status === 204) return true;
    } catch (error) {
      console.log(error);
    }

    return false;
  }

  async delete(id) {
    try {
      const response = await this.mockApi.delete(`${this.controller}/${id}`);
      if (response.status === 200) return response.data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  getKey() {
    return this.key;
  }

  static get instance() {
    return residencesController;
  }

} //This is an example Only of what should be passed into the api variable.

const exampleApi = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "https://example.com",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
class ResidencesController extends RepoController {
  constructor() {
    super({
      key: "residenceId",
      uri: "/residences",
      api: new _mockApi_mockApi__WEBPACK_IMPORTED_MODULE_0__["MockApi"]("residenceId")
    });
  }

  static get instance() {
    return residencesController;
  }

}
const residencesController = new ResidencesController();
/* harmony default export */ __webpack_exports__["default"] = (residencesController); //This can vary depending on API.. this is mostly just an example

/***/ }),

/***/ "./src/mockApi/mockApi.ts":
/*!********************************!*\
  !*** ./src/mockApi/mockApi.ts ***!
  \********************************/
/*! exports provided: MockApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockApi", function() { return MockApi; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MockApi {
  constructor(key) {
    this.key = key;

    _defineProperty(this, "idRegex", /\d+/g);
  }

  getId(url) {
    try {
      const match = url.match(this.idRegex);

      if (match && match.length > 0) {
        const test = parseInt(match[0]);
        return test;
      }
    } catch {
      console.log('failed to get Id');
    }

    return null;
  }

  async get(url) {
    const id = this.getId(url);

    if (id === null) {
      return {
        status: 200,
        data: this.getData()
      };
    } else {
      return {
        status: 200,
        data: this.getDataById(id)
      };
    }
  }

  async post(url, postData) {
    const data = this.getData();
    const nextIndex = data.length;
    data.push(_objectSpread(_objectSpread({}, postData), {}, {
      [this.key]: nextIndex
    }));
    this.setData(data);
    return {
      status: 201,
      data: this.getDataById(nextIndex)
    };
  }

  async put(url, updateData) {
    const id = this.getId(url);
    const data = this.getData();

    if (id !== null && data.length > id) {
      const index = data.findIndex(item => {
        return item[this.key] === id;
      });
      data[index] = updateData;
      this.setData(data);
      return {
        status: 204,
        data: null
      };
    } else return {
      status: 404,
      data: null
    };
  }

  async delete(url) {
    const id = this.getId(url);
    const data = this.getData();

    if (id !== null) {
      const deleteItem = data.find(item => {
        return item[this.key] === id;
      });
      const updatedData = data.filter((item, _) => {
        return item !== deleteItem;
      });
      this.setData(updatedData);
      return {
        status: 200,
        data: deleteItem
      };
    } else return {
      status: 404,
      data: null
    };
  }

  getData() {
    try {
      const json = localStorage.getItem(`${this.key}mockApi`);

      if (json) {
        const data = JSON.parse(json);
        if (data) return data;
      }
    } catch {
      console.log(`unable to load data from localstorage: key ${this.key}mockApi`);
    }

    return [];
  }

  getDataById(id) {
    try {
      const json = localStorage.getItem(`${this.key}mockApi`);

      if (json) {
        const data = JSON.parse(json);

        if (data && data.length > id) {
          return data[id];
        }
      }
    } catch {
      console.log(`unable to load data from localstorage: key ${this.key}mockApi`);
    }

    return null;
  }

  setData(data) {
    try {
      localStorage.setItem(`${this.key}mockApi`, JSON.stringify(data));
      return true;
    } catch {
      console.log(`Unable to update localstorage key: ${this.key}mockApi`);
      return false;
    }
  }

}

/***/ }),

/***/ "./src/pages/views/form-view-simple.tsx":
/*!**********************************************!*\
  !*** ./src/pages/views/form-view-simple.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_forms_ResidenceFormView2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forms/ResidenceFormView2 */ "./src/components/forms/ResidenceFormView2.tsx");

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\src\\pages\\views\\form-view-simple.tsx";



function SubForm() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_forms_ResidenceFormView2__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
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

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvUmVzaWRlbmNlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvUmVzaWRlbmNlRm9ybVZpZXcyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvUmVzaWRlbmNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9ja0FwaS9tb2NrQXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy92aWV3cy9mb3JtLXZpZXctc2ltcGxlLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1hdGVyaWFsLXVpLWZvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJSZXNpZGVuY2VGb3JtIiwicHJvcHMiLCJ0aXRsZSIsImluZGV4IiwidmFsdWVzIiwib25DaGFuZ2UiLCJwcmludE1vZGUiLCJsb2NrZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJvcGVydHkiLCJ2YWx1ZSIsImhhbmRsZURlbGV0ZSIsImdldE9yZGluYWwiLCJkaXNwbGF5IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJ0eXBlIiwicmVzaWRlbmNlT3B0aW9ucyIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJ1c0NpdHlPcHRpb25zIiwic3RhdGUiLCJ1c1N0YXRlT3B0aW9ucyIsInppcENvZGUiLCJpc1ppcCIsImNvdW50cnkiLCJjb3VudHJ5T3B0aW9ucyIsIlJlc2lkZW5jZUZvcm1WaWV3MiIsImZvcm1IYW5kbGVyUmVmIiwidXNlUmVmIiwiRm9ybUhhbmRsZXIiLCJjb250cm9sbGVyIiwiUmVzaWRlbmNlc0NvbnRyb2xsZXIiLCJ1c2VTdGF0ZSIsIlJlcG9Db250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJrZXkiLCJ1cmkiLCJtb2NrQXBpIiwiYXBpIiwiZ2V0QWxsIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjcmVhdGUiLCJyZXNpZGVuY2UiLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZGVsZXRlIiwiZ2V0S2V5IiwiaW5zdGFuY2UiLCJyZXNpZGVuY2VzQ29udHJvbGxlciIsImV4YW1wbGVBcGkiLCJBeGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiTW9ja0FwaSIsImdldElkIiwidXJsIiwibWF0Y2giLCJpZFJlZ2V4IiwibGVuZ3RoIiwidGVzdCIsInBhcnNlSW50IiwiZ2V0RGF0YSIsImdldERhdGFCeUlkIiwicG9zdERhdGEiLCJuZXh0SW5kZXgiLCJwdXNoIiwic2V0RGF0YSIsInVwZGF0ZURhdGEiLCJmaW5kSW5kZXgiLCJpdGVtIiwiZGVsZXRlSXRlbSIsImZpbmQiLCJ1cGRhdGVkRGF0YSIsImZpbHRlciIsIl8iLCJqc29uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJTdWJGb3JtIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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Ozs7OztBQ2IvQztBQUNBO0FBQ0E7QUFFZSxTQUFTdUQsT0FBVCxHQUFtQjtBQUNoQyxzQkFDSSxxRUFBQywyREFBRDtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRCxDOzs7Ozs7Ozs7OztBQ1ZELDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3ZpZXdzL2Zvcm0tdmlldy1zaW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy92aWV3cy9mb3JtLXZpZXctc2ltcGxlLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQnV0dG9uLCBBdXRvRmllbGQsIEF1dG9GcmVlRmllbGQsIGNvdW50cnlPcHRpb25zLCBDdXN0b21UZXh0RmllbGQsIFxyXG4gICAgZ2V0T3JkaW5hbCwgSUZvcm1Qcm9wcywgaXNaaXAsIHJlc2lkZW5jZU9wdGlvbnMsIHVzQ2l0eU9wdGlvbnMsIHVzU3RhdGVPcHRpb25zIH0gZnJvbSAnbWF0ZXJpYWwtdWktZm9ybXMnO1xyXG5pbXBvcnQgUmVzaWRlbmNlIGZyb20gJy4uLy4uL21vZGVscy9SZXNpZGVuY2UnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNpZGVuY2VGb3JtKHByb3BzOiBJRm9ybVByb3BzPFJlc2lkZW5jZT4pIHtcclxuICAgIGNvbnN0IHRpdGxlID0gXCJSZXNpZGVuY2VcIjtcclxuICAgIGNvbnN0IHtcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHZhbHVlcyxcclxuICAgICAgb25DaGFuZ2UsXHJcbiAgICAgIHByaW50TW9kZSxcclxuICAgICAgbG9ja2VkLFxyXG4gICAgfSA9IHByb3BzO1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQgfCB7fT4sIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBib29sZWFuKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKGUsIHByb3BzLmluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBwcm9wcy5oYW5kbGVEZWxldGUgJiYgcHJvcHMuaGFuZGxlRGVsZXRlKGluZGV4KTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57dGl0bGV9IC0ge3Byb3BzLmluZGV4ICsgMSAhPT0gMSAmJiBgJHtnZXRPcmRpbmFsKHByb3BzLmluZGV4ICsgMSl9IGB9TW9zdCBSZWNlbnQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEJveCBtbD1cImF1dG9cIj5cclxuICAgICAgICAgICAgICA8QWxlcnREaWFsb2dCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtsb2NrZWQgPyB7ZGlzcGxheTogXCJub25lXCJ9IDoge319XHJcbiAgICAgICAgICAgICAgICBpZD1cImRlbGV0ZUZvcm1cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgJHt0aXRsZX0/YH1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtgVGhpcyB3aWxsIHJlbW92ZSB0aGUgJHt0aXRsZS50b0xvd2VyQ2FzZSgpfSBmcm9tIHlvdXIgcHJvZmlsZS5gfVxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgYmFja0xhYmVsPVwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICAgIGZvcndhcmRMYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmhhbmRsZURlbGV0ZSA9PT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17cHJvcHMucHJpbnRNb2RlID8gMTIgOiAxMn0+XHJcbiAgICAgICAgICAgIDxBdXRvRmllbGRcclxuICAgICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0eXBlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudHlwZX1cclxuICAgICAgICAgICAgICBsb2NrZWQ9e2xvY2tlZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmVzaWRlbmNlT3B0aW9uc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgYWRkcmVzcyBsaW5lIDFcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBMaW5lIDFcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzTGluZTFcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hZGRyZXNzTGluZTF9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycz17W1xyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17cHJvcHMucHJpbnRNb2RlID8gMTIgOiAxMn0+XHJcbiAgICAgICAgICAgIDxDdXN0b21UZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBhZGRyZXNzIGxpbmUgMlwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzIExpbmUgMlwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NMaW5lMlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmFkZHJlc3NMaW5lMn1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBsb2NrZWQ9e2xvY2tlZH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgICA8QXV0b0ZyZWVGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaXR5XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNpdHlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY2l0eX1cclxuICAgICAgICAgICAgICBsb2NrZWQ9e2xvY2tlZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17dXNDaXR5T3B0aW9uc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgICA8QXV0b0ZpZWxkXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RhdGV9XHJcbiAgICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17dXNTdGF0ZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17cHJvcHMucHJpbnRNb2RlID8gMTIgOiAxMn0+XHJcbiAgICAgICAgICAgIDxDdXN0b21UZXh0RmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSB6aXAgY29kZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJaaXAgQ29kZVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInppcENvZGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy56aXBDb2RlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1tcclxuICAgICAgICAgICAgICAgIGlzWmlwXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBsb2NrZWQ9e2xvY2tlZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtwcm9wcy5wcmludE1vZGUgPyAxMiA6IDEyfT5cclxuICAgICAgICAgICAgPEF1dG9GaWVsZFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyeVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvdW50cnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5jb3VudHJ5fVxyXG4gICAgICAgICAgICAgIGxvY2tlZD17bG9ja2VkfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtjb3VudHJ5T3B0aW9uc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtVmlld0F1dG8sIEZvcm1IYW5kbGVyLCBJRm9ybVZpZXdQcm9wcyB9IGZyb20gJ21hdGVyaWFsLXVpLWZvcm1zJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNpZGVuY2VzQ29udHJvbGxlciB9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1Jlc2lkZW5jZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgUmVzaWRlbmNlIGZyb20gJy4uLy4uL21vZGVscy9SZXNpZGVuY2UnO1xyXG5pbXBvcnQgeyBSZXNpZGVuY2VGb3JtIH0gZnJvbSAnLi9SZXNpZGVuY2VGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2lkZW5jZUZvcm1WaWV3Mihwcm9wczogSUZvcm1WaWV3UHJvcHMpIHtcclxuICBjb25zdCBmb3JtSGFuZGxlclJlZiA9IHVzZVJlZihuZXcgRm9ybUhhbmRsZXIoe1xyXG4gICAgY29udHJvbGxlcjogbmV3IFJlc2lkZW5jZXNDb250cm9sbGVyKCksXHJcbiAgICBzdGF0ZTogIHVzZVN0YXRlKFtdIGFzIFJlc2lkZW5jZVtdKVxyXG4gIH0pKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybVZpZXdBdXRvPFJlc2lkZW5jZT5cclxuICAgICAgICBGb3JtRWxlbWVudD17UmVzaWRlbmNlRm9ybX1cclxuICAgICAgICB0aXRsZT17XCJSZXNpZGVuY2VzXCJ9XHJcbiAgICAgICAgbWluTm9kZXM9ezF9XHJcbiAgICAgICAgbWF4Tm9kZXM9ezN9XHJcbiAgICAgICAgZm9ybUhhbmRsZXJSZWY9e2Zvcm1IYW5kbGVyUmVmfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufSIsImltcG9ydCB7IElSZXBvQ29udHJvbGxlciB9IGZyb20gXCJtYXRlcmlhbC11aS1mb3Jtc1wiO1xyXG5pbXBvcnQgeyBNb2NrQXBpIH0gZnJvbSBcIi4uL21vY2tBcGkvbW9ja0FwaVwiO1xyXG5pbXBvcnQgUmVzaWRlbmNlIGZyb20gXCIuLi9tb2RlbHMvUmVzaWRlbmNlXCI7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vKipcclxuICogUmVzaWRlbmNlQ29udHJvbGxlcjogQ29tbW9uIEFQSSBNZXRob2RzIHVzZWQgZm9yIFdlYiBGb3Jtc1xyXG4gKiBtb2NrQXBpOiBTaW11bGF0ZXMgYW4gQXhpb3MgQVBJIGNhbGwgdG8geW91ciBzZXJ2ZXJcclxuICovXHJcbiBleHBvcnQgY2xhc3MgUmVwb0NvbnRyb2xsZXI8VD4gaW1wbGVtZW50cyBJUmVwb0NvbnRyb2xsZXI8VD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IHsga2V5OiBzdHJpbmcsIHVyaTogc3RyaW5nLCBhcGk6IEF4aW9zSW5zdGFuY2UgfCBNb2NrQXBpPFQ+IH0pIHtcclxuICAgICAgICB0aGlzLmtleSA9IHByb3BzLmtleTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBwcm9wcy51cmk7XHJcbiAgICAgICAgdGhpcy5tb2NrQXBpID0gcHJvcHMuYXBpO1xyXG4gICAgfVxyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICBjb250cm9sbGVyOiBzdHJpbmc7XHJcbiAgICBtb2NrQXBpOiBhbnk7XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2NrQXBpLmdldChgJHt0aGlzLmNvbnRyb2xsZXJ9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBUW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1vY2tBcGkuZ2V0KGAke3RoaXMuY29udHJvbGxlcn0vJHtpZH1gKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSBcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZShyZXNpZGVuY2U6IFQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubW9ja0FwaS5wb3N0KGAke3RoaXMuY29udHJvbGxlcn1gLCByZXNpZGVuY2UpXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIHJlc2lkZW5jZTogVCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2NrQXBpLnB1dChgJHt0aGlzLmNvbnRyb2xsZXJ9LyR7aWR9YCwgcmVzaWRlbmNlKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubW9ja0FwaS5kZWxldGUoYCR7dGhpcy5jb250cm9sbGVyfS8ke2lkfWApXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0S2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHsgcmV0dXJuIHJlc2lkZW5jZXNDb250cm9sbGVyIH1cclxufVxyXG5cclxuLy9UaGlzIGlzIGFuIGV4YW1wbGUgT25seSBvZiB3aGF0IHNob3VsZCBiZSBwYXNzZWQgaW50byB0aGUgYXBpIHZhcmlhYmxlLlxyXG5jb25zdCBleGFtcGxlQXBpID0gQXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2lkZW5jZXNDb250cm9sbGVyIGV4dGVuZHMgUmVwb0NvbnRyb2xsZXI8UmVzaWRlbmNlPiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBrZXk6IFwicmVzaWRlbmNlSWRcIixcclxuICAgICAgICAgICAgdXJpOiBcIi9yZXNpZGVuY2VzXCIsXHJcbiAgICAgICAgICAgIGFwaTogbmV3IE1vY2tBcGk8UmVzaWRlbmNlPihcInJlc2lkZW5jZUlkXCIpXHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkgeyByZXR1cm4gcmVzaWRlbmNlc0NvbnRyb2xsZXIgfVxyXG59XHJcblxyXG5jb25zdCByZXNpZGVuY2VzQ29udHJvbGxlciA9IG5ldyBSZXNpZGVuY2VzQ29udHJvbGxlcigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVzaWRlbmNlc0NvbnRyb2xsZXI7XHJcblxyXG5cclxuXHJcbi8vVGhpcyBjYW4gdmFyeSBkZXBlbmRpbmcgb24gQVBJLi4gdGhpcyBpcyBtb3N0bHkganVzdCBhbiBleGFtcGxlXHJcbiIsIlxyXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgZGF0YTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNb2NrQXBpPFQ+IHtcclxuICAgIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8UmVzcG9uc2U+O1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogVCk6IFByb21pc2U8UmVzcG9uc2U+O1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBUKTogUHJvbWlzZTxSZXNwb25zZT47XHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tBcGk8VD4gaW1wbGVtZW50cyBJTW9ja0FwaTxUPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGtleTogc3RyaW5nXHJcbiAgICApIHt9XHJcblxyXG4gICAgaWRSZWdleCA9IC9cXGQrL2c7XHJcbiAgICBnZXRJZCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHRoaXMuaWRSZWdleClcclxuICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBwYXJzZUludChtYXRjaFswXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gZ2V0IElkJykgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCh1cmwpO1xyXG4gICAgICAgIGlmIChpZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmdldERhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmdldERhdGFCeUlkKGlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcG9zdCh1cmw6IHN0cmluZywgcG9zdERhdGE6IFQpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgZGF0YS5wdXNoKHsgLi4ucG9zdERhdGEsIFt0aGlzLmtleV06IG5leHRJbmRleCB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IDIwMSwgZGF0YTogdGhpcy5nZXREYXRhQnlJZChuZXh0SW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHB1dCh1cmw6IHN0cmluZywgdXBkYXRlRGF0YTogVCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaWQgIT09IG51bGwgJiYgZGF0YS5sZW5ndGggPiBpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVt0aGlzLmtleV0gPT09IGlkIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkYXRhW2luZGV4XSA9IHVwZGF0ZURhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogMjA0LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSXRlbSA9IGRhdGEuZmluZCgoaXRlbTogYW55KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5rZXldID09PSBpZCBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIF8pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtICE9PSBkZWxldGVJdGVtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh1cGRhdGVkRGF0YSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkZWxldGVJdGVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCk6IFRbXSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMua2V5fW1vY2tBcGlgKTtcclxuICAgICAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pIGFzIFRbXTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHVuYWJsZSB0byBsb2FkIGRhdGEgZnJvbSBsb2NhbHN0b3JhZ2U6IGtleSAke3RoaXMua2V5fW1vY2tBcGlgKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdIGFzIFRbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhQnlJZChpZDogbnVtYmVyKTogVCB8IG51bGwge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLmtleX1tb2NrQXBpYCk7XHJcbiAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uKSBhcyBUW107XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaWRdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHVuYWJsZSB0byBsb2FkIGRhdGEgZnJvbSBsb2NhbHN0b3JhZ2U6IGtleSAke3RoaXMua2V5fW1vY2tBcGlgKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBzZXREYXRhKGRhdGE6IFRbXSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMua2V5fW1vY2tBcGlgLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbmFibGUgdG8gdXBkYXRlIGxvY2Fsc3RvcmFnZSBrZXk6ICR7dGhpcy5rZXl9bW9ja0FwaWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVzaWRlbmNlRm9ybVZpZXcyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybXMvUmVzaWRlbmNlRm9ybVZpZXcyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YkZvcm0oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UmVzaWRlbmNlRm9ybVZpZXcyIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==