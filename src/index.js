import {Scene} from 'spritejs';
import Layer3D from './node/layer3d';
import Mesh3d from './node/mesh3d';
import Cube from './node/cube';

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
  Cube,
  Mesh3d,
};