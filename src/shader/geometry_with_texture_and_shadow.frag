precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec4 directionalLight; //平行光

uniform sampler2D tMap;
uniform sampler2D tShadow;
uniform float uShadow;

varying vec2 vUv;
varying vec4 vLightNDC;

varying float fCos;

uniform vec4 pointLightColor; // 点光源颜色
uniform vec4 ambientColor; // 环境光

float unpackRGBA (vec4 v) {
  return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));
}

void main() {
  vec4 color = vColor;
  vec4 texColor = texture2D(tMap, vUv);

  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;
  float bias = 0.001;
  float depth = lightPos.z - bias;
  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));

  // Compare actual depth from light to the occluded depth rendered in the depth map
  // If the occluded depth is smaller, we must be in uShadow
  float uShadow = mix(uShadow, 1.0, step(depth, occluder));

  vec3 light = normalize(directionalLight.xyz);
  float shading = dot(vNormal, light) * directionalLight.w;

  float alpha = texColor.a;
  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);
  color.a = texColor.a + (1.0 - texColor.a) * color.a;

  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色
  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色

  color = vec4(diffuse + ambient, color.a);

  gl_FragColor.rgb = color.rgb * uShadow + shading;
  gl_FragColor.a = color.a;
}