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

var _geometry = _interopRequireDefault(require("./geometry"));

var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var SphereAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  (0, _inherits2.default)(SphereAttr, _GeometryAttr);

  function SphereAttr(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, SphereAttr);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SphereAttr).call(this, subject));

    _this[setDefault]({
      radius: 0.5,
      widthSegments: 32,
      heightSegments: 16,
      phiStart: 0,
      phiLength: Math.PI * 2,
      thetaStart: 0,
      thetaLength: Math.PI
    });

    return _this;
  }

  (0, _createClass2.default)(SphereAttr, [{
    key: "radius",
    get: function get() {
      return this[getAttribute]('radius');
    },
    set: function set(value) {
      this[setAttribute]('radius', value);
    }
  }, {
    key: "widthSegments",
    get: function get() {
      return this[getAttribute]('widthSegments');
    },
    set: function set(value) {
      this[setAttribute]('widthSegments', value);
    }
  }, {
    key: "heightSegments",
    get: function get() {
      return this[getAttribute]('heightSegments');
    },
    set: function set(value) {
      this[setAttribute]('heightSegments', value);
    }
  }, {
    key: "phiStart",
    get: function get() {
      return this[getAttribute]('phiStart');
    },
    set: function set(value) {
      this[setAttribute]('phiStart', value);
    }
  }, {
    key: "phiLength",
    get: function get() {
      return this[getAttribute]('phiLength');
    },
    set: function set(value) {
      this[setAttribute]('phiLength', value);
    }
  }, {
    key: "thetaStart",
    get: function get() {
      return this[getAttribute]('thetaStart');
    },
    set: function set(value) {
      this[setAttribute]('thetaStart', value);
    }
  }, {
    key: "thetaLength",
    get: function get() {
      return this[getAttribute]('thetaLength');
    },
    set: function set(value) {
      this[setAttribute]('thetaLength', value);
    }
  }]);
  return SphereAttr;
}(_geometry.default);

exports.default = SphereAttr;