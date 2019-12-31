import {Layer, registerNode} from 'spritejs';
import {Renderer, Program, Transform} from 'ogl';
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
    const camera = new Camera(gl, this);
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

    const renderer = this.renderer;
    const displayRatio = this.displayRatio;

    width *= displayRatio;
    height *= displayRatio;

    renderer.setSize(width, height);

    const camera = this.camera;
    if(camera) {
      camera.body.perspective({
        aspect: width / height,
      });
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
    el.body.setParent(this.body);
    return ret;
  }

  createProgram({vertex, fragment}) {
    const gl = this.renderer.gl;
    const program = new Program(gl, {
      vertex: `
          attribute vec3 position;

          uniform mat4 modelViewMatrix;
          uniform mat4 projectionMatrix;

          void main() {
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
          `,
      fragment: `
          void main() {
              gl_FragColor = vec4(1.0, 0, 0, 1.0);
          }
      `,
    });

    return program;
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