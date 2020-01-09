import {registerNode} from 'spritejs';
import {Program, Mesh, Geometry} from 'ogl';
import Group3d from './group3d';

const changedAttrs = Symbol.for('spritejs_changedAttrs');

const _program = Symbol('program');
const _geometry = Symbol('geometry');
const _model = Symbol('model');
const _mode = Symbol('mode');

export default class Mesh3d extends Group3d {
  constructor(program, {model, ...attrs} = {}) {
    if(program && !(program instanceof Program)) {
      attrs = program;
      program = attrs.program;
    }
    if(!program) {
      throw new Error('No program specified!');
    }
    const gl = program.gl;
    let mode = attrs.mode || gl.TRIANGLES;
    if(attrs.mode) {
      attrs = {...attrs};
      delete attrs.mode;
    }
    super(attrs);
    this.groupBody = this.body;
    if(typeof mode === 'string') {
      mode = gl[mode];
    }
    this[_mode] = mode;
    if(program) {
      this.setProgram(program);
    }
    if(model) {
      this.setGeometry(model);
    }
  }

  /* override */
  cloneNode() {
    const cloned = new this.constructor(this[_program]);
    const attrs = this.attributes[changedAttrs];
    cloned[_mode] = this[_mode];
    cloned.setGeometry(this[_model]);
    cloned.attr(attrs);
    return cloned;
  }

  get mode() {
    return this[_mode];
  }

  get program() {
    return this[_program];
  }

  get geometry() {
    return this[_geometry];
  }

  get meshes() {
    const meshes = this.body ? [this.body] : [];
    const childMeshes = super.meshes;
    if(childMeshes && childMeshes.length) {
      meshes.push(...childMeshes);
    }
    return meshes;
  }

  setProgram(program) {
    this[_program] = program;
    const gl = program.gl;
    const geometry = this[_geometry];
    if(geometry) {
      const mesh = new Mesh(gl, {mode: this[_mode], geometry, program});
      this.setBody(mesh);
    }
  }

  setGeometry(model) {
    function parseData(data, size = 3) {
      let d = data.data || data;
      if(Array.isArray(d)) d = new Float32Array(d);
      const s = data.size || size;
      if(data.data) {
        data.data = d;
        data.size = s;
        return data;
      }
      return {size: s, data: d};
    }
    const program = this[_program];
    const gl = program.gl;
    let geometry;
    if(model instanceof Geometry) {
      geometry = model;
    } else {
      const {position, uv, normal, index, ...others} = model;
      const geometryData = {};
      if(position) geometryData.position = parseData(position);
      if(uv) geometryData.uv = parseData(uv, 2);
      if(normal) geometryData.normal = parseData(normal);
      if(index) {
        let data = index.data || index;
        if(Array.isArray(data)) data = new Uint16Array(data);
        geometryData.index = {data};
      }
      if(others) {
        let positionCount;
        const position = geometryData.position;
        if(position) {
          positionCount = position.data.length / position.size;
        }
        Object.entries(others).forEach(([key, value]) => {
          let size = 3;
          if(!value.size) {
            const length = value.data ? value.data.length : value.length;
            if(length && positionCount) size = length / positionCount;
          }
          geometryData[key] = parseData(value, size);
        });
      }
      geometry = new Geometry(gl, geometryData);
    }
    const extraAttrs = program.extraAttribute;
    if(extraAttrs) {
      Object.entries(extraAttrs).forEach(([key, setter]) => {
        geometry.addAttribute(key, setter(this, geometry));
      });
    }
    this[_geometry] = geometry;
    this[_model] = model;
    if(program) {
      const mesh = new Mesh(gl, {mode: this[_mode], geometry, program});
      this.setBody(mesh);
      let listeners = this.getListeners('beforerender');
      if(listeners.length) {
        mesh.onBeforeRender((args) => {
          this.dispatchEvent({type: 'beforerender', detail: args});
        });
      }
      listeners = this.getListeners('afterrender');
      if(listeners.length) {
        mesh.onAfterRender((args) => {
          this.dispatchEvent({type: 'afterrender', detail: args});
        });
      }
    }
  }

  /* override */
  addEventListener(type, listener, options = {}) {
    super.addEventListener(type, listener, options);
    if(this.body && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');
      if(listeners.length === 1) {
        this.body.onBeforeRender((args) => {
          this.dispatchEvent({type: 'beforerender', detail: args});
        });
      }
    } else if(this.body && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');
      if(listeners.length === 1) {
        this.body.onAfterRender((args) => {
          this.dispatchEvent({type: 'afterrender', detail: args});
        });
      }
    }
    return this;
  }

  /* override */
  removeAllListeners(type, options = {}) {
    super.removeEventListener(type, options);
    if(this.body && type === 'beforerender') {
      this.body.beforeRenderCallbacks.length = 0;
    } else if(this.body && type === 'afterrender') {
      this.body.afterRenderCallbacks.length = 0;
    }
    return this;
  }

  /* override */
  removeEventListener(type, listener, options = {}) {
    super.removeEventListener(type, listener, options);
    if(this.body && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');
      if(listeners.length === 0) this.body.beforeRenderCallbacks.length = 0;
    } else if(this.body && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');
      if(listeners.length === 0) this.body.afterRenderCallbacks.length = 0;
    }
    return this;
  }
}

registerNode(Mesh3d, 'mesh3d');