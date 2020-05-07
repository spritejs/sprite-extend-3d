function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { parseColor } from './parse-color';
export default class Light {
  constructor({
    angle,
    direction,
    position,
    blur = 0,
    color = [1, 1, 1, 1],
    decay = [0, 0, 1]
  } = {}) {
    this.angle = angle;
    this.blur = blur;
    this.color = color ? parseColor(color) : undefined;
    this.decay = decay;
    this.direction = direction;
    this.position = position;

    if (this.position && this.direction && this.angle == null) {
      this.angle = Math.PI / 3;
    }
  }

  get type() {
    if (this.position && this.direction) return Light.SPOT_LIGHT;
    if (this.position) return Light.POINT_LIGHT;
    if (this.direction) return Light.DIRECTIONAL_LIGHT;
    throw new Error('unknown light');
  }

}

_defineProperty(Light, "DIRECTIONAL_LIGHT", 0);

_defineProperty(Light, "POINT_LIGHT", 1);

_defineProperty(Light, "SPOT_LIGHT", 2);