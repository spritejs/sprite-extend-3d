precision highp float;
precision highp int;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;
attribute vec4 color;

uniform mat3 normalMatrix;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vColor;
varying vec4 vPos;
varying vec3 vCameraPos;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vColor = color;
  vPos = modelViewMatrix * vec4(position, 1.0);
  vCameraPos = (viewMatrix * vec4(cameraPosition, 1.0)).xyz;

  gl_Position = projectionMatrix * vPos;
}