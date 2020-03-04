import Mesh3dAttr from './mesh3d';
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
export default class PolylineAttr extends Mesh3dAttr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      points: [],
      raycast: 'none'
    });
  }

  get points() {
    return this[getAttribute]('points');
  }

  set points(value) {
    if (Array.isArray(value)) {
      value = value.reduce((a, b) => {
        if (Array.isArray(b)) {
          return [...a, ...b];
        }

        return [...a, b];
      }, []);
    } // if(value) { // 要去掉重复的点
    //   if(value.length % 3) throw new Error('Invalid points set');
    //   const points = [value[0], value[1], value[2]];
    //   for(let i = 3; i < value.length; i += 3) {
    //     if(value[i] !== value[i - 3] || value[i + 1] !== value[i - 2] || value[i + 2] !== value[i - 1]) {
    //       points.push(value[i], value[i + 1], value[i + 2]);
    //     }
    //   }
    //   value = points;
    // }


    this[setAttribute]('points', value);
  }

}