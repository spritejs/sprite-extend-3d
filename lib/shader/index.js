"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GEOMETRY_WITH_TEXTURE = exports.BASE_GEOMETRY = void 0;

var _geometry = _interopRequireDefault(require("./geometry.frag"));

var _geometry2 = _interopRequireDefault(require("./geometry.vert"));

var _geometry_with_texture = _interopRequireDefault(require("./geometry_with_texture.frag"));

var _geometry_with_texture2 = _interopRequireDefault(require("./geometry_with_texture.vert"));

var BASE_GEOMETRY = {
  vertex: _geometry2.default,
  fragment: _geometry.default,
  uniforms: {
    lighting: {
      value: [0.5, 0.5, 0.5, 0.1]
    }
  }
};
exports.BASE_GEOMETRY = BASE_GEOMETRY;
var GEOMETRY_WITH_TEXTURE = {
  vertex: _geometry_with_texture2.default,
  fragment: _geometry_with_texture.default,
  uniforms: {
    lighting: {
      value: [0.5, 0.5, 0.5, 0.1]
    }
  }
};
exports.GEOMETRY_WITH_TEXTURE = GEOMETRY_WITH_TEXTURE;