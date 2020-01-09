import {registerNode} from 'spritejs';
import {RenderTarget} from 'ogl';
import Group3d from './group3d';
import Camera from './camera';

export default class _RenderTarget extends Group3d {
  constructor(gl, {
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
    premultiplyAlpha,
    camera: cameraOptions,
    ...attrs} = {}) {
    super(attrs);
    this.target = new RenderTarget(gl, {width,
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
      premultiplyAlpha} = {});

    cameraOptions = cameraOptions || {};
    const camera = new Camera(gl, cameraOptions);
    camera.connect(this, 0);
    this.camera = camera;
  }

  get texture() {
    return this.target.texture;
  }

  renderBy(layer) {
    this.dispatchEvent({type: 'beforerender', detail: {camera: this.camera.body, renderer: layer}});
    const scene = this.body;
    const camera = this.camera.body;
    const target = this.target;

    layer.renderer.render({scene, camera, target});
    this.dispatchEvent({type: 'afterrender', detail: {camera: this.camera.body, renderer: layer}});
    return this.target.texture;
  }
}

registerNode(_RenderTarget, 'rendertarget');