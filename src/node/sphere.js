import {registerNode} from 'spritejs';
import {Sphere as _Sphere} from 'ogl';
import SphereAttr from '../attribute/sphere';
import Mesh3d from './mesh3d';

export default class Sphere extends Mesh3d {
  static Attr = SphereAttr;

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'radius'
      || key === 'widthSegments'
      || key === 'heightSegments'
      || key === 'phiStart'
      || key === 'phiLength'
      || key === 'thetaStart'
      || key === 'thetaLength') {
      if(newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }

  /* override */
  remesh() {
    const gl = this.program.gl;
    const {radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength} = this.attributes;

    const geometry = new _Sphere(gl, {
      radius,
      widthSegments,
      heightSegments,
      phiStart,
      phiLength,
      thetaStart,
      thetaLength});

    this.setGeometry(geometry);
  }
}

registerNode(Sphere, 'sphere');