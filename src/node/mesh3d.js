import {registerNode} from 'spritejs';
import {Program, Mesh} from 'ogl';
import Node3d from './node3d';

const _program = Symbol('program');
const _geometry = Symbol('geometry');

export default class Mesh3d extends Node3d {
  constructor(program, attrs = {}) {
    if(!(program instanceof Program)) {
      attrs = program;
      program = null;
    }
    super(attrs);
    if(program) {
      this.setProgram(program);
    }
  }

  get program() {
    return this[_program];
  }

  setProgram(program) {
    this[_program] = program;
    const gl = program.gl;
    const geometry = this[_geometry];
    if(geometry) {
      const mesh = new Mesh(gl, {geometry, program});
      this.setBody(mesh);
    }
  }

  setGeometry(geometry) {
    this[_geometry] = geometry;
    const program = this[_program];
    const gl = program.gl;
    if(this[_program]) {
      const mesh = new Mesh(gl, {geometry, program});
      this.setBody(mesh);
    }
  }
}

registerNode(Mesh3d, 'mesh3d');