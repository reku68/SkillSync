webpackHotUpdate("main",{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) {\n    return;\n  }\n\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./src/components/CustomHooks.js":
/*!***************************************!*\
  !*** ./src/components/CustomHooks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar useForm = function useForm(callback) {\n  //initializes a state variable and its setter function\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      inputs = _useState2[0],\n      setInputs = _useState2[1]; //manages the submit event\n\n\n  var handleSubmit = function handleSubmit(event) {\n    if (event) {\n      event.preventDefault();\n    } // if(callback){\n\n\n    callback(); // }\n  }; //manages the input event\n\n\n  var handleInputChange = function handleInputChange(event) {\n    event.persist();\n    setInputs(function (inputs) {\n      return _objectSpread({}, inputs, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, event.target.name, event.target.value));\n    });\n  }; //return the handleSubmit, handleInputChange, and the inputs\n\n\n  return {\n    handleSubmit: handleSubmit,\n    handleInputChange: handleInputChange,\n    inputs: inputs\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useForm);\n\n//# sourceURL=webpack:///./src/components/CustomHooks.js?");

/***/ }),

/***/ "./src/components/EditableStarRating.js":
/*!**********************************************!*\
  !*** ./src/components/EditableStarRating.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar EditableStarRating = function EditableStarRating(props) {\n  var starImages = {\n    full: props.full,\n    empty: props.empty,\n    height: props.height,\n    width: props.width\n  };\n  var currentStarsValues = [];\n\n  for (var i = 0; i < props.totalStars; i++) {\n    currentStarsValues.push(false);\n  }\n\n  var updateStars = function updateStars(num) {\n    var starBulArr = [];\n\n    for (var _i = 0; _i < props.totalStars; _i++) {\n      if (_i <= num) {\n        starBulArr.push(true);\n      } else {\n        starBulArr.push(false);\n      }\n    }\n\n    currentStarsValues = starBulArr;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, currentStarsValues.map(function (starValue, indx) {\n    if (starValue) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        key: indx\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: starImages.full,\n        alt: \"\".concat(indx),\n        width: starImages.width,\n        height: starImages.height,\n        onClick: function onClick() {\n          updateStars(indx);\n\n          if (props.starClickCallback) {\n            props.setRating(indx + 1);\n          }\n        }\n      }));\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        key: indx\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: props.starImages.empty,\n        alt: \"\".concat(indx),\n        width: props.starImages.width,\n        height: props.starImages.height,\n        key: \"\".concat(indx),\n        onClick: function onClick() {\n          updateStars(indx);\n\n          if (props.starClickCallback) {\n            props.setRating(indx + 1);\n          }\n        }\n      }));\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditableStarRating);\n\n//# sourceURL=webpack:///./src/components/EditableStarRating.js?");

/***/ }),

/***/ "./src/components/ReviewPage.js":
/*!**************************************!*\
  !*** ./src/components/ReviewPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EditableStarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableStarRating */ \"./src/components/EditableStarRating.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CustomHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CustomHooks */ \"./src/components/CustomHooks.js\");\n\n\n\n\n // import SearchBar from \"./Searchbar\"\n// {\n//   review_text: this.state.review_text,\n//   review_title: this.state.review_title,\n//   rating: this.state.rating,\n//   user_id: 1,\n//   product_id: this.props.currentItem.id\n// }\n\nvar _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n    _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n    rating = _useState2[0],\n    setRating = _useState2[1];\n\nvar ReviewPage = function ReviewPage(props) {\n  var handleUploadReview = function handleUploadReview(cb) {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"/post_review\", {\n      description: inputs.reviewText,\n      rating: rating,\n      //user_id = props.user_id\n      user_id: 2,\n      //reviewer_id = props.reviewer_id\n      reviewer_id: 3,\n      //skill_id = props.skill_id\n      skill_id: 7\n    }).then(cb);\n  };\n\n  var _useForm = Object(_CustomHooks__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(handleUploadReview),\n      inputs = _useForm.inputs,\n      handleInputChange = _useForm.handleInputChange,\n      handleSubmit = _useForm.handleSubmit;\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"reviewContainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"reviewPageTitle\"\n  }, \"Rate & Review\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"userFullName\"\n  }, \"\".concat(props.username)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EditableStarRating__WEBPACK_IMPORTED_MODULE_2__[\"EditableStarRating\"], {\n    totalStars: 5,\n    full: \"https://img.pngio.com/star-png-images-download-33366-star-png-resources-with-yellow-and-blue-png-360_360.png\",\n    empty: \"https://www.festivalclaca.cat/pics/b/28/282884_star-outline-png.png\",\n    width: \"65px\",\n    height: \"65px\",\n    setRating: setRating\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", {\n    placeholder: \"How is \".concat(props.username, \" as a teacher?\"),\n    id: \"review-text\",\n    style: {\n      width: \"500px\",\n      height: \"300px\",\n      marginBottom: \"50px\"\n    },\n    onChange: handleInputChange,\n    value: inputs.reviewText\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    className: \"reviewSubmitButton\",\n    onClick: handleSubmit\n  }, \"Review\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewPage);\n\n//# sourceURL=webpack:///./src/components/ReviewPage.js?");

/***/ })

})