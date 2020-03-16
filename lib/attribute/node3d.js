import { Node } from 'spritejs';
const Attr = Node.Attr;
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
const declareAlias = Symbol.for('spritejs_declareAlias');
export default class Node3dAttr extends Attr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

      /* rotate */
      rotateOrder: 'YXZ',
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,

      /* scale */
      raycast: undefined,
      // 碰撞的形状，默认是立方体bounds，设为sphere可以检测球形
      visibility: 'visible'
    });
    this[declareAlias]('rotate', 'scale');
  }

  get z() {
    return this[getAttribute]('z');
  }

  set z(value) {
    this[setAttribute]('z', value);
  }

  get raycast() {
    return this[getAttribute]('raycast');
  }

  set raycast(value) {
    this[setAttribute]('raycast', value);
  }
  /* override */


  get pos() {
    return [this.x, this.y, this.z];
  }

  set pos(value) {
    if (!Array.isArray(value)) {
      if (value.x != null && value.y != null && value.z != null) {
        value = [value.x, value.y, value.z];
      } else {
        value = [value, value, value];
      }
    }

    this.x = value[0];
    this.y = value[1];
    this.z = value[2];
  }

  get rotateX() {
    return this[getAttribute]('rotateX');
  }

  set rotateX(value) {
    this[setAttribute]('rotateX', value);
  }

  get rotateY() {
    return this[getAttribute]('rotateY');
  }

  set rotateY(value) {
    this[setAttribute]('rotateY', value);
  }

  get rotateZ() {
    return this[getAttribute]('rotateZ');
  }

  set rotateZ(value) {
    this[setAttribute]('rotateZ', value);
  }
  /* override */


  get rotate() {
    return [this.rotateX, this.rotateY, this.rotateZ];
  }

  set rotate(value) {
    if (!Array.isArray(value)) value = [value, 0, 0];
    this.rotateX = value[0];
    this.rotateY = value[1];
    this.rotateZ = value[2];
  }

  get rotateOrder() {
    return this[getAttribute]('rotateOrder');
  }

  set rotateOrder(value) {
    this[setAttribute]('rotateOrder', value);
  }

  get scaleX() {
    return this[getAttribute]('scaleX');
  }

  set scaleX(value) {
    this[setAttribute]('scaleX', value);
  }

  get scaleY() {
    return this[getAttribute]('scaleY');
  }

  set scaleY(value) {
    this[setAttribute]('scaleY', value);
  }

  get scaleZ() {
    return this[getAttribute]('scaleZ');
  }

  set scaleZ(value) {
    this[setAttribute]('scaleZ', value);
  }
  /* override */


  get scale() {
    return [this.scaleX, this.scaleY, this.scaleZ];
  }

  set scale(value) {
    if (!Array.isArray(value)) value = [value, value, value];
    this.scaleX = value[0];
    this.scaleY = value[1];
    this.scaleZ = value[2];
  }

  get visibility() {
    return this[getAttribute]('visibility');
  }

  set visibility(value) {
    if (value !== 'visible' && value !== 'hidden') {
      throw new TypeError('Invalid visiblity value.');
    }

    this[setAttribute]('visibility', value);
  }

}