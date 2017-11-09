module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children,
      animation = _ref.animation,
      animationDelay = _ref.animationDelay,
      animationDuration = _ref.animationDuration,
      animationDelayOffset = _ref.animationDelayOffset,
      initialStyle = _ref.initialStyle;

  var styleSheet = document.styleSheets[0];

  styleSheet.insertRule(animation || defaultAnimation, styleSheet.cssRules.length);

  return children ? _react2.default.Children.map(children, function (child, index) {
    return child && _react2.default.cloneElement(child, {
      style: _extends({}, child.props.style, animatorStyle(index, animation, animationDelay, animationDuration, animationDelayOffset, initialStyle))
    });
  }) : "";
};

var animatorStyle = function animatorStyle(index) {
  var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAnimation;
  var animationDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var animationDuration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var animationDelayOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.1;
  var initialStyle = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : animation === defaultAnimation && { opacity: 0 };
  return _extends({
    animation: animation + " " + animationDuration + "s",
    animationDelay: animationDelay + index * animationDelayOffset + "s",
    animationFillMode: "forwards"
  }, initialStyle);
};

var defaultAnimation = "@-webkit-keyframes fadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}";

/***/ })
/******/ ]);