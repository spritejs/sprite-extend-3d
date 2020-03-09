function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Geometry as _Geometry } from 'ogl';

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