import {registerNode, Node} from 'spritejs';
import Attr3d from '../attribute/attr3d';

const _body = Symbol('body');
const _rotation = Symbol('rotation');
const _position = Symbol('position');

const changedAttrs = Symbol.for('spritejs_changedAttrs');

export default class Node3d extends Node {
  static Attr = Attr3d;

  constructor(attrs = {}) {
    super(attrs);
    const attributes = this.attributes;
    this[_rotation] = {
      get x() {
        return attributes.rotateX * Math.PI / 180;
      },
      set x(value) {
        attributes.rotateX = value * 180 / Math.PI;
      },
      get y() {
        return attributes.rotateY * Math.PI / 180;
      },
      set y(value) {
        attributes.rotateY = value * 180 / Math.PI;
      },
      get z() {
        return attributes.rotateZ * Math.PI / 180;
      },
      set z(value) {
        attributes.rotateZ = value * 180 / Math.PI;
      },
    };
    this[_position] = {
      get x() {
        return attributes.x;
      },
      set x(value) {
        attributes.x = value;
      },
      get y() {
        return attributes.y;
      },
      set y(value) {
        attributes.y = value;
      },
      get z() {
        return attributes.z;
      },
      set z(value) {
        attributes.z = value;
      },
    };
  }

  get position() {
    return this[_position];
  }

  get rotation() {
    return this[_rotation];
  }

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

  setBody(body) {
    const oldBody = this[_body];
    this[_body] = body;
    if(oldBody && oldBody.parent) {
      oldBody.setParent(null);
    }
    if(this.parent && this.parent.body) {
      this[_body].setParent(this.parent.body);
    }

    const _changedAttrs = Object.entries(this.attributes[changedAttrs]);
    for(let i = 0; i < _changedAttrs.length; i++) {
      const [key, value] = _changedAttrs[i];
      this.onPropertyChange(key, value, value);
    }
    const uniforms = this.uniforms;
    if(uniforms) {
      this.setUniforms(uniforms);
    }
    if(!uniforms && _changedAttrs.length <= 0) this.forceUpdate();
    body._node = this;
    if(this.groupBody) {
      this.groupBody.setParent(body);
    }
  }

  /* override */
  setUniforms(uniforms) {
    super.setUniforms(uniforms);
    if(this.body && this.body.program) {
      const program = this.body.program;
      Object.entries(uniforms).forEach(([key, value]) => {
        program.uniforms[key] = {value};
      });
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