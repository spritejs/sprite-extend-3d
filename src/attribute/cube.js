import GeometryAttr from './geometry';

const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class CubeAttr extends GeometryAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      colorDivisor: 4,
    });
  }
}