import { Curve as _Curve, Vec3 } from 'ogl'; // temp

const _a0 = new Vec3(),
      _a1 = new Vec3(),
      _a2 = new Vec3(),
      _a3 = new Vec3();

function getBezierPoint(t, p0, c0, c1, p1) {
  const k = 1 - t;

  _a0.copy(p0).scale(k ** 3);

  _a1.copy(c0).scale(3 * k ** 2 * t);

  _a2.copy(c1).scale(3 * k * t ** 2);

  _a3.copy(p1).scale(t ** 3);

  const ret = new Vec3();
  ret.add(_a0, _a1).add(_a2).add(_a3);
  return ret;
}

export default class Curve extends _Curve {
  constructor({
    points,
    divisions,
    type
  } = {}) {
    if (Array.isArray(points) && points[0] && !(points[0] instanceof Vec3)) {
      points = points.map(p => new Vec3().copy(p));
    }

    super({
      points,
      divisions,
      type
    });
  } // 临时修复


  _getCubicBezierPoints(divisions = this.divisions) {
    const points = [];
    const count = this.points.length;

    if (count < 4) {
      console.warn('Not enough points provided.');
      return [];
    }

    const p0 = this.points[0];
    let c0 = this.points[1],
        c1 = this.points[2],
        p1 = this.points[3];

    for (let i = 0; i <= divisions; i++) {
      const p = getBezierPoint(i / divisions, p0, c0, c1, p1);
      points.push(p);
    }

    let offset = 4;

    while (count - offset > 1) {
      p0.copy(p1);
      c0 = p1.scale(2).sub(c1);
      c1 = this.points[offset];
      p1 = this.points[offset + 1];

      for (let i = 1; i <= divisions; i++) {
        const p = getBezierPoint(i / divisions, p0, c0, c1, p1);
        points.push(p);
      }

      offset += 2;
    }

    return points;
  }

}