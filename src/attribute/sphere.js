import Mesh3dAttr from './mesh3d';

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class SphereAttr extends Mesh3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      radius: 0.5,
      widthSegments: 32,
      heightSegments: 16,
      phiStart: 0,
      phiLength: Math.PI * 2,
      thetaStart: 0,
      thetaLength: Math.PI,
      raycast: 'sphere',
    });
  }

  get radius() {
    return this[getAttribute]('radius');
  }

  set radius(value) {
    this[setAttribute]('radius', value);
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

  get phiStart() {
    return this[getAttribute]('phiStart');
  }

  set phiStart(value) {
    this[setAttribute]('phiStart', value);
  }

  get phiLength() {
    return this[getAttribute]('phiLength');
  }

  set phiLength(value) {
    this[setAttribute]('phiLength', value);
  }

  get thetaStart() {
    return this[getAttribute]('thetaStart');
  }

  set thetaStart(value) {
    this[setAttribute]('thetaStart', value);
  }

  get thetaLength() {
    return this[getAttribute]('thetaLength');
  }

  set thetaLength(value) {
    this[setAttribute]('thetaLength', value);
  }
}