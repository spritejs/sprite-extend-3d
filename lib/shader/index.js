"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GEOMETRY_WITH_TEXTURE_AND_SHADOW = exports.GEOMETRY_WITH_SHADOW = exports.GEOMETRY_WITH_TEXTURE = exports.TEXTURE_WITH_SHADOW = exports.BASE_TEXTURE = exports.BASE_GEOMETRY = void 0;

var _geometry = _interopRequireDefault(require("./geometry.frag"));

var _geometry2 = _interopRequireDefault(require("./geometry.vert"));

var _texture = _interopRequireDefault(require("./texture.frag"));

var _texture2 = _interopRequireDefault(require("./texture.vert"));

var _texture_with_shadow = _interopRequireDefault(require("./texture_with_shadow.frag"));

var _texture_with_shadow2 = _interopRequireDefault(require("./texture_with_shadow.vert"));

var _geometry_with_texture = _interopRequireDefault(require("./geometry_with_texture.frag"));

var _geometry_with_texture2 = _interopRequireDefault(require("./geometry_with_texture.vert"));

var _geometry_with_shadow = _interopRequireDefault(require("./geometry_with_shadow.frag"));

var _geometry_with_shadow2 = _interopRequireDefault(require("./geometry_with_shadow.vert"));

var _geometry_with_texture_and_shadow = _interopRequireDefault(require("./geometry_with_texture_and_shadow.frag"));

var _geometry_with_texture_and_shadow2 = _interopRequireDefault(require("./geometry_with_texture_and_shadow.vert"));

var BASE_GEOMETRY = {
  vertex: _geometry2.default,
  fragment: _geometry.default
};
exports.BASE_GEOMETRY = BASE_GEOMETRY;
var BASE_TEXTURE = {
  vertex: _texture2.default,
  fragment: _texture.default
};
exports.BASE_TEXTURE = BASE_TEXTURE;
var TEXTURE_WITH_SHADOW = {
  vertex: _texture_with_shadow2.default,
  fragment: _texture_with_shadow.default,
  uniforms: {
    shadow: {
      value: 0.5
    }
  }
};
exports.TEXTURE_WITH_SHADOW = TEXTURE_WITH_SHADOW;
var GEOMETRY_WITH_TEXTURE = {
  vertex: _geometry_with_texture2.default,
  fragment: _geometry_with_texture.default
};
exports.GEOMETRY_WITH_TEXTURE = GEOMETRY_WITH_TEXTURE;
var GEOMETRY_WITH_SHADOW = {
  vertex: _geometry_with_shadow2.default,
  fragment: _geometry_with_shadow.default,
  uniforms: {
    shadow: {
      value: 0.5
    }
  }
};
exports.GEOMETRY_WITH_SHADOW = GEOMETRY_WITH_SHADOW;
var GEOMETRY_WITH_TEXTURE_AND_SHADOW = {
  vertex: _geometry_with_texture_and_shadow2.default,
  fragment: _geometry_with_texture_and_shadow.default,
  uniforms: {
    shadow: {
      value: 0.5
    }
  }
};
exports.GEOMETRY_WITH_TEXTURE_AND_SHADOW = GEOMETRY_WITH_TEXTURE_AND_SHADOW;