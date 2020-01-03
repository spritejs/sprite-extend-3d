import {registerNode, Node} from 'spritejs';
import Attr3d from '../attribute/attr3d';

const _body = Symbol('body');

const changedAttrs = Symbol.for('spritejs_changedAttrs');

export default class Node3d extends Node {
  static Attr = Attr3d;

  get body() {
    if(this[_body]) {
      return this[_body];
    }
    return null;
  }

  get meshes() {
    return [];
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
}

registerNode(Node3d, 'node3d');