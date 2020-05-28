import {registerNode} from 'spritejs';
import {Program, Mesh, Geometry as _Geometry} from 'ogl';
import Geometry from '../helper/geometry';
import Group3d from './group3d';
import Mesh3dAttr from '../attribute/mesh3d';
import {parseColor} from '../helper/parse-color';

const changedAttrs = Symbol.for('spritejs_changedAttrs');

const _program = Symbol('program');
const _geometry = Symbol('geometry');
const _model = Symbol('model');

const _beforeRender = Symbol('beforeRender');
const _afterRender = Symbol('afterRender');

const _updateMeshPromise = Symbol('updateMeshPromise');

function normalize(v) {
  const len = Math.hypot(...v);
  return [v[0] / len, v[1] / len, v[2] / len];
}

// 两个向量的叉积就是这个向量的法向量
function getNormal(a, b, c) {
  const ab = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const bc = [b[0] - c[0], b[1] - c[1], b[2] - c[2]];

  return normalize([
    ab[1] * bc[2] - ab[2] * bc[1],
    ab[0] * bc[2] - ab[2] * bc[0],
    ab[0] * bc[1] - ab[1] * bc[0],
  ]);
}

export default class Mesh3d extends Group3d {
  static Attr = Mesh3dAttr;

  static fromMesh(mesh) {
    const program = mesh.program;
    const geometry = mesh.geometry;
    const model = mesh.geometry.attributes;
    const node = new Mesh3d(program);
    node[_geometry] = geometry;
    node[_model] = model;
    node.setBody(mesh);
    let listeners = node.getListeners('beforerender');
    if(listeners.length) {
      mesh.onBeforeRender(node[_beforeRender]);
    }
    listeners = node.getListeners('afterrender');
    if(listeners.length) {
      mesh.onAfterRender(node[_afterRender]);
    }
    return node;
  }

  constructor(program, {model, ...attrs} = {}) {
    if(program && !(program instanceof Program)) {
      attrs = program;
      program = attrs.program;
    }
    if(!program) {
      throw new Error('No program specified!');
    }

    super(attrs);
    this.groupBody = this.body;

    this.setProgram(program);

    this[_beforeRender] = (args) => {
      this.dispatchEvent({type: 'beforerender', detail: args});
    };
    this[_afterRender] = (args) => {
      this.dispatchEvent({type: 'afterrender', detail: args});
    };

    if(model && typeof model.then === 'function') {
      this[_model] = model.then((res) => {
        this[_model] = res;
        this.remesh();
      });
    } else if(!model) {
      this.remesh();
    } else {
      this.setGeometry(model);
    }
  }

  get geometry() {
    return this[_geometry];
  }

  /* override */
  get meshes() {
    const meshes = super.meshes;
    if(this.body.geometry && this.attributes.display !== 'none') meshes.unshift(this.body);
    return meshes;
  }

  get model() {
    return this[_model];
  }

  get program() {
    return this[_program];
  }

  get uniforms() {
    if(typeof Proxy === 'function') {
      const program = this[_program];
      const that = this;
      if(program) {
        return new Proxy(program.uniforms, {
          get(obj, prop) {
            if(prop in obj) {
              return obj[prop].value;
            }
          },
          set(obj, prop, value) {
            if(prop in obj) {
              obj[prop].value = parseColor(value);
            } else {
              obj[prop] = {value: parseColor(value)};
            }
            that.forceUpdate();
          },
        });
      }
      throw new Error('no program specified');
    }
    return null;
  }

  _createMesh({geometry, mode, program}) {
    return new Mesh(program.gl, {geometry, mode, program});
  }

  /* override */
  addEventListener(type, listener, options = {}) {
    super.addEventListener(type, listener, options);
    if(this.body.onBeforeRender && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');
      if(listeners.length === 1) {
        this.body.onBeforeRender(this[_beforeRender]);
      }
    } else if(this.body.onAfterRender && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');
      if(listeners.length === 1) {
        this.body.onAfterRender(this[_afterRender]);
      }
    }
    return this;
  }

  /* override */
  cloneNode(deep = false) {
    const attrs = this.attributes[changedAttrs];
    const model = this[_geometry].preserveBuffers ? this[_geometry] : this[_model];
    const cloned = new this.constructor(this[_program], {...attrs, model});
    if(deep) {
      this.children.forEach((child) => {
        const childNode = child.cloneNode(deep);
        cloned.appendChild(childNode);
      });
    }
    return cloned;
  }

  /* override */
  dispose() {
    const children = this.children;
    for(let i = children.length - 1; i >= 0; i--) {
      children[i].dispose();
    }
    const geometry = this[_geometry];
    if(geometry && !geometry.preserveBuffers) {
      geometry.remove();
      delete this[_geometry];
    }
    super.dispose();
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'colors' || key === 'colorDivisor') {
      if(newValue !== oldValue) {
        const program = this.program;
        if(program && program.extraAttribute.color) {
          const geometry = this.geometry;
          if(geometry) program.extraAttribute.color(this, geometry);
        }
      }
    }
    if(key === 'mode') {
      const program = this.program;
      if(program) {
        this.body.mode = program.gl[newValue];
      }
    }
  }

  remesh() {
    this.setGeometry();
  }

  /* override */
  removeAllListeners(type, options = {}) {
    super.removeAllListeners(type, options);
    if(this.body.onBeforeRender && type === 'beforerender') {
      const idx = this.body.beforeRenderCallbacks.indexOf(this[_beforeRender]);
      if(idx >= 0) this.body.beforeRenderCallbacks.splice(idx, 1);
    } else if(this.body.onAfterRender && type === 'afterrender') {
      const idx = this.body.afterRenderCallbacks.indexOf(this[_afterRender]);
      if(idx >= 0) this.body.afterRenderCallbacks.splice(idx, 1);
    }
    return this;
  }

  /* override */
  removeEventListener(type, listener, options = {}) {
    super.removeEventListener(type, listener, options);
    if(this.body.onBeforeRender && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');
      if(listeners.length === 0) {
        const idx = this.body.beforeRenderCallbacks.indexOf(this[_beforeRender]);
        if(idx >= 0) this.body.beforeRenderCallbacks.splice(idx, 1);
      }
    } else if(this.body.onAfterRender && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');
      if(listeners.length === 0) {
        const idx = this.body.afterRenderCallbacks.indexOf(this[_afterRender]);
        if(idx >= 0) this.body.afterRenderCallbacks.splice(idx, 1);
      }
    }
    return this;
  }

  setGeometry(model = this[_model]) {
    if(!model) return;
    const program = this[_program];
    const gl = program.gl;
    let geometry;
    if(model instanceof _Geometry) {
      geometry = model;
    } else {
      geometry = new Geometry(gl, model, false);
    }

    if(!geometry.attributes.normal && program.gl.getAttribLocation(program.program, 'normal') >= 0) {
      const position = geometry.attributes.position.data;
      const len = geometry.attributes.position.data.length;
      const normal = new Float32Array(len);
      if(len % 9 === 0) {
        // 自动计算法向量
        for(let i = 0; i < len; i += 9) {
          const a = [position[i], position[i + 1], position[i + 2]],
            b = [position[i + 3], position[i + 4], position[i + 5]],
            c = [position[i + 6], position[i + 7], position[i + 8]];

          const norm = getNormal(a, b, c);
          normal.set([...norm, ...norm, ...norm], i);
        }
      } else if(len % 3 === 0) {
        for(let i = 0; i < len; i += 3) {
          normal.set([-1, 0, 0], i);
        }
      }
      geometry.addAttribute('normal', {size: 3, data: normal});
    }
    const extraAttrs = program.extraAttribute;
    if(extraAttrs) {
      Object.entries(extraAttrs).forEach(([key, setter]) => {
        if(!geometry.attributes[key]) {
          geometry.addAttribute(key, setter(this, geometry));
        }
      });
    }
    geometry.raycast = this.attributes.raycast;
    const oldGeometry = this[_geometry];
    if(oldGeometry && oldGeometry !== geometry && !oldGeometry.preserveBuffers) {
      oldGeometry.remove();
    }
    this[_geometry] = geometry;
    // this[_model] = geometry.attributes;
    this[_model] = model;
    const mode = this.attributes.mode;
    const mesh = this._createMesh({mode: gl[mode], geometry, program});
    this.setBody(mesh);
    let listeners = this.getListeners('beforerender');
    if(listeners.length) {
      mesh.onBeforeRender(this[_beforeRender]);
    }
    listeners = this.getListeners('afterrender');
    if(listeners.length) {
      mesh.onAfterRender(this[_afterRender]);
    }
  }

  setResolution({width, height}) {
    super.setResolution({width, height});
    const program = this.program;
    if(program && program.uniforms.uResolution) {
      program.uniforms.uResolution = {value: [width, height]};
    }
    if(program && program.uniforms.uDPR) {
      const dpr = this.layer ? this.layer.displayRatio : 1;
      program.uniforms.uDPR = {value: dpr};
    }
  }

  setProgram(program) {
    this[_program] = program;
    const gl = program.gl;
    const geometry = this[_geometry];
    if(geometry) {
      const mode = this.attributes.mode;
      const mesh = this._createMesh({mode: gl[mode], geometry, program});
      this.setBody(mesh);
    }
  }

  transpose(order = 'zxy') {
    const geometry = this[_geometry];
    if(geometry) {
      geometry.transpose(order);
      this.forceUpdate();
    }
  }

  updateMesh() {
    if(this.program) {
      if(!this[_updateMeshPromise]) {
        this[_updateMeshPromise] = Promise.resolve().then(() => {
          delete this[_updateMeshPromise];
          const oldMesh = this.mesh;
          this.remesh();
          const newMesh = this.mesh;
          this.dispatchEvent({type: 'updatemesh', detail: {oldMesh, newMesh}});
        });
      }
    }
  }
}

registerNode(Mesh3d, 'mesh3d');