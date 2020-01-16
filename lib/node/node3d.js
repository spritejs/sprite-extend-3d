function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { registerNode, Node } from 'spritejs';
import Node3dAttr from '../attribute/node3d';

const _body = Symbol('body');

const changedAttrs = Symbol.for('spritejs_changedAttrs');
const setAttribute = Symbol.for('spritejs_setAttribute');

function updateRotation({
  attributes
}, {
  rotation
}) {
  attributes[setAttribute]('rotateX', rotation.x * 180 / Math.PI);
  attributes[setAttribute]('rotateY', rotation.y * 180 / Math.PI);
  attributes[setAttribute]('rotateZ', rotation.z * 180 / Math.PI);
}

export default class Node3d extends Node {
  get body() {
    if (this[_body]) {
      return this[_body];
    }

    return null;
  }
  /* override */


  get isVisible() {
    if (this[_body]) {
      return this[_body].visible;
    }

    return false;
  }

  get localMatrix() {
    return this.matrix;
  }

  get matrix() {
    if (this[_body]) {
      return this[_body].matrix;
    }

    return null;
  }

  get mesh() {
    return this.body.draw ? this.body : null;
  }

  get meshes() {
    return [];
  } // the matrix with camera


  get modelViewMatrix() {
    if (this[_body]) {
      return this[_body].modelViewMatrix;
    }

    return null;
  } // normal transform matrix


  get normalMatrix() {
    if (this[_body]) {
      return this[_body].normalMatrix;
    }

    return null;
  }

  get renderMatrix() {
    return this.worldMatrix;
  }

  get worldMatrix() {
    if (this[_body]) {
      return this[_body].worldMatrix;
    }

    return null;
  }

  get zDepth() {
    if (this[_body]) {
      return this[_body].zDepth;
    }

    return null;
  }
  /* override */


  connect(parent, zOrder) {
    super.connect(parent, zOrder);

    if (this[_body]) {
      const parentBody = parent.groupBody || parent.body;

      if (parentBody && parentBody !== this[_body]) {
        this[_body].setParent(parentBody);

        if (parent.groupBody && parent.groupBody.parent == null) {
          parent.groupBody.setParent(parent.body);
        }
      }
    }
  }

  decompose() {
    const body = this[_body];

    if (body) {
      body.decompose();
      updateRotation(this, body);
      this.forceUpdate();
    }
  }
  /* override */


  disconnect(parent, zOrder) {
    super.disconnect(parent, zOrder);

    if (this[_body]) {
      this[_body].setParent(null);

      const parentBody = parent.groupBody;

      if (parentBody && parentBody.children && parentBody.children.length <= 0) {
        parentBody.setParent(null);
      }
    }
  }

  lookAt(target, invert = false) {
    const body = this[_body];

    if (body) {
      if (target instanceof Node3d) {
        target = target.body.position;
      }

      body.lookAt(target, invert);
      updateRotation(this, body);
      this.forceUpdate();
    }
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    const body = this[_body];

    if (body) {
      if (key === 'x' || key === 'y' || key === 'z') {
        body.position[key] = newValue;
      }

      if (key === 'rotateX' || key === 'rotateY' || key === 'rotateZ') {
        const value = newValue * Math.PI / 180;
        body.rotation[key.toLowerCase().slice(-1)] = value;
      }

      if (key === 'scaleX' || key === 'scaleY' || key === 'scaleZ') {
        body.scale[key.toLowerCase().slice(-1)] = newValue;
      }

      if (key === 'raycast') {
        body.geometry.raycast = newValue;
      }

      if (key === 'display') {
        body.visible = newValue !== 'none';
      }

      if (key === 'rotateOrder') {
        body.rotation.reorder(newValue);
      }
    }
  }

  setBody(body, update = true) {
    const oldBody = this[_body];
    this[_body] = body;

    if (oldBody) {
      oldBody.setParent(null);
      delete oldBody._node;
    }

    if (this.parent && this.parent.body) {
      this[_body].setParent(this.parent.body);
    }

    if (update) {
      const _changedAttrs = Object.entries(this.attributes[changedAttrs]);

      for (let i = 0; i < _changedAttrs.length; i++) {
        const [key, value] = _changedAttrs[i];
        this.onPropertyChange(key, value, value);
      }

      if (_changedAttrs.length <= 0) this.forceUpdate();
    }

    body._node = this;

    if (this.groupBody && this.children && this.children.length > 0) {
      this.groupBody.setParent(body);
    }
  }

  traverse(callback) {
    if (this[_body]) {
      this[_body].traverse(body => {
        if (body._node) callback(body._node);
      });
    }
  }

  updateMatrix() {
    if (this[_body]) {
      this[_body].updateMatrix();

      this.forceUpdate();
    }
  }

  updateMatrixWorld(force = false) {
    if (this[_body]) {
      this[_body].updateMatrixWorld();

      this.forceUpdate();
    }
  }

}

_defineProperty(Node3d, "Attr", Node3dAttr);

registerNode(Node3d, 'node3d');