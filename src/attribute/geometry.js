import rgba from 'color-rgba';
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
      lightning: [1, 1, 1],
    });
  }

  get colors() {
    return this[getAttribute]('colors');
  }

  set colors(value) {
    if(typeof value === 'string') {
      value = value.replace(/\s*,\s*/g, ',');
      let colors = value.split(/\s+/g);
      colors = colors.map((color) => {
        const c = rgba(color);
        return [c[0] / 255, c[1] / 255, c[2] / 255, c[3]];
      });
      value = colors.reduce((a, b) => [...a, ...b]);
    } else if(Array.isArray(value)) {
      if(typeof value[0] === 'string') {
        value = value.reduce((a, b) => {
          const c = rgba(b);
          a.push(c[0] / 255, c[1] / 255, c[2] / 255, c[3]);
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

  get lightning() {
    return this[getAttribute]('lightning');
  }

  set lightning(value) {
    this[setAttribute]('lightning', value);
  }
}