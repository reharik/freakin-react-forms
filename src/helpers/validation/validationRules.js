
export default {
  required(field, rule) {
    if (field.type == 'select' || field.type == 'multiselect') {
      // could be an array for select-multiple or a string, both are fine this way
      return field.value && field.value.length > 0;
    }
    return field.value.trim().length > 0;
  },
  minlength(field, rule) {
    return field.value.length >= rule.minLength;
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
  maxlength(field, rule) {
    return field.value.length <= rule.maxLength;
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
  rangelength(field, rule) {
    let length = field.value.length;
    return ( length >= rule.minLength && length <= rule.maxLength );
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/email
  email(field, rule) {
    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(field.value);
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/url
  url(field, rule) {
    // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(field.value);
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/date
  date(field, rule) {
    return !/Invalid|NaN/.test(new Date(field.value));
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/number
  number(field, rule) {
    return /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(field.value);
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/digits
  digits(field, rule) {
    return /^\d+$/.test(field.value);
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
  // based on http://en.wikipedia.org/wiki/Luhn
  creditcard(field, rule) {
    // accept only spaces, digits and dashes
    if (/[^0-9 -]+/.test(field.value))
      return false;
    var nCheck = 0,
      nDigit = 0,
      bEven = false;

    let _value = field.value.replace(/\D/g, '');

    for (let n = _value.length - 1; n >= 0; n--) {
      let cDigit = _value.charAt(n);
      var nDigit = parseInt(cDigit, 10);
      if (bEven) {
        if ((nDigit *= 2) > 9)
          nDigit -= 9;
      }
      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) == 0;
  },

  // http://docs.jquery.com/Plugins/Validation/Methods/equalTo

  // this wont work because fields is a hash map rather than array. fix it when you need it
  equalTo(field, rule, fields) {
    return field.value === fields[rule.compareField].value;
  }
};
