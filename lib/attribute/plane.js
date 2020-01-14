import Mesh3dAttr from './mesh3d';
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
export default class PlaneAttr extends Mesh3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      width: 1,
      height: 1,
      widthSegments: 1,
      heightSegments: 1
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

}