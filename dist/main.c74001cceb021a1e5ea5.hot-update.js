webpackHotUpdate("main",{

/***/ "./src/components/ReviewPage.js":
/*!**************************************!*\
  !*** ./src/components/ReviewPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _EditableStarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditableStarRating */ \"./src/components/EditableStarRating.js\");\nvar _this = undefined;\n\n\n // import SearchBar from \"./Searchbar\"\n\nvar ReviewPage = function ReviewPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"reviewContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"reviewPageTitle\"\n  }, \"Rate & Review\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"userFullName\"\n  }, \"\".concat(props.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableStarRating__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    totalStars: 5,\n    full: \"https://img.pngio.com/star-png-images-download-33366-star-png-resources-with-yellow-and-blue-png-360_360.png\",\n    empty: \"https://www.festivalclaca.cat/pics/b/28/282884_star-outline-png.png\",\n    width: \"65px\",\n    height: \"65px\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    placeholder: \"How is \".concat(props.username, \" as a teacher?\"),\n    id: \"review-text\",\n    style: {\n      width: \"500px\",\n      height: \"300px\",\n      marginBottom: \"50px\"\n    },\n    onChange: props.handleReviewTextChange\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"reviewSubmitButton\",\n    onClick: function onClick() {\n      _this.props.handleSubmitReview({\n        review_text: _this.state.review_text,\n        review_title: _this.state.review_title,\n        rating: _this.state.rating,\n        user_id: 1,\n        product_id: _this.props.currentItem.id\n      });\n    }\n  }, \"Review\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewPage);\n\n//# sourceURL=webpack:///./src/components/ReviewPage.js?");

/***/ })

})