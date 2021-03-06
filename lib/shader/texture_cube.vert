export default `
precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;

uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;

varying vec3 vNormal;
varying vec3 vDir;
varying vec4 vColor;
varying vec4 vPos;
varying vec3 vCameraPos;

void main() {
  vNormal = normalize(normalMatrix * normal);
  vPos = modelViewMatrix * vec4(position, 1.0);
  vDir = normalize(position);
  vColor = color;
  vCameraPos = (viewMatrix * vec4(cameraPosition, 1.0)).xyz;
  gl_Position = projectionMatrix * vPos;
}
`;