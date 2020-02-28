import Mesh3dAttr from './mesh3d';

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class CubeAttr extends Mesh3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      width: 1,
      height: 1,
      depth: 1,
      /* size */
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,
      /* override */
      colorDivisor: 4,
    });
  }

  get width() {
    return this[getAttribute]('width');
  }

  set width(value) {
    this[setAttribute]('width', value);
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', value);
  }

  get size() {
    return [this.width, this.height, this.depth];
  }

  set size(value) {
    if(!Array.isArray(value)) value = [value, value, value];
    this.width = value[0];
    this.height = value[1];
    this.depth = value[2];
  }

  get depth() {
    return this[getAttribute]('depth');
  }

  set depth(value) {
    this[setAttribute]('depth', value);
  }

  get widthSegments() {
    return this[getAttribute]('widthSegments');
  }

  set widthSegments(value) {
    this[setAttribute]('widthSegments', value);
  }

  get heightSegments() {
    return this[getAttribute]('heightSegments');
  }

  set heightSegments(value) {
    this[setAttribute]('heightSegments', value);
  }

  get depthSegments() {
    return this[getAttribute]('depthSegments');
  }

  set depthSegments(value) {
    this[setAttribute]('depthSegments', value);
  }
}