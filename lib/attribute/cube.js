"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _geometry = _interopRequireDefault(require("./geometry"));

var setDefault = Symbol.for('spritejs_setAttributeDefault');

var CubeAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  (0, _inherits2.default)(CubeAttr, _GeometryAttr);

  function CubeAttr(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, CubeAttr);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CubeAttr).call(this, subject));

    _this[setDefault]({
      colorDivisor: 4
    });

    return _this;
  }

  return CubeAttr;
}(_geometry.default);

exports.default = CubeAttr;