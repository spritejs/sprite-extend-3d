import {registerNode} from 'spritejs';
import {Program} from 'ogl';
import Node3d from './node3d';

const _program = Symbol('program');

export default class Geometry extends Node3d {
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
  }
}

registerNode(Geometry, 'geometry');