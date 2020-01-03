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

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _spritejs = require("spritejs");

var _ogl = require("ogl");

var _plane = _interopRequireDefault(require("../attribute/plane"));

var _geometry = _interopRequireDefault(require("./geometry"));

var _Plane =
/*#__PURE__*/
function (_Geometry) {
  (0, _inherits2.default)(_Plane, _Geometry);

  function _Plane(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, _Plane);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_Plane).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  (0, _createClass2.default)(_Plane, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          width = _this$attributes.width,
          height = _this$attributes.height,
          widthSegments = _this$attributes.widthSegments,
          heightSegments = _this$attributes.heightSegments;
      var geometry = new _ogl.Plane(gl, {
        width: width,
        height: height,
        widthSegments: widthSegments,
        heightSegments: heightSegments
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_Plane.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'width' || key === 'height' || key === 'widthSegments' || key === 'heightSegments') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);
  return _Plane;
}(_geometry.default);

exports.default = _Plane;
(0, _defineProperty2.default)(_Plane, "Attr", _plane.default);
(0, _spritejs.registerNode)(_Plane, 'plane');