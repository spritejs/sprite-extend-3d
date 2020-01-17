function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { registerNode } from 'spritejs';
import { Box } from 'ogl';
import Mesh3d from './mesh3d';
import CubeAttr from '../attribute/cube';
export default class Cube extends Mesh3d {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'width' || key === 'height' || key === 'depth' || key === 'widthSegments' || key === 'heightSegments' || key === 'depthSegments') {
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
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    } = this.attributes;
    const geometry = new Box(gl, {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Cube, "Attr", CubeAttr);

registerNode(Cube, 'cube');