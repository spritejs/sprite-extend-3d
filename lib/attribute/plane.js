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

var _geometry = _interopRequireDefault(require("./geometry"));

var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var PlaneAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  (0, _inherits2.default)(PlaneAttr, _GeometryAttr);

  function PlaneAttr(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, PlaneAttr);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PlaneAttr).call(this, subject));

    _this[setDefault]({
      width: 1,
      height: 1,
      widthSegments: 1,
      heightSegments: 1
    });

    return _this;
  }

  (0, _createClass2.default)(PlaneAttr, [{
    key: "width",
    get: function get() {
      return this[getAttribute]('width');
    },
    set: function set(value) {
      this[setAttribute]('width', value);
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      this[setAttribute]('height', value);
    }
  }, {
    key: "widthSegments",
    get: function get() {
      return this[getAttribute]('widthSegments');
    },
    set: function set(value) {
      this[setAttribute]('widthSegments', value);
    }
  }, {
    key: "heightSegments",
    get: function get() {
      return this[getAttribute]('heightSegments');
    },
    set: function set(value) {
      this[setAttribute]('heightSegments', value);
    }
  }]);
  return PlaneAttr;
}(_geometry.default);

exports.default = PlaneAttr;