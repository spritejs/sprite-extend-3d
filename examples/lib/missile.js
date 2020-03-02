const {Plane, Vec3, Polyline3d, shaders} = spritejs.ext3d;

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

varying vec4 vColor;
varying float fSeg;

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
    normal *= step(0.05, seg) * clamp(0.0, seg, 1.0) * pixelWidth * uThickness;
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
    float p = clamp(0.0, 1.0, uTime / uDuration) * 2.0;
    float sp = fSeg / uTotalLength;
    float ep;
    if(p < 1.0) {
      ep = 1.0 - step(p, sp);
    }
    else {
      ep = step(p - 1.0, sp);
    }
    gl_FragColor = vColor * ep;
}
`;

const spotFragment = `
precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;
varying vec2 vUv;

void main() {
  float r = 1.0 - 2.0 * distance(vUv, vec2(0.5));
  gl_FragColor.rgb = vColor.rgb;
  gl_FragColor.a = vColor.a * smoothstep(0.0, 0.6, r);
}
`;

let spotProgram = null;
let _spot = null;
let _spotEnd = null;

export function launchMissile(parent, points, {colors}) {
  const layer = parent.layer;
  if(layer) {
    const spotColors = ['rgb(245,250,113)', 'rgb(56,154,70)'];
    const spotPos = new Vec3().copy(points[0]).normalize().scale(1.025);
    const spotEndPos = new Vec3().copy(points[points.length - 1]).normalize().scale(1.025);

    if(!spotProgram) {
      spotProgram = layer.createProgram({
        transparent: true,
        vertex: shaders.GEOMETRY_WITH_TEXTURE.vertex,
        fragment: spotFragment,
      });
      _spot = new Plane(spotProgram, {
        width: 0.05,
        height: 0.05,
      });
      _spotEnd = new Plane(spotProgram, {
        width: 0.05,
        height: 0.05,
      });
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

    const curveProgram = layer.createProgram({
      transparent: true,
      vertex,
      fragment,
      uniforms: {
        uThickness: {value: 3},
        uTime: {value: 0},
        uDuration: {value: 1.0},
      },
      depthTest: true,
    });
    layer.bindTime(curveProgram);

    const p = new Polyline3d(curveProgram, {
      points,
      colors,
    });
    parent.append(p);

    setTimeout(() => {
      layer.unbindTime(curveProgram);
      p.remove();
      spot.remove();
      spotEnd.remove();
    }, 1000);
  }
}