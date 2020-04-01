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
import dashlineFrag from './dashline.frag';
import dashlineVert from './dashline.vert';
import textureNormalMapFrag100 from './texture_normal_map_100.frag';
import textureNormalMapVert100 from './texture_normal_map_100.vert';
import textureNormalMapFrag300 from './texture_normal_map_300.frag';
import textureNormalMapVert300 from './texture_normal_map_300.vert';
import geometryNormalMapFrag100 from './geometry_normal_map_100.frag';
import geometryNormalMapVert100 from './geometry_normal_map_100.vert';
import geometryNormalMapFrag300 from './geometry_normal_map_300.frag';
import geometryNormalMapVert300 from './geometry_normal_map_300.vert';
export const NORMAL = {
  vertex: normalVert,
  fragment: normalFrag
};
export const NORMAL_GEOMETRY = {
  vertex: geometryVert,
  fragment: geometryFrag
};
export const NORMAL_TEXTURE = {
  vertex: textureVert,
  fragment: textureFrag
};
export const TEXTURE_CUBE = {
  vertex: textureCubeVert,
  fragment: textureCubeFrag
};
export const TEXTURE_WITH_SHADOW = {
  vertex: textureShadowVert,
  fragment: textureShadowFrag
};
export const GEOMETRY_WITH_TEXTURE = {
  vertex: geometryTextureVert,
  fragment: geometryTextureFrag
};
export const GEOMETRY_WITH_SHADOW = {
  vertex: geometryShadowVert,
  fragment: geometryShadowFrag
};
export const GEOMETRY_WITH_TEXTURE_AND_SHADOW = {
  vertex: geometryTextureShadowVert,
  fragment: geometryTextureShadowFrag
};
export const POLYLINE = {
  vertex: polylineVert,
  fragment: polylineFrag
};
export const DASHLINE = {
  vertex: dashlineVert,
  fragment: dashlineFrag
};
export const TEXTURE_NORMAL_MAP_100 = {
  vertex: textureNormalMapVert100,
  fragment: textureNormalMapFrag100
};
export const TEXTURE_NORMAL_MAP_300 = {
  vertex: textureNormalMapVert300,
  fragment: textureNormalMapFrag300
};
export function getTextureNormalMap(layer) {
  const isWebgl2 = layer.renderer.isWebgl2;

  if (isWebgl2) {
    return TEXTURE_NORMAL_MAP_300;
  }

  return TEXTURE_NORMAL_MAP_100;
}
export const GEOMETRY_NORMAL_MAP_100 = {
  vertex: geometryNormalMapVert100,
  fragment: geometryNormalMapFrag100
};
export const GEOMETRY_NORMAL_MAP_300 = {
  vertex: geometryNormalMapVert300,
  fragment: geometryNormalMapFrag300
};
export function getGeometryNormalMap(layer) {
  const isWebgl2 = layer.renderer.isWebgl2;

  if (isWebgl2) {
    return GEOMETRY_NORMAL_MAP_300;
  }

  return GEOMETRY_NORMAL_MAP_100;
}