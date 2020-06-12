function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Geometry as _Geometry, Vec3, Vec2 } from 'ogl';

function parseData(data, size = 3) {
  let d = data.data || data;
  if (Array.isArray(d)) d = new Float32Array(d);
  const s = data.size || size;

  if (data.data) {
    data.data = d;
    data.size = s;
    return data;
  }

  return {
    size: s,
    data: d
  };
}

_Geometry.prototype.transpose = function (order = 'zxy') {
  const geometry = this;

  if (geometry) {
    order = [...order].map(c => {
      if (c === 'x' || c === 'X') return 0;
      if (c === 'y' || c === 'Y') return 1;
      return 2;
    });
    const position = geometry.attributes.position;
    const {
      size,
      data
    } = position;

    for (let i = 0; i < data.length; i += size) {
      const pos = [data[i], data[i + 1], data[i + 2]];

      for (let j = 0; j < 3; j++) {
        const idx = order[j] != null ? order[j] : j;
        data[i + j] = pos[idx];
      }
    }

    position.needsUpdate = true;
  }
};

export default class Geometry extends _Geometry {
  static extract({
    gl,
    attributes,
    preserveBuffers
  }) {
    if (attributes.index) {
      const idx = attributes.index.data;
      const model = {};
      Object.entries(attributes).forEach(([key, value]) => {
        const data = value.data;

        if (key !== 'index') {
          model[key] = new data.constructor(value.size * idx.length);

          for (let i = 0; i < idx.length; i++) {
            for (let j = 0; j < value.size; j++) {
              model[key][i * value.size + j] = data[idx[i] * value.size + j];
            }
          }
        }
      });
      return new Geometry(gl, model, preserveBuffers);
    }

    const model = {};
    Object.entries(attributes).forEach(([key, value]) => {
      const data = value.data;
      model[key] = new data.constructor(data);
    });
    return new Geometry(gl, model, preserveBuffers);
  }

  static createTB(geometry) {
    const {
      position,
      index,
      uv
    } = geometry.attributes;
    if (!uv) throw new Error('NO uv.');

    function getTBNTriangle(p1, p2, p3, uv1, uv2, uv3) {
      const edge1 = new Vec3().sub(p2, p1);
      const edge2 = new Vec3().sub(p3, p1);
      const deltaUV1 = new Vec2().sub(uv2, uv1);
      const deltaUV2 = new Vec2().sub(uv3, uv1);
      const tang = new Vec3();
      const bitang = new Vec3();
      const f = 1.0 / (deltaUV1.x * deltaUV2.y - deltaUV2.x * deltaUV1.y);
      tang.x = f * (deltaUV2.y * edge1.x - deltaUV1.y * edge2.x);
      tang.y = f * (deltaUV2.y * edge1.y - deltaUV1.y * edge2.y);
      tang.z = f * (deltaUV2.y * edge1.z - deltaUV1.y * edge2.z);
      tang.normalize();
      bitang.x = f * (-deltaUV2.x * edge1.x + deltaUV1.x * edge2.x);
      bitang.y = f * (-deltaUV2.x * edge1.y + deltaUV1.x * edge2.y);
      bitang.z = f * (-deltaUV2.x * edge1.z + deltaUV1.x * edge2.z);
      bitang.normalize();
      return {
        tang,
        bitang
      };
    }

    const size = position.size;
    if (size < 3) throw new Error('Error dimension.');
    const len = position.data.length / size;
    const tang = new Float32Array(len * 3);
    const bitang = new Float32Array(len * 3);
    const ilen = index ? index.data.length : len;

    for (let i = 0; i < ilen; i += 3) {
      const i1 = index ? index.data[i] : i;
      const i2 = index ? index.data[i + 1] : i + 1;
      const i3 = index ? index.data[i + 2] : i + 2;
      const p1 = [position.data[i1 * size], position.data[i1 * size + 1], position.data[i1 * size + 2]];
      const p2 = [position.data[i2 * size], position.data[i2 * size + 1], position.data[i2 * size + 2]];
      const p3 = [position.data[i3 * size], position.data[i3 * size + 1], position.data[i3 * size + 2]];
      const u1 = [uv.data[i1 * 2], uv.data[i1 * 2 + 1]];
      const u2 = [uv.data[i2 * 2], uv.data[i2 * 2 + 1]];
      const u3 = [uv.data[i3 * 2], uv.data[i3 * 2 + 1]];
      const {
        tang: t,
        bitang: b
      } = getTBNTriangle(p1, p2, p3, u1, u2, u3);
      tang.set(t, i1 * 3);
      tang.set(t, i2 * 3);
      tang.set(t, i3 * 3);
      bitang.set(b, i1 * 3);
      bitang.set(b, i2 * 3);
      bitang.set(b, i3 * 3);
    }

    geometry.addAttribute('tang', {
      data: tang,
      size: 3
    });
    geometry.addAttribute('bitang', {
      data: bitang,
      size: 3
    });
    return geometry;
  }

  constructor(gl, model, preserveBuffers = true) {
    const {
      position,
      uv,
      normal,
      index
    } = model,
          others = _objectWithoutProperties(model, ["position", "uv", "normal", "index"]);

    const attributes = {};
    if (position) attributes.position = parseData(position);
    if (uv) attributes.uv = parseData(uv, 2);

    if (normal) {
      attributes.normal = parseData(normal);
    }

    if (index) {
      let data = index.data || index;
      if (Array.isArray(data)) data = new Uint16Array(data);
      attributes.index = {
        data
      };
    }

    if (others) {
      let positionCount;
      const position = attributes.position;

      if (position) {
        positionCount = position.data.length / position.size;
      }

      Object.entries(others).forEach(([key, value]) => {
        let size = 3;

        if (!value.size) {
          const length = value.data ? value.data.length : value.length;
          if (length && positionCount) size = length / positionCount;
        }

        attributes[key] = parseData(value, size);
      });
    }

    super(gl, attributes); // prevent remove geometry before setGeometry

    this.preserveBuffers = preserveBuffers;
  }

}