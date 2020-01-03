import GeometryAttr from './geometry';

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class CylinderAttr extends GeometryAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      radiusTop: 0.5,
      radiusBottom: 0.5,
      height: 1,
      radialSegments: 16,
      heightSegments: 1,
      openEnded: false,
      thetaStart: 0,
      thetaLength: Math.PI * 2,
    });
  }

  get radiusTop() {
    return this[getAttribute]('radiusTop');
  }

  set radiusTop(value) {
    this[setAttribute]('radiusTop', value);
  }

  get radiusBottom() {
    return this[getAttribute]('radiusBottom');
  }

  set radiusBottom(value) {
    this[setAttribute]('radiusBottom', value);
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', value);
  }

  get radialSegments() {
    return this[getAttribute]('radialSegments');
  }

  set radialSegments(value) {
    this[setAttribute]('radialSegments', value);
  }

  get heightSegments() {
    return this[getAttribute]('heightSegments');
  }

  set heightSegments(value) {
    this[setAttribute]('heightSegments', value);
  }

  get openEnded() {
    return this[getAttribute]('openEnded');
  }

  set openEnded(value) {
    this[setAttribute]('openEnded', value);
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