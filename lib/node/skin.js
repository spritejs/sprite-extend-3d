function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { registerNode } from 'spritejs';
import { Skin as _Skin } from 'ogl';
import Mesh3d from './mesh3d';

const _rig = Symbol('rig');

const _animations = [];

function initAnimation(body, animationFrames) {
  const animation = body.addAnimation(animationFrames.data);
  const node = body._node;
  const elapsed = animationFrames.elapsed || 0;

  if (elapsed) {
    animation.elapsed = elapsed;
    body.update();
    node.forceUpdate();
  }

  Object.defineProperties(animationFrames, {
    animation: {
      get() {
        return animation;
      },

      enumerable: true
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

      enumerable: true
    }
  });
  return animationFrames;
}

export default class Skin extends Mesh3d {
  constructor(program, _ref = {}) {
    let {
      model
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["model"]);

    super(program, _objectSpread({
      model
    }, attrs));
    this[_animations] = [];
  }

  get bones() {
    if (this[_rig]) {
      return this[_rig].bones;
    }

    return null;
  }
  /* override */


  _createMesh({
    geometry,
    program
  }) {
    const rig = this[_rig];
    return new _Skin(program.gl, {
      rig,
      geometry,
      program
    });
  }

  addAnimation(animationData) {
    const animationFrames = {
      data: animationData
    };
    const body = this.body;

    if (body.addAnimation) {
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

    if (model !== this.geometry) {
      this.geometry.rig = rig;
    }

    this[_animations].forEach(frames => {
      if (!frames.animation) {
        initAnimation(this.body, frames);
      }
    });
  }

}
registerNode(Skin, 'skin');