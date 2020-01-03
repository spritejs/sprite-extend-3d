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

var CylinderAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  (0, _inherits2.default)(CylinderAttr, _GeometryAttr);

  function CylinderAttr(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, CylinderAttr);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CylinderAttr).call(this, subject));

    _this[setDefault]({
      radiusTop: 0.5,
      radiusBottom: 0.5,
      height: 1,
      radialSegments: 16,
      heightSegments: 1,
      openEnded: false,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    });

    return _this;
  }

  (0, _createClass2.default)(CylinderAttr, [{
    key: "radiusTop",
    get: function get() {
      return this[getAttribute]('radiusTop');
    },
    set: function set(value) {
      this[setAttribute]('radiusTop', value);
    }
  }, {
    key: "radiusBottom",
    get: function get() {
      return this[getAttribute]('radiusBottom');
    },
    set: function set(value) {
      this[setAttribute]('radiusBottom', value);
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      this[setAttribute]('height', value);
    }
  }, {
    key: "radialSegments",
    get: function get() {
      return this[getAttribute]('radialSegments');
    },
    set: function set(value) {
      this[setAttribute]('radialSegments', value);
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
    key: "openEnded",
    get: function get() {
      return this[getAttribute]('openEnded');
    },
    set: function set(value) {
      this[setAttribute]('openEnded', value);
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
  return CylinderAttr;
}(_geometry.default);

exports.default = CylinderAttr;