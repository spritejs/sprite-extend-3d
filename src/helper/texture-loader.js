import {TextureLoader} from 'ogl';

export default class _TextureLoader {
  static load(layer, opts) {
    const texture = TextureLoader.load(layer.gl, opts);
    const onUpdate = texture.onUpdate;
    texture.onUpdate = () => {
      layer.forceUpdate();
      if(onUpdate) onUpdate.call(texture);
    };
    return texture;
  }
}