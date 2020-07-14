const fs = require('fs');
const path = require('path');


const sourceDir = path.resolve(__dirname, '../src/shader');
const destDir = path.resolve(__dirname, '../lib/shader');

fs.readdir(sourceDir, (err, files) => {
  files.forEach((file) => {
    if(/\.(vert|frag)/.test(file)) {
      const sourcePath = path.resolve(sourceDir, file);
      const content = fs.readFileSync(sourcePath, {encoding: 'utf-8'});
      const destPath = path.resolve(destDir, file);
      fs.writeFileSync(destPath, `export default \`
${content}
\`;`);
    }
  });
});
