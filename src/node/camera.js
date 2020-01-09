import {registerNode} from 'spritejs';
import {Camera} from 'ogl';
import Node3d from './node3d';

import CameraAttr from '../attribute/camera';

export default class _Camera extends Node3d {
  static Attr = CameraAttr;

  constructor(gl, {fov = 45, near = 0.1, far = 100, aspect = 1, left, right, bottom, top, ...attrs}) {
    super({fov, near, far, aspect, left, right, bottom, top});
    this.setBody(new Camera(gl, {fov, near, far, aspect, left, right, bottom, top}), false);
    this.attributes.mode = this.body.type;
    if(attrs) this.attr(attrs);
  }

  lookAt(target) {
    if(target.body) target = target.body;
    return this.body.lookAt(target);
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(this.body) {
      const mode = this.attributes.mode;
      if(mode === 'perspective' && (key === 'near' || key === 'far' || key === 'fov' || key === 'aspect')) {
        const value = key === 'fov' ? newValue * (Math.PI / 180) : newValue;
        this.body.perspective({[key]: value});
      }
      if(mode === 'orthographic' && (key === 'left' || key === 'right' || key === 'bottom' || key === 'top')) {
        const {left, right, bottom, top} = this.attributes;
        this.body.orthographic({left, right, bottom, top});
      }
      if(key === 'mode') {
        if(newValue === 'perspective') this.body.perspective();
        else {
          const {left, right, bottom, top} = this.attributes;
          this.body.orthographic({left, right, bottom, top});
        }
      }
    }
  }
}

registerNode(_Camera, 'camera');