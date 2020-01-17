import {registerNode} from 'spritejs';
import {RenderTarget as _RenderTarget} from 'ogl';
import Group3d from './group3d';
import Camera from './camera';

const _target = Symbol('target');
const _buffer = Symbol('buffer');

export default class RenderTarget extends Group3d {
  constructor(gl, {
    width = gl.canvas.width,
    height = gl.canvas.height,
    target = gl.FRAMEBUFFER,
    color = 1, // number of color attachments
    depth = true,
    stencil = false,
    depthTexture = false, // note - stencil breaks
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
    buffer = false,
    ...attrs} = {}) {
    super(attrs);

    const options = {width,
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
      premultiplyAlpha};

    this.options = options;
    this[_target] = new _RenderTarget(gl, options);

    if(buffer) {
      this[_buffer] = new _RenderTarget(gl, this.options);
    }

    if(cameraOptions) {
      const camera = new Camera(gl, cameraOptions);
      camera.connect(this, 0);
      this.camera = camera;
    }
  }

  get texture() {
    return this[_buffer] ? this[_buffer].texture : this[_target].texture;
  }

  renderBy(layer, {root = this, ...options} = {}) {
    const camera = this.camera ? this.camera.body : null;
    const target = this[_target];

    this.dispatchEvent({type: 'beforerender', detail: {scene: root, camera, renderer: layer}});

    layer.renderer.render({scene: root.body, camera, target, ...options});
    this.dispatchEvent({type: 'afterrender', detail: {scene: root, camera, renderer: layer}});
    return this[_target].texture;
  }

  swap() {
    if(this[_buffer] == null) {
      throw new Error('No buffer to swap. You must set buffer option to true when creating the renderTarget object.');
    }
    [this[_target], this[_buffer]] = [this[_buffer], this[_target]];
  }
}

registerNode(RenderTarget, 'rendertarget');