webpackHotUpdate_N_E("pages/views/form-view",{

/***/ "./src/components/forms/ResidenceFormView.tsx":
/*!****************************************************!*\
  !*** ./src/components/forms/ResidenceFormView.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResidenceFormView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_armyj_Documents_GitHub_node_library_material_ui_forms_examples_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-ui-forms */ "./node_modules/material-ui-forms/dist/index.js");
/* harmony import */ var material_ui_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_ui_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controllers/ResidenceController */ "./src/controllers/ResidenceController.ts");
/* harmony import */ var _ResidenceForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResidenceForm */ "./src/components/forms/ResidenceForm.tsx");



var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\node_library\\material-ui-forms\\examples\\src\\components\\forms\\ResidenceFormView.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_armyj_Documents_GitHub_node_library_material_ui_forms_examples_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function ResidenceFormView(props) {
  _s();

  const {
    0: forms,
    1: setForms
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const {
    0: uid,
    1: setUid
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Number.MAX_SAFE_INTEGER);

  const handleLoad = async (local, data) => {
    if (local && data) {
      setForms(data);
    } else {
      const residences = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__["default"].getAll();
      if (!residences) return false;
      setForms(residences);
    }

    return true;
  };

  const handleAddNewItem = async () => {
    forms.push({
      residenceId: Number.MAX_SAFE_INTEGER
    });
    setUid(curr => curr - 1);
    setForms([...forms]);
  };

  const handleSubmit = async () => {
    let success = true;
    forms.forEach(async (residence, index) => {
      if (residence.residenceId !== undefined && Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_3__["isValidId"])(residence.residenceId)) {
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
    const residenceResponse = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__["default"].create(_objectSpread(_objectSpread({}, residence), {}, {
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
    const response = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__["default"].update(id, residence);
    return response;
  };

  const handleDelete = async index => {
    const residenceId = forms[index].residenceId;

    if (residenceId !== undefined && Object(material_ui_forms__WEBPACK_IMPORTED_MODULE_3__["isValidId"])(residenceId)) {
      const response = await _controllers_ResidenceController__WEBPACK_IMPORTED_MODULE_4__["default"].delete(residenceId);

      if (!response) {
        return false;
      }

      setTimeout(() => {
        const filteredResults = forms.filter(item => item.residenceId !== residenceId);
        setForms(filteredResults);
      });
    }

    return true;
  };

  const handleSaveChanges = async () => {
    setForms([...forms]);
    return true;
  };

  const handleGenerateKey = item => {
    return `Residence${item.residenceId}`;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_forms__WEBPACK_IMPORTED_MODULE_3__["FormView"], {
    FormElement: _ResidenceForm__WEBPACK_IMPORTED_MODULE_5__["ResidenceForm"],
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
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

_s(ResidenceFormView, "AAzx5zi/7p30XLtU/03Gnb1Dly4=");

_c = ResidenceFormView;

var _c;

$RefreshReg$(_c, "ResidenceFormView");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybXMvUmVzaWRlbmNlRm9ybVZpZXcudHN4Il0sIm5hbWVzIjpbIlJlc2lkZW5jZUZvcm1WaWV3IiwicHJvcHMiLCJmb3JtcyIsInNldEZvcm1zIiwidXNlU3RhdGUiLCJ1aWQiLCJzZXRVaWQiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaGFuZGxlTG9hZCIsImxvY2FsIiwiZGF0YSIsInJlc2lkZW5jZXMiLCJyZXNpZGVuY2VzQ29udHJvbGxlciIsImdldEFsbCIsImhhbmRsZUFkZE5ld0l0ZW0iLCJwdXNoIiwicmVzaWRlbmNlSWQiLCJjdXJyIiwiaGFuZGxlU3VibWl0Iiwic3VjY2VzcyIsImZvckVhY2giLCJyZXNpZGVuY2UiLCJpbmRleCIsInVuZGVmaW5lZCIsImlzVmFsaWRJZCIsImhhbmRsZVVwZGF0ZSIsImhhbmRsZUNyZWF0ZSIsInJlc2lkZW5jZVJlc3BvbnNlIiwiY3JlYXRlIiwidEZvcm1zIiwiaWQiLCJyZXNwb25zZSIsInVwZGF0ZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZSIsInNldFRpbWVvdXQiLCJmaWx0ZXJlZFJlc3VsdHMiLCJmaWx0ZXIiLCJpdGVtIiwiaGFuZGxlU2F2ZUNoYW5nZXMiLCJoYW5kbGVHZW5lcmF0ZUtleSIsIlJlc2lkZW5jZUZvcm0iLCJkZWZhdWx0TG9ja2VkIiwic3VibWl0QnV0dG9uUmVmIiwib25OZXh0IiwiaGlkZUxvY2tCdXR0b24iLCJoaWRlU2F2ZVByb2dyZXNzQnV0dG9uIiwiaGlkZVByaW50QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0Q7QUFBQTs7QUFDL0QsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFD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RDs7R0FyR3VCaEQsaUI7O0tBQUFBLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZXdzL2Zvcm0tdmlldy5lNTMxMzVlZjFhMTc5OTYwODgxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJRm9ybVZpZXdQcm9wcywgRm9ybVZpZXcsIGlzVmFsaWRJZCB9IGZyb20gJ21hdGVyaWFsLXVpLWZvcm1zJztcclxuaW1wb3J0IFJlc2lkZW5jZSBmcm9tICcuLi8uLi9tb2RlbHMvUmVzaWRlbmNlJztcclxuaW1wb3J0IHJlc2lkZW5jZXNDb250cm9sbGVyIGZyb20gJy4uLy4uL2NvbnRyb2xsZXJzL1Jlc2lkZW5jZUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBSZXNpZGVuY2VGb3JtIH0gZnJvbSAnLi9SZXNpZGVuY2VGb3JtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc2lkZW5jZUZvcm1WaWV3KHByb3BzOiBJRm9ybVZpZXdQcm9wcykge1xyXG4gIGNvbnN0IFtmb3Jtcywgc2V0Rm9ybXNdID0gdXNlU3RhdGUoW10gYXMgUmVzaWRlbmNlW10pO1xyXG4gIGNvbnN0IFt1aWQsIHNldFVpZF0gPSB1c2VTdGF0ZShOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvYWQgPSBhc3luYyAobG9jYWw6IGJvb2xlYW4sIGRhdGE/OiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIGlmIChsb2NhbCAmJiBkYXRhKSB7XHJcbiAgICAgIHNldEZvcm1zKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlc2lkZW5jZXMgPSBhd2FpdCByZXNpZGVuY2VzQ29udHJvbGxlci5nZXRBbGwoKTtcclxuICAgICAgaWYgKCFyZXNpZGVuY2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHNldEZvcm1zKHJlc2lkZW5jZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVBZGROZXdJdGVtID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZm9ybXMucHVzaCh7IHJlc2lkZW5jZUlkOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiAgfSBhcyBSZXNpZGVuY2UpO1xyXG4gICAgc2V0VWlkKGN1cnIgPT4gY3VyciAtIDEpO1xyXG4gICAgc2V0Rm9ybXMoWy4uLmZvcm1zXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcbiAgICBsZXQgc3VjY2VzcyA9IHRydWU7XHJcbiAgICBmb3Jtcy5mb3JFYWNoKGFzeW5jIChyZXNpZGVuY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChyZXNpZGVuY2UucmVzaWRlbmNlSWQgIT09IHVuZGVmaW5lZCAmJiBpc1ZhbGlkSWQocmVzaWRlbmNlLnJlc2lkZW5jZUlkKSkge1xyXG4gICAgICAgIGlmICghYXdhaXQgaGFuZGxlVXBkYXRlKHJlc2lkZW5jZS5yZXNpZGVuY2VJZCwgcmVzaWRlbmNlKSkge1xyXG4gICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBpZiAoIWF3YWl0IGhhbmRsZUNyZWF0ZShpbmRleCwgcmVzaWRlbmNlKSkge1xyXG4gICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3VjY2VzcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IGFzeW5jIChpbmRleDogbnVtYmVyLCByZXNpZGVuY2U6IFJlc2lkZW5jZSk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xyXG4gICAgY29uc3QgcmVzaWRlbmNlUmVzcG9uc2UgPSBhd2FpdCByZXNpZGVuY2VzQ29udHJvbGxlci5jcmVhdGUoeyAuLi5yZXNpZGVuY2UsIHJlc2lkZW5jZUlkOiB1bmRlZmluZWQgfSk7XHJcbiAgICBpZiAocmVzaWRlbmNlUmVzcG9uc2UpIHtcclxuICAgICAgLy9GbHVzaCBGb3JtcyB0ZW1wIGtleSBmb3IgcmVhbCBrZXlcclxuICAgICAgY29uc3QgdEZvcm1zID0gZm9ybXM7XHJcbiAgICAgIHRGb3Jtc1tpbmRleF0gPSByZXNpZGVuY2VSZXNwb25zZVxyXG4gICAgICBzZXRGb3JtcyhbXSlcclxuICAgICAgc2V0Rm9ybXModEZvcm1zKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoaWQ6IG51bWJlciwgcmVzaWRlbmNlOiBSZXNpZGVuY2UpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVzaWRlbmNlc0NvbnRyb2xsZXIudXBkYXRlKGlkLCByZXNpZGVuY2UpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGluZGV4OiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIGNvbnN0IHJlc2lkZW5jZUlkID0gZm9ybXNbaW5kZXhdLnJlc2lkZW5jZUlkO1xyXG4gICAgaWYgKHJlc2lkZW5jZUlkICE9PSB1bmRlZmluZWQgJiYgaXNWYWxpZElkKHJlc2lkZW5jZUlkKSkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlc2lkZW5jZXNDb250cm9sbGVyLmRlbGV0ZShyZXNpZGVuY2VJZCk7XHJcbiAgICAgIGlmICghcmVzcG9uc2UpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFJlc3VsdHMgPSBmb3Jtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ucmVzaWRlbmNlSWQgIT09IHJlc2lkZW5jZUlkKTtcclxuICAgICAgICBzZXRGb3JtcyhmaWx0ZXJlZFJlc3VsdHMpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQ2hhbmdlcyA9IGFzeW5jICgpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIHNldEZvcm1zKFsuLi5mb3Jtc10pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZUtleSA9IChpdGVtOiBSZXNpZGVuY2UpID0+IHtcclxuICAgIHJldHVybiBgUmVzaWRlbmNlJHtpdGVtLnJlc2lkZW5jZUlkfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1WaWV3PFJlc2lkZW5jZT5cclxuICAgICAgRm9ybUVsZW1lbnQ9e1Jlc2lkZW5jZUZvcm19XHJcbiAgICAgIHRpdGxlPXtcIlJlc2lkZW5jZXNcIn1cclxuICAgICAgbWluTm9kZXM9ezF9XHJcbiAgICAgIG1heE5vZGVzPXszfVxyXG4gICAgICBmb3Jtcz17Zm9ybXN9XHJcbiAgICAgIGhhbmRsZUxvYWQ9e2hhbmRsZUxvYWR9XHJcbiAgICAgIGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBoYW5kbGVBZGROZXdJdGVtPXtoYW5kbGVBZGROZXdJdGVtfVxyXG4gICAgICBoYW5kbGVTYXZlQ2hhbmdlcz17aGFuZGxlU2F2ZUNoYW5nZXN9XHJcbiAgICAgIGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICBoYW5kbGVHZW5lcmF0ZUtleT17aGFuZGxlR2VuZXJhdGVLZXl9XHJcbiAgICAgIGRlZmF1bHRMb2NrZWQ9e3Byb3BzLmRlZmF1bHRMb2NrZWR9XHJcbiAgICAgIHN1Ym1pdEJ1dHRvblJlZj17cHJvcHMuc3VibWl0QnV0dG9uUmVmfVxyXG4gICAgICBvbk5leHQ9e3Byb3BzLm9uTmV4dH1cclxuICAgICAgaGlkZUxvY2tCdXR0b249e3Byb3BzLmhpZGVMb2NrQnV0dG9ufVxyXG4gICAgICBoaWRlU2F2ZVByb2dyZXNzQnV0dG9uPXtwcm9wcy5oaWRlU2F2ZVByb2dyZXNzQnV0dG9ufVxyXG4gICAgICBoaWRlUHJpbnRCdXR0b249e3Byb3BzLmhpZGVQcmludEJ1dHRvbn1cclxuICAgIC8+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==