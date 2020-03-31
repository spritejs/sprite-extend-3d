precision highp float;
precision highp int;

varying vec3 vNormal;

uniform vec4 directionalLight; //平行光

uniform sampler2D tMap;
varying vec2 vUv;

varying float fCos;
varying vec4 vColor;

uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光

void main() {
  vec4 color = vColor;
  vec4 texColor = texture2D(tMap, vUv);

  float alpha = texColor.a;
  color.rgb = mix(color.rgb, texColor.rgb, alpha);
  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
  color.a = texColor.a + (1.0 - texColor.a) * color.a;

  vec3 light = normalize(directionalLight.xyz);
  float shading = dot(vNormal, light) * directionalLight.w;

  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色

  color = vec4(diffuse + ambient, color.a);

  gl_FragColor.rgb = color.rgb + shading;
  gl_FragColor.a = color.a;
}