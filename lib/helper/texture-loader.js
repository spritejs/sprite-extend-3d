import { TextureLoader as _TextureLoader } from 'ogl';
export default class TextureLoader {
  static load(layer, opts) {
    const texture = _TextureLoader.load(layer.gl, opts);

    if (texture && texture.loaded && texture.loaded.then) {
      // load loadKTX
      texture.loaded.then(() => {
        layer.forceUpdate();
      });
    } else if (texture && texture.then) {
      // load Image
      texture.then(() => {
        layer.forceUpdate();
      });
    }

    return texture;
  }

}