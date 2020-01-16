import {Layer, registerNode, ENV, Block, Color} from 'spritejs';
import {Renderer, Program, Texture, Orbit, Vec3, Vec2, Raycast, Post} from 'ogl';
import Shadow from '../helper/shadow';
import Camera from './camera';
import Group3d from './group3d';

const defaultOption = {
  depth: true,
  alpha: true,
};

const _controls = Symbol('orbit_controls');
const _orbitChecker = Symbol('orbit_checker');
const _orbitChecking = Symbol('orbit_checking');
const _utime = Symbol('utime');
const _shadow = Symbol('shadow');

const _directionalLight = Symbol('directionalLight');
const _pointLightPosition = Symbol('pointLightPosition');
const _pointLightColor = Symbol('pointLightColor');
const _ambientColor = Symbol('ambientColor');

const _targets = Symbol('targets');
const _post = Symbol('post');

const _renderOptions = Symbol('renderOptions');

export default class Layer3D extends Layer {
  constructor(options = {}) {
    if(options.contextType === '2d') {
      throw new TypeError('Cannot create 3d layer in 2d context.');
    }

    if(!options.Renderer) {
      options = Object.assign({}, defaultOption, options);
      options.Renderer = function (canvas, opts) {
        opts = Object.assign({}, opts);
        const renderer = new Renderer({canvas, ...opts});
        // TODO: 支持粘连模式??
        renderer.globalTransformMatrix = [1, 0, 0, 1, 0, 0];
        renderer.setGlobalTransform = function (matrix) {

        };
        return renderer;
      };
    }
    super(options);

    this[_utime] = [];
    this[_targets] = [];
    this[_directionalLight] = options.directionalLight || [1, 0, 0, 0];
    this[_pointLightPosition] = options.pointLightPosition || [0, 0, 0];
    this[_pointLightColor] = new Color(options.pointLightColor || [0, 0, 0, 0]);
    this[_ambientColor] = new Color(options.ambientColor || [1, 1, 1, 0]);
    this[_renderOptions] = {
      update: true,
      sort: true,
      frustumCull: true,
      clear: undefined,
    };

    const gl = this.renderer.gl;
    gl.clearColor(...this[_ambientColor]);

    if(options.post) {
      if(typeof options.post === 'boolean') options.post = {};
      this[_post] = new Post(gl, options.post);
    }

    options.camera = options.camera || {};
    const camera = new Camera(gl, options.camera);
    camera.connect(this, 0);
    this.camera = camera;
    this.root = new Group3d();
    this.root.connect(this, 0);
  }

  get body() {
    return this.root ? this.root.body : null;
  }

  get gl() {
    return this.renderer.gl;
  }

  get post() {
    return this[_post];
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

  get autoClear() {
    return this.renderer.autoClear;
  }

  set autoClear(value) {
    this.renderer.autoClear = value;
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
    if(camera && this.options.camera.preserveAspect !== false) {
      camera.attributes.aspect = width / height;
    }
    if(this[_post]) {
      this[_post].resize();
    }
  }

  setUniforms(program, uniforms) {
    super.setUniforms(uniforms);
    Object.entries(uniforms).forEach(([key, value]) => {
      program.uniforms[key] = {value};
    });
    this.forceUpdate();
  }

  setLights(program, {directionalLight = this[_directionalLight],
    pointLightPosition = this[_pointLightPosition],
    pointLightColor = this[_pointLightColor],
    ambientColor = this[_ambientColor]} = {}) {
    program.uniforms.directionalLight.value = directionalLight;
    program.uniforms.pointLightPosition.value = pointLightPosition;
    program.uniforms.pointLightColor.value = new Color(pointLightColor);
    program.uniforms.ambientColor.value = new Color(ambientColor);
    this.forceUpdate();
  }

  traverse(callback) {
    return this.root.traverse(callback);
  }

  /* {vertex, fragment, uniforms = {}} */
  createProgram({attributes, texture, uniforms, ...options} = {}, {attributes: extraAttributes, uniforms: extraUniforms} = {}) {
    const gl = this.renderer.gl;
    if(uniforms) {
      options.uniforms = {...uniforms};
    }
    const program = new Program(gl, options);
    if(extraAttributes) program.extraAttribute = Object.assign({}, attributes, extraAttributes);

    program.uniforms.directionalLight = {value: this[_directionalLight]};
    program.uniforms.pointLightPosition = {value: this[_pointLightPosition]};
    program.uniforms.pointLightColor = {value: this[_pointLightColor]};
    program.uniforms.ambientColor = {value: this[_ambientColor]};

    if(texture) program.uniforms.tMap = {value: texture};

    if(extraUniforms) Object.assign(program.uniforms, extraUniforms);
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
      this.removeEventListener('wheel', this[_orbitChecker][3], false);
    }
    if(options == null) {
      delete this[_controls];
      return null;
    }
    const target = options.target || [0, 0, 0];
    options.target = new Vec3(...target);
    options.element = options.element || this.parent.container;
    this[_controls] = new Orbit(camera.body, options);
    this.addEventListener('mousedown', this[_orbitChecker][0]);
    this.addEventListener('mouseup', this[_orbitChecker][1]);
    this.addEventListener('mousemove', this[_orbitChecker][2]);
    this.addEventListener('touchstart', this[_orbitChecker][3]);
    this.addEventListener('touchend', this[_orbitChecker][3]);
    this.addEventListener('touchmove', this[_orbitChecker][3]);
    this.addEventListener('wheel', this[_orbitChecker][3], false);
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

  bindTime(program, opts = {}) {
    program.timeline = this.timeline.fork(opts);
    this[_utime].push(program);
    this.forceUpdate();
  }

  unbindTime(program) {
    const idx = this[_utime].indexOf(program);
    if(idx >= 0) {
      this[_utime].splice(idx, 1);
      return true;
    }
    return false;
  }

  createText(text, {font, fillColor = '#000', strokeColor, strokeWidth = 1}) {
    const textImage = ENV.createText(text, {font, fillColor, strokeColor, strokeWidth}).image;
    return this.createTexture({
      image: textImage,
      generateMipmaps: false,
      width: textImage.width,
      height: textImage.height,
    });
  }

  async loadImage(src) {
    const image = await ENV.loadImage(src);
    return image;
  }

  async loadImages(imgs) {
    const res = await Promise.all(imgs.map(src => ENV.loadImage(src, {useImageBitmap: false})));
    return res;
  }

  async loadShader({vertex, fragment}) {
    const data = await Promise.all([(await fetch(vertex)).text(), (await fetch(fragment)).text()]);
    return {vertex: data[0], fragment: data[1]};
  }

  async loadModel(src) {
    const data = await (await fetch(src)).json();
    return data;
  }

  createTexture(opts) {
    const gl = this.renderer.gl;
    let src;

    function isImage(opts) {
      return typeof opts === 'string' || Array.isArray(opts) && typeof opts[0] === 'string';
    }

    if(isImage(opts)) {
      src = opts;
      opts = {};
    } else if(isImage(opts.image)) {
      src = opts.image;
      opts = {...opts};
      delete opts.image;
    } else if(Array.isArray(opts)) {
      opts = {image: opts};
    }

    const texture = new Texture(gl, opts);
    if(src) {
      let task;
      if(Array.isArray(src)) {
        task = this.loadImages(src);
      } else {
        task = this.loadImage(src);
      }
      task.then((res) => {
        texture.image = res;
        this.forceUpdate();
      });
      return texture;
    }
    return texture;
  }

  createShadow({width = this.canvas.width, height = this.canvas.height, light = this.camera} = {}) {
    const gl = this.renderer.gl;
    return new Shadow(gl, {width, height, light: light.body});
  }

  setShadow(shadow) {
    this[_shadow] = shadow;
    this.forceUpdate();
  }

  get shadow() {
    return this[_shadow];
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
        let target;
        for(let i = 0; i < hits.length; i++) {
          const node = hits[i]._node;
          const pointerEvents = node.attributes.pointerEvents;
          if(pointerEvents !== 'none'
            && (node.isVisible || pointerEvents === 'all')) {
            target = node;
            break;
          }
        }

        if(target) {
          event.mouse = mouse;
          target.dispatchEvent(event);
          return true;
        }
      }
    }
    return Block.prototype.dispatchPointerEvent.call(this, event);
  }

  bindTarget(target, options = {}) {
    this[_targets].push({target, options});
  }

  unbindTarget(target) {
    const idx = this[_targets].indexOf(target);
    if(idx >= 0) {
      this[_targets].splice(idx, 1);
      return true;
    }
    return false;
  }

  renderTarget(target, options = {}) {
    return target.renderBy(this, options);
  }

  setRenderOptions(opts) {
    Object.assign(this[_renderOptions], opts);
  }

  get renderOptions() {
    return this[_renderOptions];
  }

  /* override */
  render() {
    const {camera, root} = this;
    this.dispatchEvent({type: 'beforerender', detail: {camera: camera.body}});
    if(this[_targets].length) {
      this[_targets].forEach(({target, options}) => {
        target.renderBy(this, options);
      });
    }
    if(this[_controls]) {
      this[_controls].update();
    }
    if(this[_shadow]) {
      this[_shadow].render({scene: root.body});
    }
    if(this[_post]) {
      this[_post].render({scene: root.body, camera: camera.body, ...this[_renderOptions]});
    } else {
      this.renderer.render({scene: root.body, camera: camera.body, ...this[_renderOptions]});
    }
    this._prepareRenderFinished();
    if(this[_utime].length) {
      this[_utime].forEach((program) => {
        program.uniforms.uTime.value = program.timeline.currentTime * 0.001;
      });
      this.forceUpdate();
    }
    this.dispatchEvent({type: 'afterrender', detail: {camera: camera.body}});
  }
}

registerNode(Layer3D, 'layer3d');