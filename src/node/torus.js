import {registerNode} from 'spritejs';
import {Torus as _Torus} from 'ogl';
import TorusAttr from '../attribute/torus';
import Mesh3d from './mesh3d';

export default class Torus extends Mesh3d {
  static Attr = TorusAttr;

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'radius'
      || key === 'tube'
      || key === 'radialSegments'
      || key === 'tubularSegments'
      || key === 'arc') {
      if(newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }

  /* override */
  remesh() {
    const gl = this.program.gl;
    const {radius, tube, radialSegments, tubularSegments, arc} = this.attributes;

    const geometry = new _Torus(gl, {
      radius,
      tube,
      radialSegments,
      tubularSegments,
      arc});

    this.setGeometry(geometry);
  }
}

registerNode(Torus, 'torus');