import {registerNode} from 'spritejs';
import {Skin as _Skin} from 'ogl';
import Mesh3d from './mesh3d';

const _rig = Symbol('rig');
const _animations = [];

function initAnimation(body, animationFrames) {
  const animation = body.addAnimation(animationFrames.data);
  const node = body._node;
  const elapsed = animationFrames.elapsed || 0;
  if(elapsed) {
    animation.elapsed = elapsed;
    body.update();
    node.forceUpdate();
  }
  Object.defineProperties(animationFrames, {
    animation: {
      get() {
        return animation;
      },
      enumerable: true,
    },
    elapsed: {
      get() {
        return animation.elapsed;
      },
      set(value) {
        animation.elapsed = value;
        body.update();
        node.forceUpdate();
      },
      enumerable: true,
    },
  });
  return animationFrames;
}

export default class Skin extends Mesh3d {
  constructor(program, {model, ...attrs} = {}) {
    super(program, {model, ...attrs});
    this[_animations] = [];
  }

  get bones() {
    if(this[_rig]) {
      return this[_rig].bones;
    }
    return null;
  }

  /* override */
  _createMesh({geometry, program}) {
    const rig = this[_rig];
    return new _Skin(program.gl, {rig, geometry, program});
  }

  addAnimation(animationData) {
    const animationFrames = {data: animationData};

    const body = this.body;
    if(body.addAnimation) {
      initAnimation(body, animationFrames);
    }

    this[_animations].push(animationFrames);
    return animationFrames;
  }

  /* override */
  setGeometry(model = this.model) {
    const rig = model.rig;
    this[_rig] = rig;
    delete model.rig;
    super.setGeometry(model);
    model.rig = rig;
    if(model !== this.geometry) {
      this.geometry.rig = rig;
    }
    this[_animations].forEach((frames) => {
      if(!frames.animation) {
        initAnimation(this.body, frames);
      }
    });
  }
}

registerNode(Skin, 'skin');