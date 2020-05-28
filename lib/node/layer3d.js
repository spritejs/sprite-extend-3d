function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Layer, registerNode, ENV, Block } from 'spritejs';
import { Renderer, Program, Texture, Orbit, Vec3, Vec2, Raycast, Post, GLTFLoader, Mesh } from 'ogl';
import Light from '../helper/light';
import Shadow from '../helper/shadow';
import Camera from './camera';
import Group3d from './group3d';
import Mesh3d from './mesh3d';
import { colorAttribute } from '../helper/color-attribute';
import { parseColor } from '../helper/parse-color';
const defaultOption = {
  depth: true,
  alpha: true
};

const _orbitChecker = Symbol('orbit_checker');

const _orbitChecking = Symbol('orbit_checking');

const _utime = Symbol('utime');

const _shadow = Symbol('shadow');

const _directionalLight = Symbol('directionalLight');

const _directionalLightColor = Symbol('directionLightColor');

const _pointLightPosition = Symbol('pointLightPosition');

const _pointLightColor = Symbol('pointLightColor');

const _pointLightDecay = Symbol('pointLightDecay');

const _ambientColor = Symbol('ambientColor');

const _spotLightPosition = Symbol('spotLightPosition');

const _spotLightColor = Symbol('spotLightColor');

const _spotLightDirection = Symbol('spotLightDirection');

const _spotLightAngle = Symbol('spotLightAngle');

const _spotLightDecay = Symbol('spotLightDecay');

const _spotLightBlur = Symbol('spotLightBlur');

const _targets = Symbol('targets');

const _post = Symbol('post');

const _renderOptions = Symbol('renderOptions');

const _root = Symbol('root');

const _camera = Symbol('camera');

const _sublayers = Symbol('sublayers');

const _orbit = Symbol('orbit');

export default class Layer3D extends Layer {
  constructor(options = {}) {
    if (options.contextType === '2d') {
      throw new TypeError('Cannot create 3d layer in 2d context.');
    }

    if (!options.Renderer) {
      options = Object.assign({}, defaultOption, options);

      options.Renderer = function (canvas, opts) {
        opts = Object.assign({}, opts);
        const renderer = new Renderer(_objectSpread({
          canvas
        }, opts)); // TODO: 支持粘连模式??

        renderer.globalTransformMatrix = [1, 0, 0, 1, 0, 0];

        renderer.setGlobalTransform = function (matrix) {};

        return renderer;
      };
    }

    super(options);
    this[_utime] = [];
    this[_targets] = [];
    this.updateLights(options, false);
    this[_renderOptions] = {
      update: true,
      sort: true,
      frustumCull: true,
      clear: undefined
    };
    const gl = this.renderer.gl; // gl.clearColor(...this[_ambientColor]);

    if (options.post) {
      if (typeof options.post === 'boolean') options.post = {};
      this[_post] = new Post(gl, options.post);
    }

    if (options.camera) {
      const camera = new Camera(gl, options.camera);
      camera.connect(this, 0);
      this[_camera] = camera;
    } else {
      this[_camera] = {
        body: null
      };
    }

    this[_root] = new Group3d();

    this[_root].connect(this, 0);

    this[_sublayers] = [];
    this[_orbit] = false;
  }

  get ambientColor() {
    return this[_ambientColor] || [1, 1, 1, 1];
  }

  set ambientColor(color) {
    this[_ambientColor] = parseColor(color);
    this.traverse(({
      program
    }) => {
      if (program) {
        program.uniforms.ambientColor.value = this[_ambientColor];
      }
    });
    this.forceUpdate();
  }

  get body() {
    return this[_root] ? this[_root].body : null;
  }

  get camera() {
    if (this[_camera] && this[_camera].body) {
      return this[_camera];
    }

    return null;
  }

  get gl() {
    return this.renderer.gl;
  }

  get meshes() {
    const children = this.children;
    const ret = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.meshes && child.meshes.length) ret.push(...child.meshes);
    }

    return ret;
  }

  get post() {
    return this[_post];
  }

  get renderOptions() {
    return this[_renderOptions];
  }

  get root() {
    return this[_root];
  }

  get shadow() {
    return this[_shadow];
  }

  get sublayers() {
    return this[_sublayers];
  }

  get autoClear() {
    return this.renderer.autoClear;
  }

  set autoClear(value) {
    this.renderer.autoClear = value;
  }

  bindTarget(target, options = {}) {
    this[_targets].push({
      target,
      options
    });
  }

  bindTime(program, opts = {}) {
    this.unbindTime(program);
    program.timeline = this.timeline.fork(opts);

    this[_utime].push(program);

    this.forceUpdate();
  }
  /* {vertex, fragment, uniforms = {}} */


  createProgram(_ref = {}, {
    attributes: extraAttributes,
    uniforms: extraUniforms
  } = {}) {
    let {
      attributes,
      texture,
      normalMap,
      bumpMap,
      uniforms
    } = _ref,
        options = _objectWithoutProperties(_ref, ["attributes", "texture", "normalMap", "bumpMap", "uniforms"]);

    const gl = this.renderer.gl;

    if (uniforms) {
      options.uniforms = _objectSpread({}, uniforms);
    }

    const program = new Program(gl, options);
    if (extraAttributes) program.extraAttribute = Object.assign({}, attributes, extraAttributes);
    program.uniforms.ambientColor = {};
    program.uniforms.directionalLight = {
      value: new Float32Array(24)
    };
    program.uniforms.directionalLightColor = {
      value: new Float32Array(32)
    };
    program.uniforms.pointLightPosition = {
      value: new Float32Array(48)
    };
    program.uniforms.pointLightColor = {
      value: new Float32Array(64)
    };
    program.uniforms.pointLightDecay = {
      value: new Float32Array(48)
    };
    program.uniforms.spotLightPosition = {
      value: new Float32Array(48)
    };
    program.uniforms.spotLightDirection = {
      value: new Float32Array(48)
    };
    program.uniforms.spotLightColor = {
      value: new Float32Array(64)
    };
    program.uniforms.spotLightDecay = {
      value: new Float32Array(48)
    };
    program.uniforms.spotLightAngle = {
      value: new Float32Array(16)
    };
    program.uniforms.spotLightBlur = {
      value: new Float32Array(16)
    };
    this.setLights(program);
    if (texture) program.uniforms.tMap = {
      value: texture
    };
    if (normalMap) program.uniforms.tNormal = {
      value: normalMap
    };
    if (bumpMap) program.uniforms.tBump = {
      value: bumpMap
    };

    if (gl.getUniformLocation(program.program, 'uShadow') && !program.uniforms.uShadow) {
      program.uniforms.uShadow = {
        value: 0.5
      };
    }

    if (gl.getUniformLocation(program.program, 'uResolution') && !program.uniforms.uResolution) {
      const {
        width,
        height
      } = this.getResolution();
      program.uniforms.uResolution = {
        value: [width, height]
      };
    }

    if (gl.getUniformLocation(program.program, 'uDPR') && !program.uniforms.uDPR) {
      const dpr = this.layer ? this.layer.displayRatio : 1;
      program.uniforms.uDPR = {
        value: dpr
      };
    }

    if (gl.getUniformLocation(program.program, 'uNormalScale') && !program.uniforms.uNormalScale) {
      program.uniforms.uNormalScale = {
        value: 1
      };
    }

    if (gl.getUniformLocation(program.program, 'uNormalUVScale') && !program.uniforms.uNormalUVScale) {
      program.uniforms.uNormalUVScale = {
        value: 1
      };
    }

    if (gl.getUniformLocation(program.program, 'specularFocus') && !program.uniforms.specularFocus) {
      program.uniforms.specularFocus = {
        value: 0.5
      };
    }

    if (gl.getUniformLocation(program.program, 'specularIntensity') && !program.uniforms.specularIntensity) {
      program.uniforms.specularIntensity = {
        value: 0
      };
    }

    program.extraAttribute = program.extraAttribute || {};

    if (gl.getAttribLocation(program.program, 'color') >= 0 && !program.extraAttribute.color) {
      program.extraAttribute.color = colorAttribute;
    }

    if (extraUniforms) Object.assign(program.uniforms, extraUniforms);
    return program;
  }

  createSublayer(_ref2 = {}) {
    let {
      camera = null
    } = _ref2,
        attrs = _objectWithoutProperties(_ref2, ["camera"]);

    if (!camera && this.camera) camera = this.camera.cloneNode();
    const root = new Group3d(attrs);
    root.camera = camera;
    return root;
  }

  createText(text, {
    font = '16px Helvetica,Arial,sans-serif',
    fillColor,
    strokeColor,
    strokeWidth = 1
  } = {}) {
    const textImage = ENV.createText(text, {
      font,
      fillColor,
      strokeColor,
      strokeWidth
    }).image;
    return this.createTexture({
      image: textImage,
      generateMipmaps: false,
      width: textImage.width,
      height: textImage.height
    });
  }

  createTexture(opts = {}) {
    const gl = this.renderer.gl;
    let src;

    function isImage(opts) {
      return typeof opts === 'string' || Array.isArray(opts) && typeof opts[0] === 'string';
    }

    if (isImage(opts)) {
      src = opts;
      opts = {};
    } else if (isImage(opts.image)) {
      src = opts.image;
      opts = _objectSpread({}, opts);
      delete opts.image;
    } else if (Array.isArray(opts)) {
      opts = {
        image: opts
      };
    }

    const texture = new Texture(gl, opts);

    if (src) {
      let task;

      if (Array.isArray(src)) {
        task = this.loadImages(src);
      } else {
        task = this.loadImage(src);
      }

      task.then(res => {
        texture.image = res;
        this.forceUpdate();
      });
      texture.loaded = task;
      return texture;
    }

    texture.loaded = Promise.resolve();
    return texture;
  }

  createShadow({
    width = this.canvas.width,
    height = this.canvas.height,
    light = this[_camera]
  } = {}) {
    const gl = this.renderer.gl;
    return new Shadow(gl, {
      width,
      height,
      light: light.body
    });
  }
  /* override */


  dispatchPointerEvent(event) {
    function dispatchEvent(raycast, subject, mouse) {
      raycast.castMouse(subject.camera.body, mouse);
      const hits = raycast.intersectBounds(subject.meshes.filter(mesh => mesh.geometry.raycast !== 'none'));

      if (hits && hits.length) {
        let target;

        for (let i = 0; i < hits.length; i++) {
          const node = hits[i]._node;
          const pointerEvents = node.attributes.pointerEvents;

          if (pointerEvents !== 'none' && (node.isVisible || pointerEvents === 'all')) {
            target = node;
            break;
          }
        }

        if (target) {
          event.mouse = mouse;
          event.hit = target.body.hit;
          target.dispatchEvent(event);
          return true;
        }
      }
    }

    let mouse;
    const raycast = this.raycast;
    let ret = false;

    if (raycast) {
      const renderer = this.renderer;
      mouse = new Vec2();
      mouse.set(2.0 * (event.x / renderer.width) - 1.0, 2.0 * (1.0 - event.y / renderer.height) - 1.0);
      ret = dispatchEvent(raycast, this, mouse);
    }

    return ret || Block.prototype.dispatchPointerEvent.call(this, event);
  }

  async loadGLTF(src) {
    const gl = this.renderer.gl;
    const gltf = await GLTFLoader.load(gl, src);
    gltf.scene.forEach(node => {
      node.traverse(_node => {
        let el;

        if (_node instanceof Mesh) {
          el = Mesh3d.fromMesh(_node);
        } else {
          el = new Group3d();
          el.setBody(_node, false);
        }

        const parent = el.body.parent;

        if (parent) {
          const parentNode = parent._node;
          parentNode.appendChild(el);
        }
      });
      this.appendChild(node._node);
    });
    return gltf;
  }

  async loadImage(src) {
    const image = await ENV.loadImage(src);
    return image;
  }

  async loadImages(imgs) {
    const res = await Promise.all(imgs.map(src => ENV.loadImage(src, {
      useImageBitmap: false
    })));
    return res;
  }

  async loadModel(src) {
    const data = await (await fetch(src)).json();
    return data;
  }

  async loadShader({
    vertex,
    fragment
  }) {
    const data = await Promise.all([vertex && (await fetch(vertex)).text(), fragment && (await fetch(fragment)).text()]);
    return {
      vertex: data[0],
      fragment: data[1]
    };
  }

  removeOrbit(camera = this[_camera]) {
    if (camera.orbit) {
      camera.orbit.remove();
      delete camera.orbit;
    }
  }
  /* override */


  render({
    clear = true
  } = {}) {
    const root = this[_root];
    const camera = this[_camera];
    this.renderer.autoClear = clear;

    this._prepareRenderFinished();

    this.dispatchEvent({
      type: 'beforerender',
      detail: {
        camera: camera.body
      }
    });

    if (this[_targets].length) {
      this[_targets].forEach(({
        target,
        options
      }) => {
        target.renderBy(this, options);
      });
    }

    if (camera.orbit) {
      camera.orbit.update();
      camera.resyncState();
    }

    if (this[_shadow]) {
      this[_shadow].render({
        scene: root.body
      });
    }

    if (this[_sublayers].length) {
      this[_sublayers].forEach((sublayer, i) => {
        const camera = sublayer.camera;

        if (camera.orbit) {
          camera.orbit.update();
          camera.resyncState();
        }

        this.renderer.render(_objectSpread({
          scene: sublayer.body,
          camera: camera.body
        }, this[_renderOptions]));
        if (i === 0) this.renderer.autoClear = false;
      });
    }

    if (this[_post]) {
      this[_post].render(_objectSpread({
        scene: root.body,
        camera: camera.body
      }, this[_renderOptions]));
    } else {
      this.renderer.render(_objectSpread({
        scene: root.body,
        camera: camera.body
      }, this[_renderOptions]));
    }

    if (this[_utime].length) {
      this[_utime].forEach(program => {
        program.uniforms.uTime.value = program.timeline.currentTime * 0.001;
      });

      this.forceUpdate();
    }

    this.dispatchEvent({
      type: 'afterrender',
      detail: {
        camera: camera.body
      }
    });
  }

  renderTarget(target, options = {}) {
    return target.renderBy(this, options);
  }

  renderTo(target, options = {}) {
    const opts = Object.assign(options, this[_renderOptions]);
    const root = this[_root];
    const camera = this[_camera];
    return this.renderer.render(_objectSpread({
      scene: root.body,
      camera: camera.body,
      target
    }, opts));
  }

  addLight(...lights) {
    lights.forEach(light => {
      this.lights = this.lights || [];
      this.lights.push(light);
    });
    this.updateLights();
  }

  removeLight(...lights) {
    if (this.lights) {
      lights.forEach(light => {
        const idx = this.lights.indexOf(light);

        if (idx >= 0) {
          this.lights.splice(idx, 1);
        }
      });
      this.updateLights();
    }
  }

  updateLights({
    directionalLight = this[_directionalLight],
    directionalLightColor = this[_directionalLightColor],
    pointLightPosition = this[_pointLightPosition],
    pointLightColor = this[_pointLightColor],
    pointLightDecay = this[_pointLightDecay],
    ambientColor = this[_ambientColor],
    spotLightAngle = this[_spotLightAngle],
    spotLightBlur = this[_spotLightBlur],
    spotLightColor = this[_spotLightColor],
    spotLightDecay = this[_spotLightDecay],
    spotLightDirection = this[_spotLightDirection],
    spotLightPosition = this[_spotLightPosition]
  } = {}, updateProgram = true) {
    function wrap(arr) {
      if (arr && arr[0] != null && !Array.isArray(arr[0])) {
        return [arr];
      }

      return arr;
    }

    this[_ambientColor] = parseColor(ambientColor);
    this[_directionalLight] = wrap(directionalLight);
    this[_directionalLightColor] = wrap(parseColor(directionalLightColor));
    this[_pointLightPosition] = wrap(pointLightPosition);
    this[_pointLightColor] = wrap(parseColor(pointLightColor));

    if (typeof pointLightDecay === 'number') {
      this[_pointLightDecay] = [[pointLightDecay, 0, 1]];
    } else {
      this[_pointLightDecay] = wrap(pointLightDecay);
    }

    this[_spotLightAngle] = typeof spotLightAngle === 'number' ? [spotLightAngle] : spotLightAngle;
    this[_spotLightBlur] = typeof spotLightBlur === 'number' ? [spotLightBlur] : spotLightBlur;
    this[_spotLightColor] = wrap(parseColor(spotLightColor));
    this[_spotLightDirection] = wrap(spotLightDirection);
    this[_spotLightPosition] = wrap(spotLightPosition);

    if (typeof spotLightDecay === 'number') {
      this[_spotLightDecay] = [[spotLightDecay, 0, 1]];
    } else {
      this[_spotLightDecay] = wrap(spotLightDecay);
    }

    if (updateProgram) {
      this.traverse(({
        program
      }) => {
        if (program) {
          this.setLights(program);
        }
      });
    }
  } // eslint-disable-next-line complexity


  setLights(program, {
    directionalLight = this[_directionalLight],
    directionalLightColor = this[_directionalLightColor],
    pointLightPosition = this[_pointLightPosition],
    pointLightColor = this[_pointLightColor],
    pointLightDecay = this[_pointLightDecay],
    ambientColor = this[_ambientColor],
    spotLightAngle = this[_spotLightAngle],
    spotLightBlur = this[_spotLightBlur],
    spotLightColor = this[_spotLightColor],
    spotLightDecay = this[_spotLightDecay],
    spotLightDirection = this[_spotLightDirection],
    spotLightPosition = this[_spotLightPosition]
  } = {}) {
    function setValue({
      value: arr
    }, lightArr) {
      let i = 0;
      lightArr.forEach(light => {
        if (Array.isArray(light)) arr.set(light, i);else arr[i] = light;
        i += light.length ? light.length : 1;
      });
    }

    const extraLights = this.lights;

    if (extraLights) {
      directionalLight = directionalLight ? [...directionalLight] : [];
      directionalLightColor = directionalLightColor ? [...directionalLightColor] : [];
      pointLightPosition = pointLightPosition ? [...pointLightPosition] : [];
      pointLightColor = pointLightColor ? [...pointLightColor] : [];
      pointLightDecay = pointLightDecay ? [...pointLightDecay] : [];
      spotLightAngle = spotLightAngle ? [...spotLightAngle] : [];
      spotLightBlur = spotLightBlur ? [...spotLightBlur] : [];
      spotLightColor = spotLightColor ? [...spotLightColor] : [];
      spotLightDecay = spotLightDecay ? [...spotLightDecay] : [];
      spotLightDirection = spotLightDirection ? [...spotLightDirection] : [];
      spotLightPosition = spotLightPosition ? [...spotLightPosition] : [];

      for (let i = extraLights.length - 1; i >= 0; i--) {
        const light = extraLights[i];

        if (light.type === Light.DIRECTIONAL_LIGHT) {
          const {
            direction,
            color
          } = light;
          directionalLight.unshift(direction);
          directionalLightColor.unshift(color);
        } else if (light.type === Light.POINT_LIGHT) {
          const {
            position,
            color,
            decay
          } = light;
          pointLightPosition.unshift(position);
          pointLightColor.unshift(color);
          pointLightDecay.unshift(decay);
        } else if (light.type === Light.SPOT_LIGHT) {
          const {
            position,
            color,
            decay,
            direction,
            angle,
            blur
          } = light;
          spotLightAngle.unshift(angle);
          spotLightBlur.unshift(blur);
          spotLightColor.unshift(color);
          spotLightDecay.unshift(decay);
          spotLightDirection.unshift(direction);
          spotLightPosition.unshift(position);
        }
      }
    }

    if (ambientColor) program.uniforms.ambientColor.value = ambientColor;else program.uniforms.ambientColor.value = [1, 1, 1, 1];
    program.uniforms.directionalLight.value.fill(0);
    program.uniforms.directionalLightColor.value.fill(0);
    program.uniforms.pointLightPosition.value.fill(0);
    program.uniforms.pointLightColor.value.fill(0);
    program.uniforms.pointLightDecay.value.fill(0);
    program.uniforms.spotLightPosition.value.fill(0);
    program.uniforms.spotLightDirection.value.fill(0);
    program.uniforms.spotLightColor.value.fill(0);
    program.uniforms.spotLightDecay.value.fill(0);
    program.uniforms.spotLightAngle.value.fill(0);
    program.uniforms.spotLightBlur.value.fill(0);

    if (directionalLight && directionalLight.length) {
      setValue(program.uniforms.directionalLight, directionalLight);
    }

    if (directionalLightColor && directionalLightColor.length) {
      setValue(program.uniforms.directionalLightColor, directionalLightColor);
    }

    if (pointLightPosition && pointLightPosition.length) {
      setValue(program.uniforms.pointLightPosition, pointLightPosition);
    }

    if (pointLightColor && pointLightColor.length) {
      setValue(program.uniforms.pointLightColor, pointLightColor);
    }

    if (pointLightDecay && pointLightDecay.length) {
      setValue(program.uniforms.pointLightDecay, pointLightDecay);
    }

    if (spotLightAngle && spotLightAngle.length) {
      setValue(program.uniforms.spotLightAngle, spotLightAngle);
    }

    if (spotLightBlur && spotLightBlur.length) {
      setValue(program.uniforms.spotLightBlur, spotLightBlur);
    }

    if (spotLightColor && spotLightColor.length) {
      setValue(program.uniforms.spotLightColor, spotLightColor);
    }

    if (spotLightDecay && spotLightDecay.length) {
      setValue(program.uniforms.spotLightDecay, spotLightDecay);
    }

    if (spotLightDirection && spotLightDirection.length) {
      setValue(program.uniforms.spotLightDirection, spotLightDirection);
    }

    if (spotLightPosition && spotLightPosition.length) {
      setValue(program.uniforms.spotLightPosition, spotLightPosition);
    }

    this.forceUpdate();
  }

  setOrbit(options = {}) {
    if (!this[_orbitChecker]) {
      this[_orbitChecker] = [() => {
        this[_orbitChecking] = true;
      }, () => {
        this[_orbitChecking] = false;
      }, () => {
        if (this[_orbitChecking]) {
          this.forceUpdate();
        }
      }, () => {
        this.forceUpdate();
      }];
    }

    if (options == null) {
      // remove all
      if (this[_camera]) this.removeOrbit();

      if (this[_sublayers].length) {
        this[_sublayers].forEach(({
          camera
        }) => {
          if (camera) this.removeOrbit(camera);
        });
      }

      if (this[_orbit]) {
        this[_orbit] = 0;
        this.removeEventListener('mousedown', this[_orbitChecker][0]);
        this.removeEventListener('mouseup', this[_orbitChecker][1]);
        this.removeEventListener('mousemove', this[_orbitChecker][2]);
        this.removeEventListener('touchstart', this[_orbitChecker][3]);
        this.removeEventListener('touchend', this[_orbitChecker][3]);
        this.removeEventListener('touchmove', this[_orbitChecker][3]);
        this.removeEventListener('wheel', this[_orbitChecker][3], false);
      }

      return null;
    }

    const camera = options.camera || this[_camera];
    const target = options.target || [0, 0, 0];
    options.target = new Vec3(...target);
    options.element = options.element || this.parent.container;
    const orbit = new Orbit(camera.body, options);
    camera.orbit = orbit;

    if (!this[_orbit]) {
      this.addEventListener('mousedown', this[_orbitChecker][0]);
      this.addEventListener('mouseup', this[_orbitChecker][1]);
      this.addEventListener('mousemove', this[_orbitChecker][2]);
      this.addEventListener('touchstart', this[_orbitChecker][3]);
      this.addEventListener('touchend', this[_orbitChecker][3]);
      this.addEventListener('touchmove', this[_orbitChecker][3]);
      this.addEventListener('wheel', this[_orbitChecker][3], false);
    }

    this[_orbit]++;
    return orbit;
  }

  setRaycast(enable = true) {
    if (enable) {
      const gl = this.renderer.gl;
      this.raycast = new Raycast(gl);
    } else {
      delete this.raycast;
    }
  }

  setRenderOptions(opts) {
    Object.assign(this[_renderOptions], opts);
  }
  /* override */


  setResolution({
    width,
    height
  }) {
    const {
      width: w,
      height: h
    } = this.getResolution();
    super.setResolution({
      width,
      height
    });

    if (w !== width || h !== height) {
      const displayRatio = this.displayRatio;
      const renderer = this.renderer;
      this.renderer.dpr = displayRatio;
      renderer.width = width / displayRatio;
      renderer.height = height / displayRatio;
      const gl = renderer.gl;
      gl.canvas.width = width;
      gl.canvas.height = height;
      const camera = this.camera;

      if (camera && this.options.camera.preserveAspect !== false) {
        camera.attributes.aspect = width / height;
      }

      if (this[_sublayers] && this[_sublayers].length) {
        this[_sublayers].forEach(({
          camera
        }) => {
          if (camera && this.options.camera.preserveAspect !== false) {
            camera.attributes.aspect = width / height;
          }
        });
      }

      if (this[_post]) {
        this[_post].resize();
      }
    }
  }

  setShadow(shadow) {
    this[_shadow] = shadow;
    this.forceUpdate();
  }

  setUniforms(program, uniforms = this.uniforms || {}) {
    if (!(program instanceof Program)) {
      // override
      uniforms = program || {};
      program = null;
    }

    super.setUniforms(uniforms);

    if (program) {
      Object.entries(uniforms).forEach(([key, value]) => {
        if (value && value.value) {
          program.uniforms[key] = value;
        } else if (program.uniforms[key]) {
          program.uniforms[key].value = value;
        } else {
          program.uniforms[key] = {
            value
          };
        }
      });
    }

    this.forceUpdate();
  }

  traverse(callback) {
    return this[_root].traverse(callback);
  }

  unbindTime(program) {
    const idx = this[_utime].indexOf(program);

    if (idx >= 0) {
      this[_utime].splice(idx, 1);

      return true;
    }

    return false;
  }

  unbindTarget(target) {
    const idx = this[_targets].indexOf(target);

    if (idx >= 0) {
      this[_targets].splice(idx, 1);

      return true;
    }

    return false;
  }

}
registerNode(Layer3D, 'layer3d');