"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/navigation/Drawer.tsx":
/*!******************************************!*\
  !*** ./components/navigation/Drawer.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DrawerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Drawer */ "@mui/material/Drawer");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/styles/createStyles */ "@mui/styles/createStyles");
/* harmony import */ var _mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/styles/makeStyles */ "@mui/styles/makeStyles");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _drawer_NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawer/NavItem */ "./components/navigation/drawer/NavItem.tsx");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material */ "@mui/icons-material");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\components\\navigation\\Drawer.tsx";








const useStyles = _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_4___default()(theme => _mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_3___default()({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));
function DrawerComponent(props) {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_1___default()), {
    open: props.drawerOpened,
    onClose: props.closeDrawerHandler,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
      className: classes.list,
      role: "presentation",
      onClick: props.closeDrawerHandler,
      onKeyDown: props.closeDrawerHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_drawer_NavItem__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
          label: "Home",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.Home, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 41
          }, this),
          pathname: "/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_drawer_NavItem__WEBPACK_IMPORTED_MODULE_5__.NavItem, {
          label: "FormView",
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_6__.ViewList, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 45
          }, this),
          pathname: "/views/form-view"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/navigation/Navigation.tsx":
/*!**********************************************!*\
  !*** ./components/navigation/Navigation.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar */ "./components/navigation/Toolbar.tsx");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drawer */ "./components/navigation/Drawer.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\components\\navigation\\Navigation.tsx";





function Navigation() {
  const {
    0: drawerOpened,
    1: setDrawerOpened
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Toolbar__WEBPACK_IMPORTED_MODULE_1__.default, {
      openDrawerHandler: () => setDrawerOpened(true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Drawer__WEBPACK_IMPORTED_MODULE_2__.default, {
      drawerOpened: drawerOpened,
      closeDrawerHandler: () => setDrawerOpened(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/navigation/Toolbar.tsx":
/*!*******************************************!*\
  !*** ./components/navigation/Toolbar.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Menu */ "@mui/icons-material/Menu");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/styles/createStyles */ "@mui/styles/createStyles");
/* harmony import */ var _mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/styles/makeStyles */ "@mui/styles/makeStyles");
/* harmony import */ var _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\components\\navigation\\Toolbar.tsx";











const useStyles = _mui_styles_makeStyles__WEBPACK_IMPORTED_MODULE_9___default()(theme => _mui_styles_createStyles__WEBPACK_IMPORTED_MODULE_8___default()({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logoLink: {
    paddingX: 0
  }
}));
function ToolbarComponent(props) {
  const classes = useStyles();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: classes.grow,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
      position: "static",
      color: "transparent",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
          edge: "start",
          className: classes.menuButton,
          color: "primary",
          "aria-label": "open drawer",
          onClick: props.openDrawerHandler,
          size: "large",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
          className: classes.logoLink,
          onClick: () => router.push("/"),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "h6",
            noWrap: true,
            children: "material-ui-forms"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/navigation/drawer/NavItem.tsx":
/*!**************************************************!*\
  !*** ./components/navigation/drawer/NavItem.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavItem": () => (/* binding */ NavItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\components\\navigation\\drawer\\NavItem.tsx";




function NavItem(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const handleClick = event => {
    if (props.pathname) {
      router.push(props.pathname);
    } else {
      props.onClick && props.onClick();
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
    button: true,
    selected: props.pathname ? router.pathname === props.pathname : false,
    onClick: handleClick,
    children: [props.icon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
      children: props.icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {
      primary: props.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navigation/Navigation */ "./components/navigation/Navigation.tsx");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\armyj\\Documents\\GitHub\\material-ui-forms\\examples\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.StyledEngineProvider, {
    injectFirst: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        style: {
          minHeight: "100vh",
          minWidth: 320
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
          className: "mt-3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./theme.tsx":
/*!*******************!*\
  !*** ./theme.tsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

let theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.adaptV4Theme)({
  palette: {
    primary: {
      main: "#002856"
    },
    secondary: {
      main: "#e66c17"
    }
  }
}));
theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "@mui/icons-material":
/*!**************************************!*\
  !*** external "@mui/icons-material" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Drawer":
/*!***************************************!*\
  !*** external "@mui/material/Drawer" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/styles/createStyles":
/*!*******************************************!*\
  !*** external "@mui/styles/createStyles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/styles/createStyles");

/***/ }),

/***/ "@mui/styles/makeStyles":
/*!*****************************************!*\
  !*** external "@mui/styles/makeStyles" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/styles/makeStyles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0RyYXdlci50c3giLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvLi9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvLi9jb21wb25lbnRzL25hdmlnYXRpb24vVG9vbGJhci50c3giLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvLi9jb21wb25lbnRzL25hdmlnYXRpb24vZHJhd2VyL05hdkl0ZW0udHN4Iiwid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvLi90aGVtZS50c3giLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsXCIiLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvZXh0ZXJuYWwgXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIiIsIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1mb3Jtcy1leGFtcGxlcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1mb3Jtcy1leGFtcGxlcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0RyYXdlclwiIiwid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1mb3Jtcy1leGFtcGxlcy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIiIsIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1mb3Jtcy1leGFtcGxlcy9leHRlcm5hbCBcIkBtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlc1wiIiwid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzL2V4dGVybmFsIFwiQG11aS9zdHlsZXMvbWFrZVN0eWxlc1wiIiwid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWF0ZXJpYWwtdWktZm9ybXMtZXhhbXBsZXMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL21hdGVyaWFsLXVpLWZvcm1zLWV4YW1wbGVzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1mb3Jtcy1leGFtcGxlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9EcmF3ZXJcIjtcclxuaW1wb3J0IHsgR3JpZCwgTGlzdCwgVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgY3JlYXRlU3R5bGVzIGZyb20gJ0BtdWkvc3R5bGVzL2NyZWF0ZVN0eWxlcyc7XHJcbmltcG9ydCBtYWtlU3R5bGVzIGZyb20gJ0BtdWkvc3R5bGVzL21ha2VTdHlsZXMnO1xyXG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSBcIi4vZHJhd2VyL05hdkl0ZW1cIjtcclxuaW1wb3J0IHsgSG9tZSwgU3ViZGlyZWN0b3J5QXJyb3dSaWdodCwgVmlld0xpc3QgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgZHJhd2VyRWxlbWVudCA9IHtcclxuICBlbGVtZW50OiBKU1guRWxlbWVudDtcclxuICBjb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgbGlzdDoge1xyXG4gICAgd2lkdGg6IDI1MFxyXG4gIH0sXHJcbiAgZnVsbExpc3Q6IHtcclxuICAgIHdpZHRoOiBcImF1dG9cIlxyXG4gIH1cclxufSkpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRHJhd2VyQ29tcG9uZW50IHtcclxuICBjbG9zZURyYXdlckhhbmRsZXI/OiBhbnk7XHJcbiAgICBkcmF3ZXJPcGVuZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdlckNvbXBvbmVudChwcm9wczogSURyYXdlckNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXIgb3Blbj17cHJvcHMuZHJhd2VyT3BlbmVkfSBvbkNsb3NlPXtwcm9wcy5jbG9zZURyYXdlckhhbmRsZXJ9PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fVxyXG4gICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2xvc2VEcmF3ZXJIYW5kbGVyfVxyXG4gICAgICAgICAgICBvbktleURvd249e3Byb3BzLmNsb3NlRHJhd2VySGFuZGxlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gbGFiZWw9XCJIb21lXCIgaWNvbj17PEhvbWUgLz59IHBhdGhuYW1lPXtcIi9cIn0gIC8+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGxhYmVsPVwiRm9ybVZpZXdcIiBpY29uPXs8Vmlld0xpc3QgLz59IHBhdGhuYW1lPXtcIi92aWV3cy9mb3JtLXZpZXdcIn0gIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvb2xiYXJDb21wb25lbnQgZnJvbSAnLi9Ub29sYmFyJztcclxuaW1wb3J0IERyYXdlckNvbXBvbmVudCBmcm9tICcuL0RyYXdlcic7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XHJcbiAgICBjb25zdCBbZHJhd2VyT3BlbmVkLCBzZXREcmF3ZXJPcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgPFRvb2xiYXJDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICBvcGVuRHJhd2VySGFuZGxlcj17KCkgPT4gc2V0RHJhd2VyT3BlbmVkKHRydWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RHJhd2VyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICBkcmF3ZXJPcGVuZWQ9e2RyYXdlck9wZW5lZH1cclxuICAgICAgICAgICAgICAgIGNsb3NlRHJhd2VySGFuZGxlcj17KCkgPT4gc2V0RHJhd2VyT3BlbmVkKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgR3JpZCwgTGluayB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBjcmVhdGVTdHlsZXMgZnJvbSAnQG11aS9zdHlsZXMvY3JlYXRlU3R5bGVzJztcclxuaW1wb3J0IG1ha2VTdHlsZXMgZnJvbSAnQG11aS9zdHlsZXMvbWFrZVN0eWxlcyc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgTGlzdEFsdCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+IGNyZWF0ZVN0eWxlcyh7XHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDFcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpXHJcbiAgfSxcclxuICBsb2dvTGluazoge1xyXG4gICAgcGFkZGluZ1g6IDAsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVG9vbGJhckNvbXBvbmVudCB7XHJcbiAgb3BlbkRyYXdlckhhbmRsZXI/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2xiYXJDb21wb25lbnQocHJvcHM6IElUb29sYmFyQ29tcG9uZW50KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNvbG9yPVwidHJhbnNwYXJlbnRcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIHsvKiBMZWZ0IHNpZGUgTWVudSBCdXR0b24gKi99XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn1cclxuICAgICAgICAgICAgY29sb3I9e1wicHJpbWFyeVwifVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vcGVuRHJhd2VySGFuZGxlcn1cclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCI+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29MaW5rfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XHJcbiAgICAgICAgICAgICAgbWF0ZXJpYWwtdWktZm9ybXNcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElOYXZJdGVtIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBpY29uPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gICAgcGF0aG5hbWU/OiBzdHJpbmc7XHJcbiAgICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIE5hdkl0ZW0ocHJvcHM6IElOYXZJdGVtKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgICBpZiAocHJvcHMucGF0aG5hbWUpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChwcm9wcy5wYXRobmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7ICAgIFxyXG4gICAgICAgIHByb3BzLm9uQ2xpY2sgJiYgcHJvcHMub25DbGljaygpXHJcbiAgICAgIH0gXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExpc3RJdGVtIGJ1dHRvbiBzZWxlY3RlZD17cHJvcHMucGF0aG5hbWUgPyByb3V0ZXIucGF0aG5hbWUgPT09IHByb3BzLnBhdGhuYW1lIDogZmFsc2V9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICB7cHJvcHMuaWNvbiAmJlxyXG4gICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAge3Byb3BzLmljb259XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtwcm9wcy5sYWJlbH0gLz5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgIClcclxuICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgQ3NzQmFzZWxpbmUsIEdyaWQsIFRoZW1lUHJvdmlkZXIsIFRoZW1lLCBTdHlsZWRFbmdpbmVQcm92aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XHJcblxyXG5cclxuZGVjbGFyZSBtb2R1bGUgJ0BtdWkvc3R5bGVzL2RlZmF1bHRUaGVtZScge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXHJcbiAgaW50ZXJmYWNlIERlZmF1bHRUaGVtZSBleHRlbmRzIFRoZW1lIHt9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRW5naW5lUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgIDxHcmlkIHN0eWxlPXt7bWluSGVpZ2h0OiBcIjEwMHZoXCIsIG1pbldpZHRoOiAzMjB9fT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIi8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1N0eWxlZEVuZ2luZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlVGhlbWUsIHJlc3BvbnNpdmVGb250U2l6ZXMsIGFkYXB0VjRUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbmxldCB0aGVtZSA9IGNyZWF0ZVRoZW1lKGFkYXB0VjRUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBcIiMwMDI4NTZcIixcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogXCIjZTY2YzE3XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIFxyXG50aGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9pY29ucy1tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL2ljb25zLW1hdGVyaWFsL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL3N0eWxlcy9jcmVhdGVTdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9zdHlsZXMvbWFrZVN0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyYXdlciIsIkdyaWQiLCJMaXN0IiwiY3JlYXRlU3R5bGVzIiwibWFrZVN0eWxlcyIsIk5hdkl0ZW0iLCJIb21lIiwiVmlld0xpc3QiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsImxpc3QiLCJ3aWR0aCIsImZ1bGxMaXN0IiwiRHJhd2VyQ29tcG9uZW50IiwicHJvcHMiLCJjbGFzc2VzIiwiZHJhd2VyT3BlbmVkIiwiY2xvc2VEcmF3ZXJIYW5kbGVyIiwidXNlU3RhdGUiLCJUb29sYmFyQ29tcG9uZW50IiwiTmF2aWdhdGlvbiIsInNldERyYXdlck9wZW5lZCIsIkFwcEJhciIsIlRvb2xiYXIiLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIk1lbnVJY29uIiwidXNlUm91dGVyIiwiTGluayIsImdyb3ciLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJsb2dvTGluayIsInBhZGRpbmdYIiwicm91dGVyIiwib3BlbkRyYXdlckhhbmRsZXIiLCJwdXNoIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJoYW5kbGVDbGljayIsImV2ZW50IiwicGF0aG5hbWUiLCJvbkNsaWNrIiwiaWNvbiIsImxhYmVsIiwiSGVhZCIsIkNzc0Jhc2VsaW5lIiwiVGhlbWVQcm92aWRlciIsIlN0eWxlZEVuZ2luZVByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJjcmVhdGVUaGVtZSIsInJlc3BvbnNpdmVGb250U2l6ZXMiLCJhZGFwdFY0VGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiXSwic291cmNlUm9vdCI6IiJ9