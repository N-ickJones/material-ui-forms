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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/views/form-view-auto.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/pages/views/form-view-auto.tsx":
/*!********************************************!*\
  !*** ./src/pages/views/form-view-auto.tsx ***!
  \********************************************/
/*! exports provided: default, ResidenceForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormViewAutoExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidenceForm", function() { return ResidenceForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-forms */ "material-ui-forms");
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/ResidenceController */ "./src/controllers/ResidenceController.ts");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\src\\pages\\views\\form-view-auto.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function FormViewAutoExample(props) {
  const formHandlerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(new material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["FormHandler"]({
    controller: new _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__["ResidencesController"](),
    state: Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([])
  }));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["FormViewAuto"], _objectSpread({
      FormElement: ResidenceForm,
      title: "Residences",
      minNodes: 1,
      maxNodes: 3,
      formHandlerRef: formHandlerRef
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        container: true,
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h5",
            children: [title, " - ", props.index + 1 !== 1 && `${Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["getOrdinal"])(props.index + 1)} `, "Most Recent"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
          ml: "auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["AlertDialogButton"], {
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
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["AutoField"], {
          label: "Type",
          name: "type",
          onChange: handleChange,
          value: values.type,
          locked: locked,
          required: false,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["residenceOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
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
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          placeholder: "Enter the address line 2",
          label: "Address Line 2",
          name: "addressLine2",
          onChange: handleChange,
          value: values.addressLine2,
          validators: [],
          locked: locked
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["AutoFreeField"], {
          placeholder: "Enter a city",
          label: "City",
          name: "city",
          onChange: handleChange,
          value: values.city,
          locked: locked,
          required: false,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["usCityOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["AutoField"], {
          label: "State",
          name: "state",
          onChange: handleChange,
          value: values.state,
          locked: locked,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["usStateOptions"],
          required: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["CustomTextField"], {
          placeholder: "Enter the zip code",
          label: "Zip Code",
          name: "zipCode",
          onChange: handleChange,
          value: values.zipCode,
          validators: [material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["isZip"]],
          locked: locked,
          required: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
        item: true,
        xs: props.printMode ? 12 : 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["AutoField"], {
          label: "Country",
          name: "country",
          onChange: handleChange,
          value: values.country,
          locked: locked,
          required: false,
          options: material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["countryOptions"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL1Jlc2lkZW5jZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vY2tBcGkvbW9ja0FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvdmlld3MvZm9ybS12aWV3LWF1dG8udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWF0ZXJpYWwtdWktZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlcG9Db250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImtleSIsImNvbnRyb2xsZXIiLCJ1cmkiLCJtb2NrQXBpIiwiYXBpIiwiZ2V0QWxsIiwicmVzcG9uc2UiLCJnZXQiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJjcmVhdGUiLCJyZXNpZGVuY2UiLCJwb3N0IiwidXBkYXRlIiwicHV0IiwiZGVsZXRlIiwiZ2V0S2V5IiwiaW5zdGFuY2UiLCJyZXNpZGVuY2VzQ29udHJvbGxlciIsImV4YW1wbGVBcGkiLCJBeGlvcyIsImJhc2VVUkwiLCJoZWFkZXJzIiwiUmVzaWRlbmNlc0NvbnRyb2xsZXIiLCJNb2NrQXBpIiwiZ2V0SWQiLCJ1cmwiLCJtYXRjaCIsImlkUmVnZXgiLCJsZW5ndGgiLCJ0ZXN0IiwicGFyc2VJbnQiLCJnZXREYXRhIiwiZ2V0RGF0YUJ5SWQiLCJwb3N0RGF0YSIsIm5leHRJbmRleCIsInB1c2giLCJzZXREYXRhIiwidXBkYXRlRGF0YSIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJmaW5kIiwidXBkYXRlZERhdGEiLCJmaWx0ZXIiLCJfIiwianNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiRm9ybVZpZXdBdXRvRXhhbXBsZSIsImZvcm1IYW5kbGVyUmVmIiwidXNlUmVmIiwiRm9ybUhhbmRsZXIiLCJzdGF0ZSIsInVzZVN0YXRlIiwiUmVzaWRlbmNlRm9ybSIsInRpdGxlIiwidmFsdWVzIiwib25DaGFuZ2UiLCJwcmludE1vZGUiLCJsb2NrZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJvcGVydHkiLCJ2YWx1ZSIsImhhbmRsZURlbGV0ZSIsImdldE9yZGluYWwiLCJkaXNwbGF5IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJ0eXBlIiwicmVzaWRlbmNlT3B0aW9ucyIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJ1c0NpdHlPcHRpb25zIiwidXNTdGF0ZU9wdGlvbnMiLCJ6aXBDb2RlIiwiaXNaaXAiLCJjb3VudHJ5IiwiY291bnRyeU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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Q29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy92aWV3cy9mb3JtLXZpZXctYXV0by50c3hcIik7XG4iLCJpbXBvcnQgeyBJUmVwb0NvbnRyb2xsZXIgfSBmcm9tIFwibWF0ZXJpYWwtdWktZm9ybXNcIjtcclxuaW1wb3J0IHsgTW9ja0FwaSB9IGZyb20gXCIuLi9tb2NrQXBpL21vY2tBcGlcIjtcclxuaW1wb3J0IFJlc2lkZW5jZSBmcm9tIFwiLi4vbW9kZWxzL1Jlc2lkZW5jZVwiO1xyXG5pbXBvcnQgQXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gXCJheGlvc1wiO1xyXG5cclxuLyoqXHJcbiAqIFJlc2lkZW5jZUNvbnRyb2xsZXI6IENvbW1vbiBBUEkgTWV0aG9kcyB1c2VkIGZvciBXZWIgRm9ybXNcclxuICogbW9ja0FwaTogU2ltdWxhdGVzIGFuIEF4aW9zIEFQSSBjYWxsIHRvIHlvdXIgc2VydmVyXHJcbiAqL1xyXG4gZXhwb3J0IGNsYXNzIFJlcG9Db250cm9sbGVyPFQ+IGltcGxlbWVudHMgSVJlcG9Db250cm9sbGVyPFQ+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiB7IGtleTogc3RyaW5nLCB1cmk6IHN0cmluZywgYXBpOiBBeGlvc0luc3RhbmNlIHwgTW9ja0FwaTxUPiB9KSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBwcm9wcy5rZXk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gcHJvcHMudXJpO1xyXG4gICAgICAgIHRoaXMubW9ja0FwaSA9IHByb3BzLmFwaTtcclxuICAgIH1cclxuICAgIGtleTogc3RyaW5nO1xyXG4gICAgY29udHJvbGxlcjogc3RyaW5nO1xyXG4gICAgbW9ja0FwaTogYW55O1xyXG5cclxuICAgIGFzeW5jIGdldEFsbCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubW9ja0FwaS5nZXQoYCR7dGhpcy5jb250cm9sbGVyfWApO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgVFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2NrQXBpLmdldChgJHt0aGlzLmNvbnRyb2xsZXJ9LyR7aWR9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjcmVhdGUocmVzaWRlbmNlOiBUKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1vY2tBcGkucG9zdChgJHt0aGlzLmNvbnRyb2xsZXJ9YCwgcmVzaWRlbmNlKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCByZXNpZGVuY2U6IFQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubW9ja0FwaS5wdXQoYCR7dGhpcy5jb250cm9sbGVyfS8ke2lkfWAsIHJlc2lkZW5jZSlcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1vY2tBcGkuZGVsZXRlKGAke3RoaXMuY29udHJvbGxlcn0vJHtpZH1gKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBUO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEtleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5rZXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7IHJldHVybiByZXNpZGVuY2VzQ29udHJvbGxlciB9XHJcbn1cclxuXHJcbi8vVGhpcyBpcyBhbiBleGFtcGxlIE9ubHkgb2Ygd2hhdCBzaG91bGQgYmUgcGFzc2VkIGludG8gdGhlIGFwaSB2YXJpYWJsZS5cclxuY29uc3QgZXhhbXBsZUFwaSA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNpZGVuY2VzQ29udHJvbGxlciBleHRlbmRzIFJlcG9Db250cm9sbGVyPFJlc2lkZW5jZT4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAga2V5OiBcInJlc2lkZW5jZUlkXCIsXHJcbiAgICAgICAgICAgIHVyaTogXCIvcmVzaWRlbmNlc1wiLFxyXG4gICAgICAgICAgICBhcGk6IG5ldyBNb2NrQXBpPFJlc2lkZW5jZT4oXCJyZXNpZGVuY2VJZFwiKVxyXG4gICAgICAgIH0pOyBcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHsgcmV0dXJuIHJlc2lkZW5jZXNDb250cm9sbGVyIH1cclxufVxyXG5cclxuY29uc3QgcmVzaWRlbmNlc0NvbnRyb2xsZXIgPSBuZXcgUmVzaWRlbmNlc0NvbnRyb2xsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2lkZW5jZXNDb250cm9sbGVyO1xyXG5cclxuXHJcblxyXG4vL1RoaXMgY2FuIHZhcnkgZGVwZW5kaW5nIG9uIEFQSS4uIHRoaXMgaXMgbW9zdGx5IGp1c3QgYW4gZXhhbXBsZVxyXG4iLCJcclxuZXhwb3J0IHR5cGUgUmVzcG9uc2UgPSB7XHJcbiAgICBzdGF0dXM6IG51bWJlcjtcclxuICAgIGRhdGE6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTW9ja0FwaTxUPiB7XHJcbiAgICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPjtcclxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IFQpOiBQcm9taXNlPFJlc3BvbnNlPjtcclxuICAgIHB1dCh1cmw6IHN0cmluZywgZGF0YTogVCk6IFByb21pc2U8UmVzcG9uc2U+O1xyXG4gICAgZGVsZXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTxSZXNwb25zZT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2NrQXBpPFQ+IGltcGxlbWVudHMgSU1vY2tBcGk8VD4ge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBrZXk6IHN0cmluZ1xyXG4gICAgKSB7fVxyXG5cclxuICAgIGlkUmVnZXggPSAvXFxkKy9nO1xyXG4gICAgZ2V0SWQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaCh0aGlzLmlkUmVnZXgpXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gcGFyc2VJbnQobWF0Y2hbMF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggeyBjb25zb2xlLmxvZygnZmFpbGVkIHRvIGdldCBJZCcpIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXQodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQodXJsKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5nZXREYXRhKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5nZXREYXRhQnlJZChpZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHBvc3QodXJsOiBzdHJpbmcsIHBvc3REYXRhOiBUKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGRhdGEucHVzaCh7IC4uLnBvc3REYXRhLCBbdGhpcy5rZXldOiBuZXh0SW5kZXggfSlcclxuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHVzOiAyMDEsIGRhdGE6IHRoaXMuZ2V0RGF0YUJ5SWQobmV4dEluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBwdXQodXJsOiBzdHJpbmcsIHVwZGF0ZURhdGE6IFQpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0SWQodXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlkICE9PSBudWxsICYmIGRhdGEubGVuZ3RoID4gaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRhLmZpbmRJbmRleCgoaXRlbTogYW55KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5rZXldID09PSBpZCBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZGF0YVtpbmRleF0gPSB1cGRhdGVEYXRhO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDIwNCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgICAgICAgICBkYXRhOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZSh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBpZiAoaWQgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSBkYXRhLmZpbmQoKGl0ZW06IGFueSkgPT4geyBcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtW3RoaXMua2V5XSA9PT0gaWQgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IGRhdGEuZmlsdGVyKChpdGVtLCBfKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gZGVsZXRlSXRlbVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEodXBkYXRlZERhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGVsZXRlSXRlbVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YSgpOiBUW10ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLmtleX1tb2NrQXBpYCk7XHJcbiAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uKSBhcyBUW107XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1bmFibGUgdG8gbG9hZCBkYXRhIGZyb20gbG9jYWxzdG9yYWdlOiBrZXkgJHt0aGlzLmtleX1tb2NrQXBpYCkgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXSBhcyBUW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUJ5SWQoaWQ6IG51bWJlcik6IFQgfCBudWxsIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5rZXl9bW9ja0FwaWApO1xyXG4gICAgICAgICAgICBpZiAoanNvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoanNvbikgYXMgVFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhW2lkXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIHsgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1bmFibGUgdG8gbG9hZCBkYXRhIGZyb20gbG9jYWxzdG9yYWdlOiBrZXkgJHt0aGlzLmtleX1tb2NrQXBpYCkgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgc2V0RGF0YShkYXRhOiBUW10pIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLmtleX1tb2NrQXBpYCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgVW5hYmxlIHRvIHVwZGF0ZSBsb2NhbHN0b3JhZ2Uga2V5OiAke3RoaXMua2V5fW1vY2tBcGlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybVZpZXdBdXRvLCBGb3JtSGFuZGxlciwgSUZvcm1WaWV3UHJvcHMgfSBmcm9tICdtYXRlcmlhbC11aS1mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgUmVzaWRlbmNlc0NvbnRyb2xsZXIgfSBmcm9tICcuLi8uLi9jb250cm9sbGVycy9SZXNpZGVuY2VDb250cm9sbGVyJztcclxuaW1wb3J0IFJlc2lkZW5jZSBmcm9tICcuLi8uLi9tb2RlbHMvUmVzaWRlbmNlJztcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEFsZXJ0RGlhbG9nQnV0dG9uLCBBdXRvRmllbGQsIEF1dG9GcmVlRmllbGQsIGNvdW50cnlPcHRpb25zLCBDdXN0b21UZXh0RmllbGQsIFxyXG4gICAgZ2V0T3JkaW5hbCwgSUZvcm1Qcm9wcywgaXNaaXAsIHJlc2lkZW5jZU9wdGlvbnMsIHVzQ2l0eU9wdGlvbnMsIHVzU3RhdGVPcHRpb25zIH0gZnJvbSAnbWF0ZXJpYWwtdWktZm9ybXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybVZpZXdBdXRvRXhhbXBsZShwcm9wczogSUZvcm1WaWV3UHJvcHMpIHtcclxuICBjb25zdCBmb3JtSGFuZGxlclJlZiA9IHVzZVJlZihuZXcgRm9ybUhhbmRsZXIoe1xyXG4gICAgY29udHJvbGxlcjogbmV3IFJlc2lkZW5jZXNDb250cm9sbGVyKCksXHJcbiAgICBzdGF0ZTogIHVzZVN0YXRlKFtdIGFzIFJlc2lkZW5jZVtdKVxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtVmlld0F1dG88UmVzaWRlbmNlPlxyXG4gICAgICAgIEZvcm1FbGVtZW50PXtSZXNpZGVuY2VGb3JtfVxyXG4gICAgICAgIHRpdGxlPXtcIlJlc2lkZW5jZXNcIn1cclxuICAgICAgICBtaW5Ob2Rlcz17MX1cclxuICAgICAgICBtYXhOb2Rlcz17M31cclxuICAgICAgICBmb3JtSGFuZGxlclJlZj17Zm9ybUhhbmRsZXJSZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVzaWRlbmNlRm9ybShwcm9wczogSUZvcm1Qcm9wczxSZXNpZGVuY2U+KSB7XHJcbiAgY29uc3QgdGl0bGUgPSBcIlJlc2lkZW5jZVwiO1xyXG4gIGNvbnN0IHtcclxuICAgIGluZGV4LFxyXG4gICAgdmFsdWVzLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBwcmludE1vZGUsXHJcbiAgICBsb2NrZWQsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IHt9PiwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pID0+IHtcclxuICAgIG9uQ2hhbmdlKGUsIHByb3BzLmluZGV4LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBwcm9wcy5oYW5kbGVEZWxldGUgJiYgcHJvcHMuaGFuZGxlRGVsZXRlKGluZGV4KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPnt0aXRsZX0gLSB7cHJvcHMuaW5kZXggKyAxICE9PSAxICYmIGAke2dldE9yZGluYWwocHJvcHMuaW5kZXggKyAxKX0gYH1Nb3N0IFJlY2VudDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxCb3ggbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgIDxBbGVydERpYWxvZ0J1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXtsb2NrZWQgPyB7ZGlzcGxheTogXCJub25lXCJ9IDoge319XHJcbiAgICAgICAgICAgICAgaWQ9XCJkZWxldGVGb3JtXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkRlbGV0ZVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9e2BBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgJHt0aXRsZX0/YH1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YFRoaXMgd2lsbCByZW1vdmUgdGhlICR7dGl0bGUudG9Mb3dlckNhc2UoKX0gZnJvbSB5b3VyIHByb2ZpbGUuYH1cclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgYmFja0xhYmVsPVwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgICBmb3J3YXJkTGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVEZWxldGV9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmhhbmRsZURlbGV0ZSA9PT0gdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgPEF1dG9GaWVsZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlR5cGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwidHlwZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMudHlwZX1cclxuICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17cmVzaWRlbmNlT3B0aW9uc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgPEN1c3RvbVRleHRGaWVsZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBhZGRyZXNzIGxpbmUgMVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBMaW5lIDFcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0xpbmUxXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hZGRyZXNzTGluZTF9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM9e1tcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgPEN1c3RvbVRleHRGaWVsZFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRoZSBhZGRyZXNzIGxpbmUgMlwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBMaW5lIDJcIlxyXG4gICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0xpbmUyXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hZGRyZXNzTGluZTJ9XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcnM9e1tcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXtwcm9wcy5wcmludE1vZGUgPyAxMiA6IDEyfT5cclxuICAgICAgICAgIDxBdXRvRnJlZUZpZWxkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBjaXR5XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDaXR5XCJcclxuICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNpdHl9XHJcbiAgICAgICAgICAgIGxvY2tlZD17bG9ja2VkfVxyXG4gICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3VzQ2l0eU9wdGlvbnN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXtwcm9wcy5wcmludE1vZGUgPyAxMiA6IDEyfT5cclxuICAgICAgICAgIDxBdXRvRmllbGRcclxuICAgICAgICAgICAgbGFiZWw9XCJTdGF0ZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuc3RhdGV9XHJcbiAgICAgICAgICAgIGxvY2tlZD17bG9ja2VkfVxyXG4gICAgICAgICAgICBvcHRpb25zPXt1c1N0YXRlT3B0aW9uc31cclxuICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17cHJvcHMucHJpbnRNb2RlID8gMTIgOiAxMn0+XHJcbiAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIHppcCBjb2RlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJaaXAgQ29kZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ6aXBDb2RlXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy56aXBDb2RlfVxyXG4gICAgICAgICAgICB2YWxpZGF0b3JzPXtbXHJcbiAgICAgICAgICAgICAgaXNaaXBcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgPEF1dG9GaWVsZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkNvdW50cnlcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY291bnRyeVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY291bnRyeX1cclxuICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgb3B0aW9ucz17Y291bnRyeU9wdGlvbnN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hdGVyaWFsLXVpLWZvcm1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9