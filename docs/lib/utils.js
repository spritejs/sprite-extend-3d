const {Vec3} = spritejs.ext3d;

/**
 * 将平面地图坐标转换为球面坐标
 * @param {*} u
 * @param {*} v
 * @param {*} radius
 */
export function project(u, v, radius = 1) {
  u /= 1920;
  v /= 1000;
  const pLength = Math.PI * 2;
  const tLength = Math.PI;
  const x = -radius * Math.cos(u * pLength) * Math.sin(v * tLength);
  const y = radius * Math.cos(v * tLength);
  const z = radius * Math.sin(u * pLength) * Math.sin(v * tLength);
  return new Vec3(x, y, z);
}

/**
 * 将球面坐标转换为平面地图坐标
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @param {*} radius
 */
export function unproject(x, y, z, radius = 1) {
  const pLength = Math.PI * 2;
  const tLength = Math.PI;
  const v = Math.acos(y / radius) / tLength; // const y = radius * Math.cos(v * tLength);
  let u = Math.atan2(-z, x) + Math.PI; // z / x = -1 * Math.tan(u * pLength);
  u /= pLength;
  return [u * 1920, v * 1000];
}

/**
 * 将经纬度转换为球面坐标
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} projection
 */
export function latlng_projection(projection, latitude, longitude, radius = 1) {
  const [u, v] = projection([longitude, latitude]);
  return project(u, v, radius);
}