import CubicBezierCurve from './cubic-bezier';

/**
 * Get the control points of cubic bezier curve.
 * @param {*} i
 * @param {*} a
 * @param {*} b
 */
function getCtrlPoint(points, i, a = 0.168, b = 0.168) {
  let x0;
  let y0;
  let z0;
  let x1;
  let y1;
  let z1;

  if(i < 1) {
    x0 = points[0][0] + (points[1][0] - points[0][0]) * a;
    y0 = points[0][1] + (points[1][1] - points[0][1]) * a;
    z0 = points[0][2] + (points[1][2] - points[0][2]) * a;
  } else {
    x0 = points[i][0] + (points[i + 1][0] - points[i - 1][0]) * a;
    y0 = points[i][1] + (points[i + 1][1] - points[i - 1][1]) * a;
    z0 = points[i][2] + (points[i + 1][2] - points[i - 1][2]) * a;
  }

  if(i > points.length - 3) {
    const last = points.length - 1;
    x1 = points[last][0] - (points[last][0] - points[last - 1][0]) * b;
    y1 = points[last][1] - (points[last][1] - points[last - 1][1]) * b;
    z1 = points[last][2] - (points[last][2] - points[last - 1][2]) * b;
  } else {
    x1 = points[i + 1][0] - (points[i + 2][0] - points[i][0]) * b;
    y1 = points[i + 1][1] - (points[i + 2][1] - points[i][1]) * b;
    z1 = points[i + 1][2] - (points[i + 2][2] - points[i][2]) * b;
  }

  return [[x0, y0, z0], [x1, y1, z1]];
}

export default class SmoothCurve {
  constructor({
    points = [],
    divisions = 12,
  } = {}) {
    this.points = points;
    this.divisions = divisions;
  }

  getPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
    const len = this.points.length;
    if(len <= 2) {
      return this.points;
    }
    const points = [];
    let p0;
    this.points.forEach((p, i) => {
      if(i === 0) {
        p0 = p;
      } else {
        const [p1, p2] = getCtrlPoint(this.points, i - 1, a, b);
        const c = new CubicBezierCurve({
          p0,
          p1,
          p2,
          p3: p,
        });
        points.pop();
        points.push(...c.getPoints(divisions));
        p0 = p;
      }
    });
    return points;
  }
}