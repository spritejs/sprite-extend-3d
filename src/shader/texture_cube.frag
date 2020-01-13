precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec3 vDir;

uniform vec4 directionalLight; //平行光

uniform samplerCube tMap;

varying float fCos;

uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光

void main() {
  vec4 color = textureCube(tMap, vDir);

  vec3 light = normalize(directionalLight.xyz);
  float shading = dot(vNormal, light) * directionalLight.w;

  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色

  color = vec4(diffuse + ambient, color.a);

  gl_FragColor.rgb = color.rgb + shading;
  gl_FragColor.a = color.a;
}