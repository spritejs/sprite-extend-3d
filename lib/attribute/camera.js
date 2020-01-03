"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _attr3d = _interopRequireDefault(require("./attr3d"));

var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var GameraAttr =
/*#__PURE__*/
function (_Attr3d) {
  (0, _inherits2.default)(GameraAttr, _Attr3d);

  function GameraAttr(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, GameraAttr);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GameraAttr).call(this, subject));

    _this[setDefault]({
      near: 0.1,
      far: 100,
      fov: 45,
      aspect: 1,
      left: undefined,
      right: undefined,
      bottom: undefined,
      top: undefined
    });

    return _this;
  }

  (0, _createClass2.default)(GameraAttr, [{
    key: "near",
    get: function get() {
      return this[getAttribute]('near');
    },
    set: function set(value) {
      this[setAttribute]('near', value);
    }
  }, {
    key: "far",
    get: function get() {
      return this[getAttribute]('far');
    },
    set: function set(value) {
      this[setAttribute]('far', value);
    }
  }, {
    key: "fov",
    get: function get() {
      return this[getAttribute]('fov');
    },
    set: function set(value) {
      this[setAttribute]('fov', value);
    }
  }, {
    key: "aspect",
    get: function get() {
      return this[getAttribute]('aspect');
    },
    set: function set(value) {
      this[setAttribute]('aspect', value);
    }
  }, {
    key: "left",
    get: function get() {
      return this[getAttribute]('left');
    },
    set: function set(value) {
      this[setAttribute]('left', value);
    }
  }, {
    key: "right",
    get: function get() {
      return this[getAttribute]('right');
    },
    set: function set(value) {
      this[setAttribute]('right', value);
    }
  }, {
    key: "top",
    get: function get() {
      return this[getAttribute]('top');
    },
    set: function set(value) {
      this[setAttribute]('top', value);
    }
  }, {
    key: "bottom",
    get: function get() {
      return this[getAttribute]('bottom');
    },
    set: function set(value) {
      this[setAttribute]('bottom', value);
    }
  }]);
  return GameraAttr;
}(_attr3d.default);

exports.default = GameraAttr;