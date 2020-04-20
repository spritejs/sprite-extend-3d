import Mesh3dAttr from './mesh3d';
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
export default class TorusAttr extends Mesh3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      radius: 0.5,
      tube: 0.2,
      radialSegments: 8,
      tubularSegments: 6,
      arc: Math.PI * 2
    });
  }

  get radius() {
    return this[getAttribute]('radius');
  }

  set radius(value) {
    this[setAttribute]('radius', value);
  }

  get tube() {
    return this[getAttribute]('tube');
  }

  set tube(value) {
    this[setAttribute]('tube', value);
  }

  get radialSegments() {
    return this[getAttribute]('radialSegments');
  }

  set radialSegments(value) {
    this[setAttribute]('radialSegments', value);
  }

  get tubularSegments() {
    return this[getAttribute]('tubularSegments');
  }

  set tubularSegments(value) {
    this[setAttribute]('tubularSegments', value);
  }

  get arc() {
    return this[getAttribute]('arc');
  }

  set arc(value) {
    this[setAttribute]('arc', value);
  }

}