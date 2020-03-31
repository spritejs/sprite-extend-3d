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
varying float fCos;
varying vec4 vColor;

uniform vec3 pointLightPosition; //点光源位置

void main() {
  vUv = uv;
  vColor = color;
  vNormal = normalize(normalMatrix * normal);
  vMPos = (modelMatrix * vec4(position, 1.0)).xyz;

  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值
  fCos = cos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}