import {registerNode} from 'spritejs';
import {Program, Mesh} from 'ogl';
import Node3d from './node3d';

const _program = Symbol('program');
const _geometry = Symbol('geometry');
const _mode = Symbol('mode');

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
  }

  /* override */
  // cloneNode() {
  //   const node = super.cloneNode();
  //   node[_geometry] = this[_geometry];
  //   node[_mode] = this[_mode];
  //   node.setProgram(this[_program]);
  //   return node;
  // }

  get mode() {
    return this[_mode];
  }

  get program() {
    return this[_program];
  }

  get geometry() {
    return this[_geometry];
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

  setGeometry(geometry) {
    this[_geometry] = geometry;
    const program = this[_program];
    const gl = program.gl;
    if(this[_program]) {
      const mesh = new Mesh(gl, {mode: gl[this[_mode]], geometry, program});
      this.setBody(mesh);
    }
  }
}

registerNode(Mesh3d, 'mesh3d');