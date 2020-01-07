precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec4 directionalLight;

uniform sampler2D tShadow;
uniform float shadow;

varying vec4 vLightNDC;

float unpackRGBA (vec4 v) {
    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));
}

void main() {
  float l = dot(vNormal, normalize(directionalLight.xyz));

  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;
  
  float bias = 0.001;
  float depth = lightPos.z - bias;
  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));

  // Compare actual depth from light to the occluded depth rendered in the depth map
  // If the occluded depth is smaller, we must be in shadow
  float shadowDept = mix(shadow, 1.0, step(depth, occluder));

  gl_FragColor.rgb = vColor.rgb * shadowDept + l * directionalLight.w;
  gl_FragColor.a = vColor.a;
}