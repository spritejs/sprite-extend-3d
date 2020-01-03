import {registerNode, requestAnimationFrame} from 'spritejs';
import GeometryAttr from '../attribute/geometry';
import Mesh3d from './mesh3d';

export default class Geometry extends Mesh3d {
  static Attr = GeometryAttr;

  constructor(program, attrs = {}) {
    super(program, attrs);
    this.shaderSetters = {
      color: (positions) => {
        positions = positions.data;
        const len = positions.length / 3;
        const color = new Float32Array(4 * len);
        const colors = this.attributes.colors;
        const colorLen = colors.length / 4;
        const colorDivisor = this.attributes.colorDivisor;

        for(let i = 0; i < len; i++) {
          // const color = colors
          const idx = Math.floor(i / colorDivisor) % colorLen;
          color[4 * i] = colors[idx * 4];
          color[4 * i + 1] = colors[idx * 4 + 1];
          color[4 * i + 2] = colors[idx * 4 + 2];
          color[4 * i + 3] = colors[idx * 4 + 3];
        }
        return {size: 4, data: color};
      },
    };
  }

  /* override */
  updateMesh() {
    if(!this.body) {
      this.remesh();
    } else if(!this.prepareMeshUpdate && this.remesh) {
      this.prepareMeshUpdate = new Promise((resolve) => {
        requestAnimationFrame(() => {
          delete this.prepareMeshUpdate;
          this.remesh();
          resolve();
        });
      });
    }
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'colors' || key === 'colorDivisor') {
      if(newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
}

registerNode(Geometry, 'geometry');