webpackHotUpdate("main",{

/***/ "./src/components/ReviewPage.js":
/*!**************************************!*\
  !*** ./src/components/ReviewPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReviewPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _EditableStarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableStarRating */ \"./src/components/EditableStarRating.js\");\n\n // import SearchBar from \"./Searchbar\"\n\nfunction ReviewPage(props) {\n  if (this.props.username === undefined) {\n    this.props.username = \"tanya\";\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"reviewContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"reviewPageTitle\"\n  }, \"Rate & Review\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"userFullName\"\n  }, \"\".concat(this.props.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableStarRating__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    totalStars: 5,\n    full: \"https://img.pngio.com/star-png-images-download-33366-star-png-resources-with-yellow-and-blue-png-360_360.png\",\n    empty: \"https://www.festivalclaca.cat/pics/b/28/282884_star-outline-png.png\",\n    width: \"50px\",\n    height: \"65px\"\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/ReviewPage.js?");

/***/ })

})