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

var _sphere = _interopRequireDefault(require("../attribute/sphere"));

var _geometry = _interopRequireDefault(require("./geometry"));

var _Sphere =
/*#__PURE__*/
function (_Geometry) {
  (0, _inherits2.default)(_Sphere, _Geometry);

  function _Sphere(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, _Sphere);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_Sphere).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  (0, _createClass2.default)(_Sphere, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          radius = _this$attributes.radius,
          widthSegments = _this$attributes.widthSegments,
          heightSegments = _this$attributes.heightSegments,
          phiStart = _this$attributes.phiStart,
          phiLength = _this$attributes.phiLength,
          thetaStart = _this$attributes.thetaStart,
          thetaLength = _this$attributes.thetaLength;
      var geometry = new _ogl.Sphere(gl, {
        radius: radius,
        widthSegments: widthSegments,
        heightSegments: heightSegments,
        phiStart: phiStart,
        phiLength: phiLength,
        thetaStart: thetaStart,
        thetaLength: thetaLength
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_Sphere.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'radius' || key === 'widthSegments' || key === 'heightSegments' || key === 'phiStart' || key === 'phiLength' || key === 'thetaStart' || key === 'thetaLength') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);
  return _Sphere;
}(_geometry.default);

exports.default = _Sphere;
(0, _defineProperty2.default)(_Sphere, "Attr", _sphere.default);
(0, _spritejs.registerNode)(_Sphere, 'sphere');