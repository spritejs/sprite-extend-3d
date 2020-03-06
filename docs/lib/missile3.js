const {Color} = spritejs;
const {Plane, Vec3, Polyline3d, Geometry, Mesh3d, shaders} = spritejs.ext3d;

const vertex = `
precision highp float;
attribute vec3 position;
attribute vec3 next;
attribute vec3 prev;
attribute float side;
attribute vec4 color;
attribute float seg;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec2 uResolution;
uniform float uDPR;
uniform float uThickness;
uniform float uMiter;

uniform float uTotalLength;
uniform float uTime;
uniform float uDuration;

varying vec4 vColor;
varying float fSeg;

float getThickness(float sp, float sp2) {
  float p = clamp(0.0, 1.0, uTime * 3.0 / 4.0 / uDuration) * 2.0;
  float ep;
  if(p < 0.5) {
    ep = 1.0 - step(p, sp);
  }
  else if(p < 1.0) {
    ep = (1.0 - step(p, sp)) * step(p - 0.5, sp);
  }
  else {
    ep = step(p - 1.0, sp) * step(p - 0.5, sp);
  }
  return uThickness * ep;
}

vec4 getPosition() {
    mat4 mvp = projectionMatrix * modelViewMatrix;
    vec4 current = mvp * vec4(position, 1);

    vec4 nextPos = mvp * vec4(next, 1);
    vec4 prevPos = mvp * vec4(prev, 1);
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
    vec2 currentScreen = current.xy / current.w * aspect;
    vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
    vec2 prevScreen = prevPos.xy / prevPos.w * aspect;

    vec2 dir1 = normalize(currentScreen - prevScreen);
    vec2 dir2 = normalize(nextScreen - currentScreen);
    vec2 dir = normalize(dir1 + dir2);

    vec2 normal = vec2(-dir.y, dir.x);
    normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
    normal /= aspect;
    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
    float pixelWidth = current.w * pixelWidthRatio;
    float sp = (seg - distance(current.xyz, prevPos.xyz)) / uTotalLength;
    float sp2 = (seg + distance(current.xyz, nextPos.xyz)) / uTotalLength;
    normal *= pixelWidth * getThickness(sp, sp2);
    // normal *= pixelWidth * uThickness;
    current.xy -= normal * side;
    return current;
}

void main() {
    gl_Position = getPosition();
    vColor = color;
    fSeg = seg;
}
`;

const fragment = `
precision highp float;

uniform float uTotalLength;
uniform float uTime;
uniform float uDuration;

varying vec4 vColor;
varying float fSeg;

void main() {
  float p = clamp(0.0, 1.0, uTime * 3.0 / 4.0 / uDuration) * 2.0;
  float sp = fSeg / uTotalLength;
  float ep;
  float light = 0.0;
  if(p < 0.5) {
    ep = (1.0 - step(p, sp)) * smoothstep(0.0, 0.3, sp);
    light = ep * abs(sp - 0.5 * p) / 0.5 * p;
  }
  else if(p < 1.0) {
    ep = (1.0 - step(p, sp)) * smoothstep(p - 0.5, p - 0.2, sp);
    light = ep * abs(p - 0.5 - sp) / 0.5;
  }
  else {
    ep = step(p - 1.0, sp) * smoothstep(p - 0.5, p - 0.2, sp);
  }
  gl_FragColor = vColor * ep + 0.35 * light; // TODO: 亮度用 hsb 调
}
`;

const spotVertex = `
precision highp float;
precision highp int;

attribute vec4 position;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float zoff;
uniform float uTime;

varying float delay;

// corona.vertex //
void main() {
    float d = 1.0;
    delay = 1.0 - position.z;
    d *= clamp(0.0, 0.8, uTime - delay);
    float s = d + (0.1 * position.w);
    vec3 P = vec3(s * position.xy, zoff);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 1.0);
}      
`;

const spotFragment = `
precision highp float;
precision highp int;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor;

varying float delay;

void main() {
    float time = clamp(0.0, 1.0, uTime - delay);
    gl_FragColor.rgb = uColor;
    gl_FragColor.a = 1.0 - time;
}
`;

function makeSpotVerts(radis = 1.0) {
  const vertex = [];
  const n_segments = 32;
  for(let i = 0; i <= n_segments; i++) {
    const theta = Math.PI * 2 * i / n_segments;
    const x = radis * Math.cos(theta);
    const y = radis * Math.sin(theta);
    vertex.push(x, y, 1, 0, x, y, 1, 1.0);
  }
  const copied = [...vertex];
  vertex.push(...copied.map((v, i) => {
    return i % 4 === 2 ? 0.33 : v;
  }));
  vertex.push(...copied.map((v, i) => {
    return i % 4 === 2 ? 0.67 : v;
  }));
  return {data: vertex, size: 4};
}

let spotGeometry = null;

let pp = 0;
export function launchMissile(parent, points, {colors}) {
  const layer = parent.layer;

  if(layer) {
    const gl = layer.gl;
    if(!spotGeometry) {
      spotGeometry = new Geometry(gl, {
        position: makeSpotVerts(),
      });
    }

    const spotPos = new Vec3().copy(points[0]).normalize();
    const spotEndPos = new Vec3().copy(points[points.length - 1]).normalize();

    const spots = [];

    const spotProgram = layer.createProgram({
      transparent: true,
      vertex: spotVertex,
      fragment: spotFragment,
      uniforms: {
        uTime: {value: 0},
        uColor: {value: new Color('rgb(245,250,113)').slice(0, 3)},
        zoff: {value: 0},
      },
    });
    layer.bindTime(spotProgram);

    const spotEndProgram = layer.createProgram({
      transparent: true,
      vertex: spotVertex,
      fragment: spotFragment,
      uniforms: {
        uTime: {value: 0},
        uColor: {value: new Color('rgba(56,154,70,0.5)').slice(0, 3)},
        zoff: {value: 0},
      },
    });
    layer.bindTime(spotEndProgram);

    const spot = new Mesh3d(spotProgram, {model: spotGeometry, mode: 'TRIANGLE_STRIP'});
    spot.attr({
      pos: spotPos,
      scale: 0.05,
      raycast: 'none',
    });
    const sp = new Vec3().copy(spotPos).scale(2);
    spot.lookAt(sp);
    parent.append(spot);
    spots.push(spot);

    const spotEnd = new Mesh3d(spotEndProgram, {model: spotGeometry, mode: 'TRIANGLE_STRIP'});
    spotEnd.attr({
      pos: spotEndPos,
      scale: 0.05,
      raycast: 'none',
    });
    const sp2 = new Vec3().copy(spotEndPos).scale(2);
    spotEnd.lookAt(sp2);
    parent.append(spotEnd);
    spots.push(spotEnd);

    const duration = 1;

    const curveProgram = layer.createProgram({
      transparent: true,
      vertex,
      fragment,
      uniforms: {
        uThickness: {value: 4},
        uTime: {value: 0},
        uDuration: {value: duration},
      },
      depthTest: true,
    });
    layer.bindTime(curveProgram);

    const pe = new Vec3().copy(points[points.length - 1]).scale(10);
    const _points = points.map((p, i) => [p[0] - pe[0], p[1] - pe[1], p[2] - pe[2]]);
    const p = new Polyline3d(curveProgram, {
      points: _points,
      colors,
      pos: pe, // 曲线要设在结束点的位置，否则的话计算zDepth会导致透明度叠加出问题
    });
    parent.append(p);
    pp++;

    setTimeout(() => {
      layer.unbindTime(curveProgram);
      p.dispose();
      pp--;
      curveProgram.remove();
      spots.forEach((spot, i) => {
        spot.dispose();
        layer.unbindTime(spot.program);
        spot.program.remove();
      });
    }, duration * 1000 + 200);
  }
}