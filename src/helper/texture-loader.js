import {TextureLoader as _TextureLoader} from 'ogl';

_TextureLoader.loadKTX = function (src, texture) {
  fetch(src)
    .then(res => res.arrayBuffer())
    .then(buffer => texture.parseBuffer(buffer))
    .then(() => {
      if(texture.onLoaded) texture.onLoaded();
    });
};

export default class TextureLoader {
  static load(layer, opts) {
    const texture = _TextureLoader.load(layer.gl, opts);
    texture.onLoaded = () => {
      layer.forceUpdate();
    };
    return texture;
  }
}