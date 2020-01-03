import {Scene} from 'spritejs';
import Layer3D from './node/layer3d';
import Mesh3d from './node/mesh3d';
import Sphere from './node/sphere';
import Cube from './node/cube';
import Plane from './node/plane';
import Cylinder from './node/cylinder';
import * as shaders from './shader';

Scene.prototype.layer3d = function (id, options) {
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
  Cube,
  Cylinder,
  Mesh3d,
  shaders,
};