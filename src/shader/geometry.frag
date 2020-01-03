precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform vec4 lighting;

void main() {
  vec3 normal = normalize(vNormal);
  float l = dot(normal, normalize(lighting.xyz));
  gl_FragColor.rgb = vColor.rgb + l * lighting.w;
  gl_FragColor.a = vColor.a;
}