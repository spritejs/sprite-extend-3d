import {registerNode, Node} from 'spritejs';
import Attr3d from '../attribute/geometry';

const _body = Symbol('body');

export default class Node3d extends Node {
  static Attr = Attr3d;

  get body() {
    if(this[_body]) {
      return this[_body];
    }
    throw new Error('No program set to this element.');
  }

  setBody(body) {
    this[_body] = body;
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'x' || key === 'y' || key === 'z') {
      this.body.position[key] = newValue;
    }
    if(key === 'rotateX' || key === 'rotateY' || key === 'rotateZ') {
      this.body.rotation[key.toLowerCase().slice(-1)] = newValue;
    }
    if(key === 'scaleX' || key === 'scaleY' || key === 'scaleZ') {
      this.body.scale[key.toLowerCase().slice(-1)] = newValue;
    }
  }
}

registerNode(Node3d, 'node3d');