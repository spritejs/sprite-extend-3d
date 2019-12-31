import {registerNode} from 'spritejs';
import {Box, Mesh} from 'ogl';
import Geometry from './geometry';

export default class Cube extends Geometry {
  /* override */
  setProgram(program) {
    super.setProgram(program);
    const gl = program.gl;
    const geometry = new Box(gl);
    const mesh = new Mesh(gl, {geometry, program});
    this.setBody(mesh);
  }
}

registerNode(Cube, 'cube');