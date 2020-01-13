import {TextureLoader} from 'ogl';

TextureLoader.loadKTX = function (src, texture) {
  fetch(src)
    .then(res => res.arrayBuffer())
    .then(buffer => texture.parseBuffer(buffer))
    .then(() => {
      if(texture.onLoaded) texture.onLoaded();
    });
};

export default class _TextureLoader {
  static load(layer, opts) {
    const texture = TextureLoader.load(layer.gl, opts);
    texture.onLoaded = () => {
      layer.forceUpdate();
    };
    return texture;
  }
}