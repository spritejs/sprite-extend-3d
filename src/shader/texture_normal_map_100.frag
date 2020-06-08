#extension GL_OES_standard_derivatives : enable

#ifdef FLAG_BUMP
uniform sampler2D tBump;
#endif

precision highp float;
precision highp int;

uniform mat4 viewMatrix;
uniform sampler2D tMap;

uniform sampler2D tNormal;
uniform float uNormalScale;
uniform float uNormalUVScale;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vColor;
varying vec4 vPos;
varying vec3 vCameraPos;

#define DL_NUMBER 8
#define PL_NUMBER 16
#define SP_NUMBER 16

uniform vec3 directionalLight[DL_NUMBER]; //平行光 xyz - 向量位置
uniform vec4 directionalLightColor[DL_NUMBER]; // 平行光颜色, a - 强度

uniform vec3 pointLightPosition[PL_NUMBER]; //点光源位置
uniform vec4 pointLightColor[PL_NUMBER]; // 点光源颜色
uniform vec3 pointLightDecay[PL_NUMBER]; // 点光源衰减系数

uniform vec3 spotLightPosition[SP_NUMBER];  // 聚光灯位置
uniform vec4 spotLightColor[SP_NUMBER]; // 聚光灯颜色
uniform vec3 spotLightDirection[SP_NUMBER]; // 聚光灯方向
uniform vec3 spotLightDecay[SP_NUMBER];  // 聚光灯衰减系数
uniform float spotLightAngle[SP_NUMBER];  // 聚光灯角度
uniform float spotLightBlur[SP_NUMBER]; // 聚关灯散射系数

uniform vec4 ambientColor; // 环境光
uniform float specularFocus; // 镜面反射聚焦度
uniform float specularIntensity; // 镜面反射强度

vec3 getDiffuse(in vec3 pos, in vec3 normal, in vec3 eye) {
  // 多个平行光
  vec3 dl = vec3(0);
  for(int j = 0; j < DL_NUMBER; j++) {
    if(directionalLightColor[j].a <= 0.0) continue;
    vec4 invDirectional = viewMatrix * vec4(directionalLight[j], 0.0);
    vec3 invDir = -invDirectional.xyz;
    vec3 halfLE = normalize(invDir + eye);
    float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);
    vec3 dir = normalize(invDir);
    float _dl = max(dot(normal, dir), 0.0);
    float _dln = max(dot(vNormal, dir), 0.0);
    dl += directionalLightColor[j].a * _dln * _dl * (directionalLightColor[j].rgb + specular);
  }

  // 多个点光源
  vec3 pl = vec3(0);
  for(int i = 0; i < PL_NUMBER; i++) {
    if(pointLightColor[i].a <= 0.0) continue;
    vec3 invPoint = (viewMatrix * vec4(pointLightPosition[i], 1.0)).xyz - pos;
    vec3 halfLE = normalize(invPoint + eye);
    float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);
    vec3 dir = normalize(invPoint);// 计算点光源入射光线反方向并归一化
    float cos = max(dot(dir, normal), 0.0);
    float _dln = max(dot(vNormal, dir), 0.0);
    float dis = length(invPoint);
    float decay = min(1.0, 1.0 / (pointLightDecay[i].x * pow(dis, 2.0) + pointLightDecay[i].y * dis + pointLightDecay[i].z));
    pl += pointLightColor[i].a * _dln * cos * decay * (pointLightColor[i].rgb + specular);
  }

  vec3 sl = vec3(0);

  for(int i = 0; i < SP_NUMBER; i++) {
    if(spotLightColor[i].a <= 0.0) continue;
    vec3 invPoint = (viewMatrix * vec4(spotLightPosition[i], 1.0)).xyz - pos;
    vec3 normalInv = normalize(invPoint);

    vec3 dir = (viewMatrix * vec4(spotLightDirection[i], 0.0)).xyz;
    float ang = cos(spotLightAngle[i]);
    float r = smoothstep(ang * (1.0 - spotLightBlur[i]), ang, dot(normalInv, normalize(-dir)));
    if(r <= 0.0) continue;

    vec3 halfLE = normalize(invPoint + eye);
    float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);

    float cos = max(dot(normalInv, normal), 0.0);
    float _dln = max(dot(vNormal, normalInv), 0.0);
    float dis = length(invPoint);
    float decay = min(1.0, 1.0 / (spotLightDecay[i].x * pow(dis, 2.0) + spotLightDecay[i].y * dis + spotLightDecay[i].z));
    decay *= r;
    
    sl += spotLightColor[i].a * _dln * cos * decay * (spotLightColor[i].rgb + specular);
  }

  return dl + pl + sl;
}

vec3 getNormal(float depth) {
  vec3 pos_dx = dFdx(vPos.xyz);
  vec3 pos_dy = dFdy(vPos.xyz);
  vec2 tex_dx = dFdx(vUv);
  vec2 tex_dy = dFdy(vUv);

  vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);
  vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);
  mat3 tbn = mat3(t, b, normalize(vNormal));

  vec3 n = texture2D(tNormal, vUv * uNormalUVScale).rgb * 2.0 - 1.0;
  n.xy *= depth * uNormalScale;
  vec3 normal = normalize(tbn * n);

  // Get world normal from view normal
  return normal;
  // return normalize((vec4(normal, 0.0) * viewMatrix).xyz);
}

void main() {
  vec4 color = vColor;
  vec4 texColor = texture2D(tMap, vUv);

  float alpha = texColor.a;
  color.rgb = mix(color.rgb, texColor.rgb, alpha);
  color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
  color.a = texColor.a + (1.0 - texColor.a) * color.a;

  float depth = 1.0;
#ifdef FLAG_BUMP
  depth = texture2D(tBump, vUv).x;
#endif
  vec3 normal = getNormal(depth);
  vec3 eyeDirection = normalize(vCameraPos - vPos.xyz);
  vec3 diffuse = getDiffuse(vPos.xyz, normal, eyeDirection);
  vec3 ambient = ambientColor.rgb * ambientColor.a;// 计算环境光反射颜色
  
  gl_FragColor = vec4((diffuse + ambient) * color.rgb, color.a);
}