webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/navigation/Drawer.tsx":
/*!**********************************************!*\
  !*** ./src/components/navigation/Drawer.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawerComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _drawer_NavItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawer/NavItem */ "./src/components/navigation/drawer/NavItem.tsx");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");


var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\node_library\\material-ui-forms\\examples\\src\\components\\navigation\\Drawer.tsx",
    _s = $RefreshSig$();






const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));
function DrawerComponent(props) {
  _s();

  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    open: props.drawerOpened,
    onClose: props.closeDrawerHandler,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      className: classes.list,
      role: "presentation",
      onClick: props.closeDrawerHandler,
      onKeyDown: props.closeDrawerHandler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_drawer_NavItem__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
          label: "Home",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["Home"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 41
          }, this),
          pathname: "/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_drawer_NavItem__WEBPACK_IMPORTED_MODULE_4__["NavItem"], {
          label: "FormView",
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["ViewList"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 45
          }, this),
          pathname: "/views/form-view"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(DrawerComponent, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = DrawerComponent;

var _c;

$RefreshReg$(_c, "DrawerComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9EcmF3ZXIudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsImxpc3QiLCJ3aWR0aCIsImZ1bGxMaXN0IiwiRHJhd2VyQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiZHJhd2VyT3BlbmVkIiwiY2xvc2VEcmF3ZXJIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBRUMsS0FBRCxJQUFrQkMsc0VBQVksQ0FBQztBQUMxREMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRTtBQURILEdBRG9EO0FBSTFEQyxVQUFRLEVBQUU7QUFDUkQsU0FBSyxFQUFFO0FBREM7QUFKZ0QsQ0FBRCxDQUEvQixDQUE1QjtBQWNlLFNBQVNFLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWtEO0FBQUE7O0FBQzdELFFBQU1DLE9BQU8sR0FBR1QsU0FBUyxFQUF6QjtBQUNBLHNCQUNBLHFFQUFDLGdFQUFEO0FBQVEsUUFBSSxFQUFFUSxLQUFLLENBQUNFLFlBQXBCO0FBQWtDLFdBQU8sRUFBRUYsS0FBSyxDQUFDRyxrQkFBakQ7QUFBQSwyQkFDSSxxRUFBQyxzREFBRDtBQUNJLGVBQVMsRUFBRUYsT0FBTyxDQUFDTCxJQUR2QjtBQUVJLFVBQUksRUFBQyxjQUZUO0FBR0ksYUFBTyxFQUFFSSxLQUFLLENBQUNHLGtCQUhuQjtBQUlJLGVBQVMsRUFBRUgsS0FBSyxDQUFDRyxrQkFKckI7QUFBQSw2QkFNRSxxRUFBQyxzREFBRDtBQUFBLGdDQUNFLHFFQUFDLHVEQUFEO0FBQVMsZUFBSyxFQUFDLE1BQWY7QUFBc0IsY0FBSSxlQUFFLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTVCO0FBQXNDLGtCQUFRLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHVEQUFEO0FBQVMsZUFBSyxFQUFDLFVBQWY7QUFBMEIsY0FBSSxlQUFFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhDO0FBQThDLGtCQUFRLEVBQUU7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBZUg7O0dBakJ1QkosZTtVQUNKUCxTOzs7S0FESU8sZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY2YjM4OWFjNWQ1YmU5ZmRhYTc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHlsZXMsIEdyaWQsIExpc3QsIG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdkl0ZW0gfSBmcm9tIFwiLi9kcmF3ZXIvTmF2SXRlbVwiO1xyXG5pbXBvcnQgeyBIb21lLCBTdWJkaXJlY3RvcnlBcnJvd1JpZ2h0LCBWaWV3TGlzdCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmV4cG9ydCB0eXBlIGRyYXdlckVsZW1lbnQgPSB7XHJcbiAgZWxlbWVudDogSlNYLkVsZW1lbnQ7XHJcbiAgY291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiBjcmVhdGVTdHlsZXMoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAyNTBcclxuICB9LFxyXG4gIGZ1bGxMaXN0OiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCJcclxuICB9XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURyYXdlckNvbXBvbmVudCB7XHJcbiAgY2xvc2VEcmF3ZXJIYW5kbGVyPzogYW55O1xyXG4gICAgZHJhd2VyT3BlbmVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXJDb21wb25lbnQocHJvcHM6IElEcmF3ZXJDb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICA8RHJhd2VyIG9wZW49e3Byb3BzLmRyYXdlck9wZW5lZH0gb25DbG9zZT17cHJvcHMuY2xvc2VEcmF3ZXJIYW5kbGVyfT5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH1cclxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlRHJhd2VySGFuZGxlcn1cclxuICAgICAgICAgICAgb25LZXlEb3duPXtwcm9wcy5jbG9zZURyYXdlckhhbmRsZXJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGxhYmVsPVwiSG9tZVwiIGljb249ezxIb21lIC8+fSBwYXRobmFtZT17XCIvXCJ9ICAvPlxyXG4gICAgICAgICAgICA8TmF2SXRlbSBsYWJlbD1cIkZvcm1WaWV3XCIgaWNvbj17PFZpZXdMaXN0IC8+fSBwYXRobmFtZT17XCIvdmlld3MvZm9ybS12aWV3XCJ9ICAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIDwvRHJhd2VyPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9