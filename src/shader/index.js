import geometryFrag from './geometry.frag';
import geometryVert from './geometry.vert';

import textureFrag from './texture.frag';
import textureVert from './texture.vert';

import textureShadowFrag from './texture_with_shadow.frag';
import textureShadowVert from './texture_with_shadow.vert';

import geometryTextureFrag from './geometry_with_texture.frag';
import geometryTextureVert from './geometry_with_texture.vert';

import geometryShadowFrag from './geometry_with_shadow.frag';
import geometryShadowVert from './geometry_with_shadow.vert';

import geometryTextureShadowFrag from './geometry_with_texture_and_shadow.frag';
import geometryTextureShadowVert from './geometry_with_texture_and_shadow.vert';

export const BASE_GEOMETRY = {
  vertex: geometryVert,
  fragment: geometryFrag,
};

export const BASE_TEXTURE = {
  vertex: textureVert,
  fragment: textureFrag,
};

export const TEXTURE_WITH_SHADOW = {
  vertex: textureShadowVert,
  fragment: textureShadowFrag,
  uniforms: {
    shadow: {value: 0.5},
  },
};

export const GEOMETRY_WITH_TEXTURE = {
  vertex: geometryTextureVert,
  fragment: geometryTextureFrag,
};

export const GEOMETRY_WITH_SHADOW = {
  vertex: geometryShadowVert,
  fragment: geometryShadowFrag,
  uniforms: {
    shadow: {value: 0.5},
  },
};

export const GEOMETRY_WITH_TEXTURE_AND_SHADOW = {
  vertex: geometryTextureShadowVert,
  fragment: geometryTextureShadowFrag,
  uniforms: {
    shadow: {value: 0.5},
  },
};