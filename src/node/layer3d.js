import {Layer, registerNode, ENV, Block} from 'spritejs';
import {Renderer, Program, Texture, Orbit, Vec3, Vec2, Raycast} from 'ogl';
import Camera from './camera';
import Group3d from './group3d';

const defaultOption = {
  alpha: true,
  depth: true,
};

const _controls = Symbol('orbit_controls');
const _orbitChecker = Symbol('orbit_checker');
const _orbitChecking = Symbol('orbit_checking');

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

  get meshes() {
    const children = this.children;
    const ret = [];
    for(let i = 0; i < children.length; i++) {
      const child = children[i];
      if(child.meshes && child.meshes.length) ret.push(...child.meshes);
    }
    return ret;
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

  get orbitControls() {
    return this[_controls];
  }

  setOrbit(options = {}) {
    if(!this[_orbitChecker]) {
      this[_orbitChecker] = [
        () => { this[_orbitChecking] = true },
        () => { this[_orbitChecking] = false },
        () => { if(this[_orbitChecking]) { this.forceUpdate() } },
        () => { this.forceUpdate() },
      ];
    }
    const camera = this.camera;
    if(this[_controls]) {
      this[_controls].remove();
      this.removeEventListener('mousedown', this[_orbitChecker][0]);
      this.removeEventListener('mouseup', this[_orbitChecker][1]);
      this.removeEventListener('mousemove', this[_orbitChecker][2]);
      this.removeEventListener('touchstart', this[_orbitChecker][3]);
      this.removeEventListener('touchend', this[_orbitChecker][3]);
      this.removeEventListener('touchmove', this[_orbitChecker][3]);
      window.removeEventListener('wheel', this[_orbitChecker][3], false);
    }
    if(options == null) {
      delete this[_controls];
      return null;
    }
    const target = options.target || [0, 0, 0];
    options.target = new Vec3(...target);
    options.element = this.canvas;
    this[_controls] = new Orbit(camera.body, options);
    this.addEventListener('mousedown', this[_orbitChecker][0]);
    this.addEventListener('mouseup', this[_orbitChecker][1]);
    this.addEventListener('mousemove', this[_orbitChecker][2]);
    this.addEventListener('touchstart', this[_orbitChecker][3]);
    this.addEventListener('touchend', this[_orbitChecker][3]);
    this.addEventListener('touchmove', this[_orbitChecker][3]);
    window.addEventListener('wheel', this[_orbitChecker][3], false);
    return this[_controls];
  }

  setRaycast(enable = true) {
    if(enable) {
      const gl = this.renderer.gl;
      this.raycast = new Raycast(gl);
    } else {
      delete this.raycast;
    }
  }

  async loadImage(src) {
    const image = await ENV.loadImage(src);
    return image;
  }

  async loadModel(src) {
    const data = await (await fetch(src)).json();
    return data;
  }

  createTexture(image /* or imageList */) {
    const gl = this.renderer.gl;
    const texture = new Texture(gl);
    texture.image = image;
    return texture;
  }

  /* override */
  dispatchPointerEvent(event) {
    const raycast = this.raycast;
    if(raycast) {
      const mouse = new Vec2();
      const renderer = this.renderer;
      mouse.set(
        2.0 * (event.x / renderer.width) - 1.0,
        2.0 * (1.0 - event.y / renderer.height) - 1.0
      );
      raycast.castMouse(this.camera.body, mouse);
      const hits = raycast.intersectBounds(this.meshes);
      if(hits && hits.length) {
        const target = hits[0];
        event.target = target._node;
        event.mouse = mouse;
        target._node.dispatchEvent(event);
        return true;
      }
    }
    return Block.prototype.dispatchPointerEvent.call(this, event);
  }

  /* override */
  render() {
    if(this[_controls]) {
      this[_controls].update();
    }
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