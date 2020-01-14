import { Color } from 'spritejs';
import Node3dAttr from './node3d';
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
export default class Mesh3dAttr extends Node3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      colors: [0.5, 0.5, 0.5, 1],
      colorDivisor: 3
    });
  }

  get colors() {
    return this[getAttribute]('colors');
  }

  set colors(value) {
    if (typeof value === 'string') {
      value = value.replace(/\s*,\s*/g, ',');
      let colors = value.split(/\s+/g);
      colors = colors.map(c => {
        return new Color(c);
      });
      value = colors.reduce((a, b) => [...a, ...b]);
    } else if (Array.isArray(value)) {
      if (typeof value[0] === 'string') {
        value = value.reduce((a, b) => {
          a.push(...new Color(b));
          return a;
        }, []);
      } else if (Array.isArray(value[0])) {
        value = value.reduce((a, b) => [...a, ...b]);
      }
    }

    this[setAttribute]('colors', value);
  }

  get colorDivisor() {
    return this[getAttribute]('colorDivisor');
  }

  set colorDivisor(value) {
    this[setAttribute]('colorDivisor', value);
  }

}