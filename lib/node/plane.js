function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { registerNode } from 'spritejs';
import { Plane as _Plane } from 'ogl';
import PlaneAttr from '../attribute/plane';
import Mesh3d from './mesh3d';
export default class Plane extends Mesh3d {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'width' || key === 'height' || key === 'widthSegments' || key === 'heightSegments') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      width,
      height,
      widthSegments,
      heightSegments
    } = this.attributes;
    const geometry = new _Plane(gl, {
      width,
      height,
      widthSegments,
      heightSegments
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Plane, "Attr", PlaneAttr);

registerNode(Plane, 'plane');