const {Cylinder, Vec3, Polyline3d, shaders} = spritejs.ext3d;

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

let spotProgram = null;
let _spot = null;
let _spotEnd = null;

export function launchMissile(parent, points, {colors}) {
  const layer = parent.layer;
  if(layer) {
    const spotColors = ['rgba(245,250,113,0.5) rgba(255,255,255,0.5)', 'rgba(56,154,70,0.5) rgba(255,255,255,0.5)'];
    const spotPos = new Vec3().copy(points[0]).normalize().scale(1.015);
    const spotEndPos = new Vec3().copy(points[points.length - 1]).normalize().scale(1.015);

    if(!spotProgram) {
      spotProgram = layer.createProgram({
        transparent: true,
        ...shaders.NORMAL_GEOMETRY,
      });
      _spot = new Cylinder(spotProgram, {
        radiusTop: 0.01,
        radiusBottom: 0.03,
        height: 0.05,
        raycast: 'none',
      });
      _spot.transpos();
      _spotEnd = new Cylinder(spotProgram, {
        radiusTop: 0.01,
        radiusBottom: 0.03,
        height: 0.05,
        raycast: 'none',
      });
      _spotEnd.transpos();
    }

    const spot = _spot.cloneNode();
    spot.attr({
      colors: spotColors[0],
      pos: spotPos,
    });

    const spotEnd = _spotEnd.cloneNode();
    spotEnd.attr({
      colors: spotColors[1],
      pos: spotEndPos,
    });

    const sp = new Vec3().copy(spotPos).scale(2);
    spot.lookAt(sp);
    const sp2 = new Vec3().copy(spotEndPos).scale(2);
    spotEnd.lookAt(sp2);
    parent.append(spot, spotEnd);

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

    setTimeout(() => {
      layer.unbindTime(curveProgram);
      p.remove();
      spot.remove();
      spotEnd.remove();
    }, duration * 1000 + 200);
  }
}