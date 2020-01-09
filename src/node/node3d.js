import {registerNode, Node} from 'spritejs';
import Attr3d from '../attribute/attr3d';

const _body = Symbol('body');

const changedAttrs = Symbol.for('spritejs_changedAttrs');
const setAttribute = Symbol.for('spritejs_setAttribute');

export default class Node3d extends Node {
  static Attr = Attr3d;

  get body() {
    if(this[_body]) {
      return this[_body];
    }
    return null;
  }

  get mesh() {
    return this.body;
  }

  get meshes() {
    return [];
  }

  get localMatrix() {
    if(this[_body]) {
      return this[_body].matrix;
    }
    return null;
  }

  get renderMatrix() {
    if(this[_body]) {
      return this[_body].worldMatrix;
    }
    return null;
  }

  // the matrix with camera
  get modelViewMatrix() {
    if(this[_body]) {
      return this[_body].modelViewMatrix;
    }
    return null;
  }

  // normal transform matrix
  get normalMatrix() {
    if(this[_body]) {
      return this[_body].normalMatrix;
    }
    return null;
  }

  get isVisible() {
    if(this[_body]) {
      return this[_body].visible;
    }
    return false;
  }

  get zDepth() {
    if(this[_body]) {
      return this[_body].zDepth;
    }
    return null;
  }

  lookAt(target, invert = false) {
    const body = this.body;
    if(body) {
      if(target instanceof Node3d) {
        target = target.body.position;
      }
      body.lookAt(target, invert);
      const rotation = body.rotation;
      const attributes = this.attributes;
      attributes[setAttribute]('rotateX', rotation.x * 180 / Math.PI);
      attributes[setAttribute]('rotateY', rotation.y * 180 / Math.PI);
      attributes[setAttribute]('rotateZ', rotation.z * 180 / Math.PI);
      this.forceUpdate();
    }
  }

  updateMatrix() {
    if(this.body) {
      this.body.updateMatrix();
      this.forceUpdate();
    }
  }

  updateMatrixWorld(force = false) {
    if(this.body) {
      this.body.updateMatrixWorld();
      this.forceUpdate();
    }
  }

  traverse(callback) {
    if(this.body) {
      this.body.traverse((body) => {
        if(body._node) callback(body._node);
      });
    }
  }

  decompose() {
    const body = this.body;
    if(body) {
      body.decompose();
      const rotation = body.rotation;
      const attributes = this.attributes;
      attributes[setAttribute]('rotateX', rotation.x * 180 / Math.PI);
      attributes[setAttribute]('rotateY', rotation.y * 180 / Math.PI);
      attributes[setAttribute]('rotateZ', rotation.z * 180 / Math.PI);
      this.forceUpdate();
    }
  }


  setBody(body, update = true) {
    const oldBody = this[_body];
    this[_body] = body;
    if(oldBody) {
      oldBody.setParent(null);
      delete oldBody._node;
    }
    if(this.parent && this.parent.body) {
      this[_body].setParent(this.parent.body);
    }

    if(update) {
      const _changedAttrs = Object.entries(this.attributes[changedAttrs]);
      for(let i = 0; i < _changedAttrs.length; i++) {
        const [key, value] = _changedAttrs[i];
        this.onPropertyChange(key, value, value);
      }
      if(_changedAttrs.length <= 0) this.forceUpdate();
    }

    body._node = this;
    if(this.groupBody) {
      this.groupBody.setParent(body);
    }
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(this.body) {
      if(key === 'x' || key === 'y' || key === 'z') {
        this.body.position[key] = newValue;
      }
      if(key === 'rotateX' || key === 'rotateY' || key === 'rotateZ') {
        const value = newValue * Math.PI / 180;
        this.body.rotation[key.toLowerCase().slice(-1)] = value;
      }
      if(key === 'scaleX' || key === 'scaleY' || key === 'scaleZ') {
        this.body.scale[key.toLowerCase().slice(-1)] = newValue;
      }
      if(key === 'raycast') {
        this.body.geometry.raycast = newValue;
      }
      if(key === 'display') {
        this.body.visible = newValue !== 'none';
      }
    }
  }

  /* override */
  connect(parent, zOrder) {
    super.connect(parent, zOrder);
    if(this.body) {
      const parentBody = parent.groupBody || parent.body;
      if(parentBody && parentBody !== this.body) {
        this.body.setParent(parentBody);
      }
    }
  }

  /* override */
  disconnect(parent, zOrder) {
    super.disconnect(parent, zOrder);
    if(this.body) {
      this.body.setParent(null);
    }
  }
}

registerNode(Node3d, 'node3d');