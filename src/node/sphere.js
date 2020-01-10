import {registerNode} from 'spritejs';
import {Sphere} from 'ogl';
import SphereAttr from '../attribute/sphere';
import Geometry from './geometry';

export default class _Sphere extends Geometry {
  static Attr = SphereAttr;

  remesh() {
    const gl = this.program.gl;
    const {radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength} = this.attributes;

    const geometry = new Sphere(gl, {
      radius,
      widthSegments,
      heightSegments,
      phiStart,
      phiLength,
      thetaStart,
      thetaLength});

    this.setGeometry(geometry);
  }

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
}

registerNode(_Sphere, 'sphere');