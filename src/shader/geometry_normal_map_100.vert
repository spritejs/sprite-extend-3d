precision highp float;
precision highp int;

attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;
attribute vec4 color;

uniform mat3 normalMatrix;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;
varying vec4 vColor;
varying vec3 vLDir;

uniform vec3 pointLightPosition; //点光源位置

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;

  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  vLDir = dir;

  vColor = color;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}