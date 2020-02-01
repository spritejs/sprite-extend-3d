import Node3dAttr from './node3d';

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class GameraAttr extends Node3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      near: 0.1,
      far: 100,
      fov: 45,
      aspect: 1,
      left: undefined,
      right: undefined,
      bottom: undefined,
      top: undefined,
      zoom: 1,
      mode: 'perspective', // perspective - 透视相机， orthographic - 正交投影相机
    });
  }

  get near() {
    return this[getAttribute]('near');
  }

  set near(value) {
    this[setAttribute]('near', value);
  }

  get far() {
    return this[getAttribute]('far');
  }

  set far(value) {
    this[setAttribute]('far', value);
  }

  get fov() {
    return this[getAttribute]('fov');
  }

  set fov(value) {
    this[setAttribute]('fov', value);
  }

  get aspect() {
    return this[getAttribute]('aspect');
  }

  set aspect(value) {
    this[setAttribute]('aspect', value);
  }

  get left() {
    return this[getAttribute]('left');
  }

  set left(value) {
    this[setAttribute]('left', value);
  }

  get right() {
    return this[getAttribute]('right');
  }

  set right(value) {
    this[setAttribute]('right', value);
  }

  get top() {
    return this[getAttribute]('top');
  }

  set top(value) {
    this[setAttribute]('top', value);
  }

  get bottom() {
    return this[getAttribute]('bottom');
  }

  set bottom(value) {
    this[setAttribute]('bottom', value);
  }

  get zoom() {
    return this[getAttribute]('zoom');
  }

  set zoom(value) {
    this[setAttribute]('zoom', value);
  }

  get mode() {
    return this[getAttribute]('mode');
  }

  set mode(value) {
    if(value && value !== 'perspective' && value !== 'orthographic') {
      throw new TypeError('Invalid camera mode.');
    }
    this[setAttribute]('mode', value);
  }
}