import {Geometry, GPGPU, Vec2, Vec3, Vec4, Mat3, Mat4, Quat, Euler} from 'ogl';
import {Scene} from 'spritejs';
import Layer3D from './node/layer3d';
import Mesh3d from './node/mesh3d';
import Sphere from './node/sphere';
import Camera from './node/camera';
import Cube from './node/cube';
import Plane from './node/plane';
import Cylinder from './node/cylinder';
import Group3d from './node/group3d';
import RenderTarget from './node/render-target';
import Shadow from './helper/shadow';
import TextureLoader from './helper/texture-loader';
import * as shaders from './shader';

Scene.prototype.layer3d = function (id = 'default3d', options = {}) {
  const {displayRatio} = this.options;
  options = Object.assign({dpr: displayRatio}, this.options, options);
  options.id = id;
  const layers = this.orderedChildren;
  for(let i = 0; i < layers.length; i++) {
    if(layers[i].id === id) return layers[i];
  }

  const layer = new Layer3D(options);
  this.appendChild(layer);
  return layer;
};

export {
  Layer3D,
  Sphere,
  Plane,
  Camera,
  Cube,
  Cylinder,
  Mesh3d,
  Group3d,
  RenderTarget,
  Shadow,
  TextureLoader,
  shaders,
  Vec2,
  Vec3,
  Vec4,
  Mat3,
  Mat4,
  Quat,
  Euler,
  Geometry,
  GPGPU,
};