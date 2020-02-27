precision highp float;

uniform float uTotalLength;
uniform float uDashLength;
uniform float uDashOffset;

varying vec4 vColor;
varying vec2 vUv;
varying float fSeg;

void main() {
    float f = fract((uDashOffset + fSeg) / (2.0 * uDashLength));
    f = 1.0 - step(0.5, f);
    gl_FragColor = vColor * f;
}