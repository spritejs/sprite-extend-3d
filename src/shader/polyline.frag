precision highp float;
varying vec4 vColor;
uniform vec3 uColor;

varying vec2 vUv;
void main() {
    gl_FragColor = vColor;
}