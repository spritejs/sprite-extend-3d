import geometryFrag from './geometry.frag';
import geometryVert from './geometry.vert';

import geometryTextureFrag from './geometry_with_texture.frag';
import geometryTextureVert from './geometry_with_texture.vert';

export const BASE_GEOMETRY = {
  vertex: geometryVert,
  fragment: geometryFrag,
  uniforms: {
    lighting: {value: [0.5, 0.5, 0.5, 0.1]},
  },
};

export const GEOMETRY_WITH_TEXTURE = {
  vertex: geometryTextureVert,
  fragment: geometryTextureFrag,
  uniforms: {
    lighting: {value: [0.5, 0.5, 0.5, 0.1]},
  },
};