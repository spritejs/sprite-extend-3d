"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _spritejs = require("spritejs");

var _ogl = require("ogl");

var _node3d = _interopRequireDefault(require("./node3d"));

var _camera = _interopRequireDefault(require("../attribute/camera"));

var _Camera =
/*#__PURE__*/
function (_Node3d) {
  (0, _inherits2.default)(_Camera, _Node3d);

  function _Camera(gl, _ref) {
    var _this;

    var parent = _ref.parent,
        _ref$fov = _ref.fov,
        fov = _ref$fov === void 0 ? 45 : _ref$fov,
        _ref$near = _ref.near,
        near = _ref$near === void 0 ? 0.1 : _ref$near,
        _ref$far = _ref.far,
        far = _ref$far === void 0 ? 100 : _ref$far,
        _ref$aspect = _ref.aspect,
        aspect = _ref$aspect === void 0 ? 1 : _ref$aspect,
        left = _ref.left,
        right = _ref.right,
        bottom = _ref.bottom,
        top = _ref.top,
        attrs = (0, _objectWithoutProperties2.default)(_ref, ["parent", "fov", "near", "far", "aspect", "left", "right", "bottom", "top"]);
    (0, _classCallCheck2.default)(this, _Camera);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_Camera).call(this));

    _this.setBody(new _ogl.Camera(gl, {
      fov: fov,
      near: near,
      far: far,
      aspect: aspect,
      left: left,
      right: right,
      bottom: bottom,
      top: top
    }));

    if (attrs) _this.attr(attrs);
    return _this;
  }

  (0, _createClass2.default)(_Camera, [{
    key: "lookAt",
    value: function lookAt(target) {
      if (target.body) target = target.body;
      return this.body.lookAt(target);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_Camera.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (this.body) {
        if (key === 'near' || key === 'far' || key === 'fov' || key === 'aspect') {
          var value = key === 'fov' ? newValue * (Math.PI / 180) : newValue;
          this.body.perspective((0, _defineProperty2.default)({}, key, value));
        }
      }
    }
  }]);
  return _Camera;
}(_node3d.default);

exports.default = _Camera;
(0, _defineProperty2.default)(_Camera, "Attr", _camera.default);
(0, _spritejs.registerNode)(_Camera, 'camera');