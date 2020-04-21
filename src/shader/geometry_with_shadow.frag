precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform sampler2D tShadow;
uniform float uShadow;

varying vec4 vLightNDC;
varying vec3 vDiffuse;

uniform vec4 ambientColor; // 环境光

float unpackRGBA (vec4 v) {
    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));
}

void main() {
  vec4 color = vColor;

  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;
  
  float bias = 0.001;
  float depth = lightPos.z - bias;
  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));

  // Compare actual depth from light to the occluded depth rendered in the depth map
  // If the occluded depth is smaller, we must be in uShadow
  float uShadowDept = mix(uShadow, 1.0, step(depth, occluder));

  vec3 ambient = ambientColor.rgb * color.rgb * ambientColor.a;// 计算环境光反射颜色

  color = vec4(vDiffuse + ambient, color.a);

  gl_FragColor.rgb = color.rgb * uShadowDept;
  gl_FragColor.a = color.a;
}