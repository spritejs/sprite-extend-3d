"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _spritejs = require("spritejs");

var _attr3d = _interopRequireDefault(require("../attribute/attr3d"));

var _body = Symbol('body');

var changedAttrs = Symbol.for('spritejs_changedAttrs');

var Node3d =
/*#__PURE__*/
function (_Node) {
  (0, _inherits2.default)(Node3d, _Node);

  function Node3d() {
    (0, _classCallCheck2.default)(this, Node3d);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Node3d).apply(this, arguments));
  }

  (0, _createClass2.default)(Node3d, [{
    key: "setBody",
    value: function setBody(body) {
      var oldBody = this[_body];
      this[_body] = body;

      if (oldBody && oldBody.parent) {
        oldBody.setParent(null);
      }

      if (this.parent && this.parent.body) {
        this[_body].setParent(this.parent.body);
      }

      var _changedAttrs = Object.entries(this.attributes[changedAttrs]);

      for (var i = 0; i < _changedAttrs.length; i++) {
        var _changedAttrs$i = (0, _slicedToArray2.default)(_changedAttrs[i], 2),
            key = _changedAttrs$i[0],
            value = _changedAttrs$i[1];

        this.onPropertyChange(key, value, value);
      }

      var uniforms = this.uniforms;

      if (uniforms) {
        this.setUniforms(uniforms);
      }

      if (!uniforms && _changedAttrs.length <= 0) this.forceUpdate();
      body._node = this;
    }
    /* override */

  }, {
    key: "setUniforms",
    value: function setUniforms(uniforms) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Node3d.prototype), "setUniforms", this).call(this, uniforms);

      if (this.body && this.body.program) {
        var program = this.body.program;
        Object.entries(uniforms).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          program.uniforms[key] = {
            value: value
          };
        });
      }
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Node3d.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (this.body) {
        if (key === 'x' || key === 'y' || key === 'z') {
          this.body.position[key] = newValue;
        }

        if (key === 'rotateX' || key === 'rotateY' || key === 'rotateZ') {
          var value = newValue * Math.PI / 180;
          this.body.rotation[key.toLowerCase().slice(-1)] = value;
        }

        if (key === 'scaleX' || key === 'scaleY' || key === 'scaleZ') {
          this.body.scale[key.toLowerCase().slice(-1)] = newValue;
        }

        if (key === 'raycast') {
          this.body.geometry.raycast = newValue;
        }
      }
    }
    /* override */

  }, {
    key: "connect",
    value: function connect(parent, zOrder) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Node3d.prototype), "connect", this).call(this, parent, zOrder);

      if (parent.body && this.body) {
        if (this.body !== parent.body) {
          this.body.setParent(parent.body);
        }
      }
    }
    /* override */

  }, {
    key: "disconnect",
    value: function disconnect(parent, zOrder) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Node3d.prototype), "disconnect", this).call(this, parent, zOrder);

      if (this.body) {
        this.body.setParent(null);
      }
    }
  }, {
    key: "body",
    get: function get() {
      if (this[_body]) {
        return this[_body];
      }

      return null;
    }
  }, {
    key: "meshes",
    get: function get() {
      return [];
    }
  }, {
    key: "localMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].matrix;
      }

      return null;
    }
  }, {
    key: "renderMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].worldMatrix;
      }

      return null;
    } // the matrix with camera

  }, {
    key: "modelViewMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].modelViewMatrix;
      }

      return null;
    } // normal transform matrix

  }, {
    key: "normalMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].normalMatrix;
      }

      return null;
    }
  }, {
    key: "isVisible",
    get: function get() {
      if (this[_body]) {
        return this[_body].visible;
      }

      return false;
    }
  }, {
    key: "zDepth",
    get: function get() {
      if (this[_body]) {
        return this[_body].zDepth;
      }

      return null;
    }
  }]);
  return Node3d;
}(_spritejs.Node);

exports.default = Node3d;
(0, _defineProperty2.default)(Node3d, "Attr", _attr3d.default);
(0, _spritejs.registerNode)(Node3d, 'node3d');