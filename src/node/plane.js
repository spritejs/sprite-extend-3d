import {registerNode} from 'spritejs';
import {Plane} from 'ogl';
import PlaneAttr from '../attribute/plane';
import Mesh3d from './mesh3d';

export default class _Plane extends Mesh3d {
  static Attr = PlaneAttr;

  constructor(program, attrs = {}) {
    super(program, attrs);
    this.updateMesh();
  }

  updateMesh() {
    const gl = this.program.gl;
    const {width, height, widthSegments, heightSegments} = this.attributes;
    const attributes = this.shaderAttrs;

    const geometry = new Plane(gl, {
      width,
      height,
      widthSegments,
      heightSegments,
      attributes});
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