import {registerNode} from 'spritejs';
import {Program, Mesh, Geometry} from 'ogl';
import Node3d from './node3d';

const changedAttrs = Symbol.for('spritejs_changedAttrs');

const _program = Symbol('program');
const _geometry = Symbol('geometry');
const _model = Symbol('model');
const _mode = Symbol('mode');

const _shaderAttrs = Symbol('shaderAttrs');

export default class Mesh3d extends Node3d {
  constructor(program, attrs = {}) {
    if(program && !(program instanceof Program)) {
      attrs = program;
      program = null;
    }
    const mode = attrs.mode;
    if(mode) {
      attrs = {...attrs};
      delete attrs.mode;
    }
    super(attrs);
    this[_mode] = mode || 'TRIANGLES';
    if(program) {
      this.setProgram(program);
    }
    this[_shaderAttrs] = {};
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

  get shaderAttrs() {
    return this[_shaderAttrs];
  }

  get meshes() {
    return this.body ? [this.body] : [];
  }

  setProgram(program) {
    this[_program] = program;
    const gl = program.gl;
    const geometry = this[_geometry];
    if(geometry) {
      const mesh = new Mesh(gl, {mode: gl[this[_mode]], geometry, program});
      this.setBody(mesh);
    }
  }

  setGeometry(model, attrs = null) {
    const program = this[_program];
    const gl = program.gl;
    let geometry;
    if(model instanceof Geometry) {
      geometry = model;
    } else {
      const geometryData = {
        position: {size: 3, data: new Float32Array(model.position)},
        uv: {size: 2, data: new Float32Array(model.uv)},
        normal: {size: 3, data: new Float32Array(model.normal)},
        ...attrs,
      };
      if(model.index) {
        geometryData.index = {data: new Uint16Array(model.index)};
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
      const mesh = new Mesh(gl, {mode: gl[this[_mode]], geometry, program});
      this.setBody(mesh);
      let listeners = this.getListeners('beforerender');
      if(listeners.length) {
        mesh.onBeforeRender.push(...listeners);
      }
      listeners = this.getListeners('afterrender');
      if(listeners.length) {
        mesh.onAfterRender.push(...listeners);
      }
    }
  }

  /* override */
  addEventListener(type, listener, options = {}) {
    super.addEventListener(type, listener, options);
    if(this.body && type === 'beforerender') {
      this.body.onBeforeRender(listener);
    } else if(this.body && type === 'afterrender') {
      this.body.onAfterRender(listener);
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
      const list = this.body.beforeRenderCallbacks;
      const idx = list.indexOf(listener);
      if(idx >= 0) {
        list.splice(idx, 1);
      }
    } else if(this.body && type === 'afterrender') {
      const list = this.body.afterRenderCallbacks;
      const idx = list.indexOf(listener);
      if(idx >= 0) {
        list.splice(idx, 1);
      }
    }
    return this;
  }
}

registerNode(Mesh3d, 'mesh3d');