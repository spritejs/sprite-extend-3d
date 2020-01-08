"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TextureLoader", {
  enumerable: true,
  get: function get() {
    return _ogl.TextureLoader;
  }
});
Object.defineProperty(exports, "Texture", {
  enumerable: true,
  get: function get() {
    return _ogl.Texture;
  }
});
Object.defineProperty(exports, "Layer3D", {
  enumerable: true,
  get: function get() {
    return _layer3d.default;
  }
});
Object.defineProperty(exports, "Mesh3d", {
  enumerable: true,
  get: function get() {
    return _mesh3d.default;
  }
});
Object.defineProperty(exports, "Sphere", {
  enumerable: true,
  get: function get() {
    return _sphere.default;
  }
});
Object.defineProperty(exports, "Camera", {
  enumerable: true,
  get: function get() {
    return _camera.default;
  }
});
Object.defineProperty(exports, "Cube", {
  enumerable: true,
  get: function get() {
    return _cube.default;
  }
});
Object.defineProperty(exports, "Plane", {
  enumerable: true,
  get: function get() {
    return _plane.default;
  }
});
Object.defineProperty(exports, "Cylinder", {
  enumerable: true,
  get: function get() {
    return _cylinder.default;
  }
});
Object.defineProperty(exports, "Group3d", {
  enumerable: true,
  get: function get() {
    return _group3d.default;
  }
});
exports.shaders = void 0;

var _ogl = require("ogl");

var _spritejs = require("spritejs");

var _layer3d = _interopRequireDefault(require("./node/layer3d"));

var _mesh3d = _interopRequireDefault(require("./node/mesh3d"));

var _sphere = _interopRequireDefault(require("./node/sphere"));

var _camera = _interopRequireDefault(require("./node/camera"));

var _cube = _interopRequireDefault(require("./node/cube"));

var _plane = _interopRequireDefault(require("./node/plane"));

var _cylinder = _interopRequireDefault(require("./node/cylinder"));

var _group3d = _interopRequireDefault(require("./node/group3d"));

var shaders = _interopRequireWildcard(require("./shader"));

exports.shaders = shaders;

_spritejs.Scene.prototype.layer3d = function () {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default3d';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var displayRatio = this.options.displayRatio;
  options = Object.assign({
    dpr: displayRatio
  }, this.options, options);
  options.id = id;
  var layers = this.orderedChildren;

  for (var i = 0; i < layers.length; i++) {
    if (layers[i].id === id) return layers[i];
  }

  var layer = new _layer3d.default(options);
  this.appendChild(layer);
  return layer;
};