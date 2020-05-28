function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { registerNode, Path } from 'spritejs';
import { Vec3 } from 'ogl';
import Path3dAttr from '../attribute/path3d';
import Mesh3d from './mesh3d';
import Geometry from '../helper/geometry';

function getDirection(points) {
  const len = points.length;
  if (len < 3) return 0;
  let minx = Infinity;
  let minIdx = 0;

  for (let i = 0; i < len; i++) {
    const x = points[i][0];

    if (x < minx) {
      minx = x;
      minIdx = i;
    }
  }

  let p1 = points[(len + minIdx - 1) % len];
  const p2 = points[minIdx];
  let p3 = points[(minIdx + 1) % len];

  if (p1[0] === p2[0] && p1[1] === p2[1]) {
    p1 = points[(len + minIdx - 2) % len];
  }

  if (p2[0] === p3[0] && p2[1] === p3[1]) {
    p3 = points[(minIdx + 2) % len];
  }

  const v1 = [p1[0] - p2[0], p1[1] - p2[1]]; // vec2(p1) - vec2(p2);

  const v2 = [p3[0] - p2[0], p3[1] - p2[1]]; // vec2(p3) - vec2(p2);

  const d = v1[0] * v2[1] - v2[0] * v1[1]; // (vec2.cross(v1, v2))[2];

  if (d === 0) return 0;
  return d > 0 ? 1 : -1;
}

function generateUV(bounds, positions) {
  const [w, h] = [bounds[1][0] - bounds[0][0], bounds[1][1] - bounds[0][1]];
  const ret = [];

  for (let j = 0; j < positions.length; j++) {
    const p = positions[j];
    const uv = [(p[0] - bounds[0][0]) / w, 1 - (p[1] - bounds[0][1]) / h];
    ret.push(uv);
  }

  return ret;
}

function setData({
  points,
  position,
  index,
  normal,
  uv,
  offset,
  depth
}) {
  points = [...points];
  const dir = getDirection(points);
  if (points.length <= 1) return;
  let totalLength = 0;
  const len = points.length;

  for (let i = 1; i < len; i++) {
    totalLength += Math.hypot(points[i][0] - points[i - 1][0], points[i][1], points[i - 1][1]);
  }

  let segLength = 0; // add height

  for (let i = 0; i < len - 1; i++) {
    const point = points[i];
    const next = points[i + 1];
    const p1 = new Vec3(point[0], point[1], -0.5 * depth);
    const p2 = new Vec3(point[0], point[1], 0.5 * depth);
    const p3 = new Vec3(next[0], next[1], -0.5 * depth);
    const p4 = new Vec3(next[0], next[1], 0.5 * depth);
    position.push(...p1, ...p2, ...p3, ...p4);
    index.push(offset + i * 4, offset + i * 4 + 1, offset + i * 4 + 2);
    index.push(offset + i * 4 + 1, offset + i * 4 + 3, offset + i * 4 + 2);
    const a = new Vec3().sub(p1, p3).scale(dir || 1);
    const n = [0, 0, depth];
    const norm = new Vec3().cross(a, n).normalize();
    normal.push(...norm, ...norm, ...norm, ...norm);
    let u = segLength / totalLength;
    uv.push(u, 0, u, 1);
    segLength += Math.hypot(next[0] - point[0], next[1] - point[1]);
    u = segLength / totalLength;
    uv.push(u, 0, u, 1);
  } // add normal

}

export default class Path3d extends Mesh3d {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'd' || key === 'fillRule' || key === 'lineWidth' || key === 'lineJoin' || key === 'lineCap' || key === 'roundSegments' || key === 'miterLimit' || key === 'depth' || key === 'capFront' || key === 'capBack') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }

  fromPoints(points) {
    const d = `M${points.join('L')}Z`.replace(/,/g, ' ');
    this.attr('d', d);
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      d,
      type,
      fillRule,
      lineWidth,
      lineJoin,
      lineCap,
      roundSegments,
      miterLimit,
      depth,
      capFront,
      capBack
    } = this.attributes;
    const path = new Path(d);

    if (type === 'stroke') {
      path.attr('strokeColor', 'rgba(0, 0, 0, 0)');
      throw new Error('Not supported yet.');
    }

    path.attr({
      fillColor: '#fff',
      d,
      fillRule,
      lineWidth,
      lineJoin,
      lineCap,
      roundSegments,
      miterLimit
    });
    const mesh = path.mesh;

    if (mesh) {
      const position = [];
      const index = [];
      const normal = [];
      const uv = []; // mesh.accurate(10);

      let offset = 0;

      if (type === 'fill') {
        const contours = mesh.contours;
        contours.forEach(points => {
          setData({
            points,
            position,
            index,
            normal,
            uv,
            offset,
            depth
          });
          const len = points.length;

          if (len > 1) {
            offset = position.length / 3;
          }
        });
      } else if (type === 'stroke') {
        const points = mesh.meshData.position0.filter(([x, y, z]) => 1 / z < 0);
        setData({
          points,
          position,
          index,
          normal,
          uv,
          offset,
          depth
        });
        const len = points.length;

        if (len > 1) {
          offset = position.length / 3;
        }
      }

      if (capFront || capBack) {
        let points = mesh.meshData.position0;
        let cells = mesh.meshData.cells;

        if (type === 'stroke') {
          const totalLen = points.length;
          points = points.filter(([x, y, z]) => 1 / z < 0);
          const diff = totalLen - points.length;
          cells = cells.map(([x, y, z]) => [x - diff, z - diff, y - diff]).filter(([x]) => x >= 0);
        }

        const _uv = generateUV(mesh.boundingBox, points);

        if (capFront) {
          for (let i = 0; i < points.length; i++) {
            const point = points[i];

            if (capFront) {
              position.push(point[0], point[1], 0.5 * depth);
              normal.push(0, 0, 1);
              uv.push(..._uv[i]);
            }
          }

          for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            index.push(cell[0] + offset, cell[1] + offset, cell[2] + offset);
          }

          offset = position.length / 3;
        }

        if (capBack) {
          for (let i = 0; i < points.length; i++) {
            const point = points[i];

            if (capFront) {
              position.push(point[0], point[1], -0.5 * depth);
              normal.push(0, 0, -1);
              uv.push(..._uv[i]);
            }
          }

          for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            index.push(cell[0] + offset, cell[2] + offset, cell[1] + offset);
          }

          offset = position.length / 3;
        }
      }

      const geometry = new Geometry(gl, {
        position,
        index,
        normal,
        uv
      }, false);
      this.setGeometry(geometry);
      this.mesh2d = mesh;
    }
  }

}

_defineProperty(Path3d, "Attr", Path3dAttr);

registerNode(Path3d, 'path3d');