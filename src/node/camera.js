import {registerNode} from 'spritejs';
import {Camera} from 'ogl';
import Node3d from './node3d';

export default class _Camera extends Node3d {
  constructor(gl, parent) {
    super();
    this.setBody(new Camera(gl));
    this.connect(parent, 0);
  }
}

registerNode(_Camera, 'camera');