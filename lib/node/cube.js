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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _spritejs = require("spritejs");

var _ogl = require("ogl");

var _geometry = _interopRequireDefault(require("./geometry"));

var _cube = _interopRequireDefault(require("../attribute/cube"));

var Cube =
/*#__PURE__*/
function (_Geometry) {
  (0, _inherits2.default)(Cube, _Geometry);

  function Cube(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, Cube);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Cube).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  (0, _createClass2.default)(Cube, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var geometry = new _ogl.Box(gl);
      this.setGeometry(geometry);
    }
  }]);
  return Cube;
}(_geometry.default);

exports.default = Cube;
(0, _defineProperty2.default)(Cube, "Attr", _cube.default);
(0, _spritejs.registerNode)(Cube, 'cube');