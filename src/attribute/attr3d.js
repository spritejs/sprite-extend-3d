import {Node, helpers} from 'spritejs';

const {toNumber, toArray} = helpers;

const Attr = Node.Attr;

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
const declareAlias = Symbol.for('spritejs_declareAlias');

export default class Attr3d extends Attr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      /* rotate */
      scaleX: 0,
      scaleY: 0,
      scaleZ: 0,
      /* scale */
    });
    this[declareAlias]('rotate', 'scale');
  }

  get z() {
    return this[getAttribute]('z');
  }

  set z(value) {
    this[setAttribute]('z', toNumber(value));
  }

  /* override */
  get pos() {
    return [this.x, this.y, this.z];
  }

  set pos(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, value, 0];
    this.x = value[0] || 0;
    this.y = value[1] || 0;
    this.z = value[2] || 0;
  }

  get rotateX() {
    return this[getAttribute]('rotateX');
  }

  set rotateX(value) {
    this[setAttribute]('rotateX', toNumber(value));
  }

  get rotateY() {
    return this[getAttribute]('rotateY');
  }

  set rotateY(value) {
    this[setAttribute]('rotateY', toNumber(value));
  }

  get rotateZ() {
    return this[getAttribute]('rotateZ');
  }

  set rotateZ(value) {
    this[setAttribute]('rotateZ', toNumber(value));
  }

  /* override */
  get rotate() {
    return [this.rotateX, this.rotateY, this.rotateZ];
  }

  set rotate(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, 0, 0];
    this.rotateX = value[0] || 0;
    this.rotateY = value[1] || 0;
    this.rotateZ = value[2] || 0;
  }

  get scaleX() {
    return this[getAttribute]('scaleX');
  }

  set scaleX(value) {
    this[setAttribute]('scaleX', toNumber(value));
  }

  get scaleY() {
    return this[getAttribute]('scaleY');
  }

  set scaleY(value) {
    this[setAttribute]('scaleY', toNumber(value));
  }

  get scaleZ() {
    return this[getAttribute]('scaleZ');
  }

  set scaleZ(value) {
    this[setAttribute]('scaleZ', toNumber(value));
  }

  /* override */
  get scale() {
    return [this.scaleX, this.scaleY, this.scaleZ];
  }

  set scale(value) {
    value = toArray(value);
    if(!Array.isArray(value)) value = [value, 0, 0];
    this.scaleX = value[0] || 0;
    this.scaleY = value[1] || 0;
    this.scaleZ = value[2] || 0;
  }
}
