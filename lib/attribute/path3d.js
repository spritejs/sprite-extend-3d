import Mesh3dAttr from './mesh3d';
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
export default class CubeAttr extends Mesh3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      d: '',
      type: 'fill',
      fillRule: 'nonzero',
      lineWidth: 1,
      lineJoin: 'miter',
      // 'miter' or 'bevel' or 'round'
      lineCap: 'butt',
      // 'butt' or 'square' or 'round'
      roundSegments: 20,
      // default roundSegment if lineJoin or lineCap is round
      miterLimit: 10,
      depth: 1,
      capFront: true,
      capBack: true
    });
  }

  get d() {
    return this[getAttribute]('d');
  }

  set d(value) {
    this[setAttribute]('d', value);
  }

  get type() {
    return this[getAttribute]('type');
  }

  set type(value) {
    if (value != null && value !== 'fill' && value !== 'stroke') throw new TypeError('Invalid type.');
    return this[setAttribute]('type', value);
  }

  get fillRule() {
    return this[getAttribute]('fillRule');
  }

  set fillRule(value) {
    if (value != null && value !== 'nonzero' && value !== 'evenodd') throw new TypeError('Invalid fill rule.');
    this[setAttribute]('fillRule', value);
  }

  get lineWidth() {
    return this[getAttribute]('lineWidth');
  }

  set lineWidth(value) {
    this[setAttribute]('lineWidth', value);
  }

  get lineJoin() {
    return this[getAttribute]('lineJoin');
  }

  set lineJoin(value) {
    if (value != null && value !== 'miter' && value !== 'bevel' && value !== 'round') throw new TypeError('Invalid lineJoin type.');
    this[setAttribute]('lineJoin', value);
  }

  get lineCap() {
    return this[getAttribute]('lineCap');
  }

  set lineCap(value) {
    if (value != null && value !== 'butt' && value !== 'square' && value !== 'round') throw new TypeError('Invalid lineCap type.');
    this[setAttribute]('lineCap', value);
  }

  get miterLimit() {
    return this[getAttribute]('miterLimit');
  }

  set miterLimit(value) {
    this[setAttribute]('miterLimit', value);
  }

  get roundSegments() {
    return this[getAttribute]('roundSegments');
  }

  set roundSegments(value) {
    this[setAttribute]('roundSegments', value);
  }

  get depth() {
    return this[getAttribute]('depth');
  }

  set depth(value) {
    this[setAttribute]('depth', value);
  }

  get capFront() {
    return this[getAttribute]('capFront');
  }

  set capFront(value) {
    this[setAttribute]('capFront', value);
  }

  get capBack() {
    return this[getAttribute]('capBack');
  }

  set capBack(value) {
    this[setAttribute]('capBack', value);
  }

}