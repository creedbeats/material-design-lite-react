module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.js */1);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Chip = exports.Button = exports.Badge = undefined;
	
	var _Badge2 = __webpack_require__(/*! ./Badge */ 2);
	
	var _Badge3 = _interopRequireDefault(_Badge2);
	
	var _Button2 = __webpack_require__(/*! ./Button */ 3);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	var _Chip2 = __webpack_require__(/*! ./Chip */ 6);
	
	var _Chip3 = _interopRequireDefault(_Chip2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Badge = _Badge3.default;
	exports.Button = _Button3.default;
	exports.Chip = _Chip3.default;

/***/ },
/* 2 */
/*!****************************!*\
  !*** ./src/Badge/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(/*! classnames */ 5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Badge = function (_Component) {
	  _inherits(Badge, _Component);
	
	  function Badge() {
	    _classCallCheck(this, Badge);
	
	    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
	  }
	
	  _createClass(Badge, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          _props$Component = _props.Component,
	          Component = _props$Component === undefined ? 'span' : _props$Component,
	          _props$dataBadge = _props['data-badge'],
	          dataBadge = _props$dataBadge === undefined ? '4' : _props$dataBadge,
	          children = _props.children,
	          _props$overlap = _props.overlap,
	          overlap = _props$overlap === undefined ? false : _props$overlap,
	          _props$icon = _props.icon,
	          icon = _props$icon === undefined ? false : _props$icon,
	          _props$background = _props.background,
	          background = _props$background === undefined ? true : _props$background,
	          _props$disabled = _props.disabled,
	          disabled = _props$disabled === undefined ? false : _props$disabled,
	          _props$contact = _props.contact,
	          contact = _props$contact === undefined ? false : _props$contact;
	
	
	      var classes = (0, _classnames2.default)('mdl-badge', {
	        'mdl-chip--contact': contact,
	        'mdl-badge--overlap': overlap,
	        'material-icon': icon,
	        'mdl-badge--no-background': !background
	      }, this.props.className);
	
	      return _react2.default.createElement(
	        Component,
	        { className: classes, 'data-badge': dataBadge },
	        children
	      );
	    }
	  }]);
	
	  return Badge;
	}(_react.Component);
	
	exports.default = Badge;

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./src/Button/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(/*! classnames */ 5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = function (_Component) {
	  _inherits(Button, _Component);
	
	  function Button() {
	    _classCallCheck(this, Button);
	
	    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	  }
	
	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          _props$colored = _props.colored,
	          colored = _props$colored === undefined ? false : _props$colored,
	          _props$ripple = _props.ripple,
	          ripple = _props$ripple === undefined ? false : _props$ripple,
	          _props$fab = _props.fab,
	          fab = _props$fab === undefined ? false : _props$fab,
	          _props$FAB = _props.FAB,
	          FAB = _props$FAB === undefined ? false : _props$FAB,
	          _props$raised = _props.raised,
	          raised = _props$raised === undefined ? false : _props$raised,
	          _props$accent = _props.accent,
	          accent = _props$accent === undefined ? false : _props$accent,
	          _props$primary = _props.primary,
	          primary = _props$primary === undefined ? false : _props$primary,
	          _props$icon = _props.icon,
	          icon = _props$icon === undefined ? false : _props$icon,
	          _props$miniFab = _props.miniFab,
	          miniFab = _props$miniFab === undefined ? false : _props$miniFab,
	          _props$miniFAB = _props.miniFAB,
	          miniFAB = _props$miniFAB === undefined ? false : _props$miniFAB,
	          _props$disabled = _props.disabled,
	          disabled = _props$disabled === undefined ? false : _props$disabled;
	
	
	      var classes = (0, _classnames2.default)('mdl-button mdl-js-button', {
	        'mdl-button--fab': fab || FAB,
	        'mdl-button--colored': colored,
	        'mdl-js-ripple-effect': ripple,
	        'mdl-button--raised': raised,
	        'mdl-button--accent': accent,
	        'mdl-button--primary': primary,
	        'mdl-button--icon': icon,
	        'mdl-button--fab mdl-button--mini-fab': miniFab || miniFAB
	      }, this.props.className);
	
	      return _react2.default.createElement(
	        'button',
	        { className: classes, disabled: disabled },
	        children
	      );
	    }
	  }]);
	
	  return Button;
	}(_react.Component);
	
	exports.default = Button;

/***/ },
/* 4 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/*!*******************************!*\
  !*** ./~/classnames/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 6 */
/*!***************************!*\
  !*** ./src/Chip/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(/*! classnames */ 5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chip = function (_Component) {
	  _inherits(Chip, _Component);
	
	  function Chip() {
	    _classCallCheck(this, Chip);
	
	    return _possibleConstructorReturn(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
	  }
	
	  _createClass(Chip, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          _props$colored = _props.colored,
	          colored = _props$colored === undefined ? false : _props$colored,
	          _props$ripple = _props.ripple,
	          ripple = _props$ripple === undefined ? false : _props$ripple,
	          _props$fab = _props.fab,
	          fab = _props$fab === undefined ? false : _props$fab,
	          _props$FAB = _props.FAB,
	          FAB = _props$FAB === undefined ? false : _props$FAB,
	          _props$raised = _props.raised,
	          raised = _props$raised === undefined ? false : _props$raised,
	          _props$accent = _props.accent,
	          accent = _props$accent === undefined ? false : _props$accent,
	          _props$primary = _props.primary,
	          primary = _props$primary === undefined ? false : _props$primary,
	          _props$icon = _props.icon,
	          icon = _props$icon === undefined ? false : _props$icon,
	          _props$miniFab = _props.miniFab,
	          miniFab = _props$miniFab === undefined ? false : _props$miniFab,
	          _props$miniFAB = _props.miniFAB,
	          miniFAB = _props$miniFAB === undefined ? false : _props$miniFAB,
	          _props$disabled = _props.disabled,
	          disabled = _props$disabled === undefined ? false : _props$disabled;
	
	
	      var outerClasses = (0, _classnames2.default)('mdl-chip', {
	        'mdl-chip--contact': contact
	      }, this.props.className);
	
	      return _react2.default.createElement(
	        'button',
	        { className: classes, disabled: disabled },
	        children
	      );
	    }
	  }]);
	
	  return Chip;
	}(_react.Component);
	
	exports.default = Chip;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map