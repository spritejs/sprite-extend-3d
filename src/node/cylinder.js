import {registerNode} from 'spritejs';
import {Cylinder} from 'ogl';
import CylinderAttr from '../attribute/cylinder';
import Geometry from './geometry';

export default class _Cylinder extends Geometry {
  static Attr = CylinderAttr;

  constructor(program, attrs = {}) {
    super(program, attrs);
    this.updateMesh();
  }

  remesh() {
    const gl = this.program.gl;
    const {radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength} = this.attributes;

    const geometry = new Cylinder(gl, {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength});
    this.setGeometry(geometry);
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'radiusTop'
      || key === 'radiusBottom'
      || key === 'height'
      || key === 'radialSegments'
      || key === 'heightSegments'
      || key === 'openEnded'
      || key === 'thetaStart'
      || key === 'thetaLength') {
      if(newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
}

registerNode(_Cylinder, 'cylinder');