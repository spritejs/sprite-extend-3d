import {registerNode} from 'spritejs';
import {Skin as _Skin} from 'ogl';
import Mesh3d from './mesh3d';

const _rig = Symbol('rig');
const _animationFrames = [];

export default class Skin extends Mesh3d {
  constructor(program, {model, ...attrs} = {}) {
    const rig = model.rig;
    super(program, {...attrs});
    this[_rig] = rig;
    delete model.rig;
    this.setGeometry(model);
    model.rig = rig;
    if(model !== this.geometry) {
      this.geometry.rig = rig;
    }
    this[_animationFrames] = [];
  }

  get animationFrames() {
    return this[_animationFrames];
  }

  get bones() {
    return this[_rig].bones;
  }

  /* override */
  _greateMesh({geometry, program}) {
    const rig = this[_rig];
    return new _Skin(program.gl, {rig, geometry, program});
  }

  addAnimationFrames(animationData) {
    const body = this.body;
    const animation = body.addAnimation(animationData);
    const that = this;
    const animationFrames = {
      animation,
      get elapsed() {
        return animation.elapsed;
      },
      set elapsed(value) {
        animation.elapsed = value;
        body.update();
        that.forceUpdate();
      },
    };

    this[_animationFrames].push(animationFrames);
    return animationFrames;
  }
}

registerNode(Skin, 'skin');