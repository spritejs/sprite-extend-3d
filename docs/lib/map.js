/* globals topojson */
export async function loadMap() {
  const data = await (await fetch('https://s0.ssl.qhres.com/static/6a08177cb2f066a5.json')).json();
  const countries = topojson.feature(data, data.objects.countries);

  // 默认宽高 960 X 500，默认 translate 是 480 X 250
  const projection = d3.geoEquirectangular();
  projection.scale(318).translate([960, 500]);

  const canvas = new OffscreenCanvas(1920, 1000);
  const context = canvas.getContext('2d');
  const path = d3.geoPath(projection).context(context);

  context.translate(0, 1000);
  context.scale(1, -1);
  context.strokeStyle = '#fff';
  context.lineWidth = 0.25;
  context.fillStyle = '#000';
  context.beginPath();
  path(countries);
  context.fill();
  context.stroke();

  return canvas.transferToImageBitmap();
}