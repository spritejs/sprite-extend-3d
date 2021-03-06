export default `
precision highp float;
precision highp int;

varying vec3 vNormal;
varying vec4 vColor;

uniform sampler2D tShadow;
uniform float uShadow;
uniform mat4 viewMatrix;

varying vec4 vLightNDC;
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
    vec3 dir = -invDirectional.xyz;
    vec3 halfLE = normalize(dir + eye);
    float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);
    float _dl = max(dot(normal, normalize(dir)), 0.0);
    dl += directionalLightColor[j].a * (_dl * directionalLightColor[j].rgb + specular);
  }

  // 多个点光源
  vec3 pl = vec3(0);
  for(int i = 0; i < PL_NUMBER; i++) {
    if(pointLightColor[i].a <= 0.0) continue;
    vec3 invPoint = (viewMatrix * vec4(pointLightPosition[i], 1.0)).xyz - pos;
    vec3 halfLE = normalize(invPoint + eye);
    float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);

    float cos = max(dot(normalize(invPoint), normal), 0.0);
    float dis = length(invPoint);
    float decay = min(1.0, 1.0 / (pointLightDecay[i].x * pow(dis, 2.0) + pointLightDecay[i].y * dis + pointLightDecay[i].z));
    
    pl += pointLightColor[i].a * cos * decay * (pointLightColor[i].rgb + specular);
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
    float dis = length(invPoint);
    float decay = min(1.0, 1.0 / (spotLightDecay[i].x * pow(dis, 2.0) + spotLightDecay[i].y * dis + spotLightDecay[i].z));
    decay *= r;
    
    sl += spotLightColor[i].a * cos * decay * (spotLightColor[i].rgb + specular);
  }

  return dl + pl + sl;
}

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

  vec3 ambient = ambientColor.rgb * ambientColor.a;// 计算环境光反射颜色

  vec3 eyeDirection = normalize(vCameraPos - vPos.xyz);
  vec3 diffuse = getDiffuse(vPos.xyz, vNormal, eyeDirection);

  color = vec4((diffuse + ambient) * color.rgb, color.a);

  gl_FragColor.rgb = color.rgb * uShadowDept;
  gl_FragColor.a = color.a;
}
`;