import {Layer, registerNode, ENV} from 'spritejs';
import {Renderer, Program, Texture} from 'ogl';
import Camera from './camera';
import Group3d from './group3d';

const defaultOption = {
  alpha: true,
  depth: true,
};

export default class Layer3D extends Layer {
  constructor(options = {}) {
    if(options.contextType === '2d') {
      throw new TypeError('Cannot create 3d layer in 2d context.');
    }

    if(!options.Renderer) {
      options.Renderer = function (canvas, opts) {
        opts = Object.assign({}, defaultOption, opts);
        const renderer = new Renderer({canvas, ...opts});
        // TODO: 支持粘连模式??
        renderer.globalTransformMatrix = [1, 0, 0, 1, 0, 0];
        renderer.setGlobalTransform = function (matrix) {

        };
        return renderer;
      };
    }
    super(options);
    const gl = this.renderer.gl;
    gl.clearColor(0, 0, 1, 0);
    const cameraOptions = options.camera || {};
    const camera = new Camera(gl, {parent: this, ...cameraOptions});
    camera.attributes.z = 5;
    this.camera = camera;
    this.root = new Group3d();
    this.root.connect(this, 0);
  }

  get body() {
    return this.root.body;
  }

  /* override */
  setResolution({width, height}) {
    super.setResolution({width, height});

    const displayRatio = this.displayRatio;
    const renderer = this.renderer;

    this.renderer.dpr = displayRatio;

    renderer.width = width / displayRatio;
    renderer.height = height / displayRatio;

    const gl = renderer.gl;
    gl.canvas.width = width;
    gl.canvas.height = height;

    const camera = this.camera;
    if(camera) {
      camera.attributes.aspect = width / height;
      // camera.body.perspective({
      //   aspect: width / height,
      // });
    }
  }

  appendChild(el) {
    const ret = super.appendChild(el);
    el.body.setParent(this.body);
    return ret;
  }

  insertBefore(el, ref) {
    const ret = super.insertBefore(el, ref);
    el.body.setParent(this.body);
    return ret;
  }

  replaceChild(el, ref) {
    const ret = super.replaceChild(el, ref);
    ref.body.setParent(null);
    el.body.setParent(this.body);
    return ret;
  }

  removeChild(el) {
    const ret = super.removeChild(el);
    el.body.setParent(null);
    return ret;
  }

  /* {vertex, fragment, uniforms = {}} */
  createProgram(options) {
    const gl = this.renderer.gl;
    const program = new Program(gl, options);

    return program;
  }

  async loadImage(src) {
    const image = await ENV.loadImage(src);
    return image;
  }

  async loadModel(src) {
    const data = await (await fetch(src)).json();
    return data;
  }

  createTexture(image) {
    const gl = this.renderer.gl;
    const texture = new Texture(gl);
    texture.image = image;
    return texture;
  }

  /* override */
  render() {
    this.renderer.render({scene: this.root.body, camera: this.camera.body});
    if(this.prepareRender) {
      if(this.prepareRender._requestID) {
        cancelAnimationFrame(this.prepareRender._requestID);
      }
      this.prepareRender._resolve();
      delete this.prepareRender;
    }
  }
}

registerNode(Layer3D, 'layer3d');