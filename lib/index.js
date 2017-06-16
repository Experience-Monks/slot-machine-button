(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gsap"), require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("SlotMachineButton", ["gsap", "prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["SlotMachineButton"] = factory(require("gsap"), require("prop-types"), require("react"));
	else
		root["SlotMachineButton"] = factory(root["gsap"], root["prop-types"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlotMachineButton = function (_PureComponent) {
  _inherits(SlotMachineButton, _PureComponent);

  function SlotMachineButton(props) {
    _classCallCheck(this, SlotMachineButton);

    var _this = _possibleConstructorReturn(this, (SlotMachineButton.__proto__ || Object.getPrototypeOf(SlotMachineButton)).call(this, props));

    _this.idleY = props.bottomToTop ? '0%' : '-50%';
    _this.activeY = props.bottomToTop ? '-50%' : '0%';
    _this.didPause = false;

    _this.animateActive = _this.animateActive.bind(_this);
    _this.animateIdle = _this.animateIdle.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
    _this.getChildren = _this.getChildren.bind(_this);
    return _this;
  }

  _createClass(SlotMachineButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.wheels = [].concat(_toConsumableArray(this.container.querySelectorAll('.wheel')));
      this.idleChildren = [].concat(_toConsumableArray(this.container.querySelectorAll('.idle')));
      this.activeChildren = [].concat(_toConsumableArray(this.container.querySelectorAll('.active')));
      this.timeline = new TimelineLite({ paused: true });
      var ease = this.props.ease;
      var tweens = this.wheels.reduce(function (array, wheel, index) {
        var delay = _this2.props.delay[index] || _this2.props.delay;
        var fadeDuration = _this2.props.fadeDuration || _this2.props.duration;
        var fadeDelay = delay + _this2.props.duration - fadeDuration;
        return array.concat([TweenLite.fromTo(wheel, _this2.props.duration, { y: _this2.idleY }, { y: _this2.activeY, ease: ease, delay: delay }), TweenLite.fromTo(_this2.idleChildren[index], fadeDuration, { autoAlpha: 1 }, { autoAlpha: 0, ease: ease, delay: delay }), TweenLite.fromTo(_this2.activeChildren[index], fadeDuration, { autoAlpha: 0 }, { autoAlpha: 1, ease: ease, delay: fadeDelay })]);
      }, []);
      this.timeline.add(tweens);
      if (this.props.fadeBack) {
        this.timeline.addPause('+=0', function () {
          _this2.didPause = true;
        });
        var duration = this.props.fadeBackDuration;
        var position = this.props.bottomToTop ? 'bottom' : 'top';
        var _ease = this.props.fadebackEase;
        var _tweens = this.wheels.reduce(function (array, wheel, index) {
          var newArray = array.concat([TweenLite.to(_this2.idleChildren[index], 1 / 60, _defineProperty({ position: 'absolute' }, position, 0)), TweenLite.to(_this2.idleChildren[index], duration, { ease: _ease, autoAlpha: 1 })]);
          if (_this2.props.idleHasTransparency) {
            newArray.push(TweenLite.to(_this2.activeChildren[index], duration, { ease: _ease, autoAlpha: 0 }));
          }
          return newArray;
        }, []);
        this.timeline.add(_tweens);
        this.timeline.eventCallback('onStart', function () {
          _this2.didPause = false;
        });
        this.timeline.eventCallback('onComplete', function () {
          _this2.didPause = false;
        });
      }
      if (this.props.isActive) {
        this.animateActive();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isActive !== nextProps.isActive) {
        nextProps.isActive ? this.animateActive() : this.animateIdle();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.shouldComponentUpdate.call(this, nextProps, nextState);
    }
  }, {
    key: 'animateActive',
    value: function animateActive() {
      this.timeline.restart();
    }
  }, {
    key: 'animateIdle',
    value: function animateIdle() {
      this.props.fadeBack && this.didPause ? this.timeline.resume() : this.timeline.reverse();
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.onClick();
    }
  }, {
    key: 'handleMouseEnter',
    value: function handleMouseEnter() {
      if (this.props.activeOnHover) {
        this.animateActive();
      }
      this.props.onMouseEnter();
    }
  }, {
    key: 'handleMouseLeave',
    value: function handleMouseLeave() {
      if (this.props.activeOnHover) {
        this.animateIdle();
      }
      this.props.onMouseLeave();
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      var _this3 = this;

      var wheelStyle = {
        height: '200%',
        display: 'inline-block'
      };
      var childStyle = {
        width: '100%',
        height: '50%'
      };

      var children = void 0;
      if (Array.isArray(this.props.children)) {
        children = this.props.children.reduce(function (array, child, index) {
          if (child) {
            if (child.props['data-slot-duplicate']) {
              return array.concat([child, child]);
            }
            return array.concat([child]);
          }
          return array;
        }, []);
      } else {
        children = Array(2).fill(this.props.children);
      }
      var disabledCount = 0;
      var disabledStyle = {
        display: 'inline-block',
        height: '100%',
        verticalAlign: 'top'
      };
      children = children.reduce(function (array, value, index) {
        if (value.props && value.props['data-slot-disable']) {
          disabledCount++;
          return array.concat(_react2.default.createElement(
            'span',
            { key: index, style: disabledStyle },
            _react2.default.createElement(
              'div',
              { className: 'part', style: { height: '100%' } },
              value
            )
          ));
        }
        if ((index - disabledCount) % 2) {
          var groupIndex = Math.floor(index / 2);
          array[groupIndex].push(value);
          return array;
        } else {
          return array.concat([[value]]);
        }
      }, []);

      return children.map(function (group, index) {
        if (!Array.isArray(group)) {
          return group;
        }
        return _react2.default.createElement(
          'span',
          {
            key: index,
            className: group[0].props && group[0].props.className ? 'wheel ' + group[0].props.className : 'wheel',
            style: wheelStyle
          },
          group.map(function (child, index) {
            var className = index % 2 ? _this3.props.bottomToTop ? 'active' : 'idle' : _this3.props.bottomToTop ? 'idle' : 'active';
            return _react2.default.createElement(
              'div',
              { key: index, className: className + ' part', style: childStyle },
              child
            );
          })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var Element = this.props.element;
      var className = '' + this.props.className;
      var style = Object.assign({
        overflow: 'hidden'
      }, this.props.style);

      return _react2.default.createElement(
        Element,
        _extends({
          className: className,
          style: style,
          onClick: this.handleClick,
          ref: function ref(button) {
            return _this4.container = button;
          },
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, this.props.domAttributes),
        this.getChildren()
      );
    }
  }]);

  return SlotMachineButton;
}(_react.PureComponent);

exports.default = SlotMachineButton;


SlotMachineButton.propTypes = {
  onClick: _propTypes2.default.func,
  bottomToTop: _propTypes2.default.bool,
  isActive: _propTypes2.default.bool,
  duration: _propTypes2.default.number,
  ease: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.PropTypes.array]).isRequired,
  className: _propTypes2.default.string,
  activeOnHover: _propTypes2.default.bool,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  delay: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.PropTypes.arrayOf(_propTypes2.default.number)]),
  element: _propTypes2.default.string,
  domAttributes: _propTypes2.default.object,
  fadeDuration: _propTypes2.default.number,
  fadeBack: _propTypes2.default.bool,
  fadeBackDuration: _propTypes2.default.number,
  fadeBackEase: _propTypes2.default.object,
  idleHasTransparency: _propTypes2.default.bool,
  shouldComponentUpdate: _propTypes2.default.func
};

SlotMachineButton.defaultProps = {
  onClick: function onClick() {},
  bottomToTop: false,
  duration: 0.5,
  ease: Expo.easeInOut,
  className: '',
  activeOnHover: false,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  delay: 0,
  element: 'button',
  fadeDuration: 0.4,
  fadeBack: false,
  fadeBackDuration: 0.6,
  fadeBackEase: Linear.easeNone,
  idleHasTransparency: false,
  shouldComponentUpdate: function shouldComponentUpdate() {
    return false;
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map