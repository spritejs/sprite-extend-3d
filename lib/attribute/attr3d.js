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

var _spritejs = require("spritejs");

var Attr = _spritejs.Node.Attr;
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');
var declareAlias = Symbol.for('spritejs_declareAlias');

var Attr3d =
/*#__PURE__*/
function (_Attr) {
  (0, _inherits2.default)(Attr3d, _Attr);

  function Attr3d(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Attr3d);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Attr3d).call(this, subject));

    _this[setDefault]({
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

      /* rotate */
      scaleX: 0,
      scaleY: 0,
      scaleZ: 0,

      /* scale */
      raycast: undefined
    });

    _this[declareAlias]('rotate', 'scale');

    return _this;
  }

  (0, _createClass2.default)(Attr3d, [{
    key: "z",
    get: function get() {
      return this[getAttribute]('z');
    },
    set: function set(value) {
      this[setAttribute]('z', value);
    }
  }, {
    key: "raycast",
    get: function get() {
      return this[getAttribute]('raycast');
    },
    set: function set(value) {
      this[setAttribute]('raycast', value);
    }
    /* override */

  }, {
    key: "pos",
    get: function get() {
      return [this.x, this.y, this.z];
    },
    set: function set(value) {
      if (!Array.isArray(value)) value = [value, value, value];
      this.x = value[0] || 0;
      this.y = value[1] || 0;
      this.z = value[2] || 0;
    }
  }, {
    key: "rotateX",
    get: function get() {
      return this[getAttribute]('rotateX');
    },
    set: function set(value) {
      this[setAttribute]('rotateX', value);
    }
  }, {
    key: "rotateY",
    get: function get() {
      return this[getAttribute]('rotateY');
    },
    set: function set(value) {
      this[setAttribute]('rotateY', value);
    }
  }, {
    key: "rotateZ",
    get: function get() {
      return this[getAttribute]('rotateZ');
    },
    set: function set(value) {
      this[setAttribute]('rotateZ', value);
    }
    /* override */

  }, {
    key: "rotate",
    get: function get() {
      return [this.rotateX, this.rotateY, this.rotateZ];
    },
    set: function set(value) {
      if (!Array.isArray(value)) value = [value, 0, 0];
      this.rotateX = value[0] || 0;
      this.rotateY = value[1] || 0;
      this.rotateZ = value[2] || 0;
    }
  }, {
    key: "scaleX",
    get: function get() {
      return this[getAttribute]('scaleX');
    },
    set: function set(value) {
      this[setAttribute]('scaleX', value);
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this[getAttribute]('scaleY');
    },
    set: function set(value) {
      this[setAttribute]('scaleY', value);
    }
  }, {
    key: "scaleZ",
    get: function get() {
      return this[getAttribute]('scaleZ');
    },
    set: function set(value) {
      this[setAttribute]('scaleZ', value);
    }
    /* override */

  }, {
    key: "scale",
    get: function get() {
      return [this.scaleX, this.scaleY, this.scaleZ];
    },
    set: function set(value) {
      if (!Array.isArray(value)) value = [value, 0, 0];
      this.scaleX = value[0] || 0;
      this.scaleY = value[1] || 0;
      this.scaleZ = value[2] || 0;
    }
  }]);
  return Attr3d;
}(Attr);

exports.default = Attr3d;