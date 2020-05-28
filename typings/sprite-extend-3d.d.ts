import { Node, Attrs, Resolution, Event, Layer } from 'spritejs';

export = ext3d; // make it a module

declare namespace ext3d {
  class Renderer3d {
    dpr: number;
    alpha: boolean;
    color: boolean;
    depth: boolean;
    stencil: boolean;
    antialias: boolean;
    autoClear: boolean;
    isWebgl2: boolean;
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    state: Record<string, any>;
    extensions: Record<string, any>;
    vertexAttribDivisor: any;
    drawArraysInstanced: any;
    drawElementsInstanced: any;
    createVertexArray: any;
    bindVertexArray: any;
    deleteVertexArray: any;
    drawBuffers: any;
    parameters: Record<string, any>;
    width: number;
    height: number;
    setSize(width: number, height: number): void; 
    setViewport(width: number, height: number): void;
    enable(id: any): void;
    disable(id: any): void;
    setBlendFunc(src: any, dst: any, srcAlpha: any, dstAlpha: any): void;
    setBlendEquation(modeRGB: any, modeAlpha: any): void;
    setCullFace(value: any): void;
    setDepthMask(value: any): void;
    setDepthFunc(value: any): void;
    activeTexture(value: any): void;
    /**
     * bindFramebuffer({target = this.gl.FRAMEBUFFER, buffer = null} = {})
     * @param options 
     */
    bindFramebuffer(options: Record<string, any>): void;
    getExtension(extension: any, webgl2Func: any, extFunc: any): any;
    sortOpaque(a: number, b: number): number;
    sortTransparent(a: number, b: number): number;
    sortUI(a: number, b: number): number;
    /**
     * getRenderList({scene, camera, frustumCull, sort})
     * @param options 
     */
    getRenderList(options: Record<string, any>): Array<Transform>;
    /**
     *  render({
          scene,
          camera,
          target = null,
          update = true,
          sort = true,
          frustumCull = true,
          clear,
        })
     * @param options 
     */
    render(options: Record<string, any>): void;
  }

  interface Transform {
    parent: Transform;
    children: Array<Transform>;
    visible: boolean;
    matrix: Array<number>;
    worldMatrix: Array<number>;
    matrixAutoUpdate: boolean;
    position: Array<number>;
    quaternion: Array<number>;
    scale: Array<number>;
    rotation: Array<number>;
    up: Array<number>;
    setParent(parent: Transform, notifyParent: boolean): void;
    addChild(child: Transform, notifyChild: boolean): void;
    removeChild(child: Transform, notifyChild: boolean): void;
    updateMatrixWorld(force?: boolean): void;
    updateMatrix(): void;
    traverse(callback: Function): void;
    decompose(): void;
    lookAt(target: Array<number>, invert: boolean): void;
  }

  interface Mesh extends Transform {
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    id: number;
    geometry: BaseGeometry;
    program: Program;
    mode: any;
    frustumCulled: boolean;
    renderOrder: number;
    modelViewMatrix: Array<number>;
    normalMatrix: Array<number>;
    beforeRenderCallbacks: Function;
    afterRenderCallbacks: Function;
    onBeforeRender(f: Function): this;
    onAfterRender(f: Function): this;
    draw(options: Record<string, any>): void;
  }

  export class Camera extends Group3d {
    constructor(gl: WebGL2RenderingContext|WebGLRenderingContext, options?: Attrs);
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    orbit: any;
    get projectionMatrix(): Array<number>;
    get viewMatrix(): Array<number>;
    get worldPosition(): Array<number>;
    cloneNode(deep: boolean): Camera;
    frustumIntersects(node: Node3d): boolean;
    frustumIntersectsSphere(center: Array<number>, radius: number): boolean;
    lookAt(target: Array<number>): this;
    lookAt(target: Node3d): this;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    setBody(body: Transform, update: boolean): void;
    traverse(callback: (el: Node3d) => boolean|void): void;
    updateMatrix(): void;
    updateMatrixWorld(force?: boolean): void;
    project(v: Array<number>): this;
    unproject(v: Array<number>): this;
    updateFrustum(): this;
  }

  export class Cube extends Mesh3d {
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    remesh(): void;
  }

  export class Cylinder extends Mesh3d {
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    remesh(): void;
  }

  interface Program {
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    uniforms: Record<string, any>;
    id: number;
    transparent: boolean;
    cullFace: any;
    frontFace: any;
    depthTest: boolean;
    depthWrite: boolean;
    depthFunc: any;
    blendFunc: any;
    blendEquation: any;
    program: WebGLProgram;
    uniformLocations: Map<any, any>;
    attributeLocations: Map<any, any>;
    attributeOrder: string;
    setBlendFunc(src: any, dst: any, srcAlpha: any, dstAlpha: any): void;
    setBlendEquation(modeRGB: any, modeAlpha: any): void;
    applyState(): void;
    use(options?: Record<string, any>): void;
    remove(): void;
  }

  class BaseGeometry {
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    attributes: Record<string, any>;
    id: number;
    VAOs: Record<string, any>;
    drawRange: Record<string, any>;
    instancedCount: number;
    glState: any;
    preserveBuffers: any;
    addAttribute(key: string, attr: Record<string, any>): void;
    updateAttribute(attr: Record<string, any>): void;
    setIndex(value: Record<string, any>): void;
    setDrawRange(start: number, count: number): void;
    setInstancedCount(value: number): void;
    createVAO(program: Program): void;
    bindAttributes(program: Program): void;
    /**
     * draw({program, mode = this.gl.TRIANGLES,})
     * @param options 
     */
    draw(options: Record<string, any>): void;
    getPositionArray(): Array<number>|undefined;
    computeBoundingBox(array?: Array<number>): void;
    computeBoundingSphere(array?: Array<number>): void;
    remove(): void;
  }

  export class Geometry extends BaseGeometry {
    static extract(geometry: any): Geometry;
    static createTB(geometry: any): Geometry;
    constructor(gl: WebGL2RenderingContext|WebGLRenderingContext, model: any, preserveBuffers?: boolean);
    preserveBuffers: boolean;
  }

  export class FrameBuffer {
    /**
     *  constructor(gl, {
          width = gl.canvas.width,
          height = gl.canvas.height,
          target = gl.FRAMEBUFFER,
          color = 1, // number of color attachments
          depth = true,
          stencil = false,
          depthTexture = false, // note - stencil breaks
          wrapS = gl.CLAMP_TO_EDGE,
          wrapT = gl.CLAMP_TO_EDGE,
          minFilter = gl.LINEAR,
          magFilter = minFilter,
          type = gl.UNSIGNED_BYTE,
          format = gl.RGBA,
          internalFormat = format,
          unpackAlignment,
          premultiplyAlpha,
        } = {})
     * @param gl 
     * @param options 
     */
    constructor(gl: WebGL2RenderingContext|WebGLRenderingContext, options: Record<string, any>);
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    width: number;
    height: number;
    depth: boolean;
    buffer: WebGLFramebuffer;
    target: any; // gl.FRAMEBUFFER
    textures: Array<Texture>;
    texture: Texture|undefined;
  }

  interface FBO {
    read: FrameBuffer;
    write: FrameBuffer;
    swap: Function;
  }

  export class GPGPU {
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    passes: Array<Record<string, any>>;
    geometry: BaseGeometry;
    dataLength: number;
    size: number;
    coords: Float32Array;
    uniform: Record<string, any>;
    fbo: FBO;
    constructor(gl: WebGL2RenderingContext|WebGLRenderingContext, options: Record<string, any>);
    addPass(options: Record<string, any>): Record<string, any>;
    render(): void;
  }

  export class Group3d extends Node3d {
    constructor(attrs?: Attrs);
    camera?: Camera;
    get childNodes(): Array<Node3d>;
    get children(): Array<Node3d>;
    get meshes(): Array<Mesh3d>;
    append(...els: Array<Node3d>): Array<Node3d>;
    appendChild(el: Node3d): Node3d;
    cloneNode(deep?: boolean): Group3d;
    getElementById(id: string): Node3d|null;
    getElementsByClassName(className: string): Array<Node3d>;
    getElementsByName(name: string): Array<Node3d>;
    getElementsByTagName(tagName: string): Array<Node3d>;
    insertBefore(el: Node3d, ref: Node3d|null): Node3d;
    querySelector(selector: string): Node3d;
    querySelectorAll(selector: string): Array<Node3d>;
    replaceChild(el: Node3d, ref: Node3d): Node3d;
    removeAllChildren(): void;
    removeChild(el: Node3d): Node3d|null;
    setResolution(resolution: Resolution): void;
  }

  interface Texture {
    gl: WebGL2RenderingContext|WebGLRenderingContext;
    id: number;
    image: any;
    target: any;
    type: any;
    format: any;
    internalFormat: any;
    minFilter: any;
    magFilter: any;
    wrapS: any;
    wrapT: any;
    generateMipmaps: any;
    premultiplyAlpha: boolean;
    unpackAlignment: number;
    flipY: boolean;
    anisotropy: number;
    level: number;
    width: number;
    height: number;
    texture: WebGLTexture;
    store: Record<string, any>;
    glState: any;
    state: Record<string, any>;
    bind(): void;
    update(textureUnit: number): void;
  }

  type lightOptions = {
    angle?: number; 
    direction?: number;
    position?: Array<number>;
    blur?: number;
    color?: Array<number>;
    decay?: Array<number>;
  }

  export class Light {
    static DIRECTIONAL_LIGHT: number;
    static POINT_LIGHT: number;
    static SPOT_LIGHT: number;
    // constructor({angle, direction, position, blur = 0, color = [1, 1, 1, 1], decay = [0, 0, 1]} = {})
    constructor(options: lightOptions);
    get type(): number;
  }

  export class Layer3d extends Layer {
    constructor(options?: Record<string, any>);
    get body(): Transform;
    get camera(): Camera;
    get gl(): WebGL2RenderingContext|WebGLRenderingContext;
    get meshes(): Array<Mesh>;
    get post(): any;
    get renderOptions(): any;
    get root(): Group3d;
    get shadow(): Shadow|undefined;
    get sublayers(): Array<Group3d>;
    get autoClear(): boolean;
    set autoClear(value: boolean);
    get ambientColor(): Array<number>;
    set ambientColor(color: any);
    bindTarget(target: RenderTarget, options?: Record<string, any>): void;
    bindTime(program: Program, options?: Record<string, any>): void;
    /**
     * createProgram({attributes, texture, uniforms, ...options} = {}, {attributes: extraAttributes, uniforms: extraUniforms} = {})
     * @param options 
     * @param extra 
     */
    createProgram(options?: Record<string, any>, extra?: Record<string, any>): Program;
    createSublayer(camera?: Camera): Group3d;
    /**
     * createText(text, {font = '16px Helvetica,Arial,sans-serif', fillColor, strokeColor, strokeWidth = 1} = {})
     * @param text 
     * @param options 
     */
    createText(text: string, options?: Record<string, any>): Texture;
    createTexture(options: any): Texture;
    /**
     * createShadow({width = this.canvas.width, height = this.canvas.height, light = this[_camera]} = {})
     * @param param0 
     */
    createShadow(options?: Record<string, any>): Shadow;
    dispatchPointerEvent(event: Event): void;
    loadGLTF(src: string): Promise<Record<string, any>>;
    loadImage(src: string): Promise<any>;
    loadImages(imgs: Array<string>): Promise<Array<any>>;
    loadModel(src: string): any;
    /**
     * loadShader({vertex, fragment})
     * @param options 
     */
    loadShader(options: Record<string, any>): Promise<Record<string, any>>;
    removeOrbit(camera?: Camera): void;
    render(options?: Record<string, any>): void;
    /**
     * renderTarget
     * @param target 
     * @param options 
     */
    renderTarget(target: RenderTarget, options?: Record<string, any>): void;
    renderTo(target: FrameBuffer, options?: Record<string, any>): void; 
    addLight(...lights: Array<Light>): void;
    removeLight(...lights: Array<Light>): void;
    /**
     * setLights(program, {directionalLight = this[_directionalLight],
    pointLightPosition = this[_pointLightPosition],
    pointLightColor = this[_pointLightColor],
    ambientColor = this[_ambientColor]} = {})
     * @param program 
     * @param options 
     */
    setLights(program: Program, options?: Record<string, any>): void;
    updateLights(options?: Record<string, any>): void;
    /**
     * setOrbit
     * @param options {target, element}
     */
    setOrbit(options?: Record<string, any>): any;
    setRaycast(enable?: boolean): void;
    setRenderOptions(options: Record<string, any>): void;
    setResolution(resolution: Resolution): void;
    setShadow(shadow: Shadow): void;
    setUniforms(uniforms: Record<string, any>): void;
    setUniforms(program: Program, uniforms?: Record<string, any>): void;
    traverse(callback: (el: Node3d) => boolean|void): void;
    unbindTime(program: Program): boolean;
    unbindTarget(target: RenderTarget): boolean;
  }

  export class Mesh3d extends Group3d {
    static fromMesh(mesh: Mesh): Mesh3d;
    /**
     * constructor(program, {model, ...attrs} = {})
     * @param program 
     * @param options 
     */
    constructor(program: Program, attrs?: Attrs);
    get geometry(): Geometry;
    get meshes(): Array<Mesh3d>;
    get model(): any;
    get program(): Program;
    /**
     * The proxy of program.uniforms.
     */
    get uniforms(): any;
    addEventListener(type: string, listener: Function, options?: Record<string, any>): this;
    cloneNode(deep?: boolean): Mesh3d;
    dispose(): void;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    remesh(): void;
    removeAllListeners(type: string, options?: Record<string, any>): this;
    removeEventListener(type: string, listener: Function, options?: Record<string, any>): this;
    setGeometry(model?: any): void;
    setProgram(program: Program): void;
    setResolution(resolution: Resolution): void;
    updateMesh(): void;
  }

  export class Node3d extends Node {
    get body(): Transform;
    get isVisible(): boolean;
    get localMatrix(): Array<number>;
    get matrix(): Array<number>|null;
    get mesh(): Mesh3d|null;
    get meshes(): Array<Mesh3d>;
    get modelViewMatrix(): Array<number>;
    get normalMatrix(): Array<number>;
    get renderMatrix(): Array<number>;
    get worldMatrix(): Array<number>;
    get zDepth(): number;
    get up(): Array<number>;
    set up(value: Array<number>);
    connect(parent: Node, zOrder: number): void;
    disconnect(parent: Node): void;
    dispose(): void;
    lookAt(target: Array<number>, invert: boolean): void;
    lookAt(target: Node3d, invert: boolean): void;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    resyncState(forceUpdate: boolean): void;
    /**
     * rotate(deg, axis = [0, 1, 0])
     * @param deg 
     * @param axis 
     */
    rotate(deg: number, axis: Array<number>): void;
    setBody(body: Transform, update: boolean): void;
    setQuaternion(quat: any): void;
    traverse(callback: (el: Node3d) => boolean|void): void;
    updateMatrix(): void;
    updateMatrixWorld(force?: boolean): void;
  }

  export class Plane extends Mesh3d {
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    remesh(): void;
  }

  export class Raycast {
    constructor(gl: WebGL2RenderingContext|WebGLRenderingContext);
    castMouse(camera: Camera, mouse: Array<number>): void;
    intersectBounds(meshes: Array<Mesh>): Array<Mesh>;
  }

  export class RenderTarget extends Group3d {
    constructor(gl: WebGL2RenderingContext|WebGLRenderingContext, attrs: Attrs);
    options: Record<string, any>;
    camera?: Camera;
    get texture(): Texture;
    /**
     * renderBy(layer, {root = this, ...options} = {}) 
     * @param layer 
     * @param options 
     */
    renderBy(layer: Layer3d, options: Record<string, any>): Texture;
    swap(): void;
  }

  export class Shadow {
    /**
     * add(node, {
        receive = true,
        cast = true,
        vertex = defaultVertex,
        fragment = defaultFragment,
        uniformProjection = 'shadowProjectionMatrix',
        uniformView = 'shadowViewMatrix',
        uniformTexture = 'tShadow',
    })
     * @param node 
     * @param options 
     */
    add(node: Node3d, options?: Record<string, any>): Promise<undefined>;
    remove(node: Node3d): boolean;
    /**
     * render({scene})
     * @param options 
     */
    render(options: Record<string, any>): void;
  }

  export class Sphere extends Mesh3d {
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    remesh(): void;
  }

  interface AnimationFrames extends Array<any> {
    elapsed: number;
    readonly animation: any;
  }

  export class Skin extends Mesh3d {
    constructor(program: Program, attrs?: Attrs);
    get bones(): any;
    addAnimation(animationData: any): AnimationFrames;
    setGeometry(model: any): void;
  }

  class BaseTextureLoader {
    static load(gl: any, options: Record<string, any>): Texture;
    static getSupportedExtensions(gl: WebGL2RenderingContext|WebGLRenderingContext): Array<any>;
    static loadKTX(src: string, texture: Texture): Promise<any>;
    static loadImage(gl: WebGL2RenderingContext|WebGLRenderingContext, src: string, texture: Texture): Promise<any>;
  }

  export class TextureLoader extends BaseTextureLoader {
    static load(layer: Layer3d, options: Record<string, any>): Texture;
  }

  export class Curve {
    static CATMULLROM: string;
    static CUBICBEZIER: string;

    /**
     * constructor({
        points = [new Vec3(0, 0, 0),
          new Vec3(0, 1, 0),
          new Vec3(1, 1, 0),
          new Vec3(1, 0, 0),
        ],
        divisions = 12,
        type = CATMULLROM,
      } = {})
     * @param options 
     */
    constructor(options: Record<string, any>);
    getPoints(divisions: number): Array<number>;
    getPoints(divisions: number, a: number, b: number): Array<number>;
  }

  export class Polyline3d extends Mesh3d {
    constructor(program: Program, attrs?: Attrs);
    get points(): Array<number>;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    updateGeometry(): void;
    remesh(): void;
  }

  export class Path3d extends Mesh3d {
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    remesh(): void;
    fromPoints(points: Array<any>): void;
  }

  namespace shaders {
    interface Shader {
      vertex: string;
      fragment: string;
      uniforms?: Record<string, any>;
    }

    export const NORMAL: Shader;
    export const GEOMETRY: Shader;
    export const BASE_GEOMETRY: Shader;
    export const NORMAL_GEOMETRY: Shader;
    export const TEXTURE: Shader;
    export const NORMAL_TEXTURE: Shader;
    export const TEXTURE_CUBE: Shader;
    export const TEXTURE_WITH_SHADOW: Shader;
    export const GEOMETRY_WITH_TEXTURE: Shader;
    export const GEOMETRY_WITH_SHADOW: Shader;
    export const POLYLINE: Shader;
    export const DASHLINE: Shader;
    export const TEXTURE_NORMAL_MAP_100: Shader;
    export const TEXTURE_NORMAL_MAP_300: Shader;
    export const GEOMETRY_NORMAL_MAP_100: Shader;
    export const GEOMETRY_NORMAL_MAP_300: Shader;
    export const TEXTURE_NORMAL_MAP_WITH_BUMP_100: Shader;
    export const TEXTURE_NORMAL_MAP_WITH_BUMP_300: Shader;
    export const GEOMETRY_NORMAL_MAP_WITH_BUMP_100: Shader;
    export const GEOMETRY_NORMAL_MAP_WITH_BUMP_300: Shader;

    export function getTextureNormalMap(layer: Layer3d, bump: boolean): Shader;
    export function getGeometryNormalMap(layer: Layer3d, bump: boolean): Shader;
  }

  export class Vec2 extends Array{
    /**
     * constructor(x = 0, y = x)
     * @param x 
     * @param y 
     */
    constructor(x?:number, y?:number);
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    /**
     * set(x, y = x)
     * @param x 
     * @param y 
     */
    set(x: number, y?: number): this;
    copy(v: Array<number>): this;
    add(va: Array<number>, vb?: Array<number>): this;
    sub(va: Array<number>, vb?: Array<number>): this;
    multiply(v: Array<number>|number): this;
    divide(v: Array<number>|number): this;
    inverse(v?: Array<number>): this;
    len(): number;
    distance(v?: Array<number>): number;
    squaredLen(): number;
    squaredDistance(v?:Array<number>): number;
    negate(v?:Array<number>): this;
    cross(va: Array<number>): number;
    scale(v: number): this;
    normalize(): this;
    dot(v: Array<number>): number;
    equals(v: Array<number>): boolean; 
    applyMatrix3(mat3: Array<number>): this;
    applyMatrix4(mat4: Array<number>): this;
    lerp(v: Array<number>, t: number): this;
    clone(): Vec2;
    fromArray(a: Array<number>, o?: number): this;
    toArray(a: Array<number>, o?: number): Array<number>;
  }

  export class Vec3 extends Array {
    /**
     * constructor(x = 0, y = x, z = x)
     * @param x 
     * @param y
     * @param z
     */
    constructor(x?:number, y?:number, z?:number);
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get z(): number;
    set z(v: number);
    /**
     * set(x, y = x, z = x)
     * @param x 
     * @param y 
     * @param z
     */
    set(x: number, y?: number, z?: number): this;
    copy(v: Array<number>): this;
    add(va: Array<number>, vb?: Array<number>): this;
    sub(va: Array<number>, vb?: Array<number>): this;
    multiply(v: Array<number>|number): this;
    divide(v: Array<number>|number): this;
    inverse(v?: Array<number>): this;
    len(): number;
    distance(v?: Array<number>): number;
    squaredLen(): number;
    squaredDistance(v?:Array<number>): number;
    negate(v?:Array<number>): this;
    cross(va: Array<number>, vb?: Array<number>): number;
    scale(v: number): this;
    normalize(): this;
    dot(v: Array<number>): number;
    equals(v: Array<number>): boolean; 
    applyMatrix4(mat4: Array<number>): this;
    applyQuaternion(q: Array<number>): this;
    angle(v: Array<number>): number;
    lerp(v: Array<number>, t: number): this;
    clone(): Vec2;
    fromArray(a: Array<number>, o?: number): this;
    toArray(a: Array<number>, o?: number): Array<number>;
    transformDirection(mat4: Array<number>): Array<number>;
  }

  export class Vec4 extends Array {
    /**
     * constructor(x = 0, y = x, z = x, w = x)
     * @param x 
     * @param y
     * @param z
     * @param w
     */
    constructor(x?:number, y?:number, z?:number, w?: number);
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get z(): number;
    set z(v: number);
    get w(): number;
    set w(v: number);
    set(x: number, y: number, z: number, w: number): this;
    copy(v: Array<number>): this;
    normalize(): this;
    fromArray(a: Array<number>, o?: number): this;
    toArray(a: Array<number>, o?: number): Array<number>;
  }

  export class Mat3 extends Array {
    /**
     * constructor(
        m00 = 1, m01 = 0, m02 = 0, 
        m10 = 0, m11 = 1, m12 = 0, 
        m20 = 0, m21 = 0, m22 = 1
      )
     * @param m00 
     * @param m01 
     * @param m02 
     * @param m10 
     * @param m11 
     * @param m12 
     * @param m20 
     * @param m21 
     * @param m22 
     */
    constructor(m00: number,
      m01: number,
      m02: number,
      m10: number,
      m11: number,
      m12: number,
      m20: number,
      m21: number,
      m22: number);
    set(m00: number,
      m01: number,
      m02: number,
      m10: number,
      m11: number,
      m12: number,
      m20: number,
      m21: number,
      m22: number): this;
    translate(v: Array<number>, m?: Array<number>): this;
    rotate(v: Array<number>, m?: Array<number>): this;
    scale(v: Array<number>, m?: Array<number>): this;
    multiply(ma: Array<number>, mb?: Array<number>): this;
    identity(): this;
    copy(m: Array<number>): this;
    fromMatrix4(m: Array<number>): this;
    fromQuaternion(q: Array<number>): this;
    fromBasis(vec3a: Array<number>, vec3b: Array<number>, vec3c: Array<number>): this;
    inverse(m?: Array<number>): this;
    getNormalMatrix(m: Array<number>): this;
  }

  export class Mat4 extends Array {
    /**
     * constructor(
        m00 = 1, m01 = 0, m02 = 0, m03 = 0,
        m10 = 0, m11 = 1, m12 = 0, m13 = 0,
        m20 = 0, m21 = 0, m22 = 1, m23 = 0,
        m30 = 0, m31 = 0, m32 = 0, m33 = 1
      )
     * @param m00 
     * @param m01 
     * @param m02 
     * @param m03 
     * @param m10 
     * @param m11 
     * @param m12 
     * @param m13 
     * @param m20 
     * @param m21 
     * @param m22 
     * @param m23 
     * @param m30 
     * @param m31 
     * @param m32 
     * @param m33 
     */
    constructor(m00: number,
      m01: number,
      m02: number,
      m03: number,
      m10: number,
      m11: number,
      m12: number,
      m13: number,
      m20: number,
      m21: number,
      m22: number,
      m23: number,
      m30: number,
      m31: number,
      m32: number,
      m33: number);
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get z(): number;
    set z(v: number);
    get w(): number;
    set w(v: number);
    set(m00: number,
      m01: number,
      m02: number,
      m03: number,
      m10: number,
      m11: number,
      m12: number,
      m13: number,
      m20: number,
      m21: number,
      m22: number,
      m23: number,
      m30: number,
      m31: number,
      m32: number,
      m33: number): this;  
    translate(v: Array<number>, m?: Array<number>): this;
    rotate(v: Array<number>, m?: Array<number>): this;
    scale(v: Array<number>, m?: Array<number>): this;
    multiply(ma: Array<number>, mb?: Array<number>): this;
    identity(): this;
    copy(m: Array<number>): this;
    /**
     * fromPerspective({ fov, aspect, near, far } = {})
     * @param options 
     */
    fromPerspective(options?: Record<string, any>): this;
    /**
     * fromOrthogonal({ left, right, bottom, top, near, far }) 
     * @param options 
     */
    fromOrthogonal(options: Record<string, any>): this;
    fromQuaternion(q: Array<number>): this;
    setPosition(v: Array<number>): this;
    inverse(m?: Array<number>): this;
    compose(q: Array<number>, pos: Array<number>, scale: number): this;
    getRotation(q: Array<number>): this;
    getTranslation(pos: Array<number>): this;
    getScaling(scale: Array<number>): this;
    getMaxScaleOnAxis(): number;
    lookAt(eye: Array<number>, target: Array<number>, up: Array<number>): this;
    determinant(): number;
  }

  export class Quat extends Array {
    /**
     * constructor(x = 0, y = 0, z = 0, w = 1)
     * @param x 
     * @param y
     * @param z
     * @param w
     */
    constructor(x?:number, y?:number, z?:number, w?: number);
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get z(): number;
    set z(v: number);
    get w(): number;
    set w(v: number);
    identity(): this;
    set(x: number, y: number, z: number, w: number): this;
    rotateX(a: number): this;
    rotateY(a: number): this;
    rotateZ(a: number): this;
    inverse(q?: Array<number>): this;
    conjugate(q?: Array<number>): this;
    copy(q: Array<number>): this;
    normalize(q?: Array<number>): this;
    multiply(qA: Array<number>, qB?: Array<number>): this;
    dot(v: Array<number>): number;
    fromMatrix3(matrix3: Array<number>): this;
    fromEuler(euler: Array<number>): this;
    fromAxisAngle(axis: Array<number>, a: number): this;
    slerp(q: Array<number>, t: number): this;
    fromArray(a: Array<number>, o?: number): this;
    toArray(a: Array<number>, o?: number): Array<number>;    
  }

  export class Euler extends Array {
    /**
     * constructor(x = 0, y = 0, z = 0, order = 'YXZ'
     * @param x 
     * @param y 
     * @param z 
     * @param order 
     */
    constructor(x?: number, y?: number, z?: number, order?: string);
    get x(): number;
    set x(v: number);
    get y(): number;
    set y(v: number);
    get z(): number;
    set z(v: number);
    /**
     * set(x, y = x, z = x)
     * @param x 
     * @param y 
     * @param z 
     */
    set(x: number, y?: number, z?: number): this;
    copy(v: Array<number>): this;
    reorder(order: string): this;
    fromRotationMatrix(m: Array<number>, order?: string): this;
    fromQuaternion(m: Array<number>, order?: string): this;
  }
}