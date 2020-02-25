import normalFrag from './normal.frag';
import normalVert from './normal.vert';

import geometryFrag from './geometry.frag';
import geometryVert from './geometry.vert';

import textureFrag from './texture.frag';
import textureVert from './texture.vert';

import textureCubeFrag from './texture_cube.frag';
import textureCubeVert from './texture_cube.vert';

import textureShadowFrag from './texture_with_shadow.frag';
import textureShadowVert from './texture_with_shadow.vert';

import geometryTextureFrag from './geometry_with_texture.frag';
import geometryTextureVert from './geometry_with_texture.vert';

import geometryShadowFrag from './geometry_with_shadow.frag';
import geometryShadowVert from './geometry_with_shadow.vert';

import geometryTextureShadowFrag from './geometry_with_texture_and_shadow.frag';
import geometryTextureShadowVert from './geometry_with_texture_and_shadow.vert';

import polylineFrag from './polyline.frag';
import polylineVert from './polyline.vert';

export const NORMAL = {
  vertex: normalVert,
  fragment: normalFrag,
};

export const NORMAL_GEOMETRY = {
  vertex: geometryVert,
  fragment: geometryFrag,
};

export const NORMAL_TEXTURE = {
  vertex: textureVert,
  fragment: textureFrag,
};

export const TEXTURE_CUBE = {
  vertex: textureCubeVert,
  fragment: textureCubeFrag,
};

export const TEXTURE_WITH_SHADOW = {
  vertex: textureShadowVert,
  fragment: textureShadowFrag,
};

export const GEOMETRY_WITH_TEXTURE = {
  vertex: geometryTextureVert,
  fragment: geometryTextureFrag,
};

export const GEOMETRY_WITH_SHADOW = {
  vertex: geometryShadowVert,
  fragment: geometryShadowFrag,
};

export const GEOMETRY_WITH_TEXTURE_AND_SHADOW = {
  vertex: geometryTextureShadowVert,
  fragment: geometryTextureShadowFrag,
};

export const POLYLINE = {
  vertex: polylineVert,
  fragment: polylineFrag,
};