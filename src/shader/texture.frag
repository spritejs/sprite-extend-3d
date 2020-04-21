precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform sampler2D tMap;
varying vec2 vUv;

varying vec3 vDiffuse;
uniform vec4 ambientColor; // 环境光

void main() {
  vec4 color = vColor;
  vec4 texColor = texture2D(tMap, vUv);

  float alpha = texColor.a;
  color.rgb = mix(color.rgb, texColor.rgb, alpha);
  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
  color.a = texColor.a + (1.0 - texColor.a) * color.a;

  vec3 ambient = ambientColor.rgb * color.rgb * ambientColor.a;// 计算环境光反射颜色
  gl_FragColor = vec4(vDiffuse + ambient, color.a);
}