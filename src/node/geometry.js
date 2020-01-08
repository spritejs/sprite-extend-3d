import {registerNode} from 'spritejs';
import GeometryAttr from '../attribute/geometry';
import Mesh3d from './mesh3d';

function colorAttribute(node, geometry) {
  const positions = geometry.attributes.position.data;
  const len = positions.length / 3;
  const color = new Float32Array(4 * len);
  const colors = node.attributes.colors;
  const colorLen = colors.length / 4;
  const colorDivisor = node.attributes.colorDivisor;

  for(let i = 0; i < len; i++) {
    // const color = colors
    const idx = Math.floor(i / colorDivisor) % colorLen;
    color[4 * i] = colors[idx * 4];
    color[4 * i + 1] = colors[idx * 4 + 1];
    color[4 * i + 2] = colors[idx * 4 + 2];
    color[4 * i + 3] = colors[idx * 4 + 3];
  }
  return {size: 4, data: color};
}

export default class Geometry extends Mesh3d {
  static Attr = GeometryAttr;

  constructor(program, attrs = {}) {
    super(program, attrs);
    program.extraAttribute = program.extraAttribute || {};
    if(!program.extraAttribute.color) program.extraAttribute.color = colorAttribute;
  }

  /* override */
  updateMesh() {
    if(this.program) {
      // if(!this.body) {
      //   this.remesh();
      // } else if(!this.prepareMeshUpdate && this.remesh) {
      //   this.prepareMeshUpdate = Promise.resolve().then(() => {
      //     delete this.prepareMeshUpdate;
      //     this.remesh();
      //   });
      // }
      const oldMesh = this.mesh;
      this.remesh();
      const newMesh = this.mesh;
      this.dispatchEvent({type: 'updatemesh', detail: {oldMesh, newMesh}});
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