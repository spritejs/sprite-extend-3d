"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

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

var Mesh3d =
/*#__PURE__*/
function (_Node3d) {
  (0, _inherits2.default)(Mesh3d, _Node3d);

  function Mesh3d(program) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        model = _ref.model,
        attrs = (0, _objectWithoutProperties2.default)(_ref, ["model"]);

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

    if (model) {
      _this.setGeometry(model);
    }

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

      function parseData(data) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
        var d = data.data || data;
        if (Array.isArray(d)) d = new Float32Array(d);
        var s = data.size || size;

        if (data.data) {
          data.data = d;
          data.size = s;
          return data;
        }

        return {
          size: s,
          data: d
        };
      }

      var program = this[_program];
      var gl = program.gl;
      var geometry;

      if (model instanceof _ogl.Geometry) {
        geometry = model;
      } else {
        var position = model.position,
            uv = model.uv,
            normal = model.normal,
            index = model.index,
            others = (0, _objectWithoutProperties2.default)(model, ["position", "uv", "normal", "index"]);
        var geometryData = {};
        if (position) geometryData.position = parseData(position);
        if (uv) geometryData.uv = parseData(uv, 2);
        if (normal) geometryData.normal = parseData(normal);

        if (index) {
          var data = index.data || index;
          if (Array.isArray(data)) data = new Uint16Array(data);
          geometryData.index = {
            data: data
          };
        }

        if (others) {
          var positionCount;
          var _position = geometryData.position;

          if (_position) {
            positionCount = _position.data.length / _position.size;
          }

          Object.entries(others).forEach(function (_ref2) {
            var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];

            var size = 3;

            if (!value.size) {
              var length = value.data ? value.data.length : value.length;
              if (length && positionCount) size = length / positionCount;
            }

            geometryData[key] = parseData(value, size);
          });
        }

        geometry = new _ogl.Geometry(gl, geometryData);
      }

      var extraAttrs = program.extraAttribute;

      if (extraAttrs) {
        Object.entries(extraAttrs).forEach(function (_ref4) {
          var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
              key = _ref5[0],
              setter = _ref5[1];

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
        var listeners = this.getListeners('beforerender');

        if (listeners.length) {
          var _mesh$onBeforeRender;

          (_mesh$onBeforeRender = mesh.onBeforeRender).push.apply(_mesh$onBeforeRender, (0, _toConsumableArray2.default)(listeners));
        }

        listeners = this.getListeners('afterrender');

        if (listeners.length) {
          var _mesh$onAfterRender;

          (_mesh$onAfterRender = mesh.onAfterRender).push.apply(_mesh$onAfterRender, (0, _toConsumableArray2.default)(listeners));
        }
      }
    }
    /* override */

  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(Mesh3d.prototype), "addEventListener", this).call(this, type, listener, options);

      if (this.body && type === 'beforerender') {
        this.body.onBeforeRender(listener);
      } else if (this.body && type === 'afterrender') {
        this.body.onAfterRender(listener);
      }

      return this;
    }
    /* override */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(Mesh3d.prototype), "removeEventListener", this).call(this, type, options);

      if (this.body && type === 'beforerender') {
        this.body.beforeRenderCallbacks.length = 0;
      } else if (this.body && type === 'afterrender') {
        this.body.afterRenderCallbacks.length = 0;
      }

      return this;
    }
    /* override */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(Mesh3d.prototype), "removeEventListener", this).call(this, type, listener, options);

      if (this.body && type === 'beforerender') {
        var list = this.body.beforeRenderCallbacks;
        var idx = list.indexOf(listener);

        if (idx >= 0) {
          list.splice(idx, 1);
        }
      } else if (this.body && type === 'afterrender') {
        var _list = this.body.afterRenderCallbacks;

        var _idx = _list.indexOf(listener);

        if (_idx >= 0) {
          _list.splice(_idx, 1);
        }
      }

      return this;
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
    key: "meshes",
    get: function get() {
      return this.body ? [this.body] : [];
    }
  }]);
  return Mesh3d;
}(_node3d.default);

exports.default = Mesh3d;
(0, _spritejs.registerNode)(Mesh3d, 'mesh3d');