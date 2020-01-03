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

var _cylinder = _interopRequireDefault(require("../attribute/cylinder"));

var _geometry = _interopRequireDefault(require("./geometry"));

var _Cylinder =
/*#__PURE__*/
function (_Geometry) {
  (0, _inherits2.default)(_Cylinder, _Geometry);

  function _Cylinder(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, _Cylinder);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_Cylinder).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  (0, _createClass2.default)(_Cylinder, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          radiusTop = _this$attributes.radiusTop,
          radiusBottom = _this$attributes.radiusBottom,
          height = _this$attributes.height,
          radialSegments = _this$attributes.radialSegments,
          heightSegments = _this$attributes.heightSegments,
          openEnded = _this$attributes.openEnded,
          thetaStart = _this$attributes.thetaStart,
          thetaLength = _this$attributes.thetaLength;
      var geometry = new _ogl.Cylinder(gl, {
        radiusTop: radiusTop,
        radiusBottom: radiusBottom,
        height: height,
        radialSegments: radialSegments,
        heightSegments: heightSegments,
        openEnded: openEnded,
        thetaStart: thetaStart,
        thetaLength: thetaLength
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_Cylinder.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'radiusTop' || key === 'radiusBottom' || key === 'height' || key === 'radialSegments' || key === 'heightSegments' || key === 'openEnded' || key === 'thetaStart' || key === 'thetaLength') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);
  return _Cylinder;
}(_geometry.default);

exports.default = _Cylinder;
(0, _defineProperty2.default)(_Cylinder, "Attr", _cylinder.default);
(0, _spritejs.registerNode)(_Cylinder, 'cylinder');