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
}