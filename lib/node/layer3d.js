"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _spritejs = require("spritejs");

var _ogl = require("ogl");

var _camera = _interopRequireDefault(require("./camera"));

var _group3d = _interopRequireDefault(require("./group3d"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultOption = {
  alpha: true,
  depth: true
};

var _controls = Symbol('orbit_controls');

var _orbitChecker = Symbol('orbit_checker');

var _orbitChecking = Symbol('orbit_checking');

var Layer3D =
/*#__PURE__*/
function (_Layer) {
  (0, _inherits2.default)(Layer3D, _Layer);

  function Layer3D() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Layer3D);

    if (options.contextType === '2d') {
      throw new TypeError('Cannot create 3d layer in 2d context.');
    }

    if (!options.Renderer) {
      options.Renderer = function (canvas, opts) {
        opts = Object.assign({}, defaultOption, opts);
        var renderer = new _ogl.Renderer(_objectSpread({
          canvas: canvas
        }, opts)); // TODO: 支持粘连模式??

        renderer.globalTransformMatrix = [1, 0, 0, 1, 0, 0];

        renderer.setGlobalTransform = function (matrix) {};

        return renderer;
      };
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layer3D).call(this, options));
    var gl = _this.renderer.gl;
    gl.clearColor(0, 0, 1, 0);
    var cameraOptions = options.camera || {};
    var camera = new _camera.default(gl, _objectSpread({
      parent: (0, _assertThisInitialized2.default)(_this)
    }, cameraOptions));
    camera.attributes.z = 5;
    _this.camera = camera;
    _this.root = new _group3d.default();

    _this.root.connect((0, _assertThisInitialized2.default)(_this), 0);

    return _this;
  }

  (0, _createClass2.default)(Layer3D, [{
    key: "setResolution",

    /* override */
    value: function setResolution(_ref) {
      var width = _ref.width,
          height = _ref.height;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Layer3D.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });
      var displayRatio = this.displayRatio;
      var renderer = this.renderer;
      this.renderer.dpr = displayRatio;
      renderer.width = width / displayRatio;
      renderer.height = height / displayRatio;
      var gl = renderer.gl;
      gl.canvas.width = width;
      gl.canvas.height = height;
      var camera = this.camera;

      if (camera) {
        camera.attributes.aspect = width / height; // camera.body.perspective({
        //   aspect: width / height,
        // });
      }
    } // appendChild(el) {
    //   const ret = super.appendChild(el);
    //   el.body.setParent(this.body);
    //   return ret;
    // }
    // insertBefore(el, ref) {
    //   const ret = super.insertBefore(el, ref);
    //   el.body.setParent(this.body);
    //   return ret;
    // }
    // replaceChild(el, ref) {
    //   const ret = super.replaceChild(el, ref);
    //   ref.body.setParent(null);
    //   el.body.setParent(this.body);
    //   return ret;
    // }
    // removeChild(el) {
    //   const ret = super.removeChild(el);
    //   el.body.setParent(null);
    //   return ret;
    // }

    /* {vertex, fragment, uniforms = {}} */

  }, {
    key: "createProgram",
    value: function createProgram(options) {
      var gl = this.renderer.gl;
      var program = new _ogl.Program(gl, options);
      return program;
    }
  }, {
    key: "setOrbit",
    value: function setOrbit() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this[_orbitChecker]) {
        this[_orbitChecker] = [function () {
          _this2[_orbitChecking] = true;
        }, function () {
          _this2[_orbitChecking] = false;
        }, function () {
          if (_this2[_orbitChecking]) {
            _this2.forceUpdate();
          }
        }, function () {
          _this2.forceUpdate();
        }];
      }

      var camera = this.camera;

      if (this[_controls]) {
        this[_controls].remove();

        this.removeEventListener('mousedown', this[_orbitChecker][0]);
        this.removeEventListener('mouseup', this[_orbitChecker][1]);
        this.removeEventListener('mousemove', this[_orbitChecker][2]);
        this.removeEventListener('touchstart', this[_orbitChecker][3]);
        this.removeEventListener('touchend', this[_orbitChecker][3]);
        this.removeEventListener('touchmove', this[_orbitChecker][3]);
        window.removeEventListener('wheel', this[_orbitChecker][3], false);
      }

      if (options == null) {
        delete this[_controls];
        return null;
      }

      var target = options.target || [0, 0, 0];
      options.target = (0, _construct2.default)(_ogl.Vec3, (0, _toConsumableArray2.default)(target));
      options.element = options.element || this.parent.container;
      this[_controls] = new _ogl.Orbit(camera.body, options);
      this.addEventListener('mousedown', this[_orbitChecker][0]);
      this.addEventListener('mouseup', this[_orbitChecker][1]);
      this.addEventListener('mousemove', this[_orbitChecker][2]);
      this.addEventListener('touchstart', this[_orbitChecker][3]);
      this.addEventListener('touchend', this[_orbitChecker][3]);
      this.addEventListener('touchmove', this[_orbitChecker][3]);
      window.addEventListener('wheel', this[_orbitChecker][3], false);
      return this[_controls];
    }
  }, {
    key: "setRaycast",
    value: function setRaycast() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (enable) {
        var gl = this.renderer.gl;
        this.raycast = new _ogl.Raycast(gl);
      } else {
        delete this.raycast;
      }
    }
  }, {
    key: "loadImage",
    value: function () {
      var _loadImage = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(src) {
        var image;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _spritejs.ENV.loadImage(src);

              case 2:
                image = _context.sent;
                return _context.abrupt("return", image);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadImage(_x) {
        return _loadImage.apply(this, arguments);
      }

      return loadImage;
    }()
  }, {
    key: "loadModel",
    value: function () {
      var _loadModel = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(src) {
        var data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(src);

              case 2:
                _context2.next = 4;
                return _context2.sent.json();

              case 4:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function loadModel(_x2) {
        return _loadModel.apply(this, arguments);
      }

      return loadModel;
    }()
  }, {
    key: "createTexture",
    value: function createTexture(image
    /* or imageList */
    ) {
      var gl = this.renderer.gl;
      var texture = new _ogl.Texture(gl);

      if (typeof image === 'string') {
        return this.loadImage(image).then(function (res) {
          texture.image = res;
          return texture;
        });
      }

      texture.image = image;
      return texture;
    }
    /* override */

  }, {
    key: "dispatchPointerEvent",
    value: function dispatchPointerEvent(event) {
      var raycast = this.raycast;

      if (raycast) {
        var mouse = new _ogl.Vec2();
        var renderer = this.renderer;
        mouse.set(2.0 * (event.x / renderer.width) - 1.0, 2.0 * (1.0 - event.y / renderer.height) - 1.0);
        raycast.castMouse(this.camera.body, mouse);
        var hits = raycast.intersectBounds(this.meshes);

        if (hits && hits.length) {
          var target = hits[0];
          event.target = target._node;
          event.mouse = mouse;

          target._node.dispatchEvent(event);

          return true;
        }
      }

      return _spritejs.Block.prototype.dispatchPointerEvent.call(this, event);
    }
    /* override */

  }, {
    key: "render",
    value: function render() {
      if (this[_controls]) {
        this[_controls].update();
      }

      this.renderer.render({
        scene: this.root.body,
        camera: this.camera.body
      });

      this._prepareRenderFinished();
    }
  }, {
    key: "body",
    get: function get() {
      return this.root ? this.root.body : null;
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
  }, {
    key: "orbitControls",
    get: function get() {
      return this[_controls];
    }
  }]);
  return Layer3D;
}(_spritejs.Layer);

exports.default = Layer3D;
(0, _spritejs.registerNode)(Layer3D, 'layer3d');