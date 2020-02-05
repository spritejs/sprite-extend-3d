function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { registerNode } from 'spritejs';
import { Skin as _Skin } from 'ogl';
import Mesh3d from './mesh3d';

const _rig = Symbol('rig');

const _animationFrames = [];
export default class Skin extends Mesh3d {
  constructor(program, _ref = {}) {
    let {
      model
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["model"]);

    const rig = model.rig;
    super(program, _objectSpread({}, attrs));
    this[_rig] = rig;
    delete model.rig;
    this.setGeometry(model);
    model.rig = rig;

    if (model !== this.geometry) {
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


  _greateMesh({
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
      }

    };

    this[_animationFrames].push(animationFrames);

    return animationFrames;
  }

}
registerNode(Skin, 'skin');