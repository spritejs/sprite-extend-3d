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

uniform mat4 viewMatrix;
uniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度

varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vColor;

varying float fCos;
varying float fShading;
varying vec4 vLightNDC;

uniform vec3 pointLightPosition; //点光源位置

uniform mat4 shadowViewMatrix;
uniform mat4 shadowProjectionMatrix;

// Matrix to shift range from -1->1 to 0->1
const mat4 depthScaleMatrix = mat4(
    0.5, 0, 0, 0, 
    0, 0.5, 0, 0, 
    0, 0, 0.5, 0, 
    0.5, 0.5, 0.5, 1
);

void main() {
  vNormal = normalize(normalMatrix * normal);

  vec4 invLight = viewMatrix * vec4(directionalLight.xyz, 0.0);
  float light = dot(vNormal, normalize(invLight.xyz));
  fShading = light * directionalLight.w;

  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // 计算点光源入射光线反方向并归一化
  vec3 invDir = normalize((viewMatrix * vec4(pointLightPosition, 1.0)).xyz - mv.xyz);
  fCos = max(dot(invDir, vNormal), 0.0);// 计算入射角余弦值

  vUv = uv;
  vColor = color;

  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}