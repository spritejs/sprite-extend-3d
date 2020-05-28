function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { registerNode } from 'spritejs';
import Mesh3d from './mesh3d';
import PolylineAttr from '../attribute/polyline3d';
export default class Polyline3d extends Mesh3d {
  setProgram(program) {
    if (!program.uniforms.uThickness) {
      program.uniforms.uThickness = {
        value: 1
      };
    }

    if (!program.uniforms.uMiter) {
      program.uniforms.uMiter = {
        value: 1
      };
    }

    if (program.gl.getUniformLocation(program.program, 'uTotalLength') && !program.uniforms.uTotalLength) {
      program.uniforms.uTotalLength = {
        value: 0
      };
    }

    super.setProgram(program);
  }

  get points() {
    return this.attributes.points;
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'points') {
      if (newValue !== oldValue) {
        if (newValue.length === oldValue.length) {
          this.updateGeometry();
        } else {
          this.updateMesh();
        }
      }
    }
  }

  updateGeometry() {
    const points = this.attributes.points;
    const position = this.geometry.attributes.position.data;
    const prev = this.geometry.attributes.prev.data;
    const next = this.geometry.attributes.next.data;
    const seg = this.geometry.attributes.seg ? this.geometry.attributes.seg.data : null;
    let segLen = 0;

    for (let i = 0; i < points.length; i += 3) {
      const p = [points[i], points[i + 1], points[i + 2]];
      position.set(p, i * 2);
      position.set(p, i * 2 + 3);

      if (seg) {
        if (i === 0) seg.set([0, 0], 0);else {
          segLen += Math.hypot(points[i] - points[i - 3], points[i + 1] - points[i - 2], points[i + 2] - points[i - 1]);
          seg.set([segLen, segLen], i / 3 * 2);
        }
      }

      if (i === 0) {
        // If first point, calculate prev using the distance to 2nd point
        const p2 = [points[i] - points[i + 3] + points[i], points[i + 1] - points[i + 4] + points[i + 1], points[i + 2] - points[i + 5] + points[i + 2]];
        prev.set(p2, i * 2);
        prev.set(p2, i * 2 + 3);
      } else {
        next.set(p, (i - 3) * 2);
        next.set(p, (i - 3) * 2 + 3);
      }

      if (i >= points.length - 3) {
        // If last point, calculate next using distance to 2nd last point
        const p2 = [points[i] - points[i - 3] + points[i], points[i + 1] - points[i - 2] + points[i + 1], points[i + 2] - points[i - 1] + points[i + 2]];
        next.set(p2, i * 2);
        next.set(p2, i * 2 + 3);
      } else {
        prev.set(p, (i + 3) * 2);
        prev.set(p, (i + 3) * 2 + 3);
      }
    }

    if (this.program && this.program.uniforms.uTotalLength) {
      this.program.uniforms.uTotalLength = {
        value: segLen
      };
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.prev.needsUpdate = true;
    this.geometry.attributes.next.needsUpdate = true;

    if (seg) {
      this.geometry.attributes.seg.needsUpdate = true;
    }
  }
  /* override */


  remesh() {
    const points = this.attributes.points;
    const count = points.length / 3;
    const position = new Float32Array(count * 3 * 2);
    const prev = new Float32Array(count * 3 * 2);
    const next = new Float32Array(count * 3 * 2);
    const side = new Float32Array(count * 2);
    const uv = new Float32Array(count * 2 * 2);
    const index = new Uint16Array((count - 1) * 3 * 2);
    const modle = {
      position,
      prev,
      next,
      side,
      uv,
      index
    };
    const program = this.program;

    if (program && program.gl.getAttribLocation(program.program, 'seg') >= 0) {
      const seg = new Float32Array(count * 2);
      modle.seg = seg;
    } // Set static buffers


    for (let i = 0; i < count; i++) {
      side.set([-1, 1], i * 2);
      const v = i / (count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === count - 1) continue; // eslint-disable-line no-continue

      const ind = i * 2;
      index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
      index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
    }

    this.setGeometry(modle);
    this.updateGeometry();
  }

}

_defineProperty(Polyline3d, "Attr", PolylineAttr);

registerNode(Polyline3d, 'polyline3d');