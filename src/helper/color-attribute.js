export function colorAttribute(node, geometry) {
  const updateColor = geometry.attributes.color;

  const positions = geometry.attributes.position.data;
  const size = geometry.attributes.position.size || 3;
  const len = positions.length / size;

  const color = updateColor ? updateColor.data : new Float32Array(4 * len);
  const colors = node.attributes.colors;
  const colorLen = colors.length / 4;
  const colorDivisor = node.attributes.colorDivisor;

  for(let i = 0; i < len; i++) {
    // const color = colors
    const idx = Math.floor(i / colorDivisor) % colorLen;
    color[4 * i] = colors[idx * 4];
    color[4 * i + 1] = colors[idx * 4 + 1];
    color[4 * i + 2] = colors[idx * 4 + 2];
    color[4 * i + 3] = colors[idx * 4 + 3];
  }

  if(updateColor) updateColor.needsUpdate = true;

  return {size: 4, data: color};
}