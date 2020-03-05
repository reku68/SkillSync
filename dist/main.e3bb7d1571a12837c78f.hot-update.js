webpackHotUpdate("main",{

/***/ "./src/components/EditableStarRating.js":
/*!**********************************************!*\
  !*** ./src/components/EditableStarRating.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar EditableStarRating = function EditableStarRating(props) {\n  var starImages = {\n    full: props.full,\n    empty: props.empty,\n    height: props.height,\n    width: props.width\n  };\n  var currentStarsValues = [];\n\n  for (var i = 0; i < props.totalStars; i++) {\n    currentStarsValues.push(false);\n  }\n\n  var updateStars = function updateStars(num) {\n    var starBulArr = [];\n\n    for (var _i = 0; _i < props.totalStars; _i++) {\n      if (_i <= num) {\n        starBulArr.push(true);\n      } else {\n        starBulArr.push(false);\n      }\n    }\n\n    currentStarsValues = starBulArr;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, currentStarsValues.map(function (starValue, indx) {\n    if (starValue) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        key: indx\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: starImages.full,\n        alt: \"\".concat(indx),\n        width: starImages.width,\n        height: starImages.height,\n        onClick: function onClick() {\n          updateStars(indx);\n\n          if (props.starClickCallback) {\n            props.handleRatingChange(indx + 1);\n          }\n        }\n      }));\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        key: indx\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: props.starImages.empty,\n        alt: \"\".concat(indx),\n        width: props.starImages.width,\n        height: props.starImages.height,\n        key: \"\".concat(indx),\n        onClick: function onClick() {\n          updateStars(indx);\n\n          if (props.starClickCallback) {\n            props.handleRatingChange(indx + 1);\n          }\n        }\n      }));\n    }\n  }));\n};\n\n//# sourceURL=webpack:///./src/components/EditableStarRating.js?");

/***/ })

})