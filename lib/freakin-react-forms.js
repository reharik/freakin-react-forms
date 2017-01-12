(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["freakin-react-forms"] = factory();
	else
		root["freakin-react-forms"] = factory();
})(this, function() {
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

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _validationRunner = __webpack_require__(3);

	var _validationRunner2 = _interopRequireDefault(_validationRunner);

	var _normalizeModel = __webpack_require__(6);

	var _normalizeModel2 = _interopRequireDefault(_normalizeModel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Form2 = function Form2() {

	  var handleChange = function handleChange(fieldName, value, change, fields) {
	    var field = fields[Object.keys(fields).filter(function (x) {
	      return fields[x].name === fieldName;
	    })[0]];
	    if (!field) {
	      return;
	    }
	    if (change) {
	      field.dirty = field.value !== value;
	      field.value = value;
	    }
	    field.errors = (0, _validationRunner2.default)(field, fields);

	    field.invalid = field.errors.length > 0;
	    return {
	      fields: Object.keys(fields).map(function (x) {
	        return fields[x].name === fieldName ? field : fields[x];
	      }).reduce(function (x, y) {
	        x[y.name] = y;return x;
	      }, {}),
	      formIsValid: Object.keys(fields).some(function (f) {
	        return fields[f].errors && fields[f].errors.length > 0;
	      })
	    };
	  };

	  var generateNameValueModel = function generateNameValueModel(fields) {
	    return Object.keys(fields).reduce(function (x, y) {
	      x[y] = fields[y].value;return x;
	    }, {});
	  };

	  var onChangeHandler = function onChangeHandler(fields) {
	    return function (e) {
	      return e.target ? handleChange(e.target.name, e.target.value, true, fields) : null;
	    };
	  };

	  var onBlurHandler = function onBlurHandler(fields) {
	    return function (e) {
	      return e.target ? handleChange(e.target.name, e.target.value, false, fields) : null;
	    };
	  };

	  var validateForm = function validateForm(fields) {
	    var errors = [];
	    var newFieldsState = Object.keys(fields).map(function (x) {
	      fields[x].errors = (0, _validationRunner2.default)(fields[x], fields);
	      errors = errors.concat(fields[x].errors);
	      return fields[x];
	    }).reduce(function (x, y) {
	      x[y.name] = y;return x;
	    }, {});

	    return { fields: newFieldsState, formIsValid: errors.length <= 0, errors: errors };
	  };

	  var buildModel = function buildModel(formName, model, stateManagement) {
	    return (0, _normalizeModel2.default)(formName, model, { onChangeHandler: onChangeHandler, onBlurHandler: onBlurHandler, stateManagement: stateManagement });
	  };

	  var trySubmitForm = function trySubmitForm(fields, action) {
	    var result = validateForm(fields);
	    if (result.formIsValid) {
	      action(generateNameValueModel(result.fields));
	    }
	    return result;
	  };

	  return {
	    trySubmitForm: trySubmitForm,
	    buildModel: buildModel,
	    validateForm: validateForm,
	    generateNameValueModel: generateNameValueModel
	  };
	};

	var _default = Form2;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(Form2, 'Form2', '/home/rharik/Development/cannibal/freakin-react-forms/src/components/Form2.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/components/Form2.js');
	}();

	;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _errorMessages = __webpack_require__(4);

	var _errorMessages2 = _interopRequireDefault(_errorMessages);

	var _validationRules = __webpack_require__(5);

	var _validationRules2 = _interopRequireDefault(_validationRules);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _default = function _default(field, fields) {
	  var _valid = [];
	  if (!field) {
	    throw new Error('You must provide a field to validate');
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
	    return {
	      formName: field.formName,
	      fieldName: field.name,
	      message: (0, _errorMessages2.default)(field.label, field.value, rule),
	      rule: rule.rule
	    };
	  });
	};

	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRunner.js');
	}();

	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _default = function _default(fieldName, value, rule) {
	  var messages = {
	    required: "field '" + fieldName + "' is Required",
	    minlength: "field '" + fieldName + "' should be a minimum of '" + rule.minLength + "'",
	    maxlength: "field '" + fieldName + "' should be a certain maximum of '" + rule.maxLength + "'",
	    rangelength: "field '" + fieldName + "' should be a minimum of '" + rule.minLength + "' and a maximum of '" + rule.maxLength + "'",
	    email: "field '" + fieldName + "' should be valid email",
	    url: "field '" + fieldName + "' should be valid url",
	    date: "field '" + fieldName + "' should be a valid date",
	    number: "field '" + fieldName + "' should be a number",
	    digits: "field '" + fieldName + "' should be didgets",
	    creditcard: "field '" + fieldName + "' should be a valid creditcard",
	    equalTo: "field '" + fieldName + "' should be equal to '" + rule.compareField + "'"
	  };
	  return messages[rule.rule];
	};

	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, "default", "/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/validation/errorMessages.js");
	}();

	;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _default = {
	  required: function required(field) {
	    if (field.type === 'select' || field.type === 'multiselect') {
	      // could be an array for select-multiple or a string, both are fine this way
	      return field.value && field.value.length > 0;
	    }
	    return field.value && field.value.trim().length > 0;
	  },
	  minlength: function minlength(field, rule) {
	    return field.value && field.value.length >= rule.minLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
	  maxlength: function maxlength(field, rule) {
	    return field.value && field.value.length <= rule.maxLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
	  rangelength: function rangelength(field, rule) {
	    if (!field.value) {
	      return false;
	    }
	    var length = field.value.length;
	    return length >= rule.minLength && length <= rule.maxLength;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/email
	  email: function email(field) {
	    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
	    // eslint-disable-next-line max-len, no-control-regex
	    return (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/url
	  url: function url(field) {
	    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
	    // eslint-disable-next-line max-len, no-control-regex
	    return (/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/date
	  date: function date(field) {
	    return !/Invalid|NaN/.test(new Date(field.value));
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/number
	  number: function number(field) {
	    // eslint-disable-next-no-control-regex
	    return (/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/digits
	  digits: function digits(field) {
	    // eslint-disable-next-no-control-regex
	    return (/^\d+$/.test(field.value)
	    );
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
	  // based on http://en.wikipedia.org/wiki/Luhn
	  creditcard: function creditcard(field) {
	    // accept only spaces, digits and dashes
	    if (/[^0-9 -]+/.test(field.value)) {
	      return false;
	    }
	    var nCheck = 0;
	    var nDigit = 0;
	    var bEven = false;

	    var _value = field.value.replace(/\D/g, '');

	    for (var n = _value.length - 1; n >= 0; n--) {
	      var cDigit = _value.charAt(n);
	      nDigit = parseInt(cDigit, 10);
	      if (bEven) {
	        if ((nDigit *= 2) > 9) {
	          nDigit -= 9;
	        }
	      }
	      nCheck += nDigit;
	      bEven = !bEven;
	    }

	    return nCheck % 10 === 0;
	  },


	  // http://docs.jquery.com/Plugins/Validation/Methods/equalTo

	  equalTo: function equalTo(field, rule, fields) {
	    return field.value === fields[rule.compareField].value;
	  }
	};
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/validation/validationRules.js');
	}();

	;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.propToLabel = propToLabel;

	var _uuid = __webpack_require__(7);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function propToLabel(val) {
	  return val ? val.replace(/([A-Z])/g, ' $1')
	  // uppercase the first character
	  .replace(/^./, function (str) {
	    return str.toUpperCase();
	  }) : val;
	}

	var normalizeModel = function normalizeModel(formName, model, events) {
	  formName = formName || _uuid2.default.v4();
	  var modelArray = model && Object.keys(model).map(function (x, i) {
	    //validate required props
	    var item = model[x];
	    var value = item.value || '';
	    if (item.type === 'array' && value === '') {
	      value = [];
	    }

	    var clone = Object.assign({}, item);
	    clone.label = propToLabel(item.label || item.name);
	    clone.placeholder = propToLabel(item.placeholder) || propToLabel(item.label || item.name);
	    clone.rules = item.rules || [];
	    clone.value = value;
	    clone.errors = [];
	    clone.invalid = false;
	    clone.formName = formName;
	    clone.key = formName + '_' + i;
	    return clone;
	  });

	  return modelArray && modelArray.map(function (item) {
	    item.onChange = events.stateManagement(events.onChangeHandler(modelArray));
	    item.onBlur = events.stateManagement(eevents.onBlurHandler(modelArray));
	    return item;
	  }).reduce(function (prev, next) {
	    prev[next.name] = next;
	    return prev;
	  }, {});
	};

	var _default = normalizeModel;
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(propToLabel, 'propToLabel', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');

	  __REACT_HOT_LOADER__.register(normalizeModel, 'normalizeModel', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');

	  __REACT_HOT_LOADER__.register(_default, 'default', '/home/rharik/Development/cannibal/freakin-react-forms/src/helpers/normalizeModel.js');
	}();

	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php

	// Unique ID creation requires a high quality random # generator.  We feature
	// detect to determine the best RNG source, normalizing to a function that
	// returns 128-bits of randomness, since that's what's usually required
	var _rng = __webpack_require__(8);

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
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var rng;

	var crypto = global.crypto || global.msCrypto; // for IE 11
	if (crypto && crypto.getRandomValues) {
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

/***/ }
/******/ ])
});
;