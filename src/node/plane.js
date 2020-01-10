import {registerNode} from 'spritejs';
import {Plane} from 'ogl';
import PlaneAttr from '../attribute/plane';
import Geometry from './geometry';

export default class _Plane extends Geometry {
  static Attr = PlaneAttr;

  remesh() {
    const gl = this.program.gl;
    const {width, height, widthSegments, heightSegments} = this.attributes;

    const geometry = new Plane(gl, {
      width,
      height,
      widthSegments,
      heightSegments});
    this.setGeometry(geometry);
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'width'
      || key === 'height'
      || key === 'widthSegments'
      || key === 'heightSegments') {
      if(newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
}

registerNode(_Plane, 'plane');