#version 300 es
precision highp float;
precision highp int;

in vec3 position;
in vec2 uv;
in vec3 normal;
in vec4 color;

uniform mat3 normalMatrix;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

out vec2 vUv;
out vec3 vNormal;
out vec3 vMPos;
out vec4 vColor;
out vec3 vPos;
out vec3 vCameraPos;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;
  vColor = color;
  vPos = position;
  vCameraPos = (modelViewMatrix * vec4(cameraPosition, 1.0)).xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}