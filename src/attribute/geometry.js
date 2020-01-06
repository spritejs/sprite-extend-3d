import {Color} from 'spritejs';
import Attr3d from './attr3d';

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');

export default class GeometryAttr extends Attr3d {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      colors: [0, 0, 0, 1],
      colorDivisor: 3,
    });
  }

  get colors() {
    return this[getAttribute]('colors');
  }

  set colors(value) {
    if(typeof value === 'string') {
      value = value.replace(/\s*,\s*/g, ',');
      let colors = value.split(/\s+/g);
      colors = colors.map((c) => {
        return new Color(c);
      });
      value = colors.reduce((a, b) => [...a, ...b]);
    } else if(Array.isArray(value)) {
      if(typeof value[0] === 'string') {
        value = value.reduce((a, b) => {
          a.push(...(new Color(b)));
          return a;
        }, []);
      } else if(Array.isArray(value[0])) {
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