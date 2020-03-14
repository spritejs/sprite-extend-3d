import { Curve as _Curve, Vec3 } from 'ogl';
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
  }

}