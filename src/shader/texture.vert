precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;

varying vec3 vNormal;
varying vec4 vColor;
varying vec2 vUv;
varying vec4 vPos;
varying vec3 vCameraPos;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPos = modelViewMatrix * vec4(position, 1.0);
  vColor = color;
  vUv = uv;
  vCameraPos = (viewMatrix * vec4(cameraPosition, 1.0)).xyz;
  gl_Position = projectionMatrix * vPos;
}