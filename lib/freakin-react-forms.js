(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["freakin-react-forms"] = factory(require("react"));
	else
		root["freakin-react-forms"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(2);

	Object.defineProperty(exports, 'Form', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Form).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _validationRunner = __webpack_require__(4);

	var _validationRunner2 = _interopRequireDefault(_validationRunner);

	var _normalizeModel = __webpack_require__(7);

	var _normalizeModel2 = _interopRequireDefault(_normalizeModel);

	var _decorateInputs = __webpack_require__(10);

	var _decorateInputs2 = _interopRequireDefault(_decorateInputs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form(props) {
	    _classCallCheck(this, Form);

	    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

	    _this.submitHandler = props.submitHandler;

	    var eventHandler = { onChangeHandler: _this.onChangeHandler.bind(_this), onBlurHandler: _this.onBlurHandler(_this) };
	    var fields = (0, _normalizeModel2.default)(props.model, {}, eventHandler);

	    _this.state = {
	      fields: fields,
	      formIsValid: true
	    };
	    _this.newChildren = (0, _decorateInputs2.default)(_this.props.children, _this.state.fields);

	    return _this;
	  }

	  _createClass(Form, [{
	    key: 'handleChange',
	    value: function handleChange(fieldName, value, change) {
	      var field = this.state.fields.filter(function (x) {
	        return x.name === fieldName;
	      })[0];
	      if (!field) {
	        return;
	      }
	      if (change) {
	        field.value = value;
	      }
	      field.errors = (0, _validationRunner2.default)(field, this.state.fields);
	      field.invalid = field.errors.length > 0;
	      this.setState({
	        fields: this.state.fields.map(function (x) {
	          return x.name === fieldName ? field : x;
	        }),
	        formIsValid: this.state.fields.some(function (f) {
	          return f.errors && f.errors.length > 0;
	        })
	      });
	    }
	  }, {
	    key: 'generateNameValueModel',
	    value: function generateNameValueModel() {
	      return this.state.fields.reduce(function (x, y) {
	        x[y.name] = y.value;return x;
	      }, {});
	    }
	  }, {
	    key: 'onChangeHandler',
	    value: function onChangeHandler(e) {
	      return e.target ? this.handleChange(e.target.name, e.target.value, true) : null;
	    }
	  }, {
	    key: 'onBlurHandler',
	    value: function onBlurHandler(e) {
	      return e.target ? this.handleChange(e.target.name, e.target.value) : null;
	    }
	  }, {
	    key: 'onSubmitHandler',
	    value: function onSubmitHandler(e) {
	      e.preventDefault();
	      var errors = (0, _validationRunner2.default)(this.state.fields);
	      if (errors.length <= 0) {
	        this.submitHandler(this.generateNameValueModel());
	        // alert(JSON.stringify(this.generateNameValueModel()));
	      } else {
	        this.errors = errors;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmitHandler.bind(this) },
	        this.newChildren
	      );
	    }
	  }]);

	  return Form;
	}(_react2.default.Component);

	var _default = Form;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Form, 'Form', '/home/reharik/Development/cannibal/freakin-react-forms/src/components/Form.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/reharik/Development/cannibal/freakin-react-forms/src/components/Form.js');
	})();

	;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _errorMessages = __webpack_require__(5);

	var _errorMessages2 = _interopRequireDefault(_errorMessages);

	var _validationRules = __webpack_require__(6);

	var _validationRules2 = _interopRequireDefault(_validationRules);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var validate = function validate(field, fields) {
	  var _valid = [];
	  if (!field) {
	    throw new Error("You must provide a field to validate");
	  }
	  if (!field.rules || field.rules.length <= 0) {
	    return _valid;
	  }
	  if (!Array.isArray(field.rules)) {
	    field.rules = [field.rules];
	  }
	  if (!field.value && !field.rules.some(function (item) {
	    return item.rule.toLowerCase() === 'required';
	  })) {
	    return _valid;
	  }
	  return field.rules.filter(function (rule) {
	    return !_validationRules2.default[rule.rule](field, rule, fields);
	  }).map(function (rule) {
	    return (0, _errorMessages2.default)(field.name, field.value, rule);
	  });
	};

	var _default = function _default(field, fields) {
	  if (Array.isArray(field)) {
	    return field.map(function (x) {
	      return validate(x, field);
	    }).reduce(function (a, b) {
	      return a.concat(b);
	    });
	  }
	  return validate(field, fields);
	};

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(validate, 'validate', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRunner.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRunner.js');
	})();

	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _default = function _default(fieldName, value, rule) {
	  var messages = {
	    required: "field " + fieldName + " is Required",
	    minlength: "field " + fieldName + " should be a minimum of " + rule.minLength,
	    maxlength: "field " + fieldName + " should be a certain maximum of " + rule.maxLength,
	    rangelength: "field " + fieldName + " should be a minimum of " + rule.minLength + " and a maximum of " + rule.maxLength,
	    email: "field " + fieldName + " should be valid email",
	    url: "field " + fieldName + " should be valid url",
	    date: "field " + fieldName + " should be a valid date",
	    number: "field " + fieldName + " should be a number",
	    digits: "field " + fieldName + " should be didgets",
	    creditcard: "field " + fieldName + " should be a valid creditcard",
	    equalTo: "field " + fieldName + " should be equal to " + rule.compareField
	  };
	  return messages[rule.rule];
	};

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, "default", "/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/validation/errorMessages.js");
	})();

	;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _default = {
	  required: function required(field, rule) {
	    if (field.type == 'select' || field.type == 'multiselect') {
	      // could be an array for select-multiple or a string, both are fine this way
	      return field.value && field.value.length > 0;
	    }
	    return field.value.trim().length > 0;
	  },
	  minlength: function minlength(field, rule) {
	    return field.value.length >= rule.minLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
	  maxlength: function maxlength(field, rule) {
	    return field.value.length <= rule.maxLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
	  rangelength: function rangelength(field, rule) {
	    var length = field.value.length;
	    return length >= rule.minLength && length <= rule.maxLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/email
	  email: function email(field, rule) {
	    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
	    return (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/url
	  url: function url(field, rule) {
	    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
	    return (/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/date
	  date: function date(field, rule) {
	    return !/Invalid|NaN/.test(new Date(field.value));
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/number
	  number: function number(field, rule) {
	    return (/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/digits
	  digits: function digits(field, rule) {
	    return (/^\d+$/.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
	  // based on http://en.wikipedia.org/wiki/Luhn
	  creditcard: function creditcard(field, rule) {
	    // accept only spaces, digits and dashes
	    if (/[^0-9 -]+/.test(field.value)) return false;
	    var nCheck = 0,
	        nDigit = 0,
	        bEven = false;

	    var _value = field.value.replace(/\D/g, '');

	    for (var n = _value.length - 1; n >= 0; n--) {
	      var cDigit = _value.charAt(n);
	      var nDigit = parseInt(cDigit, 10);
	      if (bEven) {
	        if ((nDigit *= 2) > 9) nDigit -= 9;
	      }
	      nCheck += nDigit;
	      bEven = !bEven;
	    }

	    return nCheck % 10 == 0;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
	  equalTo: function equalTo(field, rule, fields) {
	    return field.value === fields[rule.compareField].value;
	  }
	};
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRules.js');
	})();

	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _uuid = __webpack_require__(8);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var normalizeModel = function normalizeModel(model, data, events) {
	  return model && model.map(function (x, i) {
	    //validate required props
	    return {
	      type: x.type,
	      name: x.name,
	      label: propToLabel(x.label || x.name),
	      placeholder: propToLabel(x.placeholder) || propToLabel(x.label || x.name),
	      rules: x.rules || [],
	      value: data[x.name] || '',
	      onChange: events.onChangeHandler,
	      onBlur: events.onBlurHandler,
	      errors: [],
	      invalid: false,
	      key: x.name + i
	    };
	  });
	};

	var propToLabel = function propToLabel(val) {
	  return val ? val.replace(/([A-Z])/g, ' $1')
	  // uppercase the first character
	  .replace(/^./, function (str) {
	    return str.toUpperCase();
	  }) : val;
	};

	var _default = normalizeModel;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(normalizeModel, 'normalizeModel', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');

	  __REACT_HOT_LOADER__.register(propToLabel, 'propToLabel', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');
	})();

	;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(9);

	// Maps for number <-> hex string conversion
	var _byteToHex = [];
	var _hexToByte = {};
	for (var i = 0; i < 256; i++) {
	  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	  _hexToByte[_byteToHex[i]] = i;
	}

	// **`parse()` - Parse a UUID into it's component bytes**
	function parse(s, buf, offset) {
	  var i = (buf && offset) || 0, ii = 0;

	  buf = buf || [];
	  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	    if (ii < 16) { // Don't overflow!
	      buf[i + ii++] = _hexToByte[oct];
	    }
	  });

	  // Zero out remaining bytes if string was short
	  while (ii < 16) {
	    buf[i + ii++] = 0;
	  }

	  return buf;
	}

	// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	function unparse(buf, offset) {
	  var i = offset || 0, bth = _byteToHex;
	  return  bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] + '-' +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]] +
	          bth[buf[i++]] + bth[buf[i++]];
	}

	// **`v1()` - Generate time-based UUID**
	//
	// Inspired by https://github.com/LiosK/UUID.js
	// and http://docs.python.org/library/uuid.html

	// random #'s we need to init node and clockseq
	var _seedBytes = _rng();

	// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	var _nodeId = [
	  _seedBytes[0] | 0x01,
	  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	];

	// Per 4.2.2, randomize (14 bit) clockseq
	var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

	// Previous uuid creation time
	var _lastMSecs = 0, _lastNSecs = 0;

	// See https://github.com/broofa/node-uuid for API details
	function v1(options, buf, offset) {
	  var i = buf && offset || 0;
	  var b = buf || [];

	  options = options || {};

	  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

	  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

	  // Per 4.2.1.2, use count of uuid's generated during the current clock
	  // cycle to simulate higher resolution clock
	  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

	  // Time since last uuid creation (in msecs)
	  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

	  // Per 4.2.1.2, Bump clockseq on clock regression
	  if (dt < 0 && options.clockseq === undefined) {
	    clockseq = clockseq + 1 & 0x3fff;
	  }

	  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	  // time interval
	  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
	    nsecs = 0;
	  }

	  // Per 4.2.1.2 Throw error if too many uuids are requested
	  if (nsecs >= 10000) {
	    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	  }

	  _lastMSecs = msecs;
	  _lastNSecs = nsecs;
	  _clockseq = clockseq;

	  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	  msecs += 12219292800000;

	  // `time_low`
	  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	  b[i++] = tl >>> 24 & 0xff;
	  b[i++] = tl >>> 16 & 0xff;
	  b[i++] = tl >>> 8 & 0xff;
	  b[i++] = tl & 0xff;

	  // `time_mid`
	  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	  b[i++] = tmh >>> 8 & 0xff;
	  b[i++] = tmh & 0xff;

	  // `time_high_and_version`
	  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	  b[i++] = tmh >>> 16 & 0xff;

	  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	  b[i++] = clockseq >>> 8 | 0x80;

	  // `clock_seq_low`
	  b[i++] = clockseq & 0xff;

	  // `node`
	  var node = options.node || _nodeId;
	  for (var n = 0; n < 6; n++) {
	    b[i + n] = node[n];
	  }

	  return buf ? buf : unparse(b);
	}

	// **`v4()` - Generate random UUID**

	// See https://github.com/broofa/node-uuid for API details
	function v4(options, buf, offset) {
	  // Deprecated - 'format' argument, as supported in v1.2
	  var i = buf && offset || 0;

	  if (typeof(options) == 'string') {
	    buf = options == 'binary' ? new Array(16) : null;
	    options = null;
	  }
	  options = options || {};

	  var rnds = options.random || (options.rng || _rng)();

	  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	  rnds[6] = (rnds[6] & 0x0f) | 0x40;
	  rnds[8] = (rnds[8] & 0x3f) | 0x80;

	  // Copy bytes to buffer, if provided
	  if (buf) {
	    for (var ii = 0; ii < 16; ii++) {
	      buf[i + ii] = rnds[ii];
	    }
	  }

	  return buf || unparse(rnds);
	}

	// Export public API
	var uuid = v4;
	uuid.v1 = v1;
	uuid.v4 = v4;
	uuid.parse = parse;
	uuid.unparse = unparse;

	module.exports = uuid;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	if (global.crypto && crypto.getRandomValues) {
	  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	  // Moderately fast, high quality
	  var _rnds8 = new Uint8Array(16);
	  rng = function whatwgRNG() {
	    crypto.getRandomValues(_rnds8);
	    return _rnds8;
	  };
	}

	if (!rng) {
	  // Math.random()-based (RNG)
	  //
	  // If all else fails, use Math.random().  It's fast, but is of unspecified
	  // quality.
	  var  _rnds = new Array(16);
	  rng = function() {
	    for (var i = 0, r; i < 16; i++) {
	      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
	      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	    }

	    return _rnds;
	  };
	}

	module.exports = rng;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var decorateInput = function decorateInput(children, model) {
	  return _react2.default.Children.map(children, function (x) {
	    if (!x.props) {
	      return x;
	    }
	    if (x.props.frfProperty) {
	      var modelProperty = model.filter(function (f) {
	        return f.name === x.props.frfProperty;
	      })[0];
	      if (!modelProperty) {
	        throw new Error('No property on model with name: ' + x.frfProperty + '!');
	      }
	      return _react2.default.cloneElement(x, { data: modelProperty });
	    }

	    var clonedItems = decorateInput(x.props.children, model);
	    return _react2.default.cloneElement(x, { children: clonedItems });
	  });
	};

	var _default = decorateInput;
	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(decorateInput, 'decorateInput', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/decorateInputs.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/reharik/Development/cannibal/freakin-react-forms/src/helpers/decorateInputs.js');
	})();

	;

/***/ }
/******/ ])
});
;