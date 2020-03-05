webpackHotUpdate("main",{

/***/ "./src/components/ReviewPage.js":
/*!**************************************!*\
  !*** ./src/components/ReviewPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EditableStarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableStarRating */ \"./src/components/EditableStarRating.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CustomHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomHooks */ \"./src/components/CustomHooks.js\");\n\n\n\n\n // import SearchBar from \"./Searchbar\"\n// {\n//   review_text: this.state.review_text,\n//   review_title: this.state.review_title,\n//   rating: this.state.rating,\n//   user_id: 1,\n//   product_id: this.props.currentItem.id\n// }\n\nvar ReviewPage = function ReviewPage(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      rating = _useState2[0],\n      setRating = _useState2[1];\n\n  var handleUploadReview = function handleUploadReview(cb) {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"/post_review\", {\n      description: inputs.reviewText,\n      rating: rating,\n      //user_id = props.user_id\n      user_id: 2,\n      //reviewer_id = props.reviewer_id\n      reviewer_id: 3,\n      //skill_id = props.skill_id\n      skill_id: 7\n    }).then(cb);\n  };\n\n  var _useForm = Object(_CustomHooks__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(handleUploadReview),\n      inputs = _useForm.inputs,\n      handleInputChange = _useForm.handleInputChange,\n      handleSubmit = _useForm.handleSubmit;\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"reviewContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"reviewPageTitle\"\n  }, \"Rate & Review\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"userFullName\"\n  }, \"bob\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EditableStarRating__WEBPACK_IMPORTED_MODULE_2__[\"EditableStarRating\"], {\n    totalStars: 5,\n    full: \"https://img.pngio.com/star-png-images-download-33366-star-png-resources-with-yellow-and-blue-png-360_360.png\",\n    empty: \"https://www.festivalclaca.cat/pics/b/28/282884_star-outline-png.png\",\n    width: \"65px\",\n    height: \"65px\",\n    setRating: setRating\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", {\n    // placeholder={`How is ${props.username} as a teacher?`}\n    placeholder: \"How is bob as a teacher?\",\n    id: \"review-text\",\n    style: {\n      width: \"500px\",\n      height: \"300px\",\n      marginBottom: \"50px\"\n    },\n    onChange: handleInputChange,\n    value: inputs.reviewText\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"reviewSubmitButton\",\n    onClick: handleSubmit\n  }, \"Review\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewPage);\n\n//# sourceURL=webpack:///./src/components/ReviewPage.js?");

/***/ })

})