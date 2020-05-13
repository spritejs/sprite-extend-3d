import {Raycast, GPGPU, Vec2, Vec3, Vec4, Mat3, Mat4, Quat, Euler, RenderTarget as FrameBuffer} from 'ogl';
import {Scene} from 'spritejs';
import Layer3d from './node/layer3d';
import Mesh3d from './node/mesh3d';
import Skin from './node/skin';
import Sphere from './node/sphere';
import Torus from './node/torus';
import Camera from './node/camera';
import Cube from './node/cube';
import Curve from './helper/curve';
import Plane from './node/plane';
import Polyline3d from './node/polyline3d';
import Cylinder from './node/cylinder';
import Path3d from './node/path3d';
import Group3d from './node/group3d';
import RenderTarget from './node/render-target';
import Shadow from './helper/shadow';
import TextureLoader from './helper/texture-loader';
import Geometry from './helper/geometry';
import Light from './helper/light';
import * as shaders from './shader';

Scene.prototype.layer3d = function (id = 'default3d', options = {}) {
  const {displayRatio} = this.options;
  options = Object.assign({dpr: displayRatio}, this.options, options);
  options.id = id;
  const layers = this.orderedChildren;
  for(let i = 0; i < layers.length; i++) {
    if(layers[i].id === id) return layers[i];
  }

  const layer = new Layer3d(options);
  this.appendChild(layer);
  return layer;
};

export {
  Layer3d,
  Sphere,
  Torus,
  Plane,
  Polyline3d,
  Camera,
  Cube,
  Cylinder,
  Path3d,
  Mesh3d,
  Skin,
  Group3d,
  RenderTarget,
  Shadow,
  Light,
  TextureLoader,
  Geometry,
  Curve,
  shaders,
  Vec2,
  Vec3,
  Vec4,
  Mat3,
  Mat4,
  Quat,
  Euler,
  GPGPU,
  Raycast,
  FrameBuffer,
};