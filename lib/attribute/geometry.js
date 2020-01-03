"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _colorRgba = _interopRequireDefault(require("color-rgba"));

var _attr3d = _interopRequireDefault(require("./attr3d"));

var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var GeometryAttr =
/*#__PURE__*/
function (_Attr3d) {
  (0, _inherits2.default)(GeometryAttr, _Attr3d);

  function GeometryAttr(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, GeometryAttr);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GeometryAttr).call(this, subject));

    _this[setDefault]({
      colors: [0, 0, 0, 1],
      colorDivisor: 3
    });

    return _this;
  }

  (0, _createClass2.default)(GeometryAttr, [{
    key: "colors",
    get: function get() {
      return this[getAttribute]('colors');
    },
    set: function set(value) {
      if (typeof value === 'string') {
        value = value.replace(/\s*,\s*/g, ',');
        var colors = value.split(/\s+/g);
        colors = colors.map(function (color) {
          var c = (0, _colorRgba.default)(color);
          return [c[0] / 255, c[1] / 255, c[2] / 255, c[3]];
        });
        value = colors.reduce(function (a, b) {
          return [].concat((0, _toConsumableArray2.default)(a), (0, _toConsumableArray2.default)(b));
        });
      } else if (Array.isArray(value)) {
        if (typeof value[0] === 'string') {
          value = value.reduce(function (a, b) {
            var c = (0, _colorRgba.default)(b);
            a.push(c[0] / 255, c[1] / 255, c[2] / 255, c[3]);
            return a;
          }, []);
        } else if (Array.isArray(value[0])) {
          value = value.reduce(function (a, b) {
            return [].concat((0, _toConsumableArray2.default)(a), (0, _toConsumableArray2.default)(b));
          });
        }
      }

      this[setAttribute]('colors', value);
    }
  }, {
    key: "colorDivisor",
    get: function get() {
      return this[getAttribute]('colorDivisor');
    },
    set: function set(value) {
      this[setAttribute]('colorDivisor', value);
    }
  }]);
  return GeometryAttr;
}(_attr3d.default);

exports.default = GeometryAttr;