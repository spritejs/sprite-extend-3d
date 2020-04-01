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

out vec2 vUv;
out vec3 vNormal;
out vec3 vMPos;
out vec4 vColor;
out vec3 vLDir;

uniform vec3 pointLightPosition; //点光源位置

void main() {
  vUv = uv;
  vColor = color;
  vNormal = normalize(normalMatrix * normal);
  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;

  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  vLDir = dir;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}