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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultAnimation = "{\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}";

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$animation = _ref.animation,
      animation = _ref$animation === undefined ? defaultAnimation : _ref$animation,
      _ref$animationName = _ref.animationName,
      animationName = _ref$animationName === undefined ? "blanketAnimationFadeIn" : _ref$animationName,
      _ref$animationDelay = _ref.animationDelay,
      animationDelay = _ref$animationDelay === undefined ? 0 : _ref$animationDelay,
      _ref$animationDuratio = _ref.animationDuration,
      animationDuration = _ref$animationDuratio === undefined ? 1 : _ref$animationDuratio,
      _ref$animationDelayOf = _ref.animationDelayOffset,
      animationDelayOffset = _ref$animationDelayOf === undefined ? 0.1 : _ref$animationDelayOf,
      _ref$initialStyle = _ref.initialStyle,
      initialStyle = _ref$initialStyle === undefined ? animation === defaultAnimation && { opacity: 0 } : _ref$initialStyle;

  if (children) {
    var styleSheet = document.styleSheets[0];
    var appliedAnimation = "@keyframes " + animationName + " " + animation;
    styleSheet.insertRule(appliedAnimation, styleSheet.cssRules.length);

    return _react2.default.Children.map(children, function (child, index) {
      if (child) {
        var animationStyle = Object.assign({
          animationName: animationName,
          animationDuration: animationDuration + "s",
          animationDelay: animationDelay + index * animationDelayOffset + "s",
          animationFillMode: "forwards"
        }, initialStyle || {});

        return _react2.default.cloneElement(child, {
          style: Object.assign({}, child.props.style, animationStyle)
        });
      } else {
        return "";
      }
    });
  } else {
    return "";
  }
};

/***/ })
/******/ ]);