const fs = require('fs');
const OBJ = require('webgl-obj-loader');

const meshPath = './data.obj';
const opt = {encoding: 'utf8'};

fs.readFile(meshPath, opt, (err, data) => {
  if(err) return console.error(err);
  const mesh = new OBJ.Mesh(data);
  // console.log(JSON.stringify(mesh));
  // console.log(Object.keys(mesh));
  const geometry = {
    position: mesh.vertices,
    index: mesh.indices,
    normal: mesh.vertexNormals,
    uv: mesh.textures,
  };
  let min = Infinity;
  let max = -Infinity;
  for(let i = 0; i < geometry.position.length; i++) {
    const n = geometry.position[i];
    if(n < min) min = n;
    if(n > max) max = n;
  }
  const bound = Math.max(Math.abs(min), Math.abs(max)) / 3.0;
  for(let i = 0; i < geometry.position.length; i++) {
    geometry.position[i] /= bound;
  }
  fs.writeFileSync('./girl.json', JSON.stringify(geometry));
});