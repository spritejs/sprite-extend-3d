precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform mat4 viewMatrix;
uniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度

varying vec3 vNormal;
varying vec4 vColor;

uniform vec3 pointLightPosition; //点光源位置
uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光

void main() {
  vNormal = normalize(normalMatrix * normal);

  vec4 invLight = viewMatrix * vec4(directionalLight.xyz, 0.0);
  float light = dot(vNormal, normalize(invLight.xyz));
  float shading = light * directionalLight.w;

  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // 计算点光源入射光线反方向并归一化
  vec3 invDir = normalize((viewMatrix * vec4(pointLightPosition, 1.0)).xyz - mv.xyz);
  float cos = max(dot(invDir, vNormal), 0.0);// 计算入射角余弦值

  // vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化
  // float cos = max(dot(dir, vNormal), 0.0);

  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色

  vColor = vec4(diffuse + ambient, color.a) + shading;

  gl_Position = projectionMatrix * mv;
}