precision highp float;
precision highp int;

varying vec3 vNormal;

void main() {
    gl_FragColor.rgb = normalize(vNormal);
    gl_FragColor.a = 1.0;
}