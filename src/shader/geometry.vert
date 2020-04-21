precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec4 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform mat4 viewMatrix;

varying vec3 vNormal;
varying vec4 vColor;

#define DL_NUMBER 8
#define PL_NUMBER 16
uniform vec3 directionalLight[DL_NUMBER]; //平行光 xyz - 向量位置
uniform vec4 directionalLightColor[DL_NUMBER]; // 平行光颜色, a - 强度
uniform vec3 pointLightPosition[PL_NUMBER]; //点光源位置
uniform vec4 pointLightColor[PL_NUMBER]; // 点光源颜色
uniform vec4 ambientColor; // 环境光

vec3 getDiffuse(in vec4 mv, in vec3 normal) {
  // 多个平行光
  vec3 dl = vec3(0., 0., 0.);
  for(int j = 0; j < DL_NUMBER; j++) {
    vec4 invDirectional = viewMatrix * vec4(directionalLight[j], 0.0);
    float _dl = max(dot(normal, normalize(invDirectional.xyz)), 0.0);
    dl += directionalLightColor[j].a * _dl * directionalLightColor[j].rgb;
  }

  // 多个点光源
  vec3 pl = vec3(0., 0., 0.);
  for(int i = 0; i < PL_NUMBER; i++) {
    vec3 invPoint = normalize((viewMatrix * vec4(pointLightPosition[i], 1.0)).xyz - mv.xyz);
    float cos = max(dot(invPoint, normal), 0.0);
    pl += pointLightColor[i].a * cos * pointLightColor[i].rgb;
  }

  return dl + pl;
}

void main() {
  vNormal = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);

  // ambientColor.a 是强度
  vec3 ambient = ambientColor.rgb * color.rgb * ambientColor.a;// 计算环境光反射颜色

  // 漫反射
  vec3 diffuse = getDiffuse(mv, vNormal);

  vColor = vec4(diffuse + ambient, color.a);
  gl_Position = projectionMatrix * mv;
}