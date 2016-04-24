/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _navbar = __webpack_require__(2);

	var _navbar2 = _interopRequireDefault(_navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(React.createElement(_navbar2.default, null), document.getElementById('header'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(3);

	var NavBar = React.createClass({
		displayName: "NavBar",

		render: function render() {
			return React.createElement(
				"div",
				{ id: "header" },
				React.createElement(
					"a",
					{ href: "index.html" },
					React.createElement(
						"div",
						{ id: "header-logo-wrapper" },
						React.createElement("img", { src: "images/scratchjrlogo.png", id: "header-logo", alt: "ScratchJr Logo" })
					)
				),
				React.createElement(
					"div",
					{ id: "header-nav" },
					React.createElement(
						"div",
						{ "class": "header-nav-item-wrapper" },
						React.createElement(
							"a",
							{ href: "about.html" },
							React.createElement(
								"div",
								{ "class": "header-nav-item" },
								"About"
							)
						)
					),
					React.createElement(
						"div",
						{ "class": "header-nav-item-wrapper" },
						React.createElement(
							"a",
							{ href: "learn.html" },
							React.createElement(
								"div",
								{ "class": "header-nav-item" },
								"Learn"
							)
						)
					),
					React.createElement(
						"div",
						{ "class": "header-nav-item-wrapper" },
						React.createElement(
							"a",
							{ href: "teach.html" },
							React.createElement(
								"div",
								{ "class": "header-nav-item header-nav-item-selected" },
								"Teach"
							)
						)
					),
					React.createElement(
						"div",
						{ "class": "header-nav-item-wrapper" },
						React.createElement(
							"a",
							{ href: "donate.html" },
							React.createElement(
								"div",
								{ "class": "header-nav-item" },
								"Donate"
							)
						)
					)
				)
			);
		}
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);