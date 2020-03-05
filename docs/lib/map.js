/* globals topojson */
if(typeof OffscreenCanvas !== 'function') {
  // firefox polyfill
  window.OffscreenCanvas = function (width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.transferToImageBitmap = function () {
      const ctx = canvas.cloneNode().getContext('2d');
      ctx.translate(0, canvas.height);
      ctx.scale(1, -1);
      ctx.drawImage(canvas, 0, 0);
      return ctx.canvas;
    };
    return canvas;
  };
}

export async function loadMap() {
  const data = await (await fetch('https://s0.ssl.qhres.com/static/6a08177cb2f066a5.json')).json();
  const countries = topojson.feature(data, data.objects.countries);

  // 默认宽高 960 X 500，默认 translate 是 480 X 250
  const projection = d3.geoEquirectangular();
  projection.scale(318).translate([960, 500]);

  const canvas = new OffscreenCanvas(1920, 1000);
  const context = canvas.getContext('2d');

  return drawMap({context, countries, projection});
}

let _context,
  _countries,
  _projection,
  _bitmap;

let highlightMapContxt = null;
export function highlightMap(highlight, {bitmap = _bitmap, countries = _countries, projection = _projection} = {}) {
  if(!highlightMapContxt) {
    const canvas = new OffscreenCanvas(1920, 1000);
    highlightMapContxt = canvas.getContext('2d');
  }
  let idx = -1;
  countries.features.some((d, i) => {
    const ret = d3.geoContains(d, projection.invert(highlight));
    if(ret) idx = i;
    return ret;
  });
  if(idx > 0) {
    const path = d3.geoPath(projection).context(highlightMapContxt);
    // console.log(context.canvas);
    highlightMapContxt.clearRect(0, 0, 1920, 1000);
    highlightMapContxt.drawImage(bitmap, 0, 0);
    highlightMapContxt.save();
    highlightMapContxt.translate(0, 1000);
    highlightMapContxt.scale(1, -1);
    highlightMapContxt.fillStyle = '#fff';
    highlightMapContxt.beginPath();
    path({type: 'FeatureCollection', features: countries.features.slice(idx, idx + 1)});
    highlightMapContxt.fill();
    highlightMapContxt.restore();
    return highlightMapContxt.canvas.transferToImageBitmap();
  }
  return bitmap;
}

export function drawMap({context = _context, countries = _countries, projection = _projection} = {}) {
  _context = context;
  _countries = countries;
  _projection = projection;

  const path = d3.geoPath(projection).context(context);

  context.save();
  context.translate(0, 1000);
  context.scale(1, -1);
  context.strokeStyle = '#ccc';
  context.lineWidth = 0.25;
  context.fillStyle = '#000';
  context.beginPath();
  path(countries);
  context.fill();
  context.stroke();
  context.restore();

  _bitmap = context.canvas.transferToImageBitmap();
  return _bitmap;
}