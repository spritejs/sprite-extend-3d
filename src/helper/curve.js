import {Curve as _Curve, Vec3} from 'ogl';

// temp
const _a0 = new Vec3(),
  _a1 = new Vec3(),
  _a2 = new Vec3();

function getQuadraticBezierPoint(t, p0, c0, p1) {
  const k = 1 - t;
  _a0.copy(p0).scale(k ** 2);
  _a1.copy(c0).scale(2 * k * t);
  _a2.copy(p1).scale(t ** 2);
  const ret = new Vec3();
  ret.add(_a0, _a1).add(_a2);
  return ret;
}

const QUADBEZIER = 'quadraticbezier';

export default class Curve extends _Curve {
  constructor({points, divisions, type} = {}) {
    if(Array.isArray(points) && points[0] && !(points[0] instanceof Vec3)) {
      points = points.map(p => new Vec3().copy(p));
    }
    super({points, divisions, type});
  }

  getPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
    if(this.type === QUADBEZIER) {
      const points = [];
      const count = this.points.length;
      if(count < 3) {
        console.warn('Not enough points provided.');
        return [];
      }
      const p0 = this.points[0];
      let c0 = this.points[1],
        p1 = this.points[2];

      for(let i = 0; i <= divisions; i++) {
        const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
        points.push(p);
      }
      let offset = 3;
      while(count - offset > 0) {
        p0.copy(p1);
        c0 = p1.scale(2).sub(c0);
        p1 = this.points[offset];
        for(let i = 1; i <= divisions; i++) {
          const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
          points.push(p);
        }
        offset++;
      }
      return points;
    }
    return super.getPoints(divisions, a, b);
  }
}

Curve.QUADRATICBEZIER = QUADBEZIER;