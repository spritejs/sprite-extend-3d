function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { registerNode } from 'spritejs';
import { Cylinder as _Cylinder } from 'ogl';
import CylinderAttr from '../attribute/cylinder';
import Mesh3d from './mesh3d';
export default class Cylinder extends Mesh3d {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'radiusTop' || key === 'radiusBottom' || key === 'height' || key === 'radialSegments' || key === 'heightSegments' || key === 'openEnded' || key === 'thetaStart' || key === 'thetaLength') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    } = this.attributes;
    const geometry = new _Cylinder(gl, {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Cylinder, "Attr", CylinderAttr);

registerNode(Cylinder, 'cylinder');