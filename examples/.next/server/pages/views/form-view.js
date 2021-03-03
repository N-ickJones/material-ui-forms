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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/views/form-view.tsx");
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

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\node_library\\material-ui-forms\\examples\\src\\components\\forms\\ResidenceForm.tsx";




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

/***/ "./src/components/forms/ResidenceFormView.tsx":
/*!****************************************************!*\
  !*** ./src/components/forms/ResidenceFormView.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResidenceFormView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-forms */ "material-ui-forms");
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/ResidenceController */ "./src/controllers/ResidenceController.ts");
/* harmony import */ var _ResidenceForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResidenceForm */ "./src/components/forms/ResidenceForm.tsx");

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\node_library\\material-ui-forms\\examples\\src\\components\\forms\\ResidenceFormView.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ResidenceFormView(props) {
  const {
    0: forms,
    1: setForms
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: uid,
    1: setUid
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Number.MAX_SAFE_INTEGER);

  const handleLoad = async (local, data) => {
    if (local && data) {
      setForms(data);
    } else {
      const residences = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_3__["default"].getAll();
      if (!residences) return false;
      setForms(residences);
    }

    return true;
  };

  const handleAddNewItem = async () => {
    forms.push({
      residenceId: uid
    });
    setUid(curr => curr - 1);
    setForms([...forms]);
  };

  const handleSubmit = async () => {
    let success = true;
    forms.forEach(async (residence, index) => {
      if (residence.residenceId !== undefined && Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["isValidId"])(residence.residenceId)) {
        if (!(await handleUpdate(residence.residenceId, residence))) {
          success = false;
        }
      } else {
        if (!(await handleCreate(index, residence))) {
          success = false;
        }
      }
    });
    return success;
  };

  const handleCreate = async (index, residence) => {
    const residenceResponse = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_3__["default"].create(_objectSpread(_objectSpread({}, residence), {}, {
      residenceId: undefined
    }));

    if (residenceResponse) {
      //Flush Forms temp key for real key
      const tForms = forms;
      tForms[index] = residenceResponse;
      setForms([]);
      setForms(tForms);
      return true;
    }

    return false;
  };

  const handleUpdate = async (id, residence) => {
    const response = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_3__["default"].update(id, residence);
    return response;
  };

  const handleDelete = async index => {
    const residenceId = forms[index].residenceId;

    if (residenceId !== undefined && Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["isValidId"])(residenceId)) {
      const response = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_3__["default"].delete(residenceId);

      if (!response) {
        return false;
      }
    }

    setTimeout(() => {
      const filteredResults = forms.filter(item => item.residenceId !== residenceId);
      setForms(filteredResults);
    });
    return true;
  };

  const handleSaveChanges = async () => {
    setForms([...forms]);
    return true;
  };

  const handleGenerateKey = item => {
    return `Residence${item.residenceId}`;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_2__["FormView"], {
    FormElement: _ResidenceForm__WEBPACK_IMPORTED_MODULE_4__["ResidenceForm"],
    title: "Residences",
    minNodes: 1,
    maxNodes: 3,
    forms: forms,
    handleLoad: handleLoad,
    handleSubmit: handleSubmit,
    handleAddNewItem: handleAddNewItem,
    handleSaveChanges: handleSaveChanges,
    handleDelete: handleDelete,
    handleGenerateKey: handleGenerateKey,
    defaultLocked: props.defaultLocked,
    submitButtonRef: props.submitButtonRef,
    onNext: props.onNext,
    hideLockButton: props.hideLockButton,
    hideSaveProgressButton: props.hideSaveProgressButton,
    hidePrintButton: props.hidePrintButton
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/controllers/ResidenceController.ts":
/*!************************************************!*\
  !*** ./src/controllers/ResidenceController.ts ***!
  \************************************************/
/*! exports provided: ResidencesController, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidencesController", function() { return ResidencesController; });
/* harmony import */ var _mockApi_mockApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mockApi/mockApi */ "./src/mockApi/mockApi.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * ResidenceController: Common API Methods used for Web Forms
 * mockApi: Simulates an Axios API call to your server
 */
class ResidencesController {
  constructor() {
    _defineProperty(this, "controller", "/residences");

    _defineProperty(this, "mockApi", new _mockApi_mockApi__WEBPACK_IMPORTED_MODULE_0__["MockApi"]("residenceId"));
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

  static get instance() {
    return residencesController;
  }

}
const residencesController = new ResidencesController();
/* harmony default export */ __webpack_exports__["default"] = (residencesController);

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

/***/ "./src/pages/views/form-view.tsx":
/*!***************************************!*\
  !*** ./src/pages/views/form-view.tsx ***!
  \***************************************/
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
/* harmony import */ var _components_forms_ResidenceFormView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/forms/ResidenceFormView */ "./src/components/forms/ResidenceFormView.tsx");

var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\node_library\\material-ui-forms\\examples\\src\\pages\\views\\form-view.tsx";



function SubForm() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_forms_ResidenceFormView__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvUmVzaWRlbmNlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvUmVzaWRlbmNlRm9ybVZpZXcudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVycy9SZXNpZGVuY2VDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2NrQXBpL21vY2tBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3ZpZXdzL2Zvcm0tdmlldy50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibWF0ZXJpYWwtdWktZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlJlc2lkZW5jZUZvcm0iLCJwcm9wcyIsInRpdGxlIiwiaW5kZXgiLCJ2YWx1ZXMiLCJvbkNoYW5nZSIsInByaW50TW9kZSIsImxvY2tlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJwcm9wZXJ0eSIsInZhbHVlIiwiaGFuZGxlRGVsZXRlIiwiZ2V0T3JkaW5hbCIsImRpc3BsYXkiLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsInR5cGUiLCJyZXNpZGVuY2VPcHRpb25zIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsInVzQ2l0eU9wdGlvbnMiLCJzdGF0ZSIsInVzU3RhdGVPcHRpb25zIiwiemlwQ29kZSIsImlzWmlwIiwiY291bnRyeSIsImNvdW50cnlPcHRpb25zIiwiUmVzaWRlbmNlRm9ybVZpZXciLCJmb3JtcyIsInNldEZvcm1zIiwidXNlU3RhdGUiLCJ1aWQiLCJzZXRVaWQiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaGFuZGxlTG9hZCIsImxvY2FsIiwiZGF0YSIsInJlc2lkZW5jZXMiLCJyZXNpZGVuY2VzQ29udHJvbGxlciIsImdldEFsbCIsImhhbmRsZUFkZE5ld0l0ZW0iLCJwdXNoIiwicmVzaWRlbmNlSWQiLCJjdXJyIiwiaGFuZGxlU3VibWl0Iiwic3VjY2VzcyIsImZvckVhY2giLCJyZXNpZGVuY2UiLCJpc1ZhbGlkSWQiLCJoYW5kbGVVcGRhdGUiLCJoYW5kbGVDcmVhdGUiLCJyZXNpZGVuY2VSZXNwb25zZSIsImNyZWF0ZSIsInRGb3JtcyIsImlkIiwicmVzcG9uc2UiLCJ1cGRhdGUiLCJkZWxldGUiLCJzZXRUaW1lb3V0IiwiZmlsdGVyZWRSZXN1bHRzIiwiZmlsdGVyIiwiaXRlbSIsImhhbmRsZVNhdmVDaGFuZ2VzIiwiaGFuZGxlR2VuZXJhdGVLZXkiLCJkZWZhdWx0TG9ja2VkIiwic3VibWl0QnV0dG9uUmVmIiwib25OZXh0IiwiaGlkZUxvY2tCdXR0b24iLCJoaWRlU2F2ZVByb2dyZXNzQnV0dG9uIiwiaGlkZVByaW50QnV0dG9uIiwiUmVzaWRlbmNlc0NvbnRyb2xsZXIiLCJNb2NrQXBpIiwibW9ja0FwaSIsImdldCIsImNvbnRyb2xsZXIiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwicHV0IiwiaW5zdGFuY2UiLCJjb25zdHJ1Y3RvciIsImtleSIsImdldElkIiwidXJsIiwibWF0Y2giLCJpZFJlZ2V4IiwibGVuZ3RoIiwidGVzdCIsInBhcnNlSW50IiwiZ2V0RGF0YSIsImdldERhdGFCeUlkIiwicG9zdERhdGEiLCJuZXh0SW5kZXgiLCJzZXREYXRhIiwidXBkYXRlRGF0YSIsImZpbmRJbmRleCIsImRlbGV0ZUl0ZW0iLCJmaW5kIiwidXBkYXRlZERhdGEiLCJfIiwianNvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzZXRJdGVt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LENBQVg7QUFDSDtBQUNKO0FBQ0osS0FSRCxDQVNBLE1BQU07QUFDRnVCLGFBQU8sQ0FBQ0MsR0FBUixDQUFhLDhDQUE2QyxLQUFLSyxHQUFJLFNBQW5FO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0g7O0FBR0RZLFNBQU8sQ0FBQzNELElBQUQsRUFBWTtBQUNmLFFBQUk7QUFDQW1FLGtCQUFZLENBQUNJLE9BQWIsQ0FBc0IsR0FBRSxLQUFLeEIsR0FBSSxTQUFqQyxFQUEyQ3NCLElBQUksQ0FBQ0csU0FBTCxDQUFleEUsSUFBZixDQUEzQztBQUNBLGFBQU8sSUFBUDtBQUNILEtBSEQsQ0FJQSxNQUFNO0FBQ0Z5QyxhQUFPLENBQUNDLEdBQVIsQ0FBYSxzQ0FBcUMsS0FBS0ssR0FBSSxTQUEzRDtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBbEkwQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IvQztBQUNBO0FBQ0E7QUFFZSxTQUFTMEIsT0FBVCxHQUFtQjtBQUNoQyxzQkFDSSxxRUFBQywyREFBRDtBQUFBLDJCQUNFLHFFQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLRCxDOzs7Ozs7Ozs7OztBQ1ZELDhDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3ZpZXdzL2Zvcm0tdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3ZpZXdzL2Zvcm0tdmlldy50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBBbGVydERpYWxvZ0J1dHRvbiwgQXV0b0ZpZWxkLCBBdXRvRnJlZUZpZWxkLCBjb3VudHJ5T3B0aW9ucywgQ3VzdG9tVGV4dEZpZWxkLCBcclxuICAgIGdldE9yZGluYWwsIElGb3JtUHJvcHMsIGlzWmlwLCByZXNpZGVuY2VPcHRpb25zLCB1c0NpdHlPcHRpb25zLCB1c1N0YXRlT3B0aW9ucyB9IGZyb20gJ21hdGVyaWFsLXVpLWZvcm1zJztcclxuaW1wb3J0IFJlc2lkZW5jZSBmcm9tICcuLi8uLi9tb2RlbHMvUmVzaWRlbmNlJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVzaWRlbmNlRm9ybShwcm9wczogSUZvcm1Qcm9wczxSZXNpZGVuY2U+KSB7XHJcbiAgICBjb25zdCB0aXRsZSA9IFwiUmVzaWRlbmNlXCI7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGluZGV4LFxyXG4gICAgICB2YWx1ZXMsXHJcbiAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICBwcmludE1vZGUsXHJcbiAgICAgIGxvY2tlZCxcclxuICAgIH0gPSBwcm9wcztcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwge30+LCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgYm9vbGVhbikgPT4ge1xyXG4gICAgICBvbkNoYW5nZShlLCBwcm9wcy5pbmRleCwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgcHJvcHMuaGFuZGxlRGVsZXRlICYmIHByb3BzLmhhbmRsZURlbGV0ZShpbmRleCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e3RpdGxlfSAtIHtwcm9wcy5pbmRleCArIDEgIT09IDEgJiYgYCR7Z2V0T3JkaW5hbChwcm9wcy5pbmRleCArIDEpfSBgfU1vc3QgUmVjZW50PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxCb3ggbWw9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgPEFsZXJ0RGlhbG9nQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17bG9ja2VkID8ge2Rpc3BsYXk6IFwibm9uZVwifSA6IHt9fVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZWxldGVGb3JtXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzICR7dGl0bGV9P2B9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YFRoaXMgd2lsbCByZW1vdmUgdGhlICR7dGl0bGUudG9Mb3dlckNhc2UoKX0gZnJvbSB5b3VyIHByb2ZpbGUuYH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGJhY2tMYWJlbD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkTGFiZWw9XCJEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZURlbGV0ZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5oYW5kbGVEZWxldGUgPT09IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgICA8QXV0b0ZpZWxkXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnR5cGV9XHJcbiAgICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3Jlc2lkZW5jZU9wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtwcm9wcy5wcmludE1vZGUgPyAxMiA6IDEyfT5cclxuICAgICAgICAgICAgPEN1c3RvbVRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGFkZHJlc3MgbGluZSAxXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3MgTGluZSAxXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc0xpbmUxXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuYWRkcmVzc0xpbmUxfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1tcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgIGxvY2tlZD17bG9ja2VkfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgYWRkcmVzcyBsaW5lIDJcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzcyBMaW5lIDJcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzTGluZTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5hZGRyZXNzTGluZTJ9XHJcbiAgICAgICAgICAgICAgdmFsaWRhdG9ycz17W1xyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtwcm9wcy5wcmludE1vZGUgPyAxMiA6IDEyfT5cclxuICAgICAgICAgICAgPEF1dG9GcmVlRmllbGRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgY2l0eVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJDaXR5XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNpdHl9XHJcbiAgICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3VzQ2l0eU9wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXtwcm9wcy5wcmludE1vZGUgPyAxMiA6IDEyfT5cclxuICAgICAgICAgICAgPEF1dG9GaWVsZFxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiU3RhdGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnN0YXRlfVxyXG4gICAgICAgICAgICAgIGxvY2tlZD17bG9ja2VkfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3VzU3RhdGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9e3Byb3BzLnByaW50TW9kZSA/IDEyIDogMTJ9PlxyXG4gICAgICAgICAgICA8Q3VzdG9tVGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgemlwIGNvZGVcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiWmlwIENvZGVcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ6aXBDb2RlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuemlwQ29kZX1cclxuICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbXHJcbiAgICAgICAgICAgICAgICBpc1ppcFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgbG9ja2VkPXtsb2NrZWR9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17cHJvcHMucHJpbnRNb2RlID8gMTIgOiAxMn0+XHJcbiAgICAgICAgICAgIDxBdXRvRmllbGRcclxuICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cnlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY291bnRyeX1cclxuICAgICAgICAgICAgICBsb2NrZWQ9e2xvY2tlZH1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17Y291bnRyeU9wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElGb3JtVmlld1Byb3BzLCBGb3JtVmlldywgaXNWYWxpZElkIH0gZnJvbSAnbWF0ZXJpYWwtdWktZm9ybXMnO1xyXG5pbXBvcnQgUmVzaWRlbmNlIGZyb20gJy4uLy4uL21vZGVscy9SZXNpZGVuY2UnO1xyXG5pbXBvcnQgcmVzaWRlbmNlc0NvbnRyb2xsZXIgZnJvbSAnLi4vLi4vY29udHJvbGxlcnMvUmVzaWRlbmNlQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFJlc2lkZW5jZUZvcm0gfSBmcm9tICcuL1Jlc2lkZW5jZUZvcm0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzaWRlbmNlRm9ybVZpZXcocHJvcHM6IElGb3JtVmlld1Byb3BzKSB7XHJcbiAgY29uc3QgW2Zvcm1zLCBzZXRGb3Jtc10gPSB1c2VTdGF0ZShbXSBhcyBSZXNpZGVuY2VbXSk7XHJcbiAgY29uc3QgW3VpZCwgc2V0VWlkXSA9IHVzZVN0YXRlKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9hZCA9IGFzeW5jIChsb2NhbDogYm9vbGVhbiwgZGF0YT86IGFueSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gICAgaWYgKGxvY2FsICYmIGRhdGEpIHtcclxuICAgICAgc2V0Rm9ybXMoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc3QgcmVzaWRlbmNlcyA9IGF3YWl0IHJlc2lkZW5jZXNDb250cm9sbGVyLmdldEFsbCgpO1xyXG4gICAgICBpZiAoIXJlc2lkZW5jZXMpIHJldHVybiBmYWxzZTtcclxuICAgICAgc2V0Rm9ybXMocmVzaWRlbmNlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZE5ld0l0ZW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBmb3Jtcy5wdXNoKHsgcmVzaWRlbmNlSWQ6IHVpZCAgfSBhcyBSZXNpZGVuY2UpO1xyXG4gICAgc2V0VWlkKGN1cnIgPT4gY3VyciAtIDEpO1xyXG4gICAgc2V0Rm9ybXMoWy4uLmZvcm1zXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcbiAgICBsZXQgc3VjY2VzcyA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JFYWNoKGFzeW5jIChyZXNpZGVuY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChyZXNpZGVuY2UucmVzaWRlbmNlSWQgIT09IHVuZGVmaW5lZCAmJiBpc1ZhbGlkSWQocmVzaWRlbmNlLnJlc2lkZW5jZUlkKSkge1xyXG4gICAgICAgIGlmICghYXdhaXQgaGFuZGxlVXBkYXRlKHJlc2lkZW5jZS5yZXNpZGVuY2VJZCwgcmVzaWRlbmNlKSkge1xyXG4gICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoIWF3YWl0IGhhbmRsZUNyZWF0ZShpbmRleCwgcmVzaWRlbmNlKSkge1xyXG4gICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VjY2VzcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IGFzeW5jIChpbmRleDogbnVtYmVyLCByZXNpZGVuY2U6IFJlc2lkZW5jZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gICAgY29uc3QgcmVzaWRlbmNlUmVzcG9uc2UgPSBhd2FpdCByZXNpZGVuY2VzQ29udHJvbGxlci5jcmVhdGUoeyAuLi5yZXNpZGVuY2UsIHJlc2lkZW5jZUlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBpZiAocmVzaWRlbmNlUmVzcG9uc2UpIHtcclxuICAgICAgLy9GbHVzaCBGb3JtcyB0ZW1wIGtleSBmb3IgcmVhbCBrZXlcclxuICAgICAgY29uc3QgdEZvcm1zID0gZm9ybXM7XHJcbiAgICAgIHRGb3Jtc1tpbmRleF0gPSByZXNpZGVuY2VSZXNwb25zZVxyXG4gICAgICBzZXRGb3JtcyhbXSlcclxuICAgICAgc2V0Rm9ybXModEZvcm1zKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoaWQ6IG51bWJlciwgcmVzaWRlbmNlOiBSZXNpZGVuY2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzaWRlbmNlc0NvbnRyb2xsZXIudXBkYXRlKGlkLCByZXNpZGVuY2UpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIGNvbnN0IHJlc2lkZW5jZUlkID0gZm9ybXNbaW5kZXhdLnJlc2lkZW5jZUlkO1xyXG4gICAgaWYgKHJlc2lkZW5jZUlkICE9PSB1bmRlZmluZWQgJiYgaXNWYWxpZElkKHJlc2lkZW5jZUlkKSkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc2lkZW5jZXNDb250cm9sbGVyLmRlbGV0ZShyZXNpZGVuY2VJZCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2UpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IGZvcm1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5yZXNpZGVuY2VJZCAhPT0gcmVzaWRlbmNlSWQpO1xyXG4gICAgICBzZXRGb3JtcyhmaWx0ZXJlZFJlc3VsdHMpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVDaGFuZ2VzID0gYXN5bmMgKCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gICAgc2V0Rm9ybXMoWy4uLmZvcm1zXSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUdlbmVyYXRlS2V5ID0gKGl0ZW06IFJlc2lkZW5jZSkgPT4ge1xyXG4gICAgcmV0dXJuIGBSZXNpZGVuY2Uke2l0ZW0ucmVzaWRlbmNlSWR9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVZpZXc8UmVzaWRlbmNlPlxyXG4gICAgICBGb3JtRWxlbWVudD17UmVzaWRlbmNlRm9ybX1cclxuICAgICAgdGl0bGU9e1wiUmVzaWRlbmNlc1wifVxyXG4gICAgICBtaW5Ob2Rlcz17MX1cclxuICAgICAgbWF4Tm9kZXM9ezN9XHJcbiAgICAgIGZvcm1zPXtmb3Jtc31cclxuICAgICAgaGFuZGxlTG9hZD17aGFuZGxlTG9hZH1cclxuICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIGhhbmRsZUFkZE5ld0l0ZW09e2hhbmRsZUFkZE5ld0l0ZW19XHJcbiAgICAgIGhhbmRsZVNhdmVDaGFuZ2VzPXtoYW5kbGVTYXZlQ2hhbmdlc31cclxuICAgICAgaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9XHJcbiAgICAgIGhhbmRsZUdlbmVyYXRlS2V5PXtoYW5kbGVHZW5lcmF0ZUtleX1cclxuICAgICAgZGVmYXVsdExvY2tlZD17cHJvcHMuZGVmYXVsdExvY2tlZH1cclxuICAgICAgc3VibWl0QnV0dG9uUmVmPXtwcm9wcy5zdWJtaXRCdXR0b25SZWZ9XHJcbiAgICAgIG9uTmV4dD17cHJvcHMub25OZXh0fVxyXG4gICAgICBoaWRlTG9ja0J1dHRvbj17cHJvcHMuaGlkZUxvY2tCdXR0b259XHJcbiAgICAgIGhpZGVTYXZlUHJvZ3Jlc3NCdXR0b249e3Byb3BzLmhpZGVTYXZlUHJvZ3Jlc3NCdXR0b259XHJcbiAgICAgIGhpZGVQcmludEJ1dHRvbj17cHJvcHMuaGlkZVByaW50QnV0dG9ufVxyXG4gICAgLz5cclxuICApXHJcbn0iLCJpbXBvcnQgeyBNb2NrQXBpIH0gZnJvbSBcIi4uL21vY2tBcGkvbW9ja0FwaVwiO1xyXG5pbXBvcnQgUmVzaWRlbmNlIGZyb20gXCIuLi9tb2RlbHMvUmVzaWRlbmNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXNpZGVuY2VzQ29udHJvbGxlciB7XHJcbiAgICBnZXRBbGwoKTogUHJvbWlzZTxSZXNpZGVuY2VbXSB8IG51bGw+O1xyXG4gICAgZ2V0KGlkOiBudW1iZXIpOiBQcm9taXNlPFJlc2lkZW5jZSB8IG51bGw+O1xyXG4gICAgY3JlYXRlKHJlc2lkZW5jZTogUmVzaWRlbmNlKTogUHJvbWlzZTxSZXNpZGVuY2UgfCBudWxsPjtcclxuICAgIHVwZGF0ZShpZDogbnVtYmVyLCByZXNpZGVuY2U6IFJlc2lkZW5jZSk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8UmVzaWRlbmNlIHwgbnVsbD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXNpZGVuY2VDb250cm9sbGVyOiBDb21tb24gQVBJIE1ldGhvZHMgdXNlZCBmb3IgV2ViIEZvcm1zXHJcbiAqIG1vY2tBcGk6IFNpbXVsYXRlcyBhbiBBeGlvcyBBUEkgY2FsbCB0byB5b3VyIHNlcnZlclxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNpZGVuY2VzQ29udHJvbGxlciBpbXBsZW1lbnRzIElSZXNpZGVuY2VzQ29udHJvbGxlciB7XHJcbiAgICBjb250cm9sbGVyID0gXCIvcmVzaWRlbmNlc1wiO1xyXG4gICAgbW9ja0FwaSA9IG5ldyBNb2NrQXBpPFJlc2lkZW5jZT4oXCJyZXNpZGVuY2VJZFwiKTtcclxuXHJcbiAgICBhc3luYyBnZXRBbGwoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1vY2tBcGkuZ2V0KGAke3RoaXMuY29udHJvbGxlcn1gKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSBcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFJlc2lkZW5jZVtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXQoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2NrQXBpLmdldChgJHt0aGlzLmNvbnRyb2xsZXJ9LyR7aWR9YCk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBSZXNpZGVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNyZWF0ZShyZXNpZGVuY2U6IFJlc2lkZW5jZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2NrQXBpLnBvc3QoYCR7dGhpcy5jb250cm9sbGVyfWAsIHJlc2lkZW5jZSlcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgUmVzaWRlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZShpZDogbnVtYmVyLCByZXNpZGVuY2U6IFJlc2lkZW5jZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tb2NrQXBpLnB1dChgJHt0aGlzLmNvbnRyb2xsZXJ9LyR7aWR9YCwgcmVzaWRlbmNlKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubW9ja0FwaS5kZWxldGUoYCR7dGhpcy5jb250cm9sbGVyfS8ke2lkfWApXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIFJlc2lkZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHsgcmV0dXJuIHJlc2lkZW5jZXNDb250cm9sbGVyIH1cclxufVxyXG5cclxuY29uc3QgcmVzaWRlbmNlc0NvbnRyb2xsZXIgPSBuZXcgUmVzaWRlbmNlc0NvbnRyb2xsZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc2lkZW5jZXNDb250cm9sbGVyOyIsIlxyXG5leHBvcnQgdHlwZSBSZXNwb25zZSA9IHtcclxuICAgIHN0YXR1czogbnVtYmVyO1xyXG4gICAgZGF0YTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNb2NrQXBpPFQ+IHtcclxuICAgIGdldCh1cmw6IHN0cmluZyk6IFByb21pc2U8UmVzcG9uc2U+O1xyXG4gICAgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogVCk6IFByb21pc2U8UmVzcG9uc2U+O1xyXG4gICAgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBUKTogUHJvbWlzZTxSZXNwb25zZT47XHJcbiAgICBkZWxldGUodXJsOiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vY2tBcGk8VD4gaW1wbGVtZW50cyBJTW9ja0FwaTxUPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGtleTogc3RyaW5nXHJcbiAgICApIHt9XHJcblxyXG4gICAgaWRSZWdleCA9IC9cXGQrL2c7XHJcbiAgICBnZXRJZCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHRoaXMuaWRSZWdleClcclxuICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBwYXJzZUludChtYXRjaFswXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7IGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gZ2V0IElkJykgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCh1cmwpO1xyXG4gICAgICAgIGlmIChpZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmdldERhdGEoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmdldERhdGFCeUlkKGlkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcG9zdCh1cmw6IHN0cmluZywgcG9zdERhdGE6IFQpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgZGF0YS5wdXNoKHsgLi4ucG9zdERhdGEsIFt0aGlzLmtleV06IG5leHRJbmRleCB9KVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IDIwMSwgZGF0YTogdGhpcy5nZXREYXRhQnlJZChuZXh0SW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHB1dCh1cmw6IHN0cmluZywgdXBkYXRlRGF0YTogVCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaWQgIT09IG51bGwgJiYgZGF0YS5sZW5ndGggPiBpZCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGRhdGEuZmluZEluZGV4KChpdGVtOiBhbnkpID0+IHsgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVt0aGlzLmtleV0gPT09IGlkIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkYXRhW2luZGV4XSA9IHVwZGF0ZURhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogMjA0LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICAgICAgICAgIGRhdGE6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmdldElkKHVybCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSXRlbSA9IGRhdGEuZmluZCgoaXRlbTogYW55KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1bdGhpcy5rZXldID09PSBpZCBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0sIF8pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtICE9PSBkZWxldGVJdGVtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh1cGRhdGVkRGF0YSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkZWxldGVJdGVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IDQwNCxcclxuICAgICAgICAgICAgZGF0YTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCk6IFRbXSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3RoaXMua2V5fW1vY2tBcGlgKTtcclxuICAgICAgICAgICAgaWYgKGpzb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pIGFzIFRbXTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHVuYWJsZSB0byBsb2FkIGRhdGEgZnJvbSBsb2NhbHN0b3JhZ2U6IGtleSAke3RoaXMua2V5fW1vY2tBcGlgKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdIGFzIFRbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhQnlJZChpZDogbnVtYmVyKTogVCB8IG51bGwge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLmtleX1tb2NrQXBpYCk7XHJcbiAgICAgICAgICAgIGlmIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uKSBhcyBUW107XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaWRdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHVuYWJsZSB0byBsb2FkIGRhdGEgZnJvbSBsb2NhbHN0b3JhZ2U6IGtleSAke3RoaXMua2V5fW1vY2tBcGlgKSBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBzZXREYXRhKGRhdGE6IFRbXSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMua2V5fW1vY2tBcGlgLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVbmFibGUgdG8gdXBkYXRlIGxvY2Fsc3RvcmFnZSBrZXk6ICR7dGhpcy5rZXl9bW9ja0FwaWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVzaWRlbmNlRm9ybVZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3Jtcy9SZXNpZGVuY2VGb3JtVmlldyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJGb3JtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFJlc2lkZW5jZUZvcm1WaWV3IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtYXRlcmlhbC11aS1mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==