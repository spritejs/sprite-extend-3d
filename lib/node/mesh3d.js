"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _spritejs = require("spritejs");

var _ogl = require("ogl");

var _node3d = _interopRequireDefault(require("./node3d"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var changedAttrs = Symbol.for('spritejs_changedAttrs');

var _program = Symbol('program');

var _geometry = Symbol('geometry');

var _model = Symbol('model');

var _mode = Symbol('mode');

var _shaderAttrs = Symbol('shaderAttrs');

var Mesh3d =
/*#__PURE__*/
function (_Node3d) {
  (0, _inherits2.default)(Mesh3d, _Node3d);

  function Mesh3d(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, Mesh3d);

    if (program && !(program instanceof _ogl.Program)) {
      attrs = program;
      program = null;
    }

    var mode = attrs.mode;

    if (mode) {
      attrs = _objectSpread({}, attrs);
      delete attrs.mode;
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Mesh3d).call(this, attrs));
    _this[_mode] = mode || 'TRIANGLES';

    if (program) {
      _this.setProgram(program);
    }

    _this[_shaderAttrs] = {};
    return _this;
  }
  /* override */


  (0, _createClass2.default)(Mesh3d, [{
    key: "cloneNode",
    value: function cloneNode() {
      var cloned = new this.constructor(this[_program]);
      var attrs = this.attributes[changedAttrs];
      cloned[_mode] = this[_mode];
      cloned.setGeometry(this[_model]);
      cloned.attr(attrs);
      return cloned;
    }
  }, {
    key: "setProgram",
    value: function setProgram(program) {
      this[_program] = program;
      var gl = program.gl;
      var geometry = this[_geometry];

      if (geometry) {
        var mesh = new _ogl.Mesh(gl, {
          mode: gl[this[_mode]],
          geometry: geometry,
          program: program
        });
        this.setBody(mesh);
      }
    }
  }, {
    key: "setGeometry",
    value: function setGeometry(model) {
      var _this2 = this;

      var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var program = this[_program];
      var gl = program.gl;
      var geometry;

      if (model instanceof _ogl.Geometry) {
        geometry = model;
      } else {
        var geometryData = _objectSpread({
          position: {
            size: 3,
            data: new Float32Array(model.position)
          },
          uv: {
            size: 2,
            data: new Float32Array(model.uv)
          },
          normal: {
            size: 3,
            data: new Float32Array(model.normal)
          }
        }, attrs);

        if (model.index) {
          geometryData.index = {
            data: new Uint16Array(model.index)
          };
        }

        geometry = new _ogl.Geometry(gl, geometryData);
      }

      var extraAttrs = program.extraAttribute;

      if (extraAttrs) {
        Object.entries(extraAttrs).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              key = _ref2[0],
              setter = _ref2[1];

          geometry.addAttribute(key, setter(_this2, geometry));
        });
      }

      this[_geometry] = geometry;
      this[_model] = model;

      if (program) {
        var mesh = new _ogl.Mesh(gl, {
          mode: gl[this[_mode]],
          geometry: geometry,
          program: program
        });
        this.setBody(mesh);
      }
    }
  }, {
    key: "mode",
    get: function get() {
      return this[_mode];
    }
  }, {
    key: "program",
    get: function get() {
      return this[_program];
    }
  }, {
    key: "geometry",
    get: function get() {
      return this[_geometry];
    }
  }, {
    key: "shaderAttrs",
    get: function get() {
      return this[_shaderAttrs];
    }
  }, {
    key: "meshes",
    get: function get() {
      return this.body ? [this.body] : [];
    }
  }]);
  return Mesh3d;
}(_node3d.default);

exports.default = Mesh3d;
(0, _spritejs.registerNode)(Mesh3d, 'mesh3d');