import {registerNode} from 'spritejs';
import {Box} from 'ogl';
import Geometry from './geometry';
import CubeAttr from '../attribute/cube';

export default class Cube extends Geometry {
  static Attr = CubeAttr;

  constructor(program, attrs = {}) {
    super(program, attrs);
    this.updateMesh();
  }

  remesh() {
    const gl = this.program.gl;
    const geometry = new Box(gl);
    this.setGeometry(geometry);
  }
}

registerNode(Cube, 'cube');