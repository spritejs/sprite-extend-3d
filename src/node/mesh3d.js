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
      attrs = Object.assign(this[_shaderAttrs], attrs);
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
    this[_geometry] = geometry;
    this[_model] = model;
    if(program) {
      const mesh = new Mesh(gl, {mode: gl[this[_mode]], geometry, program});
      this.setBody(mesh);
    }
  }

  setShaderAttribute(attrName, attr) {
    this[_shaderAttrs] = this[_shaderAttrs] || {};
    this[_shaderAttrs][attrName] = attr;
    this.forceUpdate();
  }

  setShaderAttributes(attrs) {
    this[_shaderAttrs] = {...attrs};
    this.forceUpdate();
  }
}

registerNode(Mesh3d, 'mesh3d');