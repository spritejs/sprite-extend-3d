function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { registerNode } from 'spritejs';
import { RenderTarget as _RenderTarget } from 'ogl';
import Group3d from './group3d';
import Camera from './camera';

const _target = Symbol('target');

const _buffer = Symbol('buffer');

export default class RenderTarget extends Group3d {
  constructor(gl, _ref = {}) {
    let {
      width = gl.canvas.width,
      height = gl.canvas.height,
      target = gl.FRAMEBUFFER,
      color = 1,
      // number of color attachments
      depth = true,
      stencil = false,
      depthTexture = false,
      // note - stencil breaks
      wrapS = gl.CLAMP_TO_EDGE,
      wrapT = gl.CLAMP_TO_EDGE,
      minFilter = gl.LINEAR,
      magFilter = minFilter,
      type = gl.UNSIGNED_BYTE,
      format = gl.RGBA,
      internalFormat = format,
      unpackAlignment,
      premultiplyAlpha,
      camera: cameraOptions,
      buffer = false
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["width", "height", "target", "color", "depth", "stencil", "depthTexture", "wrapS", "wrapT", "minFilter", "magFilter", "type", "format", "internalFormat", "unpackAlignment", "premultiplyAlpha", "camera", "buffer"]);

    super(attrs);
    const options = {
      width,
      height,
      target,
      color,
      depth,
      stencil,
      depthTexture,
      wrapS,
      wrapT,
      minFilter,
      magFilter,
      type,
      format,
      internalFormat,
      unpackAlignment,
      premultiplyAlpha
    };
    this.options = options;
    this[_target] = new _RenderTarget(gl, options);

    if (buffer) {
      this[_buffer] = new _RenderTarget(gl, this.options);
    }

    if (cameraOptions) {
      const camera = new Camera(gl, cameraOptions);
      camera.connect(this, 0);
      this.camera = camera;
    }
  }

  get texture() {
    return this[_buffer] ? this[_buffer].texture : this[_target].texture;
  }

  renderBy(layer, _ref2 = {}) {
    let {
      root = this
    } = _ref2,
        options = _objectWithoutProperties(_ref2, ["root"]);

    const camera = this.camera ? this.camera.body : null;
    const target = this[_target];
    this.dispatchEvent({
      type: 'beforerender',
      detail: {
        scene: root,
        camera,
        renderer: layer
      }
    });
    layer.renderer.render(_objectSpread({
      scene: root.body,
      camera,
      target
    }, options));
    this.dispatchEvent({
      type: 'afterrender',
      detail: {
        scene: root,
        camera,
        renderer: layer
      }
    });
    return this[_target].texture;
  }

  swap() {
    if (this[_buffer] == null) {
      throw new Error('No buffer to swap. You must set buffer option to true when creating the renderTarget object.');
    }

    [this[_target], this[_buffer]] = [this[_buffer], this[_target]];
  }

}
registerNode(RenderTarget, 'rendertarget');