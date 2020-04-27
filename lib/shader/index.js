import normalFrag from './normal.frag';
import normalVert from './normal.vert';
import baseGeometryFrag from './base_geometry.frag';
import baseGeometryVert from './base_geometry.vert';
import geometryFrag from './geometry.frag';
import geometryVert from './geometry.vert';
import textureFrag from './texture.frag';
import textureVert from './texture.vert';
import textureCubeFrag from './texture_cube.frag';
import textureCubeVert from './texture_cube.vert';
import textureShadowFrag from './texture_with_shadow.frag';
import textureShadowVert from './texture_with_shadow.vert';
import geometryShadowFrag from './geometry_with_shadow.frag';
import geometryShadowVert from './geometry_with_shadow.vert';
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
export const BASE_GEOMETRY = {
  vertex: baseGeometryVert,
  fragment: baseGeometryFrag
};
export const GEOMETRY = {
  vertex: geometryVert,
  fragment: geometryFrag
};
export const NORMAL_GEOMETRY = GEOMETRY;
export const TEXTURE = {
  vertex: textureVert,
  fragment: textureFrag
};
export const NORMAL_TEXTURE = TEXTURE;
export const GEOMETRY_WITH_TEXTURE = TEXTURE;
export const TEXTURE_CUBE = {
  vertex: textureCubeVert,
  fragment: textureCubeFrag
};
export const TEXTURE_WITH_SHADOW = {
  vertex: textureShadowVert,
  fragment: textureShadowFrag
};
export const GEOMETRY_WITH_SHADOW = {
  vertex: geometryShadowVert,
  fragment: geometryShadowFrag
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
export const TEXTURE_NORMAL_MAP_WITH_BUMP_100 = {
  vertex: textureNormalMapVert100,
  fragment: textureNormalMapFrag100.replace(/(#ifdef FLAG_BUMP)/, '#define FLAG_BUMP\n$1')
};
export const TEXTURE_NORMAL_MAP_300 = {
  vertex: textureNormalMapVert300,
  fragment: textureNormalMapFrag300
};
export const TEXTURE_NORMAL_MAP_WITH_BUMP_300 = {
  vertex: textureNormalMapVert300,
  fragment: textureNormalMapFrag300.replace(/(#ifdef FLAG_BUMP)/, '#define FLAG_BUMP\n$1')
};
export function getTextureNormalMap(layer, bump = false) {
  const isWebgl2 = layer.renderer.isWebgl2;

  if (isWebgl2) {
    return bump ? TEXTURE_NORMAL_MAP_WITH_BUMP_300 : TEXTURE_NORMAL_MAP_300;
  }

  return bump ? TEXTURE_NORMAL_MAP_WITH_BUMP_100 : TEXTURE_NORMAL_MAP_100;
}
export const GEOMETRY_NORMAL_MAP_100 = {
  vertex: geometryNormalMapVert100,
  fragment: geometryNormalMapFrag100
};
export const GEOMETRY_NORMAL_MAP_WITH_BUMP_100 = {
  vertex: geometryNormalMapVert100,
  fragment: geometryNormalMapFrag100.replace(/(#ifdef FLAG_BUMP)/, '#define FLAG_BUMP\n$1')
};
export const GEOMETRY_NORMAL_MAP_300 = {
  vertex: geometryNormalMapVert300,
  fragment: geometryNormalMapFrag300
};
export const GEOMETRY_NORMAL_MAP_WITH_BUMP_300 = {
  vertex: geometryNormalMapVert300,
  fragment: geometryNormalMapFrag300.replace(/(#ifdef FLAG_BUMP)/, '#define FLAG_BUMP\n$1')
};
export function getGeometryNormalMap(layer, bump = false) {
  const isWebgl2 = layer.renderer.isWebgl2;

  if (isWebgl2) {
    return bump ? GEOMETRY_NORMAL_MAP_WITH_BUMP_300 : GEOMETRY_NORMAL_MAP_300;
  }

  return bump ? GEOMETRY_NORMAL_MAP_WITH_BUMP_100 : GEOMETRY_NORMAL_MAP_100;
}