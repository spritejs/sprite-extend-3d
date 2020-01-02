import {registerNode} from 'spritejs';
import {Box} from 'ogl';
import Mesh3d from './mesh3d';

export default class Cube extends Mesh3d {
  constructor(program, attrs = {}) {
    super(program, attrs);
    const gl = program.gl;
    const geometry = new Box(gl);
    this.setGeometry(geometry);
  }
}

registerNode(Cube, 'cube');