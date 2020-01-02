import {registerNode} from 'spritejs';
import {Camera} from 'ogl';
import Node3d from './node3d';

import CameraAttr from '../attribute/camera';

export default class _Camera extends Node3d {
  static Attr = CameraAttr;

  constructor(gl, {parent, fov = 45, near = 0.1, far = 100, aspect = 1}) {
    super();
    this.setBody(new Camera(gl, {fov, near, far, aspect}));
    this.connect(parent, 0);
  }

  lookAt(target) {
    if(target.body) target = target.body;
    return this.body.lookAt(target);
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'near' || key === 'far' || key === 'fov' || key === 'aspect') {
      const value = key === 'fov' ? newValue * (Math.PI / 180) : newValue;
      this.body.perspective({[key]: value});
    }
  }
}

registerNode(_Camera, 'camera');