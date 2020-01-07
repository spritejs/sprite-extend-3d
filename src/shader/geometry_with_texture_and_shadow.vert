precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;
attribute vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform mat4 shadowViewMatrix;
uniform mat4 shadowProjectionMatrix;

varying vec3 vNormal;
varying vec4 vColor;
varying vec2 vUv;

varying vec4 vLightNDC;

varying float fCos;

uniform vec3 pointLightPosition; //点光源位置

// Matrix to shift range from -1->1 to 0->1
const mat4 depthScaleMatrix = mat4(
    0.5, 0, 0, 0, 
    0, 0.5, 0, 0, 
    0, 0, 0.5, 0, 
    0.5, 0.5, 0.5, 1
);

void main() {
  vNormal = normalize(normalMatrix * normal);

  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值

  fCos = cos;

  vColor = color;

  vUv = uv;
  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}