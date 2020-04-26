const {shaders, Sphere} = spritejs.ext3d;
const defaultEarthFragment = `precision highp float;
  precision highp int;

  varying vec3 vNormal;
  varying vec4 vColor;

  uniform sampler2D tMap;
  varying vec2 vUv;
  varying vec4 vPos;
  varying vec3 vCameraPos;

  uniform mat4 viewMatrix;
  uniform vec2 uResolution;

  #define DL_NUMBER 8
  #define PL_NUMBER 16
  uniform vec3 directionalLight[DL_NUMBER]; //平行光 xyz - 向量位置
  uniform vec4 directionalLightColor[DL_NUMBER]; // 平行光颜色, a - 强度
  uniform vec3 pointLightPosition[PL_NUMBER]; //点光源位置
  uniform vec4 pointLightColor[PL_NUMBER]; // 点光源颜色
  uniform vec3 pointLightDecay; // 点光源衰减系数
  uniform vec4 ambientColor; // 环境光
  uniform float specularFocus; // 镜面反射聚焦度
  uniform float specularIntensity; // 镜面反射强度
  
  vec3 getDiffuse(in vec3 pos, in vec3 normal, in vec3 eye) {
    // 多个平行光
    vec3 dl = vec3(0., 0., 0.);
    for(int j = 0; j < DL_NUMBER; j++) {
      vec4 invDirectional = viewMatrix * vec4(directionalLight[j], 0.0);
      vec3 halfLE = normalize(invDirectional.xyz + eye);
      float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);
      float _dl = max(dot(normal, normalize(invDirectional.xyz)), 0.0);
      dl += directionalLightColor[j].a * (_dl * directionalLightColor[j].rgb + specular);
    }
  
    // 多个点光源
    vec3 pl = vec3(0., 0., 0.);
    for(int i = 0; i < PL_NUMBER; i++) {
      vec3 invPoint = (viewMatrix * vec4(pointLightPosition[i], 1.0)).xyz - pos;
      vec3 halfLE = normalize(invPoint + eye);
      float specular = specularIntensity * pow(clamp(dot(normal, halfLE), 0.0, 1.0), 100.0 * specularFocus);
  
      float cos = max(dot(normalize(invPoint), normal), 0.0);
      float dis = length(invPoint);
      float decay = (1.0 / (pointLightDecay.x * pow(dis, 2.0) + pointLightDecay.y * dis + pointLightDecay.z));
      
      pl += pointLightColor[i].a * cos * (decay * pointLightColor[i].rgb + specular);
    }
  
    return dl + pl;
  }

  void main() {
    vec4 color = vColor;
    vec4 texColor = texture2D(tMap, vUv);

    float alpha = texColor.a;
    color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);
    color.a = texColor.a + (1.0 - texColor.a) * color.a;

    vec3 eyeDirection = normalize(vCameraPos - vPos.xyz);
    vec3 diffuse = getDiffuse(vPos.xyz, vNormal, eyeDirection);

    vec2 st = gl_FragCoord.xy / uResolution;
    float d = distance(st, vec2(0.5));

    gl_FragColor.rgb = color.rgb + 0.3 * pow((1.0 - d), 3.0);
    gl_FragColor.a = color.a;
  }  
`;

const defaultEarthVertex = shaders.GEOMETRY_WITH_TEXTURE.vertex;

const defaultAttrs = {
  radius: 1,
  colors: '#333',
  rotateX: -30,
  rotateY: 210,
  widthSegments: 64,
  heightSegments: 32,
};

export function createEarth(layer, {vertex = defaultEarthVertex, fragment = defaultEarthFragment, texture, ...attrs} = {}) {
  const program = layer.createProgram({
    fragment,
    vertex,
    // transparent: true,
    cullFace: null,
    texture,
  });

  attrs = Object.assign({}, defaultAttrs, attrs);

  const earth = new Sphere(program, attrs);
  layer.append(earth);

  return earth;
}