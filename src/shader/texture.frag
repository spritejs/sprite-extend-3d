precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform sampler2D tMap;
varying vec2 vUv;
varying vec4 vPos;

varying vec3 vDiffuse;
uniform mat4 viewMatrix;

#define DL_NUMBER 8
#define PL_NUMBER 16
uniform vec3 directionalLight[DL_NUMBER]; //平行光 xyz - 向量位置
uniform vec4 directionalLightColor[DL_NUMBER]; // 平行光颜色, a - 强度
uniform vec3 pointLightPosition[PL_NUMBER]; //点光源位置
uniform vec4 pointLightColor[PL_NUMBER]; // 点光源颜色
uniform vec3 pointLightDecay; // 点光源衰减系数
uniform vec4 ambientColor; // 环境光

vec3 getDiffuse(in vec4 mv, in vec3 normal) {
  // 多个平行光
  vec3 dl = vec3(0., 0., 0.);
  for(int j = 0; j < DL_NUMBER; j++) {
    vec4 invDirectional = viewMatrix * vec4(directionalLight[j], 0.0);
    float _dl = max(dot(normal, normalize(invDirectional.xyz)), 0.0);
    dl += directionalLightColor[j].a * _dl * directionalLightColor[j].rgb;
  }

  // 多个点光源
  vec3 pl = vec3(0., 0., 0.);
  for(int i = 0; i < PL_NUMBER; i++) {
    vec3 invPoint = (viewMatrix * vec4(pointLightPosition[i], 1.0)).xyz - mv.xyz;
    float cos = max(dot(normalize(invPoint), normal), 0.0);
    float dis = length(invPoint);
    float decay = (1.0 / (pointLightDecay.x * pow(dis, 2.0) + pointLightDecay.y * dis + pointLightDecay.z));
    
    pl += pointLightColor[i].a * cos * decay * pointLightColor[i].rgb;
  }

  return dl + pl;
}

void main() {
  vec4 color = vColor;
  vec4 texColor = texture2D(tMap, vUv);

  float alpha = texColor.a;
  color.rgb = mix(color.rgb, texColor.rgb, alpha);
  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
  color.a = texColor.a + (1.0 - texColor.a) * color.a;

  vec3 diffuse = getDiffuse(vPos, vNormal);

  vec3 ambient = ambientColor.rgb * ambientColor.a;// 计算环境光反射颜色
  gl_FragColor = vec4((diffuse + ambient) * color.rgb, color.a);
}