#extension GL_OES_standard_derivatives : enable

precision highp float;
precision highp int;

uniform mat4 viewMatrix;

uniform sampler2D tNormal;
uniform float uNormalScale;
uniform float uNormalUVScale;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;

uniform vec4 directionalLight; //平行光
uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光

varying float fCos;
varying vec4 vColor;

vec3 getNormal() {
  vec3 pos_dx = dFdx(vMPos.xyz);
  vec3 pos_dy = dFdy(vMPos.xyz);
  vec2 tex_dx = dFdx(vUv);
  vec2 tex_dy = dFdy(vUv);

  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);
  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);
  mat3 tbn = mat3(t, b, normalize(vNormal));

  vec3 n = texture2D(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;
  n.xy *= uNormalScale;
  vec3 normal = normalize(tbn * n);

  // Get world normal from view normal
  return normalize((vec4(normal, 0.0) * viewMatrix).xyz);
}

void main() {
  vec4 color = vColor;

  vec3 normal = getNormal();
  
  vec3 light = normalize(directionalLight.xyz);
  float shading = dot(normal, light) * directionalLight.w;
  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色
  color = vec4(diffuse + ambient, color.a);
  
  gl_FragColor.rgb = color.rgb + shading;
  gl_FragColor.a = color.a;
}