"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _spritejs = require("spritejs");

var _ogl = require("ogl");

var _node3d = _interopRequireDefault(require("./node3d"));

var _zOrder = Symbol('zOrder');

var _children = Symbol('children');

var Group3d =
/*#__PURE__*/
function (_Node3d) {
  (0, _inherits2.default)(Group3d, _Node3d);

  function Group3d() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Group3d);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Group3d).call(this, attrs));

    _this.setBody(new _ogl.Transform());

    _this[_children] = [];
    _this[_zOrder] = 0;
    return _this;
  }
  /* override */


  (0, _createClass2.default)(Group3d, [{
    key: "setBody",
    value: function setBody(body) {
      if (!this.body) {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Group3d.prototype), "setBody", this).call(this, body);
      } else {
        throw new Error('Cannot reset the body of group3d.');
      }
    }
  }, {
    key: "append",
    value: function append() {
      var _this2 = this;

      for (var _len = arguments.length, els = new Array(_len), _key = 0; _key < _len; _key++) {
        els[_key] = arguments[_key];
      }

      return els.map(function (el) {
        return _this2.appendChild(el);
      });
    }
  }, {
    key: "appendChild",
    value: function appendChild(el) {
      el.remove();
      this.children.push(el);
      el.connect(this, this[_zOrder]++);
      return el;
    }
    /* override */

  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var node = (0, _get2.default)((0, _getPrototypeOf2.default)(Group3d.prototype), "cloneNode", this).call(this);

      if (deep) {
        this[_children].forEach(function (child) {
          var childNode = child.cloneNode(deep);
          node.appendChild(childNode);
        });
      }

      return node;
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return _spritejs.Group.prototype.querySelector.call(this, "#".concat(id));
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return _spritejs.Group.prototype.querySelectorAll.call(this, ".".concat(className));
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      return _spritejs.Group.prototype.querySelectorAll.call(this, "[name=\"".concat(name, "\"]"));
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      return _spritejs.Group.prototype.querySelectorAll.call(this, tagName);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(el, ref) {
      if (ref == null) return this.appendChild(el);
      el.remove();

      var refIdx = this[_children].indexOf(ref);

      if (refIdx < 0) {
        throw new Error('Invalid reference node.');
      }

      var zOrder = ref.zOrder;

      for (var i = refIdx; i < this[_children].length; i++) {
        var order = this[_children][i].zOrder;
        var child = this[_children][i];
        delete child.zOrder;
        Object.defineProperty(child, 'zOrder', {
          value: order + 1,
          writable: false,
          configurable: true
        });
      }

      this[_children].splice(refIdx, 0, el);

      el.connect(this, zOrder);
      return el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      return _spritejs.Group.prototype.querySelector.call(this, selector);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      return _spritejs.Group.prototype.querySelectorAll.call(this, selector);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(el, ref) {
      el.remove();

      var refIdx = this[_children].indexOf(ref);

      if (refIdx < 0) {
        throw new Error('Invalid reference node.');
      }

      this[_children][refIdx] = el;
      el.connect(this, ref.zOrder);
      ref.disconnect();
      return el;
    }
  }, {
    key: "removeAllChildren",
    value: function removeAllChildren() {
      var children = this[_children];

      for (var i = children.length - 1; i >= 0; i--) {
        children[i].remove();
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      var idx = this[_children].indexOf(el);

      if (idx >= 0) {
        this[_children].splice(idx, 1);

        el.disconnect();
        return el;
      }

      return null;
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution(_ref) {
      var width = _ref.width,
          height = _ref.height;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Group3d.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });

      this[_children].forEach(function (child) {
        child.setResolution({
          width: width,
          height: height
        });
      });
    }
  }, {
    key: "childNodes",
    get: function get() {
      return this[_children];
    }
  }, {
    key: "children",
    get: function get() {
      return this[_children];
    }
  }, {
    key: "meshes",
    get: function get() {
      var children = this.children;
      var ret = [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.meshes && child.meshes.length) ret.push.apply(ret, (0, _toConsumableArray2.default)(child.meshes));
      }

      return ret;
    }
  }]);
  return Group3d;
}(_node3d.default);

exports.default = Group3d;
(0, _spritejs.registerNode)(Group3d, 'group3d');