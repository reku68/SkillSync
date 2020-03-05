webpackHotUpdate("main",{

/***/ "./src/components/CustomHooks.js":
/*!***************************************!*\
  !*** ./src/components/CustomHooks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar useReview = function useReview(callback) {\n  //initializes a state variable and its setter function\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1]; //manages the submit event\n\n\n  var handleSubmit = function handleSubmit(event) {\n    if (event) {\n      event.preventDefault();\n    } // if(callback){\n\n\n    callback(); // }\n  }; //manages the input event\n\n\n  var handleInputChange = function handleInputChange(event) {\n    event.persist();\n    setInputs(function (inputs) {\n      return {\n        text: event.target.value\n      };\n    });\n  }; //return the handleSubmit, handleInputChange, and the inputs\n\n\n  return {\n    handleSubmit: handleSubmit,\n    handleInputChange: handleInputChange,\n    inputs: inputs\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useReview);\n\n//# sourceURL=webpack:///./src/components/CustomHooks.js?");

/***/ })

})