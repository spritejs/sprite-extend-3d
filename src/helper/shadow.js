import {Shadow as _Shadow} from 'ogl';

// https://github.com/oframe/ogl/blob/master/src/extras/Shadow.js
export default class Shadow extends _Shadow {
  async add(node, opts = {}) {
    await node.model;
    opts.mesh = node.body;
    node.addEventListener('updatemesh', (evt) => {
      const oldMesh = evt.detail.oldMesh;
      this.castMeshes = this.castMeshes.filter(mesh => mesh !== oldMesh);
      this.add(node, opts);
    });
    super.add(opts);
  }

  remove(node) {
    const mesh = node.body;
    if(mesh) {
      const idx = this.castMeshes.indexOf(mesh);
      if(idx >= 0) {
        this.castMeshes.splice(idx, 1);
        return true;
      }
    }
    return false;
  }
}