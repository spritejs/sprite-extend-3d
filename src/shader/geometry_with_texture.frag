precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec4 lighting;
uniform sampler2D tMap;
varying vec2 vUv;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 tex = texture2D(tMap, vUv).rgb;

  vec3 light = normalize(lighting.xyz);
  float shading = dot(normal, light) * lighting.w;
  gl_FragColor.rgb = tex + shading;
  gl_FragColor.a = vColor.a;
}