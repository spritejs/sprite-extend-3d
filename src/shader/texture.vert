precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vColor;

varying float fCos;

uniform vec3 pointLightPosition; //点光源位置

void main() {
  vNormal = normalize(normalMatrix * normal);

  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值
  
  fCos = cos;

  vUv = uv;
  vColor = color;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}