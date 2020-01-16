import {Geometry as _Geometry} from 'ogl';

function parseData(data, size = 3) {
  let d = data.data || data;
  if(Array.isArray(d)) d = new Float32Array(d);
  const s = data.size || size;
  if(data.data) {
    data.data = d;
    data.size = s;
    return data;
  }
  return {size: s, data: d};
}

export default class Geometry extends _Geometry {
  constructor(gl, model) {
    const {position, uv, normal, index, ...others} = model;
    const attributes = {};
    if(position) attributes.position = parseData(position);
    if(uv) attributes.uv = parseData(uv, 2);
    if(normal) {
      attributes.normal = parseData(normal);
    }
    if(index) {
      let data = index.data || index;
      if(Array.isArray(data)) data = new Uint16Array(data);
      attributes.index = {data};
    }
    if(others) {
      let positionCount;
      const position = attributes.position;
      if(position) {
        positionCount = position.data.length / position.size;
      }
      Object.entries(others).forEach(([key, value]) => {
        let size = 3;
        if(!value.size) {
          const length = value.data ? value.data.length : value.length;
          if(length && positionCount) size = length / positionCount;
        }
        attributes[key] = parseData(value, size);
      });
    }
    super(gl, attributes);
  }
}