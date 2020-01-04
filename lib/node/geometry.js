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

var _geometry = _interopRequireDefault(require("../attribute/geometry"));

var _mesh3d = _interopRequireDefault(require("./mesh3d"));

var Geometry =
/*#__PURE__*/
function (_Mesh3d) {
  (0, _inherits2.default)(Geometry, _Mesh3d);

  function Geometry(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, Geometry);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Geometry).call(this, program, attrs));
    _this.shaderSetters = {
      color: function color(positions) {
        positions = positions.data;
        var len = positions.length / 3;
        var color = new Float32Array(4 * len);
        var colors = _this.attributes.colors;
        var colorLen = colors.length / 4;
        var colorDivisor = _this.attributes.colorDivisor;

        for (var i = 0; i < len; i++) {
          // const color = colors
          var idx = Math.floor(i / colorDivisor) % colorLen;
          color[4 * i] = colors[idx * 4];
          color[4 * i + 1] = colors[idx * 4 + 1];
          color[4 * i + 2] = colors[idx * 4 + 2];
          color[4 * i + 3] = colors[idx * 4 + 3];
        }

        return {
          size: 4,
          data: color
        };
      }
    };
    return _this;
  }
  /* override */


  (0, _createClass2.default)(Geometry, [{
    key: "updateMesh",
    value: function updateMesh() {
      var _this2 = this;

      if (!this.body) {
        this.remesh();
      } else if (!this.prepareMeshUpdate && this.remesh) {
        // this.prepareMeshUpdate = new Promise((resolve) => {
        //   requestAnimationFrame(() => {
        //     delete this.prepareMeshUpdate;
        //     this.remesh();
        //     resolve();
        //   });
        // });
        this.prepareMeshUpdate = Promise.resolve().then(function () {
          delete _this2.prepareMeshUpdate;

          _this2.remesh();
        });
      }
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Geometry.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'colors' || key === 'colorDivisor') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);
  return Geometry;
}(_mesh3d.default);

exports.default = Geometry;
(0, _defineProperty2.default)(Geometry, "Attr", _geometry.default);
(0, _spritejs.registerNode)(Geometry, 'geometry');