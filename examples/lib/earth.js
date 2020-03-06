const {shaders, Sphere} = spritejs.ext3d;
const defaultEarthFragment = `precision highp float;
  precision highp int;

  varying vec3 vNormal;
  varying vec4 vColor;

  uniform vec4 directionalLight; //平行光

  uniform sampler2D tMap;
  varying vec2 vUv;

  varying float fCos;

  uniform vec4 pointLightColor; // 点光源颜色
  uniform vec4 ambientColor; // 环境光

  uniform vec2 uResolution;

  void main() {
    vec4 color = vColor;
    vec4 texColor = texture2D(tMap, vUv);
    vec2 st = gl_FragCoord.xy / uResolution;

    vec3 light = normalize(directionalLight.xyz);
    float shading = dot(vNormal, light) * directionalLight.w;

    float alpha = texColor.a;
    color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);
    color.a = texColor.a + (1.0 - texColor.a) * color.a;

    vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色
    vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色

    color = vec4(diffuse + ambient, color.a);

    float d = distance(st, vec2(0.5));

    gl_FragColor.rgb = color.rgb + shading + 0.3 * pow((1.0 - d), 3.0);
    gl_FragColor.a = color.a;
  }    
`;

const defaultEarthVertex = shaders.GEOMETRY_WITH_TEXTURE.vertex;

export function createEarth(layer, {vertex = defaultEarthVertex, fragment = defaultEarthFragment, texture, ...attrs} = {}) {
  const program = layer.createProgram({
    fragment,
    vertex,
    // transparent: true,
    cullFace: null,
    texture,
  });

  const earth = new Sphere(program, attrs);
  layer.append(earth);

  return earth;
}