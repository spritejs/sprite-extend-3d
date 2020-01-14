import {registerNode} from 'spritejs';
import {Camera as _Camera} from 'ogl';
import Group3d from './group3d';
import Node3d from './node3d';

import CameraAttr from '../attribute/camera';

const setAttribute = Symbol.for('spritejs_setAttribute');

export default class Camera extends Group3d {
  static Attr = CameraAttr;

  constructor(gl, {fov = 45, near = 0.1, far = 100, aspect = 1, left, right, bottom, top, ...attrs}) {
    super({fov, near, far, aspect, left, right, bottom, top});
    this.groupBody = this.body;
    this.setBody(new _Camera(gl, {fov, near, far, aspect, left, right, bottom, top}), false);
    this.attributes[setAttribute]('mode', this.body.type);
    if(attrs) this.attr(attrs);
  }

  /* override */
  lookAt(target) {
    super.lookAt(target, true);
    return this;
  }

  // Project 3D coordinate to 2D point
  project(v) {
    this.body.project(v);
    return this;
  }

  // Unproject 2D point to 3D coordinate
  unproject(v) {
    this.body.unproject(v);
    return this;
  }

  updateFrustum() {
    this.body.updateFrustum();
    return this;
  }

  frustumIntersects(node) {
    if(node.body) {
      return this.body.frustumIntersectsMesh(node.body);
    }
    return false;
  }

  frustumIntersectsSphere(center, radius) {
    if(center instanceof Node3d && center.body) {
      center = center.body.position;
    }
    return this.body.frustumIntersectsSphere(center, radius);
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    const body = this.body;
    if(body) {
      const mode = this.attributes.mode;
      if(mode === 'perspective' && (key === 'near' || key === 'far' || key === 'fov' || key === 'aspect')) {
        const value = key === 'fov' ? newValue * (Math.PI / 180) : newValue;
        body.perspective({[key]: value});
      }
      if(mode === 'orthographic' && (key === 'left' || key === 'right' || key === 'bottom' || key === 'top')) {
        const {left, right, bottom, top} = this.attributes;
        body.orthographic({left, right, bottom, top});
      }
      if(key === 'mode') {
        if(newValue === 'perspective') body.perspective();
        else {
          const {left, right, bottom, top} = this.attributes;
          body.orthographic({left, right, bottom, top});
        }
      }
    }
  }
}

registerNode(Camera, 'camera');