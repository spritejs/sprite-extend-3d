import { Color } from 'spritejs';
import Node3dAttr from './node3d';
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
export default class Mesh3dAttr extends Node3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      mode: 'TRIANGLES',
      // POINTS, LINES, LINE_LOOP,  LINE_STRIP, TRIANGLES
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

  get mode() {
    return this[getAttribute]('mode');
  }

  set mode(value) {
    if (typeof value === 'number' && value >= 0 && value < 5) {
      value = ['POINTS', 'LINES', 'LINE_LOOP', 'LINE_STRIP', 'TRIANGLES'][value];
    }

    if (value && value !== 'TRIANGLES' && value !== 'POINTS' && value !== 'LINES' && value !== 'LINE_LOOP' && value !== 'LINE_STRIP') {
      throw new TypeError('Invalid mode value.');
    }

    this[setAttribute]('mode', value);
  }

}