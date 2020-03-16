var ext3d =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Vec2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Vec3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Vec4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Mat3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Mat4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Quat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Euler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPGPU", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["GPGPU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Raycast", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Raycast"]; });

/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_layer3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer3D", function() { return _node_layer3d__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _node_mesh3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh3d", function() { return _node_mesh3d__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _node_skin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skin", function() { return _node_skin__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _node_sphere__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return _node_sphere__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _node_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _node_camera__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _node_cube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return _node_cube__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _helper_curve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Curve", function() { return _helper_curve__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _node_plane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return _node_plane__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _node_polyline3d__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline3d", function() { return _node_polyline3d__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _node_cylinder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return _node_cylinder__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _node_group3d__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group3d", function() { return _node_group3d__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _node_render_target__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return _node_render_target__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _helper_shadow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return _helper_shadow__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _helper_texture_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return _helper_texture_loader__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _helper_geometry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _helper_geometry__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "shaders", function() { return _shader__WEBPACK_IMPORTED_MODULE_17__; });



















spritejs__WEBPACK_IMPORTED_MODULE_1__["Scene"].prototype.layer3d = function (id = 'default3d', options = {}) {
  const {
    displayRatio
  } = this.options;
  options = Object.assign({
    dpr: displayRatio
  }, this.options, options);
  options.id = id;
  const layers = this.orderedChildren;

  for (let i = 0; i < layers.length; i++) {
    if (layers[i].id === id) return layers[i];
  }

  const layer = new _node_layer3d__WEBPACK_IMPORTED_MODULE_2__["default"](options);
  this.appendChild(layer);
  return layer;
};



/***/ }),
/* 1 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"]; });

/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return _core_Program_js__WEBPACK_IMPORTED_MODULE_1__["Program"]; });

/* harmony import */ var _core_Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _core_Renderer_js__WEBPACK_IMPORTED_MODULE_2__["Renderer"]; });

/* harmony import */ var _core_Camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _core_Camera_js__WEBPACK_IMPORTED_MODULE_3__["Camera"]; });

/* harmony import */ var _core_Transform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return _core_Transform_js__WEBPACK_IMPORTED_MODULE_4__["Transform"]; });

/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__["Mesh"]; });

/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _core_Texture_js__WEBPACK_IMPORTED_MODULE_6__["Texture"]; });

/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_7__["RenderTarget"]; });

/* harmony import */ var _math_Color_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _math_Color_js__WEBPACK_IMPORTED_MODULE_8__["Color"]; });

/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return _math_Euler_js__WEBPACK_IMPORTED_MODULE_9__["Euler"]; });

/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return _math_Mat3_js__WEBPACK_IMPORTED_MODULE_10__["Mat3"]; });

/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return _math_Mat4_js__WEBPACK_IMPORTED_MODULE_11__["Mat4"]; });

/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return _math_Quat_js__WEBPACK_IMPORTED_MODULE_12__["Quat"]; });

/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return _math_Vec2_js__WEBPACK_IMPORTED_MODULE_13__["Vec2"]; });

/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return _math_Vec3_js__WEBPACK_IMPORTED_MODULE_14__["Vec3"]; });

/* harmony import */ var _math_Vec4_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return _math_Vec4_js__WEBPACK_IMPORTED_MODULE_15__["Vec4"]; });

/* harmony import */ var _extras_Plane_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return _extras_Plane_js__WEBPACK_IMPORTED_MODULE_16__["Plane"]; });

/* harmony import */ var _extras_Box_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _extras_Box_js__WEBPACK_IMPORTED_MODULE_17__["Box"]; });

/* harmony import */ var _extras_Sphere_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return _extras_Sphere_js__WEBPACK_IMPORTED_MODULE_18__["Sphere"]; });

/* harmony import */ var _extras_Cylinder_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return _extras_Cylinder_js__WEBPACK_IMPORTED_MODULE_19__["Cylinder"]; });

/* harmony import */ var _extras_Triangle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _extras_Triangle_js__WEBPACK_IMPORTED_MODULE_20__["Triangle"]; });

/* harmony import */ var _extras_Orbit_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return _extras_Orbit_js__WEBPACK_IMPORTED_MODULE_21__["Orbit"]; });

/* harmony import */ var _extras_Raycast_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Raycast", function() { return _extras_Raycast_js__WEBPACK_IMPORTED_MODULE_22__["Raycast"]; });

/* harmony import */ var _extras_Curve_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Curve", function() { return _extras_Curve_js__WEBPACK_IMPORTED_MODULE_23__["Curve"]; });

/* harmony import */ var _extras_Post_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _extras_Post_js__WEBPACK_IMPORTED_MODULE_24__["Post"]; });

/* harmony import */ var _extras_Skin_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skin", function() { return _extras_Skin_js__WEBPACK_IMPORTED_MODULE_25__["Skin"]; });

/* harmony import */ var _extras_Animation_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _extras_Animation_js__WEBPACK_IMPORTED_MODULE_26__["Animation"]; });

/* harmony import */ var _extras_Text_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _extras_Text_js__WEBPACK_IMPORTED_MODULE_27__["Text"]; });

/* harmony import */ var _extras_NormalProgram_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalProgram", function() { return _extras_NormalProgram_js__WEBPACK_IMPORTED_MODULE_28__["NormalProgram"]; });

/* harmony import */ var _extras_Flowmap_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flowmap", function() { return _extras_Flowmap_js__WEBPACK_IMPORTED_MODULE_29__["Flowmap"]; });

/* harmony import */ var _extras_GPGPU_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPGPU", function() { return _extras_GPGPU_js__WEBPACK_IMPORTED_MODULE_30__["GPGPU"]; });

/* harmony import */ var _extras_Polyline_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _extras_Polyline_js__WEBPACK_IMPORTED_MODULE_31__["Polyline"]; });

/* harmony import */ var _extras_Shadow_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return _extras_Shadow_js__WEBPACK_IMPORTED_MODULE_32__["Shadow"]; });

/* harmony import */ var _extras_KTXTexture_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTXTexture", function() { return _extras_KTXTexture_js__WEBPACK_IMPORTED_MODULE_33__["KTXTexture"]; });

/* harmony import */ var _extras_TextureLoader_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return _extras_TextureLoader_js__WEBPACK_IMPORTED_MODULE_34__["TextureLoader"]; });

/* harmony import */ var _extras_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GLTFLoader", function() { return _extras_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_35__["GLTFLoader"]; });

// Core









// Maths









// Extras






















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalized - boolean default false
//     buffer - gl buffer, if buffer exists, don't need to provide data
//     stride - default 0 - for when passing in buffer
//     offset - default 0 - for when passing in buffer
//     count - default null - for when passing in buffer
//     min - array - for when passing in buffer
//     max - array - for when passing in buffer
// }
// TODO: fit in transform feedback
// TODO: when would I disableVertexAttribArray ?
// TODO: add fallback for non vao support (ie)
// TODO: use offset/stride if exists
// TODO: check size of position (eg triangle with Vec2)

const tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
let ID = 1;
let ATTR_ID = 1; // To stop inifinite warnings

let isBoundsWarned = false;
class Geometry {
  constructor(gl, attributes = {}) {
    if (!gl.canvas) console.error('gl not passed as fist argument to Geometry');
    this.gl = gl;
    this.attributes = attributes;
    this.id = ID++; // Store one VAO per program attribute locations order

    this.VAOs = {};
    this.drawRange = {
      start: 0,
      count: 0
    };
    this.instancedCount = 0; // Unbind current VAO so that new buffers don't get added to active mesh

    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null; // Alias for state store to avoid redundant calls for global state

    this.glState = this.gl.renderer.state; // create the buffers

    for (let key in attributes) {
      this.addAttribute(key, attributes[key]);
    }
  }

  addAttribute(key, attr) {
    this.attributes[key] = attr; // Set options

    attr.id = ATTR_ID++; // TODO: currently unused, remove?

    attr.size = attr.size || 1;
    attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array

    attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    attr.normalized = attr.normalized || false;
    attr.stride = attr.stride || 0;
    attr.offset = attr.offset || 0;
    attr.count = attr.count || attr.data.length / attr.size;
    attr.divisor = attr.instanced || 0;
    attr.needsUpdate = false;

    if (!attr.buffer) {
      attr.buffer = this.gl.createBuffer(); // Push data to buffer

      this.updateAttribute(attr);
    } // Update geometry counts. If indexed, ignore regular attributes


    if (attr.divisor) {
      this.isInstanced = true;

      if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
        console.warn('geometry has multiple instanced buffers of different length');
        return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
      }

      this.instancedCount = attr.count * attr.divisor;
    } else if (key === 'index') {
      this.drawRange.count = attr.count;
    } else if (!this.attributes.index) {
      this.drawRange.count = Math.max(this.drawRange.count, attr.count);
    }
  }

  updateAttribute(attr) {
    if (this.glState.boundBuffer !== attr.buffer) {
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
    }

    this.gl.bufferData(attr.target, attr.data, this.gl.STATIC_DRAW);
    attr.needsUpdate = false;
  }

  setIndex(value) {
    this.addAttribute('index', value);
  }

  setDrawRange(start, count) {
    this.drawRange.start = start;
    this.drawRange.count = count;
  }

  setInstancedCount(value) {
    this.instancedCount = value;
  }

  createVAO(program) {
    this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
    this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
    this.bindAttributes(program);
  }

  bindAttributes(program) {
    // Link all attributes to program using gl.vertexAttribPointer
    program.attributeLocations.forEach((location, name) => {
      // If geometry missing a required shader attribute
      if (!this.attributes[name]) {
        console.warn(`active attribute ${name} not being supplied`);
        return;
      }

      const attr = this.attributes[name];
      this.gl.bindBuffer(attr.target, attr.buffer);
      this.glState.boundBuffer = attr.buffer;
      this.gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalized, attr.stride, attr.offset);
      this.gl.enableVertexAttribArray(location); // For instanced attributes, divisor needs to be set.
      // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render

      this.gl.renderer.vertexAttribDivisor(location, attr.divisor);
    }); // Bind indices if geometry indexed

    if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
  }

  draw({
    program,
    mode = this.gl.TRIANGLES
  }) {
    if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
      if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
    } // Check if any attributes need updating


    program.attributeLocations.forEach((location, name) => {
      const attr = this.attributes[name];
      if (attr.needsUpdate) this.updateAttribute(attr);
    });

    if (this.isInstanced) {
      if (this.attributes.index) {
        this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.drawRange.start, this.instancedCount);
      } else {
        this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
      }
    } else {
      if (this.attributes.index) {
        this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
      } else {
        this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
      }
    }
  }

  getPositionArray() {
    // Use position buffer, or min/max if available
    const attr = this.attributes.position;
    if (attr.min) return [...attr.min, ...attr.max];
    if (attr.data) return attr.data;
    if (isBoundsWarned) return;
    console.warn('No position buffer data found to compute bounds');
    return isBoundsWarned = true;
  }

  computeBoundingBox(array) {
    if (!array) array = this.getPositionArray();

    if (!this.bounds) {
      this.bounds = {
        min: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
        max: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
        center: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
        scale: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
        radius: Infinity
      };
    }

    const min = this.bounds.min;
    const max = this.bounds.max;
    const center = this.bounds.center;
    const scale = this.bounds.scale;
    min.set(+Infinity);
    max.set(-Infinity); // TODO: use offset/stride if exists
    // TODO: check size of position (eg triangle with Vec2)

    for (let i = 0, l = array.length; i < l; i += 3) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];
      min.x = Math.min(x, min.x);
      min.y = Math.min(y, min.y);
      min.z = Math.min(z, min.z);
      max.x = Math.max(x, max.x);
      max.y = Math.max(y, max.y);
      max.z = Math.max(z, max.z);
    }

    scale.sub(max, min);
    center.add(min, max).divide(2);
  }

  computeBoundingSphere(array) {
    if (!array) array = this.getPositionArray();
    if (!this.bounds) this.computeBoundingBox(array);
    let maxRadiusSq = 0;

    for (let i = 0, l = array.length; i < l; i += 3) {
      tempVec3.fromArray(array, i);
      maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
    }

    this.bounds.radius = Math.sqrt(maxRadiusSq);
  }

  remove() {
    if (this.vao) this.gl.renderer.deleteVertexArray(this.vao);

    for (let key in this.attributes) {
      this.gl.deleteBuffer(this.attributes[key].buffer);
      delete this.attributes[key];
    }
  }

}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/* harmony import */ var _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

class Vec3 extends Array {
  constructor(x = 0, y = x, z = x) {
    super(x, y, z);
    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set z(v) {
    this[2] = v;
  }

  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["set"](this, x, y, z);
    return this;
  }

  copy(v) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["copy"](this, v);
    return this;
  }

  add(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["add"](this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["add"](this, this, va);
    return this;
  }

  sub(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["subtract"](this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["subtract"](this, this, va);
    return this;
  }

  multiply(v) {
    if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, this, v);
    return this;
  }

  divide(v) {
    if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["divide"](this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, this, 1 / v);
    return this;
  }

  inverse(v = this) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["inverse"](this, v);
    return this;
  } // Can't use 'length' as Array.prototype uses it


  len() {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["length"](this);
  }

  distance(v) {
    if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["distance"](this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["length"](this);
  }

  squaredLen() {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["squaredLength"](this);
  }

  squaredDistance(v) {
    if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["squaredDistance"](this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["squaredLength"](this);
  }

  negate(v = this) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["negate"](this, v);
    return this;
  }

  cross(va, vb) {
    if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](this, this, va);
    return this;
  }

  scale(v) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, this, v);
    return this;
  }

  normalize() {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["normalize"](this, this);
    return this;
  }

  dot(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["dot"](this, v);
  }

  equals(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["exactEquals"](this, v);
  }

  applyMatrix4(mat4) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["transformMat4"](this, this, mat4);
    return this;
  }

  applyQuaternion(q) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["transformQuat"](this, this, q);
    return this;
  }

  angle(v) {
    return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["angle"](this, v);
  }

  lerp(v, t) {
    _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["lerp"](this, this, v, t);
    return this;
  }

  clone() {
    return new Vec3(this[0], this[1], this[2]);
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    return a;
  }

  transformDirection(mat4) {
    const x = this[0];
    const y = this[1];
    const z = this[2];
    this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
    this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
    this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
    return this.normalize();
  }

}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
const EPSILON = 0.000001;
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2];
  let bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  let x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  let x = a[0],
      y = a[1],
      z = a[2];
  let qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  let uvx = qy * z - qz * y;
  let uvy = qz * x - qx * z;
  let uvz = qx * y - qy * x;
  let uuvx = qy * uvz - qz * uvy;
  let uuvy = qz * uvx - qx * uvz;
  let uuvz = qx * uvy - qy * uvx;
  let w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

const angle = function () {
  const tempA = [0, 0, 0];
  const tempB = [0, 0, 0];
  return function (a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    let cosine = dot(tempA, tempB);

    if (cosine > 1.0) {
      return 0;
    } else if (cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube
let ID = 1; // cache of typed arrays used to flatten uniform arrays

const arrayCacheF32 = {};
class Program {
  constructor(gl, {
    vertex,
    fragment,
    uniforms = {},
    transparent = false,
    cullFace = gl.BACK,
    frontFace = gl.CCW,
    depthTest = true,
    depthWrite = true,
    depthFunc = gl.LESS
  } = {}) {
    if (!gl.canvas) console.error('gl not passed as fist argument to Program');
    this.gl = gl;
    this.uniforms = uniforms;
    this.id = ID++;
    if (!vertex) console.warn('vertex shader not supplied');
    if (!fragment) console.warn('fragment shader not supplied'); // Store program state

    this.transparent = transparent;
    this.cullFace = cullFace;
    this.frontFace = frontFace;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.depthFunc = depthFunc;
    this.blendFunc = {};
    this.blendEquation = {}; // set default blendFunc if transparent flagged

    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    } // compile vertex shader and log errors


    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);

    if (gl.getShaderInfoLog(vertexShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
    } // compile fragment shader and log errors


    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);

    if (gl.getShaderInfoLog(fragmentShader) !== '') {
      console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
    } // compile program and log errors


    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      return console.warn(gl.getProgramInfoLog(this.program));
    } // Remove shader once linked


    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader); // Get active uniform locations

    this.uniformLocations = new Map();
    let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

    for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
      let uniform = gl.getActiveUniform(this.program, uIndex);
      this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name)); // split uniforms' names to separate array and struct declarations

      const split = uniform.name.match(/(\w+)/g);
      uniform.uniformName = split[0];

      if (split.length === 3) {
        uniform.isStructArray = true;
        uniform.structIndex = Number(split[1]);
        uniform.structProperty = split[2];
      } else if (split.length === 2 && isNaN(Number(split[1]))) {
        uniform.isStruct = true;
        uniform.structProperty = split[1];
      }
    } // Get active attribute locations


    this.attributeLocations = new Map();
    const locations = [];
    const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);

    for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
      const attribute = gl.getActiveAttrib(this.program, aIndex);
      const location = gl.getAttribLocation(this.program, attribute.name);
      locations[location] = attribute.name;
      this.attributeLocations.set(attribute.name, location);
    }

    this.attributeOrder = locations.join('');
  }

  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    this.blendFunc.src = src;
    this.blendFunc.dst = dst;
    this.blendFunc.srcAlpha = srcAlpha;
    this.blendFunc.dstAlpha = dstAlpha;
    if (src) this.transparent = true;
  }

  setBlendEquation(modeRGB, modeAlpha) {
    this.blendEquation.modeRGB = modeRGB;
    this.blendEquation.modeAlpha = modeAlpha;
  }

  applyState() {
    if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);else this.gl.renderer.disable(this.gl.DEPTH_TEST);
    if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);else this.gl.renderer.disable(this.gl.CULL_FACE);
    if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);else this.gl.renderer.disable(this.gl.BLEND);
    if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
    this.gl.renderer.setFrontFace(this.frontFace);
    this.gl.renderer.setDepthMask(this.depthWrite);
    this.gl.renderer.setDepthFunc(this.depthFunc);
    if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
    if (this.blendEquation.modeRGB) this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
  }

  use({
    flipFaces = false
  } = {}) {
    let textureUnit = -1;
    const programActive = this.gl.renderer.currentProgram === this.id; // Avoid gl call if program already in use

    if (!programActive) {
      this.gl.useProgram(this.program);
      this.gl.renderer.currentProgram = this.id;
    } // Set only the active uniforms found in the shader


    this.uniformLocations.forEach((location, activeUniform) => {
      let name = activeUniform.uniformName; // get supplied uniform

      let uniform = this.uniforms[name]; // For structs, get the specific property instead of the entire object

      if (activeUniform.isStruct) {
        uniform = uniform[activeUniform.structProperty];
        name += `.${activeUniform.structProperty}`;
      }

      if (activeUniform.isStructArray) {
        uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
        name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
      }

      if (!uniform) {
        return warn(`Active uniform ${name} has not been supplied`);
      }

      if (uniform && uniform.value === undefined) {
        return warn(`${name} uniform is missing a value parameter`);
      }

      if (uniform.value.texture) {
        textureUnit = textureUnit + 1; // Check if texture needs to be updated

        uniform.value.update(textureUnit);
        return setUniform(this.gl, activeUniform.type, location, textureUnit);
      } // For texture arrays, set uniform as an array of texture units instead of just one


      if (uniform.value.length && uniform.value[0].texture) {
        const textureUnits = [];
        uniform.value.forEach(value => {
          textureUnit = textureUnit + 1;
          value.update(textureUnit);
          textureUnits.push(textureUnit);
        });
        return setUniform(this.gl, activeUniform.type, location, textureUnits);
      }

      setUniform(this.gl, activeUniform.type, location, uniform.value);
    });
    this.applyState();
    if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
  }

  remove() {
    this.gl.deleteProgram(this.program);
  }

}

function setUniform(gl, type, location, value) {
  value = value.length ? flatten(value) : value;
  const setValue = gl.renderer.state.uniformLocations.get(location); // Avoid redundant uniform commands

  if (value.length) {
    if (setValue === undefined) {
      // clone array to store as cache
      gl.renderer.state.uniformLocations.set(location, value.slice(0));
    } else {
      if (arraysEqual(setValue, value)) return; // Update cached array values

      setValue.set ? setValue.set(value) : setArray(setValue, value);
      gl.renderer.state.uniformLocations.set(location, setValue);
    }
  } else {
    if (setValue === value) return;
    gl.renderer.state.uniformLocations.set(location, value);
  }

  switch (type) {
    case 5126:
      return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
    // FLOAT

    case 35664:
      return gl.uniform2fv(location, value);
    // FLOAT_VEC2

    case 35665:
      return gl.uniform3fv(location, value);
    // FLOAT_VEC3

    case 35666:
      return gl.uniform4fv(location, value);
    // FLOAT_VEC4

    case 35670: // BOOL

    case 5124: // INT

    case 35678: // SAMPLER_2D

    case 35680:
      return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
    // SAMPLER_CUBE

    case 35671: // BOOL_VEC2

    case 35667:
      return gl.uniform2iv(location, value);
    // INT_VEC2

    case 35672: // BOOL_VEC3

    case 35668:
      return gl.uniform3iv(location, value);
    // INT_VEC3

    case 35673: // BOOL_VEC4

    case 35669:
      return gl.uniform4iv(location, value);
    // INT_VEC4

    case 35674:
      return gl.uniformMatrix2fv(location, false, value);
    // FLOAT_MAT2

    case 35675:
      return gl.uniformMatrix3fv(location, false, value);
    // FLOAT_MAT3

    case 35676:
      return gl.uniformMatrix4fv(location, false, value);
    // FLOAT_MAT4
  }
}

function addLineNumbers(string) {
  let lines = string.split('\n');

  for (let i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ': ' + lines[i];
  }

  return lines.join('\n');
}

function flatten(a) {
  const arrayLen = a.length;
  const valueLen = a[0].length;
  if (valueLen === undefined) return a;
  const length = arrayLen * valueLen;
  let value = arrayCacheF32[length];
  if (!value) arrayCacheF32[length] = value = new Float32Array(length);

  for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);

  return value;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function setArray(a, b) {
  for (let i = 0, l = a.length; i < l; i++) {
    a[i] = b[i];
  }
}

let warnCount = 0;

function warn(message) {
  if (warnCount > 100) return;
  console.warn(message);
  warnCount++;
  if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
 // TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost
// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );

const tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
class Renderer {
  constructor({
    canvas = document.createElement('canvas'),
    width = 300,
    height = 150,
    dpr = 1,
    alpha = false,
    depth = true,
    stencil = false,
    antialias = false,
    premultipliedAlpha = false,
    preserveDrawingBuffer = false,
    powerPreference = 'default',
    autoClear = true,
    webgl = 2
  } = {}) {
    const attributes = {
      alpha,
      depth,
      stencil,
      antialias,
      premultipliedAlpha,
      preserveDrawingBuffer,
      powerPreference
    };
    this.dpr = dpr;
    this.alpha = alpha;
    this.color = true;
    this.depth = depth;
    this.stencil = stencil;
    this.premultipliedAlpha = premultipliedAlpha;
    this.autoClear = autoClear; // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1

    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;

    if (!this.gl) {
      this.gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
    } // Attach renderer to gl so that all classes have access to internal state functions


    this.gl.renderer = this; // initialise size values

    this.setSize(width, height); // gl state stores to avoid redundant calls on methods used internally

    this.state = {};
    this.state.blendFunc = {
      src: this.gl.ONE,
      dst: this.gl.ZERO
    };
    this.state.blendEquation = {
      modeRGB: this.gl.FUNC_ADD
    };
    this.state.cullFace = null;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LESS;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = {
      width: null,
      height: null
    };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = new Map(); // store requested extensions

    this.extensions = {}; // Initialise extra format types

    if (this.isWebgl2) {
      this.getExtension('EXT_color_buffer_float');
      this.getExtension('OES_texture_float_linear');
    } else {
      this.getExtension('OES_texture_float');
      this.getExtension('OES_texture_float_linear');
      this.getExtension('OES_texture_half_float');
      this.getExtension('OES_texture_half_float_linear');
      this.getExtension('OES_element_index_uint');
      this.getExtension('OES_standard_derivatives');
      this.getExtension('EXT_sRGB');
      this.getExtension('WEBGL_depth_texture');
      this.getExtension('WEBGL_draw_buffers');
    } // Create method aliases using extension (WebGL1) or native if available (WebGL2)


    this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
    this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
    this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
    this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
    this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
    this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
    this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL'); // Store device parameters

    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic') ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.gl.canvas.width = width * this.dpr;
    this.gl.canvas.height = height * this.dpr;
    Object.assign(this.gl.canvas.style, {
      width: width + 'px',
      height: height + 'px'
    });
  }

  setViewport(width, height) {
    if (this.state.viewport.width === width && this.state.viewport.height === height) return;
    this.state.viewport.width = width;
    this.state.viewport.height = height;
    this.gl.viewport(0, 0, width, height);
  }

  enable(id) {
    if (this.state[id] === true) return;
    this.gl.enable(id);
    this.state[id] = true;
  }

  disable(id) {
    if (this.state[id] === false) return;
    this.gl.disable(id);
    this.state[id] = false;
  }

  setBlendFunc(src, dst, srcAlpha, dstAlpha) {
    if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
    this.state.blendFunc.src = src;
    this.state.blendFunc.dst = dst;
    this.state.blendFunc.srcAlpha = srcAlpha;
    this.state.blendFunc.dstAlpha = dstAlpha;
    if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);else this.gl.blendFunc(src, dst);
  }

  setBlendEquation(modeRGB, modeAlpha) {
    if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
    this.state.blendEquation.modeRGB = modeRGB;
    this.state.blendEquation.modeAlpha = modeAlpha;
    if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);else this.gl.blendEquation(modeRGB);
  }

  setCullFace(value) {
    if (this.state.cullFace === value) return;
    this.state.cullFace = value;
    this.gl.cullFace(value);
  }

  setFrontFace(value) {
    if (this.state.frontFace === value) return;
    this.state.frontFace = value;
    this.gl.frontFace(value);
  }

  setDepthMask(value) {
    if (this.state.depthMask === value) return;
    this.state.depthMask = value;
    this.gl.depthMask(value);
  }

  setDepthFunc(value) {
    if (this.state.depthFunc === value) return;
    this.state.depthFunc = value;
    this.gl.depthFunc(value);
  }

  activeTexture(value) {
    if (this.state.activeTextureUnit === value) return;
    this.state.activeTextureUnit = value;
    this.gl.activeTexture(this.gl.TEXTURE0 + value);
  }

  bindFramebuffer({
    target = this.gl.FRAMEBUFFER,
    buffer = null
  } = {}) {
    if (this.state.framebuffer === buffer) return;
    this.state.framebuffer = buffer;
    this.gl.bindFramebuffer(target, buffer);
  }

  getExtension(extension, webgl2Func, extFunc) {
    // if webgl2 function supported, return func bound to gl context
    if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl); // fetch extension once only

    if (!this.extensions[extension]) {
      this.extensions[extension] = this.gl.getExtension(extension);
    } // return extension if no function requested


    if (!webgl2Func) return this.extensions[extension]; // Return null if extension not supported

    if (!this.extensions[extension]) return null; // return extension function, bound to extension

    return this.extensions[extension][extFunc].bind(this.extensions[extension]);
  }

  sortOpaque(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else if (a.zDepth !== b.zDepth) {
      return a.zDepth - b.zDepth;
    } else {
      return b.id - a.id;
    }
  }

  sortTransparent(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    }

    if (a.zDepth !== b.zDepth) {
      return b.zDepth - a.zDepth;
    } else {
      return b.id - a.id;
    }
  }

  sortUI(a, b) {
    if (a.renderOrder !== b.renderOrder) {
      return a.renderOrder - b.renderOrder;
    } else if (a.program.id !== b.program.id) {
      return a.program.id - b.program.id;
    } else {
      return b.id - a.id;
    }
  }

  getRenderList({
    scene,
    camera,
    frustumCull,
    sort
  }) {
    let renderList = [];
    if (camera && frustumCull) camera.updateFrustum(); // Get visible

    scene.traverse(node => {
      if (!node.visible) return true;
      if (!node.draw) return;

      if (frustumCull && node.frustumCulled && camera) {
        if (!camera.frustumIntersectsMesh(node)) return;
      }

      renderList.push(node);
    });

    if (sort) {
      const opaque = [];
      const transparent = []; // depthTest true

      const ui = []; // depthTest false

      renderList.forEach(node => {
        // Split into the 3 render groups
        if (!node.program.transparent) {
          opaque.push(node);
        } else if (node.program.depthTest) {
          transparent.push(node);
        } else {
          ui.push(node);
        }

        node.zDepth = 0; // Only calculate z-depth if renderOrder unset and depthTest is true

        if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return; // update z-depth

        node.worldMatrix.getTranslation(tempVec3);
        tempVec3.applyMatrix4(camera.projectionViewMatrix);
        node.zDepth = tempVec3.z;
      });
      opaque.sort(this.sortOpaque);
      transparent.sort(this.sortTransparent);
      ui.sort(this.sortUI);
      renderList = opaque.concat(transparent, ui);
    }

    return renderList;
  }

  render({
    scene,
    camera,
    target = null,
    update = true,
    sort = true,
    frustumCull = true,
    clear
  }) {
    if (target === null) {
      // make sure no render target bound so draws to canvas
      this.bindFramebuffer();
      this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      // bind supplied render target and update viewport
      this.bindFramebuffer(target);
      this.setViewport(target.width, target.height);
    }

    if (clear || this.autoClear && clear !== false) {
      // Ensure depth buffer writing is enabled so it can be cleared
      if (this.depth && (!target || target.depth)) {
        this.enable(this.gl.DEPTH_TEST);
        this.setDepthMask(true);
      }

      this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
    } // updates all scene graph matrices


    if (update) scene.updateMatrixWorld(); // Update camera separately, in case not in scene graph

    if (camera) camera.updateMatrixWorld(); // Get render list - entails culling and sorting

    const renderList = this.getRenderList({
      scene,
      camera,
      frustumCull,
      sort
    });
    renderList.forEach(node => {
      node.draw({
        camera
      });
    });
  }

}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



const tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["Mat4"]();
const tempVec3a = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
const tempVec3b = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
class Camera extends _Transform_js__WEBPACK_IMPORTED_MODULE_0__["Transform"] {
  constructor(gl, {
    near = 0.1,
    far = 100,
    fov = 45,
    aspect = 1,
    left,
    right,
    bottom,
    top,
    zoom = 1
  } = {}) {
    super();
    Object.assign(this, {
      near,
      far,
      fov,
      aspect,
      left,
      right,
      bottom,
      top,
      zoom
    });
    this.projectionMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["Mat4"]();
    this.viewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["Mat4"]();
    this.projectionViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["Mat4"]();
    this.worldPosition = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](); // Use orthographic if left/right set, else default to perspective camera

    this.type = left || right ? 'orthographic' : 'perspective';
    if (this.type === 'orthographic') this.orthographic();else this.perspective();
  }

  perspective({
    near = this.near,
    far = this.far,
    fov = this.fov,
    aspect = this.aspect
  } = {}) {
    Object.assign(this, {
      near,
      far,
      fov,
      aspect
    });
    this.projectionMatrix.fromPerspective({
      fov: fov * (Math.PI / 180),
      aspect,
      near,
      far
    });
    this.type = 'perspective';
    return this;
  }

  orthographic({
    near = this.near,
    far = this.far,
    left = this.left,
    right = this.right,
    bottom = this.bottom,
    top = this.top,
    zoom = this.zoom
  } = {}) {
    Object.assign(this, {
      near,
      far,
      left,
      right,
      bottom,
      top,
      zoom
    });
    left /= zoom;
    right /= zoom;
    bottom /= zoom;
    top /= zoom;
    this.projectionMatrix.fromOrthogonal({
      left,
      right,
      bottom,
      top,
      near,
      far
    });
    this.type = 'orthographic';
    return this;
  }

  updateMatrixWorld() {
    super.updateMatrixWorld();
    this.viewMatrix.inverse(this.worldMatrix);
    this.worldMatrix.getTranslation(this.worldPosition); // used for sorting

    this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
    return this;
  }

  lookAt(target) {
    super.lookAt(target, true);
    return this;
  } // Project 3D coordinate to 2D point


  project(v) {
    v.applyMatrix4(this.viewMatrix);
    v.applyMatrix4(this.projectionMatrix);
    return this;
  } // Unproject 2D point to 3D coordinate


  unproject(v) {
    v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
    v.applyMatrix4(this.worldMatrix);
    return this;
  }

  updateFrustum() {
    if (!this.frustum) {
      this.frustum = [new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()];
    }

    const m = this.projectionViewMatrix;
    this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x

    this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x

    this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y

    this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y

    this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)

    this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

    for (let i = 0; i < 6; i++) {
      const invLen = 1.0 / this.frustum[i].distance();
      this.frustum[i].multiply(invLen);
      this.frustum[i].constant *= invLen;
    }
  }

  frustumIntersectsMesh(node) {
    // If no position attribute, treat as frustumCulled false
    if (!node.geometry.attributes.position) return true;
    if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
    if (!node.geometry.bounds) return true;
    const center = tempVec3a;
    center.copy(node.geometry.bounds.center);
    center.applyMatrix4(node.worldMatrix);
    const radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();
    return this.frustumIntersectsSphere(center, radius);
  }

  frustumIntersectsSphere(center, radius) {
    const normal = tempVec3b;

    for (let i = 0; i < 6; i++) {
      const plane = this.frustum[i];
      const distance = normal.copy(plane).dot(center) + plane.constant;
      if (distance < -radius) return false;
    }

    return true;
  }

}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);




class Transform {
  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
    this.worldMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
    this.matrixAutoUpdate = true;
    this.position = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
    this.quaternion = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
    this.scale = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](1);
    this.rotation = new _math_Euler_js__WEBPACK_IMPORTED_MODULE_3__["Euler"]();
    this.up = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](0, 1, 0);

    this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);

    this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
  }

  setParent(parent, notifyParent = true) {
    if (notifyParent && this.parent && parent !== this.parent) this.parent.removeChild(this, false);
    this.parent = parent;
    if (notifyParent && parent) parent.addChild(this, false);
  }

  addChild(child, notifyChild = true) {
    if (!~this.children.indexOf(child)) this.children.push(child);
    if (notifyChild) child.setParent(this, false);
  }

  removeChild(child, notifyChild = true) {
    if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
    if (notifyChild) child.setParent(null, false);
  }

  updateMatrixWorld(force) {
    if (this.matrixAutoUpdate) this.updateMatrix();

    if (this.worldMatrixNeedsUpdate || force) {
      if (this.parent === null) this.worldMatrix.copy(this.matrix);else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      this.worldMatrixNeedsUpdate = false;
      force = true;
    }

    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].updateMatrixWorld(force);
    }
  }

  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }

  traverse(callback) {
    // Return true in callback to stop traversing children
    if (callback(this)) return;

    for (let i = 0, l = this.children.length; i < l; i++) {
      this.children[i].traverse(callback);
    }
  }

  decompose() {
    this.matrix.getTranslation(this.position);
    this.matrix.getRotation(this.quaternion);
    this.matrix.getScaling(this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }

  lookAt(target, invert = false) {
    if (invert) this.matrix.lookAt(this.position, target, this.up);else this.matrix.lookAt(target, this.position, this.up);
    this.matrix.getRotation(this.quaternion);
    this.rotation.fromQuaternion(this.quaternion);
  }

}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return Quat; });
/* harmony import */ var _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

class Quat extends Array {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(x, y, z, w);

    this.onChange = () => {};

    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  get w() {
    return this[3];
  }

  set x(v) {
    this[0] = v;
    this.onChange();
  }

  set y(v) {
    this[1] = v;
    this.onChange();
  }

  set z(v) {
    this[2] = v;
    this.onChange();
  }

  set w(v) {
    this[3] = v;
    this.onChange();
  }

  identity() {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["identity"](this);
    this.onChange();
    return this;
  }

  set(x, y, z, w) {
    if (x.length) return this.copy(x);
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["set"](this, x, y, z, w);
    this.onChange();
    return this;
  }

  rotateX(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["rotateX"](this, this, a);
    this.onChange();
    return this;
  }

  rotateY(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["rotateY"](this, this, a);
    this.onChange();
    return this;
  }

  rotateZ(a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["rotateZ"](this, this, a);
    this.onChange();
    return this;
  }

  inverse(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["invert"](this, q);
    this.onChange();
    return this;
  }

  conjugate(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["conjugate"](this, q);
    this.onChange();
    return this;
  }

  copy(q) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["copy"](this, q);
    this.onChange();
    return this;
  }

  normalize(q = this) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["normalize"](this, q);
    this.onChange();
    return this;
  }

  multiply(qA, qB) {
    if (qB) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, qA, qB);
    } else {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, this, qA);
    }

    this.onChange();
    return this;
  }

  dot(v) {
    return _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["dot"](this, v);
  }

  fromMatrix3(matrix3) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["fromMat3"](this, matrix3);
    this.onChange();
    return this;
  }

  fromEuler(euler) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["fromEuler"](this, euler, euler.order);
    return this;
  }

  fromAxisAngle(axis, a) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["setAxisAngle"](this, axis, a);
    return this;
  }

  slerp(q, t) {
    _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_0__["slerp"](this, this, q, t);
    return this;
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }

}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony import */ var _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  let bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  let omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  let a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  let invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    let j = (i + 1) % 3;
    let k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, euler, order = 'YXZ') {
  let sx = Math.sin(euler[0] * 0.5);
  let cx = Math.cos(euler[0] * 0.5);
  let sy = Math.sin(euler[1] * 0.5);
  let cy = Math.cos(euler[1] * 0.5);
  let sz = Math.sin(euler[2] * 0.5);
  let cz = Math.cos(euler[2] * 0.5);

  if (order === 'XYZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'YXZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'ZXY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'ZYX') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'YZX') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'XZY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }

  return out;
}
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

const copy = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

const set = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

const add = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["add"];
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

const scale = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

const dot = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */

const lerp = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

const length = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["length"];
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

const normalize = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["normalize"];

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
const EPSILON = 0.000001;
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return Mat4; });
/* harmony import */ var _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

class Mat4 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
    super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  get x() {
    return this[12];
  }

  get y() {
    return this[13];
  }

  get z() {
    return this[14];
  }

  get w() {
    return this[15];
  }

  set x(v) {
    this[12] = v;
  }

  set y(v) {
    this[13] = v;
  }

  set z(v) {
    this[14] = v;
  }

  set w(v) {
    this[15] = v;
  }

  set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    if (m00.length) return this.copy(m00);
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["set"](this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    return this;
  }

  translate(v, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["translate"](this, m, v);
    return this;
  }

  rotate(v, axis, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["rotate"](this, m, v, axis);
    return this;
  }

  scale(v, m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, m, typeof v === "number" ? [v, v, v] : v);
    return this;
  }

  multiply(ma, mb) {
    if (mb) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, ma, mb);
    } else {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, this, ma);
    }

    return this;
  }

  identity() {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["identity"](this);
    return this;
  }

  copy(m) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["copy"](this, m);
    return this;
  }

  fromPerspective({
    fov,
    aspect,
    near,
    far
  } = {}) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["perspective"](this, fov, aspect, near, far);
    return this;
  }

  fromOrthogonal({
    left,
    right,
    bottom,
    top,
    near,
    far
  }) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["ortho"](this, left, right, bottom, top, near, far);
    return this;
  }

  fromQuaternion(q) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["fromQuat"](this, q);
    return this;
  }

  setPosition(v) {
    this.x = v[0];
    this.y = v[1];
    this.z = v[2];
    return this;
  }

  inverse(m = this) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["invert"](this, m);
    return this;
  }

  compose(q, pos, scale) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["fromRotationTranslationScale"](this, q, pos, scale);
    return this;
  }

  getRotation(q) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["getRotation"](q, this);
    return this;
  }

  getTranslation(pos) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["getTranslation"](pos, this);
    return this;
  }

  getScaling(scale) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["getScaling"](scale, this);
    return this;
  }

  getMaxScaleOnAxis() {
    return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["getMaxScaleOnAxis"](this);
  }

  lookAt(eye, target, up) {
    _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["targetTo"](this, eye, target, up);
    return this;
  }

  determinant() {
    return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_0__["determinant"](this);
  }

}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxScaleOnAxis", function() { return getMaxScaleOnAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
const EPSILON = 0.000001;
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a12 = a[6],
        a13 = a[7];
    let a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  let b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  let x = v[0],
      y = v[1],
      z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  let x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  let x = axis[0],
      y = axis[1],
      z = axis[2];
  let len = Math.hypot(x, y, z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (Math.abs(len) < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getMaxScaleOnAxis(mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];
  const x = m11 * m11 + m12 * m12 + m13 * m13;
  const y = m21 * m21 + m22 * m22 + m23 * m23;
  const z = m31 * m31 + m32 * m32 + m33 * m33;
  return Math.sqrt(Math.max(x, y, z));
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

const getRotation = function () {
  const temp = [0, 0, 0];
  return function (out, mat) {
    let scaling = temp;
    getScaling(scaling, mat);
    let is1 = 1 / scaling[0];
    let is2 = 1 / scaling[1];
    let is3 = 1 / scaling[2];
    let sm11 = mat[0] * is1;
    let sm12 = mat[1] * is2;
    let sm13 = mat[2] * is3;
    let sm21 = mat[4] * is1;
    let sm22 = mat[5] * is2;
    let sm23 = mat[6] * is3;
    let sm31 = mat[8] * is1;
    let sm32 = mat[9] * is2;
    let sm33 = mat[10] * is3;
    let trace = sm11 + sm22 + sm33;
    let S = 0;

    if (trace > 0) {
      S = Math.sqrt(trace + 1.0) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }

    return out;
  };
}();
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} target Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  let len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len === 0) {
    // eye and target are in the same position
    z2 = 1;
  } else {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len === 0) {
    // up and z are parallel
    if (upz) {
      upx += 1e-6;
    } else if (upy) {
      upz += 1e-6;
    } else {
      upy += 1e-6;
    }

    x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
  }

  len = 1 / Math.sqrt(len);
  x0 *= len;
  x1 *= len;
  x2 *= len;
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return Euler; });
/* harmony import */ var _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);


const tmpMat4 = new _Mat4_js__WEBPACK_IMPORTED_MODULE_1__["Mat4"]();
class Euler extends Array {
  constructor(x = 0, y = x, z = x, order = 'YXZ') {
    super(x, y, z);
    this.order = order;

    this.onChange = () => {};

    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  set x(v) {
    this[0] = v;
    this.onChange();
  }

  set y(v) {
    this[1] = v;
    this.onChange();
  }

  set z(v) {
    this[2] = v;
    this.onChange();
  }

  set(x, y = x, z = x) {
    if (x.length) return this.copy(x);
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this.onChange();
    return this;
  }

  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    this.onChange();
    return this;
  }

  reorder(order) {
    this.order = order;
    this.onChange();
    return this;
  }

  fromRotationMatrix(m, order = this.order) {
    _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_0__["fromRotationMatrix"](this, m, order);
    return this;
  }

  fromQuaternion(q, order = this.order) {
    tmpMat4.fromQuaternion(q);
    return this.fromRotationMatrix(tmpMat4, order);
  }

}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationMatrix", function() { return fromRotationMatrix; });
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
function fromRotationMatrix(out, m, order = 'YXZ') {
  if (order === 'XYZ') {
    out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));

    if (Math.abs(m[8]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[10]);
      out[2] = Math.atan2(-m[4], m[0]);
    } else {
      out[0] = Math.atan2(m[6], m[5]);
      out[2] = 0;
    }
  } else if (order === 'YXZ') {
    out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));

    if (Math.abs(m[9]) < 0.99999) {
      out[1] = Math.atan2(m[8], m[10]);
      out[2] = Math.atan2(m[1], m[5]);
    } else {
      out[1] = Math.atan2(-m[2], m[0]);
      out[2] = 0;
    }
  } else if (order === 'ZXY') {
    out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));

    if (Math.abs(m[6]) < 0.99999) {
      out[1] = Math.atan2(-m[2], m[10]);
      out[2] = Math.atan2(-m[4], m[5]);
    } else {
      out[1] = 0;
      out[2] = Math.atan2(m[1], m[0]);
    }
  } else if (order === 'ZYX') {
    out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));

    if (Math.abs(m[2]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[10]);
      out[2] = Math.atan2(m[1], m[0]);
    } else {
      out[0] = 0;
      out[2] = Math.atan2(-m[4], m[5]);
    }
  } else if (order === 'YZX') {
    out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));

    if (Math.abs(m[1]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[5]);
      out[1] = Math.atan2(-m[2], m[0]);
    } else {
      out[0] = 0;
      out[1] = Math.atan2(m[8], m[10]);
    }
  } else if (order === 'XZY') {
    out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));

    if (Math.abs(m[4]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[5]);
      out[1] = Math.atan2(m[8], m[0]);
    } else {
      out[0] = Math.atan2(-m[9], m[10]);
      out[1] = 0;
    }
  }

  return out;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);



let ID = 0;
class Mesh extends _Transform_js__WEBPACK_IMPORTED_MODULE_0__["Transform"] {
  constructor(gl, {
    geometry,
    program,
    mode = gl.TRIANGLES,
    frustumCulled = true,
    renderOrder = 0
  } = {}) {
    super();
    if (!gl.canvas) console.error('gl not passed as fist argument to Mesh');
    this.gl = gl;
    this.id = ID++;
    this.geometry = geometry;
    this.program = program;
    this.mode = mode; // Used to skip frustum culling

    this.frustumCulled = frustumCulled; // Override sorting to force an order

    this.renderOrder = renderOrder;
    this.modelViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
    this.normalMatrix = new _math_Mat3_js__WEBPACK_IMPORTED_MODULE_1__["Mat3"]();
    this.beforeRenderCallbacks = [];
    this.afterRenderCallbacks = [];
  }

  onBeforeRender(f) {
    this.beforeRenderCallbacks.push(f);
    return this;
  }

  onAfterRender(f) {
    this.afterRenderCallbacks.push(f);
    return this;
  }

  draw({
    camera
  } = {}) {
    this.beforeRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    })); // Set the matrix uniforms

    if (camera) {
      // Add empty matrix uniforms to program if unset
      if (!this.program.uniforms.modelMatrix) {
        Object.assign(this.program.uniforms, {
          modelMatrix: {
            value: null
          },
          viewMatrix: {
            value: null
          },
          modelViewMatrix: {
            value: null
          },
          normalMatrix: {
            value: null
          },
          projectionMatrix: {
            value: null
          },
          cameraPosition: {
            value: null
          }
        });
      }

      this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
      this.program.uniforms.cameraPosition.value = camera.worldPosition;
      this.program.uniforms.viewMatrix.value = camera.viewMatrix;
      this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
      this.program.uniforms.modelMatrix.value = this.worldMatrix;
      this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
      this.program.uniforms.normalMatrix.value = this.normalMatrix;
    } // determine if faces need to be flipped - when mesh scaled negatively


    let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({
      flipFaces
    });
    this.geometry.draw({
      mode: this.mode,
      program: this.program
    });
    this.afterRenderCallbacks.forEach(f => f && f({
      mesh: this,
      camera
    }));
  }

}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return Mat3; });
/* harmony import */ var _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);

class Mat3 extends Array {
  constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
    super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }

  set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    if (m00.length) return this.copy(m00);
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["set"](this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
    return this;
  }

  translate(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["translate"](this, m, v);
    return this;
  }

  rotate(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["rotate"](this, m, v);
    return this;
  }

  scale(v, m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, m, v);
    return this;
  }

  multiply(ma, mb) {
    if (mb) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, ma, mb);
    } else {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, this, ma);
    }

    return this;
  }

  identity() {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["identity"](this);
    return this;
  }

  copy(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["copy"](this, m);
    return this;
  }

  fromMatrix4(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["fromMat4"](this, m);
    return this;
  }

  fromQuaternion(q) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["fromQuat"](this, q);
    return this;
  }

  fromBasis(vec3a, vec3b, vec3c) {
    this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
    return this;
  }

  inverse(m = this) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["invert"](this, m);
    return this;
  }

  getNormalMatrix(m) {
    _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_0__["normalFromMat4"](this, m);
    return this;
  }

}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
const EPSILON = 0.000001;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  let x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;
  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  let a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  let a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  let b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  let b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  let b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  let x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  let a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  let a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  let a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  let a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture; });
// TODO: delete texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads
const emptyPixel = new Uint8Array(4);

function isPowerOf2(value) {
  return (value & value - 1) === 0;
}

let ID = 1;
class Texture {
  constructor(gl, {
    image,
    target = gl.TEXTURE_2D,
    type = gl.UNSIGNED_BYTE,
    format = gl.RGBA,
    internalFormat = format,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    generateMipmaps = true,
    minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
    magFilter = gl.LINEAR,
    premultiplyAlpha = false,
    unpackAlignment = 4,
    flipY = target == gl.TEXTURE_2D ? true : false,
    anisotropy = 0,
    level = 0,
    width,
    // used for RenderTargets or Data Textures
    height = width
  } = {}) {
    this.gl = gl;
    this.id = ID++;
    this.image = image;
    this.target = target;
    this.type = type;
    this.format = format;
    this.internalFormat = internalFormat;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.generateMipmaps = generateMipmaps;
    this.premultiplyAlpha = premultiplyAlpha;
    this.unpackAlignment = unpackAlignment;
    this.flipY = flipY;
    this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
    this.level = level;
    this.width = width;
    this.height = height;
    this.texture = this.gl.createTexture();
    this.store = {
      image: null
    }; // Alias for state store to avoid redundant calls for global state

    this.glState = this.gl.renderer.state; // State store to avoid redundant calls for per-texture state

    this.state = {};
    this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
    this.state.magFilter = this.gl.LINEAR;
    this.state.wrapS = this.gl.REPEAT;
    this.state.wrapT = this.gl.REPEAT;
    this.state.anisotropy = 0;
  }

  bind() {
    // Already bound to active texture unit
    if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
    this.gl.bindTexture(this.target, this.texture);
    this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
  }

  update(textureUnit = 0) {
    const needsUpdate = !(this.image === this.store.image && !this.needsUpdate); // Make sure that texture is bound to its texture unit

    if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
      // set active texture unit to perform texture functions
      this.gl.renderer.activeTexture(textureUnit);
      this.bind();
    }

    if (!needsUpdate) return;
    this.needsUpdate = false;

    if (this.flipY !== this.glState.flipY) {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
      this.glState.flipY = this.flipY;
    }

    if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
      this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      this.glState.premultiplyAlpha = this.premultiplyAlpha;
    }

    if (this.unpackAlignment !== this.glState.unpackAlignment) {
      this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
      this.glState.unpackAlignment = this.unpackAlignment;
    }

    if (this.minFilter !== this.state.minFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
      this.state.minFilter = this.minFilter;
    }

    if (this.magFilter !== this.state.magFilter) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
      this.state.magFilter = this.magFilter;
    }

    if (this.wrapS !== this.state.wrapS) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
      this.state.wrapS = this.wrapS;
    }

    if (this.wrapT !== this.state.wrapT) {
      this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
      this.state.wrapT = this.wrapT;
    }

    if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
      this.gl.texParameterf(this.target, this.gl.renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy);
      this.state.anisotropy = this.anisotropy;
    }

    if (this.image) {
      if (this.image.width) {
        this.width = this.image.width;
        this.height = this.image.height;
      }

      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        // For cube maps
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
        }
      } else if (ArrayBuffer.isView(this.image)) {
        // Data texture
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
      } else if (this.image.isCompressedTexture) {
        // Compressed texture
        for (let level = 0; level < this.image.length; level++) {
          this.gl.compressedTexImage2D(this.target, level, this.internalFormat, this.image[level].width, this.image[level].height, 0, this.image[level].data);
        }
      } else {
        // Regular texture
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
      }

      if (this.generateMipmaps) {
        // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
        if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
          this.generateMipmaps = false;
          this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
          this.minFilter = this.gl.LINEAR;
        } else {
          this.gl.generateMipmap(this.target);
        }
      } // Callback for when data is pushed to GPU


      this.onUpdate && this.onUpdate();
    } else {
      if (this.target === this.gl.TEXTURE_CUBE_MAP) {
        // Upload empty pixel for each side while no image to avoid errors while image or video loading
        for (let i = 0; i < 6; i++) {
          this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
        }
      } else if (this.width) {
        // image intentionally left null for RenderTarget
        this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
      } else {
        // Upload empty pixel if no image to avoid errors while image or video loading
        this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
      }
    }

    this.store.image = this.image;
  }

}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return RenderTarget; });
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
// TODO: multi target rendering
// TODO: test stencil and depth
// TODO: destroy
// TODO: blit on resize?

class RenderTarget {
  constructor(gl, {
    width = gl.canvas.width,
    height = gl.canvas.height,
    target = gl.FRAMEBUFFER,
    color = 1,
    // number of color attachments
    depth = true,
    stencil = false,
    depthTexture = false,
    // note - stencil breaks
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    minFilter = gl.LINEAR,
    magFilter = minFilter,
    type = gl.UNSIGNED_BYTE,
    format = gl.RGBA,
    internalFormat = format,
    unpackAlignment,
    premultiplyAlpha
  } = {}) {
    this.gl = gl;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.buffer = this.gl.createFramebuffer();
    this.target = target;
    this.gl.bindFramebuffer(this.target, this.buffer);
    this.textures = [];
    const drawBuffers = []; // create and attach required num of color textures

    for (let i = 0; i < color; i++) {
      this.textures.push(new _Texture_js__WEBPACK_IMPORTED_MODULE_0__["Texture"](gl, {
        width,
        height,
        wrapS,
        wrapT,
        minFilter,
        magFilter,
        type,
        format,
        internalFormat,
        unpackAlignment,
        premultiplyAlpha,
        flipY: false,
        generateMipmaps: false
      }));
      this.textures[i].update();
      this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0
      /* level */
      );
      drawBuffers.push(this.gl.COLOR_ATTACHMENT0 + i);
    } // For multi-render targets shader access


    if (drawBuffers.length > 1) this.gl.renderer.drawBuffers(drawBuffers); // alias for majority of use cases

    this.texture = this.textures[0]; // note depth textures break stencil - so can't use together

    if (depthTexture && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension('WEBGL_depth_texture'))) {
      this.depthTexture = new _Texture_js__WEBPACK_IMPORTED_MODULE_0__["Texture"](gl, {
        width,
        height,
        minFilter: this.gl.NEAREST,
        magFilter: this.gl.NEAREST,
        format: this.gl.DEPTH_COMPONENT,
        internalFormat: gl.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
        type: this.gl.UNSIGNED_INT
      });
      this.depthTexture.update();
      this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0
      /* level */
      );
    } else {
      // Render buffers
      if (depth && !stencil) {
        this.depthBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
      }

      if (stencil && !depth) {
        this.stencilBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
        this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer);
      }

      if (depth && stencil) {
        this.depthStencilBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
        this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer);
      }
    }

    this.gl.bindFramebuffer(this.target, null);
  }

}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
 // Color stored as an array of RGB decimal values (between 0 > 1)
// Constructor and set method accept following formats:
// new Color() - Empty (defaults to black)
// new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1) - Decimal RGB values
// new Color('#ff0000') - Hex string
// new Color('#ccc') - Short-hand Hex string
// new Color(0x4f27e8) - Number
// new Color('red') - Color name string (short list in ColorFunc.js)

class Color extends Array {
  constructor(color) {
    if (Array.isArray(color)) return super(...color);
    return super(..._functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__["parseColor"](...arguments));
  }

  get r() {
    return this[0];
  }

  get g() {
    return this[1];
  }

  get b() {
    return this[2];
  }

  set r(v) {
    this[0] = v;
  }

  set g(v) {
    this[1] = v;
  }

  set b(v) {
    this[2] = v;
  }

  set(color) {
    if (Array.isArray(color)) return this.copy(color);
    return this.copy(_functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_0__["parseColor"](...arguments));
  }

  copy(v) {
    this[0] = v[0];
    this[1] = v[1];
    this[2] = v[2];
    return this;
  }

}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberToRGB", function() { return numberToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
const NAMES = {
  "black": "#000000",
  "white": "#ffffff",
  "red": "#ff0000",
  "green": "#00ff00",
  "blue": "#0000ff",
  "fuchsia": "#ff00ff",
  "cyan": "#00ffff",
  "yellow": "#ffff00",
  "orange": "#ff8000"
};
function hexToRGB(hex) {
  if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
  return [parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255];
}
function numberToRGB(num) {
  num = parseInt(num);
  return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
}
function parseColor(color) {
  // Empty
  if (color === undefined) return [0, 0, 0]; // Decimal

  if (arguments.length === 3) return arguments; // Number

  if (!isNaN(color)) return numberToRGB(color); // Hex

  if (color[0] === "#") return hexToRGB(color); // Names

  if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);
  console.warn('Color format not recognised');
  return [0, 0, 0];
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return Vec2; });
/* harmony import */ var _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

class Vec2 extends Array {
  constructor(x = 0, y = x) {
    super(x, y);
    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set(x, y = x) {
    if (x.length) return this.copy(x);
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["set"](this, x, y);
    return this;
  }

  copy(v) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["copy"](this, v);
    return this;
  }

  add(va, vb) {
    if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["add"](this, va, vb);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["add"](this, this, va);
    return this;
  }

  sub(va, vb) {
    if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["subtract"](this, va, vb);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["subtract"](this, this, va);
    return this;
  }

  multiply(v) {
    if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["multiply"](this, this, v);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, this, v);
    return this;
  }

  divide(v) {
    if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["divide"](this, this, v);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, this, 1 / v);
    return this;
  }

  inverse(v = this) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["inverse"](this, v);
    return this;
  } // Can't use 'length' as Array.prototype uses it


  len() {
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["length"](this);
  }

  distance(v) {
    if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["distance"](this, v);else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["length"](this);
  }

  squaredLen() {
    return this.squaredDistance();
  }

  squaredDistance(v) {
    if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["squaredDistance"](this, v);else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["squaredLength"](this);
  }

  negate(v = this) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["negate"](this, v);
    return this;
  }

  cross(va, vb) {
    if (vb) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](va, vb);
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](this, va);
  }

  scale(v) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["scale"](this, this, v);
    return this;
  }

  normalize() {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["normalize"](this, this);
    return this;
  }

  dot(v) {
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["dot"](this, v);
  }

  equals(v) {
    return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["exactEquals"](this, v);
  }

  applyMatrix3(mat3) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["transformMat3"](this, this, mat3);
    return this;
  }

  applyMatrix4(mat4) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["transformMat4"](this, this, mat4);
    return this;
  }

  lerp(v, a) {
    _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_0__["lerp"](this, this, v, a);
  }

  clone() {
    return new Vec2(this[0], this[1]);
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    return a;
  }

}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
const EPSILON = 0.000001;
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
;
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
;
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}
;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
;
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}
;
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
;
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
;
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
;
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
;
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
;
/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */

function cross(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}
;
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
;
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
;
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
;
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
;
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
/* harmony import */ var _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);

class Vec4 extends Array {
  constructor(x = 0, y = x, z = x, w = x) {
    super(x, y, z, w);
    return this;
  }

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  get w() {
    return this[3];
  }

  set x(v) {
    this[0] = v;
  }

  set y(v) {
    this[1] = v;
  }

  set z(v) {
    this[2] = v;
  }

  set w(v) {
    this[3] = v;
  }

  set(x, y, z, w) {
    if (x.length) return this.copy(x);
    _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["set"](this, x, y, z, w);
    return this;
  }

  copy(v) {
    _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["copy"](this, v);
    return this;
  }

  normalize() {
    _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_0__["normalize"](this, this);
    return this;
  }

  fromArray(a, o = 0) {
    this[0] = a[o];
    this[1] = a[o + 1];
    this[2] = a[o + 2];
    this[3] = a[o + 3];
    return this;
  }

  toArray(a = [], o = 0) {
    a[o] = this[0];
    a[o + 1] = this[1];
    a[o + 2] = this[2];
    a[o + 3] = this[3];
    return a;
  }

}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return Plane; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class Plane extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"] {
  constructor(gl, {
    width = 1,
    height = 1,
    widthSegments = 1,
    heightSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments; // Determine length of arrays

    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6; // Generate empty arrays once

    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

  static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
    const io = i;
    const segW = width / wSegs;
    const segH = height / hSegs;

    for (let iy = 0; iy <= hSegs; iy++) {
      let y = iy * segH - height / 2;

      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let x = ix * segW - width / 2;
        position[i * 3 + u] = x * uDir;
        position[i * 3 + v] = y * vDir;
        position[i * 3 + w] = depth / 2;
        normal[i * 3 + u] = 0;
        normal[i * 3 + v] = 0;
        normal[i * 3 + w] = depth >= 0 ? 1 : -1;
        uv[i * 2] = ix / wSegs;
        uv[i * 2 + 1] = 1 - iy / hSegs;
        if (iy === hSegs || ix === wSegs) continue;
        let a = io + ix + iy * (wSegs + 1);
        let b = io + ix + (iy + 1) * (wSegs + 1);
        let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
        let d = io + ix + iy * (wSegs + 1) + 1;
        index[ii * 6] = a;
        index[ii * 6 + 1] = b;
        index[ii * 6 + 2] = d;
        index[ii * 6 + 3] = b;
        index[ii * 6 + 4] = c;
        index[ii * 6 + 5] = d;
        ii++;
      }
    }
  }

}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Plane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);


class Box extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"] {
  constructor(gl, {
    width = 1,
    height = 1,
    depth = 1,
    widthSegments = 1,
    heightSegments = 1,
    depthSegments = 1,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const dSegs = depthSegments;
    const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
    const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let ii = 0; // left, right

    _Plane_js__WEBPACK_IMPORTED_MODULE_1__["Plane"].buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__["Plane"].buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i += (dSegs + 1) * (hSegs + 1), ii += dSegs * hSegs); // top, bottom

    _Plane_js__WEBPACK_IMPORTED_MODULE_1__["Plane"].buildPlane(position, normal, uv, index, width, depth, height, dSegs, hSegs, 0, 2, 1, 1, 1, i += (dSegs + 1) * (hSegs + 1), ii += dSegs * hSegs);
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__["Plane"].buildPlane(position, normal, uv, index, width, depth, -height, dSegs, hSegs, 0, 2, 1, 1, -1, i += (wSegs + 1) * (dSegs + 1), ii += wSegs * dSegs); // front, back

    _Plane_js__WEBPACK_IMPORTED_MODULE_1__["Plane"].buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i += (wSegs + 1) * (dSegs + 1), ii += wSegs * dSegs);
    _Plane_js__WEBPACK_IMPORTED_MODULE_1__["Plane"].buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i += (wSegs + 1) * (hSegs + 1), ii += wSegs * hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return Sphere; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


class Sphere extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"] {
  constructor(gl, {
    radius = 0.5,
    widthSegments = 16,
    heightSegments = Math.ceil(widthSegments * 0.5),
    phiStart = 0,
    phiLength = Math.PI * 2,
    thetaStart = 0,
    thetaLength = Math.PI,
    attributes = {}
  } = {}) {
    const wSegs = widthSegments;
    const hSegs = heightSegments;
    const pStart = phiStart;
    const pLength = phiLength;
    const tStart = thetaStart;
    const tLength = thetaLength;
    const num = (wSegs + 1) * (hSegs + 1);
    const numIndices = wSegs * hSegs * 6;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let iv = 0;
    let ii = 0;
    let te = tStart + tLength;
    const grid = [];
    let n = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__["Vec3"]();

    for (let iy = 0; iy <= hSegs; iy++) {
      let vRow = [];
      let v = iy / hSegs;

      for (let ix = 0; ix <= wSegs; ix++, i++) {
        let u = ix / wSegs;
        let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        let y = radius * Math.cos(tStart + v * tLength);
        let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        position[i * 3] = x;
        position[i * 3 + 1] = y;
        position[i * 3 + 2] = z;
        n.set(x, y, z).normalize();
        normal[i * 3] = n.x;
        normal[i * 3 + 1] = n.y;
        normal[i * 3 + 2] = n.z;
        uv[i * 2] = u;
        uv[i * 2 + 1] = 1 - v;
        vRow.push(iv++);
      }

      grid.push(vRow);
    }

    for (let iy = 0; iy < hSegs; iy++) {
      for (let ix = 0; ix < wSegs; ix++) {
        let a = grid[iy][ix + 1];
        let b = grid[iy][ix];
        let c = grid[iy + 1][ix];
        let d = grid[iy + 1][ix + 1];

        if (iy !== 0 || tStart > 0) {
          index[ii * 3] = a;
          index[ii * 3 + 1] = b;
          index[ii * 3 + 2] = d;
          ii++;
        }

        if (iy !== hSegs - 1 || te < Math.PI) {
          index[ii * 3] = b;
          index[ii * 3 + 1] = c;
          index[ii * 3 + 2] = d;
          ii++;
        }
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return Cylinder; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


class Cylinder extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"] {
  constructor(gl, {
    radiusTop = 0.5,
    radiusBottom = 0.5,
    height = 1,
    radialSegments = 8,
    heightSegments = 1,
    openEnded = false,
    thetaStart = 0,
    thetaLength = Math.PI * 2,
    attributes = {}
  } = {}) {
    const rSegs = radialSegments;
    const hSegs = heightSegments;
    const tStart = thetaStart;
    const tLength = thetaLength;
    const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
    const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
    const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;
    const position = new Float32Array(num * 3);
    const normal = new Float32Array(num * 3);
    const uv = new Float32Array(num * 2);
    const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    let i = 0;
    let ii = 0;
    const indexArray = [];
    addHeight();

    if (!openEnded) {
      if (radiusTop) addCap(true);
      if (radiusBottom) addCap(false);
    }

    function addHeight() {
      let x, y;
      const n = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_1__["Vec3"]();
      const slope = (radiusBottom - radiusTop) / height;

      for (y = 0; y <= hSegs; y++) {
        const indexRow = [];
        const v = y / hSegs;
        const r = v * (radiusBottom - radiusTop) + radiusTop;

        for (x = 0; x <= rSegs; x++) {
          const u = x / rSegs;
          const theta = u * tLength + tStart;
          const sinTheta = Math.sin(theta);
          const cosTheta = Math.cos(theta);
          position.set([r * sinTheta, (0.5 - v) * height, r * cosTheta], i * 3);
          n.set(sinTheta, slope, cosTheta).normalize();
          normal.set([n.x, n.y, n.z], i * 3);
          uv.set([u, 1 - v], i * 2);
          indexRow.push(i++);
        }

        indexArray.push(indexRow);
      }

      for (x = 0; x < rSegs; x++) {
        for (y = 0; y < hSegs; y++) {
          const a = indexArray[y][x];
          const b = indexArray[y + 1][x];
          const c = indexArray[y + 1][x + 1];
          const d = indexArray[y][x + 1];
          index.set([a, b, d, b, c, d], ii * 3);
          ii += 2;
        }
      }
    }

    function addCap(isTop) {
      let x;
      const r = isTop === true ? radiusTop : radiusBottom;
      const sign = isTop === true ? 1 : -1;
      const centerIndex = i;
      position.set([0, 0.5 * height * sign, 0], i * 3);
      normal.set([0, sign, 0], i * 3);
      uv.set([0.5, 0.5], i * 2);
      i++;

      for (x = 0; x <= rSegs; x++) {
        const u = x / rSegs;
        const theta = u * tLength + tStart;
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        position.set([r * sinTheta, 0.5 * height * sign, r * cosTheta], i * 3);
        normal.set([0, sign, 0], i * 3);
        uv.set([cosTheta * 0.5 + 0.5, sinTheta * 0.5 * sign + 0.5], i * 2);
        i++;
      }

      for (x = 0; x < rSegs; x++) {
        const j = centerIndex + x + 1;

        if (isTop) {
          index.set([j, j + 1, centerIndex], ii * 3);
        } else {
          index.set([j + 1, j, centerIndex], ii * 3);
        }

        ii++;
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    super(gl, attributes);
  }

}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class Triangle extends _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"] {
  constructor(gl, {
    attributes = {}
  } = {}) {
    Object.assign(attributes, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 0, 2, 0, 0, 2])
      }
    });
    super(gl, attributes);
  }

}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return Orbit; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.
// TODO: abstract event handlers so can be fed from other sources
// TODO: make scroll zoom more accurate than just >/< zero
// TODO: be able to pass in new camera position


const STATE = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  DOLLY_PAN: 3
};
const tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tempVec2a = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
const tempVec2b = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
function Orbit(object, {
  element = document,
  enabled = true,
  target = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
  ease = 0.25,
  inertia = 0.85,
  enableRotate = true,
  rotateSpeed = 0.1,
  enableZoom = true,
  zoomSpeed = 1,
  enablePan = true,
  panSpeed = 0.1,
  minPolarAngle = 0,
  maxPolarAngle = Math.PI,
  minAzimuthAngle = -Infinity,
  maxAzimuthAngle = Infinity,
  minDistance = 0,
  maxDistance = Infinity
} = {}) {
  this.enabled = enabled;
  this.target = target; // Catch attempts to disable - set to 1 so has no effect

  ease = ease || 1;
  inertia = inertia || 1;
  this.minDistance = minDistance;
  this.maxDistance = maxDistance; // current position in sphericalTarget coordinates

  const sphericalDelta = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  const sphericalTarget = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  const spherical = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  const panDelta = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](); // Grab initial position values

  const offset = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
  offset.copy(object.position).sub(this.target);
  spherical.radius = sphericalTarget.radius = offset.distance();
  spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
  spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));

  this.update = () => {
    // apply delta
    sphericalTarget.radius *= sphericalDelta.radius;
    sphericalTarget.theta += sphericalDelta.theta;
    sphericalTarget.phi += sphericalDelta.phi; // apply boundaries

    sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
    sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
    sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius)); // ease values

    spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
    spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
    spherical.radius += (sphericalTarget.radius - spherical.radius) * ease; // apply pan to target. As offset is relative to target, it also shifts

    this.target.add(panDelta); // apply rotation to offset

    let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
    offset.x = sinPhiRadius * Math.sin(spherical.theta);
    offset.y = spherical.radius * Math.cos(spherical.phi);
    offset.z = sinPhiRadius * Math.cos(spherical.theta); // Apply updated values to object

    object.position.copy(this.target).add(offset);
    object.lookAt(this.target); // Apply inertia to values

    sphericalDelta.theta *= inertia;
    sphericalDelta.phi *= inertia;
    panDelta.multiply(inertia); // Reset scale every frame to avoid applying scale multiple times

    sphericalDelta.radius = 1;
  }; // Everything below here just updates panDelta and sphericalDelta
  // Using those two objects' values, the orbit is calculated


  const rotateStart = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
  const panStart = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
  const dollyStart = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
  let state = STATE.NONE;
  this.mouseButtons = {
    ORBIT: 0,
    ZOOM: 1,
    PAN: 2
  };

  function getZoomScale() {
    return Math.pow(0.95, zoomSpeed);
  }

  function panLeft(distance, m) {
    tempVec3.set(m[0], m[1], m[2]);
    tempVec3.multiply(-distance);
    panDelta.add(tempVec3);
  }

  function panUp(distance, m) {
    tempVec3.set(m[4], m[5], m[6]);
    tempVec3.multiply(distance);
    panDelta.add(tempVec3);
  }

  const pan = (deltaX, deltaY) => {
    let el = element === document ? document.body : element;
    tempVec3.copy(object.position).sub(this.target);
    let targetDistance = tempVec3.distance();
    targetDistance *= Math.tan((object.fov || 45) / 2 * Math.PI / 180.0);
    panLeft(2 * deltaX * targetDistance / el.clientHeight, object.matrix);
    panUp(2 * deltaY * targetDistance / el.clientHeight, object.matrix);
  };

  function dolly(dollyScale) {
    sphericalDelta.radius /= dollyScale;
  }

  function handleMoveRotate(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, rotateStart).multiply(rotateSpeed);
    let el = element === document ? document.body : element;
    sphericalDelta.theta -= 2 * Math.PI * tempVec2b.x / el.clientHeight;
    sphericalDelta.phi -= 2 * Math.PI * tempVec2b.y / el.clientHeight;
    rotateStart.copy(tempVec2a);
  }

  function handleMouseMoveDolly(e) {
    tempVec2a.set(e.clientX, e.clientY);
    tempVec2b.sub(tempVec2a, dollyStart);

    if (tempVec2b.y > 0) {
      dolly(getZoomScale());
    } else if (tempVec2b.y < 0) {
      dolly(1 / getZoomScale());
    }

    dollyStart.copy(tempVec2a);
  }

  function handleMovePan(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, panStart).multiply(panSpeed);
    pan(tempVec2b.x, tempVec2b.y);
    panStart.copy(tempVec2a);
  }

  function handleTouchStartDollyPan(e) {
    if (enableZoom) {
      let dx = e.touches[0].pageX - e.touches[1].pageX;
      let dy = e.touches[0].pageY - e.touches[1].pageY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }

    if (enablePan) {
      let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      panStart.set(x, y);
    }
  }

  function handleTouchMoveDollyPan(e) {
    if (enableZoom) {
      let dx = e.touches[0].pageX - e.touches[1].pageX;
      let dy = e.touches[0].pageY - e.touches[1].pageY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      tempVec2a.set(0, distance);
      tempVec2b.set(0, Math.pow(tempVec2a.y / dollyStart.y, zoomSpeed));
      dolly(tempVec2b.y);
      dollyStart.copy(tempVec2a);
    }

    if (enablePan) {
      let x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      let y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      handleMovePan(x, y);
    }
  }

  const onMouseDown = e => {
    if (!this.enabled) return;

    switch (e.button) {
      case this.mouseButtons.ORBIT:
        if (enableRotate === false) return;
        rotateStart.set(e.clientX, e.clientY);
        state = STATE.ROTATE;
        break;

      case this.mouseButtons.ZOOM:
        if (enableZoom === false) return;
        dollyStart.set(e.clientX, e.clientY);
        state = STATE.DOLLY;
        break;

      case this.mouseButtons.PAN:
        if (enablePan === false) return;
        panStart.set(e.clientX, e.clientY);
        state = STATE.PAN;
        break;
    }

    if (state !== STATE.NONE) {
      window.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('mouseup', onMouseUp, false);
    }
  };

  const onMouseMove = e => {
    if (!this.enabled) return;

    switch (state) {
      case STATE.ROTATE:
        if (enableRotate === false) return;
        handleMoveRotate(e.clientX, e.clientY);
        break;

      case STATE.DOLLY:
        if (enableZoom === false) return;
        handleMouseMoveDolly(e);
        break;

      case STATE.PAN:
        if (enablePan === false) return;
        handleMovePan(e.clientX, e.clientY);
        break;
    }
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove, false);
    window.removeEventListener('mouseup', onMouseUp, false);
    state = STATE.NONE;
  };

  const onMouseWheel = e => {
    if (!this.enabled || !enableZoom || state !== STATE.NONE && state !== STATE.ROTATE) return;
    e.stopPropagation();
    e.preventDefault();

    if (e.deltaY < 0) {
      dolly(1 / getZoomScale());
    } else if (e.deltaY > 0) {
      dolly(getZoomScale());
    }
  };

  const onTouchStart = e => {
    if (!this.enabled) return;
    e.preventDefault();

    switch (e.touches.length) {
      case 1:
        if (enableRotate === false) return;
        rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
        state = STATE.ROTATE;
        break;

      case 2:
        if (enableZoom === false && enablePan === false) return;
        handleTouchStartDollyPan(e);
        state = STATE.DOLLY_PAN;
        break;

      default:
        state = STATE.NONE;
    }
  };

  const onTouchMove = e => {
    if (!this.enabled) return;
    e.preventDefault();
    e.stopPropagation();

    switch (e.touches.length) {
      case 1:
        if (enableRotate === false) return;
        handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
        break;

      case 2:
        if (enableZoom === false && enablePan === false) return;
        handleTouchMoveDollyPan(e);
        break;

      default:
        state = STATE.NONE;
    }
  };

  const onTouchEnd = () => {
    if (!this.enabled) return;
    state = STATE.NONE;
  };

  const onContextMenu = e => {
    if (!this.enabled) return;
    e.preventDefault();
  };

  function addHandlers() {
    element.addEventListener('contextmenu', onContextMenu, false);
    element.addEventListener('mousedown', onMouseDown, false);
    element.addEventListener('wheel', onMouseWheel, {
      passive: false
    });
    element.addEventListener('touchstart', onTouchStart, {
      passive: false
    });
    element.addEventListener('touchend', onTouchEnd, false);
    element.addEventListener('touchmove', onTouchMove, {
      passive: false
    });
  }

  this.remove = function () {
    element.removeEventListener('contextmenu', onContextMenu);
    element.removeEventListener('mousedown', onMouseDown);
    element.removeEventListener('wheel', onMouseWheel);
    element.removeEventListener('touchstart', onTouchStart);
    element.removeEventListener('touchend', onTouchEnd);
    element.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  addHandlers();
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raycast", function() { return Raycast; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
// TODO: add barycentric ?


const tempVec3a = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tempVec3b = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tempVec3c = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["Mat4"]();
class Raycast {
  constructor(gl) {
    this.gl = gl;
    this.origin = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
    this.direction = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
  } // Set ray from mouse unprojection


  castMouse(camera, mouse = [0, 0]) {
    if (camera.type === 'orthographic') {
      // Set origin
      // Since camera is orthographic, origin is not the camera position
      const {
        left,
        right,
        bottom,
        top,
        zoom
      } = camera;
      const x = left / zoom + (right - left) / zoom * (mouse[0] * .5 + .5);
      const y = bottom / zoom + (top - bottom) / zoom * (mouse[1] * .5 + .5);
      this.origin.set(x, y, 0);
      this.origin.applyMatrix4(camera.worldMatrix); // Set direction
      // https://community.khronos.org/t/get-direction-from-transformation-matrix-or-quat/65502/2

      this.direction.x = -camera.worldMatrix[8];
      this.direction.y = -camera.worldMatrix[9];
      this.direction.z = -camera.worldMatrix[10];
    } else {
      // Set origin
      camera.worldMatrix.getTranslation(this.origin); // Set direction

      this.direction.set(mouse[0], mouse[1], 0.5);
      camera.unproject(this.direction);
      this.direction.sub(this.origin).normalize();
    }
  }

  intersectBounds(meshes) {
    if (!Array.isArray(meshes)) meshes = [meshes];
    const invWorldMat4 = tempMat4;
    const origin = tempVec3a;
    const direction = tempVec3b;
    const hits = [];
    meshes.forEach(mesh => {
      // Create bounds
      if (!mesh.geometry.bounds) mesh.geometry.computeBoundingBox();
      if (mesh.geometry.raycast === 'sphere' && mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere(); // Take world space ray and make it object space to align with bounding box

      invWorldMat4.inverse(mesh.worldMatrix);
      origin.copy(this.origin).applyMatrix4(invWorldMat4);
      direction.copy(this.direction).transformDirection(invWorldMat4);
      let localDistance = 0;

      if (mesh.geometry.raycast === 'sphere') {
        localDistance = this.intersectSphere(mesh.geometry.bounds, origin, direction);
      } else {
        localDistance = this.intersectBox(mesh.geometry.bounds, origin, direction);
      }

      if (!localDistance) return; // Create object on mesh to avoid generating lots of objects

      if (!mesh.hit) mesh.hit = {
        localPoint: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
        point: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]()
      };
      mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
      mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
      mesh.hit.distance = mesh.hit.point.distance(this.origin);
      hits.push(mesh);
    });
    hits.sort((a, b) => a.hit.distance - b.hit.distance);
    return hits;
  }

  intersectSphere(sphere, origin = this.origin, direction = this.direction) {
    const ray = tempVec3c;
    ray.sub(sphere.center, origin);
    const tca = ray.dot(direction);
    const d2 = ray.dot(ray) - tca * tca;
    const radius2 = sphere.radius * sphere.radius;
    if (d2 > radius2) return 0;
    const thc = Math.sqrt(radius2 - d2);
    const t0 = tca - thc;
    const t1 = tca + thc;
    if (t0 < 0 && t1 < 0) return 0;
    if (t0 < 0) return t1;
    return t0;
  } // Ray AABB - Ray Axis aligned bounding box testing


  intersectBox(box, origin = this.origin, direction = this.direction) {
    let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
    const invdirx = 1 / direction.x;
    const invdiry = 1 / direction.y;
    const invdirz = 1 / direction.z;
    const min = box.min;
    const max = box.max;
    tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
    tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
    tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
    tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
    if (tmin > tYmax || tYmin > tmax) return 0;
    if (tYmin > tmin) tmin = tYmin;
    if (tYmax < tmax) tmax = tYmax;
    tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
    tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
    if (tmin > tZmax || tZmin > tmax) return 0;
    if (tZmin > tmin) tmin = tZmin;
    if (tZmax < tmax) tmax = tZmax;
    if (tmax < 0) return 0;
    return tmin >= 0 ? tmin : tmax;
  }

}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curve", function() { return Curve; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

const CATMULLROM = 'catmullrom';
const CUBICBEZIER = 'cubicbezier';
const QUADRATICBEZIER = 'quadraticbezier'; // temp

const _a0 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
      _a1 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
      _a2 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](),
      _a3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
/**
 * Get the control points of cubic bezier curve.
 * @param {*} i
 * @param {*} a
 * @param {*} b
 */


function getCtrlPoint(points, i, a = 0.168, b = 0.168) {
  if (i < 1) {
    _a0.sub(points[1], points[0]).scale(a).add(points[0]);
  } else {
    _a0.sub(points[i + 1], points[i - 1]).scale(a).add(points[i]);
  }

  if (i > points.length - 3) {
    const last = points.length - 1;

    _a1.sub(points[last - 1], points[last]).scale(b).add(points[last]);
  } else {
    _a1.sub(points[i], points[i + 2]).scale(b).add(points[i + 1]);
  }

  return [_a0.clone(), _a1.clone()];
}

function getQuadraticBezierPoint(t, p0, c0, p1) {
  const k = 1 - t;

  _a0.copy(p0).scale(k ** 2);

  _a1.copy(c0).scale(2 * k * t);

  _a2.copy(p1).scale(t ** 2);

  const ret = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
  ret.add(_a0, _a1).add(_a2);
  return ret;
}

function getCubicBezierPoint(t, p0, c0, c1, p1) {
  const k = 1 - t;

  _a0.copy(p0).scale(k ** 3);

  _a1.copy(c0).scale(3 * k ** 2 * t);

  _a2.copy(c1).scale(3 * k * t ** 2);

  _a3.copy(p1).scale(t ** 3);

  const ret = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
  ret.add(_a0, _a1).add(_a2).add(_a3);
  return ret;
}

class Curve {
  constructor({
    points = [new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](0, 0, 0), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](0, 1, 0), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](1, 1, 0), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](1, 0, 0)],
    divisions = 12,
    type = CATMULLROM
  } = {}) {
    this.points = points;
    this.divisions = divisions;
    this.type = type;
  }

  _getQuadraticBezierPoints(divisions = this.divisions) {
    const points = [];
    const count = this.points.length;

    if (count < 3) {
      console.warn('Not enough points provided.');
      return [];
    }

    const p0 = this.points[0];
    let c0 = this.points[1],
        p1 = this.points[2];

    for (let i = 0; i <= divisions; i++) {
      const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
      points.push(p);
    }

    let offset = 3;

    while (count - offset > 0) {
      p0.copy(p1);
      c0 = p1.scale(2).sub(c0);
      p1 = this.points[offset];

      for (let i = 1; i <= divisions; i++) {
        const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
        points.push(p);
      }

      offset++;
    }

    return points;
  }

  _getCubicBezierPoints(divisions = this.divisions) {
    const points = [];
    const count = this.points.length;

    if (count < 4) {
      console.warn('Not enough points provided.');
      return [];
    }

    let p0 = this.points[0],
        c0 = this.points[1],
        c1 = this.points[2],
        p1 = this.points[3];

    for (let i = 0; i <= divisions; i++) {
      const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
      points.push(p);
    }

    let offset = 4;

    while (count - offset > 1) {
      p0.copy(p1);
      c0 = p1.scale(2).sub(c1);
      c1 = this.points[offset];
      p1 = this.points[offset + 1];

      for (let i = 1; i <= divisions; i++) {
        const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
        points.push(p);
      }

      offset += 2;
    }

    return points;
  }

  _getCatmullRomPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
    const points = [];
    const count = this.points.length;

    if (count <= 2) {
      return this.points;
    }

    let p0;
    this.points.forEach((p, i) => {
      if (i === 0) {
        p0 = p;
      } else {
        const [c0, c1] = getCtrlPoint(this.points, i - 1, a, b);
        const c = new Curve({
          points: [p0, c0, c1, p],
          type: CUBICBEZIER
        });
        points.pop();
        points.push(...c.getPoints(divisions));
        p0 = p;
      }
    });
    return points;
  }

  getPoints(divisions = this.divisions, a = 0.168, b = 0.168) {
    const type = this.type;

    if (type === QUADRATICBEZIER) {
      return this._getQuadraticBezierPoints(divisions);
    }

    if (type === CUBICBEZIER) {
      return this._getCubicBezierPoints(divisions);
    }

    if (type === CATMULLROM) {
      return this._getCatmullRomPoints(divisions, a, b);
    }

    return this.points;
  }

}
Curve.CATMULLROM = CATMULLROM;
Curve.CUBICBEZIER = CUBICBEZIER;
Curve.QUADRATICBEZIER = QUADRATICBEZIER;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
// TODO: Destroy render targets if size changed and exists




class Post {
  constructor(gl, {
    width,
    height,
    dpr,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    minFilter = gl.LINEAR,
    magFilter = gl.LINEAR,
    geometry = new _Triangle_js__WEBPACK_IMPORTED_MODULE_3__["Triangle"](gl),
    targetOnly = null
  } = {}) {
    this.gl = gl;
    this.options = {
      wrapS,
      wrapT,
      minFilter,
      magFilter
    };
    this.passes = [];
    this.geometry = geometry;
    this.uniform = {
      value: null
    };
    this.targetOnly = targetOnly;
    const fbo = this.fbo = {
      read: null,
      write: null,
      swap: () => {
        let temp = fbo.read;
        fbo.read = fbo.write;
        fbo.write = temp;
      }
    };
    this.resize({
      width,
      height,
      dpr
    });
  }

  addPass({
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    textureUniform = 'tMap',
    enabled = true
  } = {}) {
    uniforms[textureUniform] = {
      value: this.fbo.read.texture
    };
    const program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_0__["Program"](this.gl, {
      vertex,
      fragment,
      uniforms
    });
    const mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_1__["Mesh"](this.gl, {
      geometry: this.geometry,
      program
    });
    const pass = {
      mesh,
      program,
      uniforms,
      enabled,
      textureUniform
    };
    this.passes.push(pass);
    return pass;
  }

  resize({
    width,
    height,
    dpr
  } = {}) {
    if (dpr) this.dpr = dpr;

    if (width) {
      this.width = width;
      this.height = height || width;
    }

    dpr = this.dpr || this.gl.renderer.dpr;
    width = (this.width || this.gl.renderer.width) * dpr;
    height = (this.height || this.gl.renderer.height) * dpr;
    this.options.width = width;
    this.options.height = height;
    this.fbo.read = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__["RenderTarget"](this.gl, this.options);
    this.fbo.write = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__["RenderTarget"](this.gl, this.options);
  } // Uses same arguments as renderer.render


  render({
    scene,
    camera,
    target = null,
    update = true,
    sort = true,
    frustumCull = true
  }) {
    const enabledPasses = this.passes.filter(pass => pass.enabled);
    this.gl.renderer.render({
      scene,
      camera,
      target: enabledPasses.length || !target && this.targetOnly ? this.fbo.write : target,
      update,
      sort,
      frustumCull
    });
    this.fbo.swap();
    enabledPasses.forEach((pass, i) => {
      pass.mesh.program.uniforms[pass.textureUniform].value = this.fbo.read.texture;
      this.gl.renderer.render({
        scene: pass.mesh,
        target: i === enabledPasses.length - 1 && (target || !this.targetOnly) ? target : this.fbo.write,
        clear: i === enabledPasses.length - 1 ? true : false
      });
      this.fbo.swap();
    });
    this.uniform.value = this.fbo.read.texture;
  }

}
const defaultVertex =
/* glsl */
`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skin", function() { return Skin; });
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _core_Transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _Animation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);





const tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__["Mat4"]();
class Skin extends _core_Mesh_js__WEBPACK_IMPORTED_MODULE_0__["Mesh"] {
  constructor(gl, {
    rig,
    geometry,
    program,
    mode = gl.TRIANGLES
  } = {}) {
    super(gl, {
      geometry,
      program,
      mode
    });
    this.createBones(rig);
    this.createBoneTexture();
    this.animations = [];
    Object.assign(this.program.uniforms, {
      boneTexture: {
        value: this.boneTexture
      },
      boneTextureSize: {
        value: this.boneTextureSize
      }
    });
  }

  createBones(rig) {
    // Create root so that can simply update world matrix of whole skeleton
    this.root = new _core_Transform_js__WEBPACK_IMPORTED_MODULE_1__["Transform"](); // Create bones

    this.bones = [];
    if (!rig.bones || !rig.bones.length) return;

    for (let i = 0; i < rig.bones.length; i++) {
      const bone = new _core_Transform_js__WEBPACK_IMPORTED_MODULE_1__["Transform"](); // Set initial values (bind pose)

      bone.position.fromArray(rig.bindPose.position, i * 3);
      bone.quaternion.fromArray(rig.bindPose.quaternion, i * 4);
      bone.scale.fromArray(rig.bindPose.scale, i * 3);
      this.bones.push(bone);
    }

    ; // Once created, set the hierarchy

    rig.bones.forEach((data, i) => {
      this.bones[i].name = data.name;
      if (data.parent === -1) return this.bones[i].setParent(this.root);
      this.bones[i].setParent(this.bones[data.parent]);
    }); // Then update to calculate world matrices

    this.root.updateMatrixWorld(true); // Store inverse of bind pose to calculate differences

    this.bones.forEach(bone => {
      bone.bindInverse = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_2__["Mat4"](...bone.worldMatrix).inverse();
    });
  }

  createBoneTexture() {
    if (!this.bones.length) return;
    const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
    this.boneMatrices = new Float32Array(size * size * 4);
    this.boneTextureSize = size;
    this.boneTexture = new _core_Texture_js__WEBPACK_IMPORTED_MODULE_3__["Texture"](this.gl, {
      image: this.boneMatrices,
      generateMipmaps: false,
      type: this.gl.FLOAT,
      internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA16F : this.gl.RGBA,
      flipY: false,
      width: size
    });
  }

  addAnimation(data) {
    const animation = new _Animation_js__WEBPACK_IMPORTED_MODULE_4__["Animation"]({
      objects: this.bones,
      data
    });
    this.animations.push(animation);
    return animation;
  }

  update() {
    // Calculate combined animation weight
    let total = 0;
    this.animations.forEach(animation => total += animation.weight);
    this.animations.forEach((animation, i) => {
      // force first animation to set in order to reset frame
      animation.update(total, i === 0);
    });
  }

  draw({
    camera
  } = {}) {
    // Update world matrices manually, as not part of scene graph
    this.root.updateMatrixWorld(true); // Update bone texture

    this.bones.forEach((bone, i) => {
      // Find difference between current and bind pose
      tempMat4.multiply(bone.worldMatrix, bone.bindInverse);
      this.boneMatrices.set(tempMat4, i * 16);
    });
    if (this.boneTexture) this.boneTexture.needsUpdate = true;
    super.draw({
      camera
    });
  }

}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


const prevPos = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const prevRot = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
const prevScl = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const nextPos = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const nextRot = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
const nextScl = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
class Animation {
  constructor({
    objects,
    data
  }) {
    this.objects = objects;
    this.data = data;
    this.elapsed = 0;
    this.weight = 1;
    this.duration = data.frames.length - 1;
  }

  update(totalWeight = 1, isSet) {
    const weight = isSet ? 1 : this.weight / totalWeight;
    const elapsed = this.elapsed % this.duration;
    const floorFrame = Math.floor(elapsed);
    const blend = elapsed - floorFrame;
    const prevKey = this.data.frames[floorFrame];
    const nextKey = this.data.frames[(floorFrame + 1) % this.duration];
    this.objects.forEach((object, i) => {
      prevPos.fromArray(prevKey.position, i * 3);
      prevRot.fromArray(prevKey.quaternion, i * 4);
      prevScl.fromArray(prevKey.scale, i * 3);
      nextPos.fromArray(nextKey.position, i * 3);
      nextRot.fromArray(nextKey.quaternion, i * 4);
      nextScl.fromArray(nextKey.scale, i * 3);
      prevPos.lerp(nextPos, blend);
      prevRot.slerp(nextRot, blend);
      prevScl.lerp(nextScl, blend);
      object.position.lerp(prevPos, weight);
      object.quaternion.slerp(prevRot, weight);
      object.scale.lerp(prevScl, weight);
    });
  }

}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
function Text({
  font,
  text,
  width = Infinity,
  align = 'left',
  size = 1,
  letterSpacing = 0,
  lineHeight = 1.4,
  wordSpacing = 0,
  wordBreak = false
}) {
  const _this = this;

  let glyphs, buffers;
  let fontHeight, baseline, scale;
  const newline = /\n/;
  const whitespace = /\s/;
  {
    parseFont();
    createGeometry();
  }

  function parseFont() {
    glyphs = {};
    font.chars.forEach(d => glyphs[d.char] = d);
  }

  function createGeometry() {
    fontHeight = font.common.lineHeight;
    baseline = font.common.base; // Use baseline so that actual text height is as close to 'size' value as possible

    scale = size / baseline; // Strip spaces and newlines to get actual character length for buffers

    let chars = text.replace(/[ \n]/g, '');
    let numChars = chars.length; // Create output buffers

    buffers = {
      position: new Float32Array(numChars * 4 * 3),
      uv: new Float32Array(numChars * 4 * 2),
      id: new Float32Array(numChars * 4),
      index: new Uint16Array(numChars * 6)
    }; // Set values for buffers that don't require calculation

    for (let i = 0; i < numChars; i++) {
      buffers.id[i] = i;
      buffers.index.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6);
    }

    layout();
  }

  function layout() {
    const lines = [];
    let cursor = 0;
    let wordCursor = 0;
    let wordWidth = 0;
    let line = newLine();

    function newLine() {
      const line = {
        width: 0,
        glyphs: []
      };
      lines.push(line);
      wordCursor = cursor;
      wordWidth = 0;
      return line;
    }

    let maxTimes = 100;
    let count = 0;

    while (cursor < text.length && count < maxTimes) {
      count++;
      const char = text[cursor]; // Skip whitespace at start of line

      if (!line.width && whitespace.test(char)) {
        cursor++;
        wordCursor = cursor;
        wordWidth = 0;
        continue;
      } // If newline char, skip to next line


      if (newline.test(char)) {
        cursor++;
        line = newLine();
        continue;
      }

      const glyph = glyphs[char]; // Find any applicable kern pairs

      if (line.glyphs.length) {
        const prevGlyph = line.glyphs[line.glyphs.length - 1][0];
        let kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
        line.width += kern;
        wordWidth += kern;
      } // add char to line


      line.glyphs.push([glyph, line.width]); // calculate advance for next glyph

      let advance = 0; // If whitespace, update location of current word for line breaks

      if (whitespace.test(char)) {
        wordCursor = cursor;
        wordWidth = 0; // Add wordspacing

        advance += wordSpacing * size;
      } else {
        // Add letterspacing
        advance += letterSpacing * size;
      }

      advance += glyph.xadvance * scale;
      line.width += advance;
      wordWidth += advance; // If width defined

      if (line.width > width) {
        // If can break words, undo latest glyph if line not empty and create new line
        if (wordBreak && line.glyphs.length > 1) {
          line.width -= advance;
          line.glyphs.pop();
          line = newLine();
          continue; // If not first word, undo current word and cursor and create new line
        } else if (!wordBreak && wordWidth !== line.width) {
          let numGlyphs = cursor - wordCursor + 1;
          line.glyphs.splice(-numGlyphs, numGlyphs);
          cursor = wordCursor;
          line.width -= wordWidth;
          line = newLine();
          continue;
        }
      }

      cursor++;
    } // Remove last line if empty


    if (!line.width) lines.pop();
    populateBuffers(lines);
  }

  function populateBuffers(lines) {
    const texW = font.common.scaleW;
    const texH = font.common.scaleH; // For all fonts tested, a little offset was needed to be right on the baseline, hence 0.07.

    let y = 0.07 * size;
    let j = 0;

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      let line = lines[lineIndex];

      for (let i = 0; i < line.glyphs.length; i++) {
        const glyph = line.glyphs[i][0];
        let x = line.glyphs[i][1];

        if (align === 'center') {
          x -= line.width * 0.5;
        } else if (align === 'right') {
          x -= line.width;
        } // If space, don't add to geometry


        if (whitespace.test(glyph.char)) continue; // Apply char sprite offsets

        x += glyph.xoffset * scale;
        y -= glyph.yoffset * scale; // each letter is a quad. axis bottom left

        let w = glyph.width * scale;
        let h = glyph.height * scale;
        buffers.position.set([x, y - h, 0, x, y, 0, x + w, y - h, 0, x + w, y, 0], j * 4 * 3);
        let u = glyph.x / texW;
        let uw = glyph.width / texW;
        let v = 1.0 - glyph.y / texH;
        let vh = glyph.height / texH;
        buffers.uv.set([u, v - vh, u, v, u + uw, v - vh, u + uw, v], j * 4 * 2); // Reset cursor to baseline

        y += glyph.yoffset * scale;
        j++;
      }

      y -= size * lineHeight;
    }

    _this.buffers = buffers;
    _this.numLines = lines.length;
    _this.height = _this.numLines * size * lineHeight;
  }

  function getKernPairOffset(id1, id2) {
    for (let i = 0; i < font.kernings.length; i++) {
      let k = font.kernings[i];
      if (k.first < id1) continue;
      if (k.second < id2) continue;
      if (k.first > id1) return 0;
      if (k.first === id1 && k.second > id2) return 0;
      return k.amount;
    }

    return 0;
  } // Update buffers to layout with new layout


  this.resize = function (options) {
    ({
      width
    } = options);
    layout();
  }; // Completely change text (like creating new Text)


  this.update = function (options) {
    ({
      text
    } = options);
    createGeometry();
  };
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalProgram", function() { return NormalProgram; });
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const vertex =
/* glsl */
`
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const fragment =
/* glsl */
`
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;
function NormalProgram(gl) {
  return new _core_Program_js__WEBPACK_IMPORTED_MODULE_0__["Program"](gl, {
    vertex: vertex,
    fragment: fragment,
    cullFace: null
  });
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flowmap", function() { return Flowmap; });
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);





class Flowmap {
  constructor(gl, {
    size = 128,
    // default size of the render targets
    falloff = 0.3,
    // size of the stamp, percentage of the size
    alpha = 1,
    // opacity of the stamp
    dissipation = 0.98,
    // affects the speed that the stamp fades. Closer to 1 is slower
    type // Pass in gl.FLOAT to force it, defaults to gl.HALF_FLOAT

  } = {}) {
    const _this = this;

    this.gl = gl; // output uniform containing render target textures

    this.uniform = {
      value: null
    };
    this.mask = {
      read: null,
      write: null,
      // Helper function to ping pong the render targets and update the uniform
      swap: () => {
        let temp = _this.mask.read;
        _this.mask.read = _this.mask.write;
        _this.mask.write = temp;
        _this.uniform.value = _this.mask.read.texture;
      }
    };
    {
      createFBOs();
      this.aspect = 1;
      this.mouse = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["Vec2"]();
      this.velocity = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["Vec2"]();
      this.mesh = initProgram();
    }

    function createFBOs() {
      // Requested type not supported, fall back to half float
      if (!type) type = gl.HALF_FLOAT || gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES;

      let minFilter = (() => {
        if (gl.renderer.isWebgl2) return gl.LINEAR;
        if (gl.renderer.extensions[`OES_texture_${type === gl.FLOAT ? '' : 'half_'}float_linear`]) return gl.LINEAR;
        return gl.NEAREST;
      })();

      const options = {
        width: size,
        height: size,
        type,
        format: gl.RGBA,
        internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
        minFilter,
        depth: false
      };
      _this.mask.read = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_0__["RenderTarget"](gl, options);
      _this.mask.write = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_0__["RenderTarget"](gl, options);

      _this.mask.swap();
    }

    function initProgram() {
      return new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_2__["Mesh"](gl, {
        // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
        geometry: new _Triangle_js__WEBPACK_IMPORTED_MODULE_4__["Triangle"](gl),
        program: new _core_Program_js__WEBPACK_IMPORTED_MODULE_1__["Program"](gl, {
          vertex,
          fragment,
          uniforms: {
            tMap: _this.uniform,
            uFalloff: {
              value: falloff * 0.5
            },
            uAlpha: {
              value: alpha
            },
            uDissipation: {
              value: dissipation
            },
            // User needs to update these
            uAspect: {
              value: 1
            },
            uMouse: {
              value: _this.mouse
            },
            uVelocity: {
              value: _this.velocity
            }
          },
          depthTest: false
        })
      });
    }
  }

  update() {
    this.mesh.program.uniforms.uAspect.value = this.aspect;
    this.gl.renderer.render({
      scene: this.mesh,
      target: this.mask.write,
      clear: false
    });
    this.mask.swap();
  }

}
const vertex =
/* glsl */
`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const fragment =
/* glsl */
`
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GPGPU", function() { return GPGPU; });
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);





class GPGPU {
  constructor(gl, {
    // Always pass in array of vec4s (RGBA values within texture)
    data = new Float32Array(16),
    geometry = new _Triangle_js__WEBPACK_IMPORTED_MODULE_4__["Triangle"](gl),
    type // Pass in gl.FLOAT to force it, defaults to gl.HALF_FLOAT

  }) {
    this.gl = gl;
    const initialData = data;
    this.passes = [];
    this.geometry = geometry;
    this.dataLength = initialData.length / 4; // Windows and iOS only like power of 2 textures
    // Find smallest PO2 that fits data

    this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)); // Create coords for output texture

    this.coords = new Float32Array(this.dataLength * 2);

    for (let i = 0; i < this.dataLength; i++) {
      const x = i % this.size / this.size; // to add 0.5 to be center pixel ?

      const y = Math.floor(i / this.size) / this.size;
      this.coords.set([x, y], i * 2);
    } // Use original data if already correct length of PO2 texture, else copy to new array of correct length


    const floatArray = (() => {
      if (initialData.length === this.size * this.size * 4) {
        return initialData;
      } else {
        const a = new Float32Array(this.size * this.size * 4);
        a.set(initialData);
        return a;
      }
    })(); // Create output texture uniform using input float texture with initial data


    this.uniform = {
      value: new _core_Texture_js__WEBPACK_IMPORTED_MODULE_2__["Texture"](gl, {
        image: floatArray,
        target: gl.TEXTURE_2D,
        type: gl.FLOAT,
        format: gl.RGBA,
        internalFormat: gl.renderer.isWebgl2 ? gl.RGBA32F : gl.RGBA,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
        generateMipmaps: false,
        minFilter: gl.NEAREST,
        magFilter: gl.NEAREST,
        width: this.size,
        flipY: false
      })
    }; // Create FBOs

    const options = {
      width: this.size,
      height: this.size,
      type: type || gl.HALF_FLOAT || gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES,
      format: gl.RGBA,
      internalFormat: gl.renderer.isWebgl2 ? type === gl.FLOAT ? gl.RGBA32F : gl.RGBA16F : gl.RGBA,
      minFilter: gl.NEAREST,
      depth: false,
      unpackAlignment: 1
    };
    this.fbo = {
      read: new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_3__["RenderTarget"](gl, options),
      write: new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_3__["RenderTarget"](gl, options),
      swap: () => {
        let temp = this.fbo.read;
        this.fbo.read = this.fbo.write;
        this.fbo.write = temp;
        this.uniform.value = this.fbo.read.texture;
      }
    };
  }

  addPass({
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    textureUniform = 'tMap',
    enabled = true
  } = {}) {
    uniforms[textureUniform] = this.uniform;
    const program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_0__["Program"](this.gl, {
      vertex,
      fragment,
      uniforms
    });
    const mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_1__["Mesh"](this.gl, {
      geometry: this.geometry,
      program
    });
    const pass = {
      mesh,
      program,
      uniforms,
      enabled,
      textureUniform
    };
    this.passes.push(pass);
    return pass;
  }

  render() {
    const enabledPasses = this.passes.filter(pass => pass.enabled);
    enabledPasses.forEach((pass, i) => {
      this.gl.renderer.render({
        scene: pass.mesh,
        target: this.fbo.write,
        clear: false
      });
      this.fbo.swap();
    });
  }

}
;
const defaultVertex =
/* glsl */
`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _math_Color_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);






const tmp = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["Vec3"]();
class Polyline {
  constructor(gl, {
    points,
    // Array of Vec3s
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniforms = {},
    attributes = {} // For passing in custom attribs

  }) {
    this.gl = gl;
    this.points = points;
    this.count = points.length; // Create buffers

    this.position = new Float32Array(this.count * 3 * 2);
    this.prev = new Float32Array(this.count * 3 * 2);
    this.next = new Float32Array(this.count * 3 * 2);
    const side = new Float32Array(this.count * 1 * 2);
    const uv = new Float32Array(this.count * 2 * 2);
    const index = new Uint16Array((this.count - 1) * 3 * 2); // Set static buffers

    for (let i = 0; i < this.count; i++) {
      side.set([-1, 1], i * 2);
      const v = i / (this.count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === this.count - 1) continue;
      const ind = i * 2;
      index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
      index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
    }

    const geometry = this.geometry = new _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"](gl, Object.assign(attributes, {
      position: {
        size: 3,
        data: this.position
      },
      prev: {
        size: 3,
        data: this.prev
      },
      next: {
        size: 3,
        data: this.next
      },
      side: {
        size: 1,
        data: side
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        size: 1,
        data: index
      }
    })); // Populate dynamic buffers

    this.updateGeometry();
    if (!uniforms.uResolution) this.resolution = uniforms.uResolution = {
      value: new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["Vec2"]()
    };
    if (!uniforms.uDPR) this.dpr = uniforms.uDPR = {
      value: 1
    };
    if (!uniforms.uThickness) this.thickness = uniforms.uThickness = {
      value: 1
    };
    if (!uniforms.uColor) this.color = uniforms.uColor = {
      value: new _math_Color_js__WEBPACK_IMPORTED_MODULE_5__["Color"]('#000')
    };
    if (!uniforms.uMiter) this.miter = uniforms.uMiter = {
      value: 1
    }; // Set size uniforms' values

    this.resize();
    const program = this.program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_1__["Program"](gl, {
      vertex,
      fragment,
      uniforms
    });
    this.mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_2__["Mesh"](gl, {
      geometry,
      program
    });
  }

  updateGeometry() {
    this.points.forEach((p, i) => {
      p.toArray(this.position, i * 3 * 2);
      p.toArray(this.position, i * 3 * 2 + 3);

      if (!i) {
        // If first point, calculate prev using the distance to 2nd point
        tmp.copy(p).sub(this.points[i + 1]).add(p);
        tmp.toArray(this.prev, i * 3 * 2);
        tmp.toArray(this.prev, i * 3 * 2 + 3);
      } else {
        p.toArray(this.next, (i - 1) * 3 * 2);
        p.toArray(this.next, (i - 1) * 3 * 2 + 3);
      }

      if (i === this.points.length - 1) {
        // If last point, calculate next using distance to 2nd last point
        tmp.copy(p).sub(this.points[i - 1]).add(p);
        tmp.toArray(this.next, i * 3 * 2);
        tmp.toArray(this.next, i * 3 * 2 + 3);
      } else {
        p.toArray(this.prev, (i + 1) * 3 * 2);
        p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
      }
    });
    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.prev.needsUpdate = true;
    this.geometry.attributes.next.needsUpdate = true;
  } // Only need to call if not handling resolution uniforms manually


  resize() {
    // Update automatic uniforms if not overridden
    if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
    if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
  }

}
;
const defaultVertex =
/* glsl */
`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony import */ var _core_Camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);



class Shadow {
  constructor(gl, {
    light = new _core_Camera_js__WEBPACK_IMPORTED_MODULE_0__["Camera"](gl),
    width = 1024,
    height = width
  }) {
    this.gl = gl;
    this.light = light;
    this.target = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__["RenderTarget"](gl, {
      width,
      height
    });
    this.depthProgram = new _core_Program_js__WEBPACK_IMPORTED_MODULE_1__["Program"](gl, {
      vertex: defaultVertex,
      fragment: defaultFragment,
      cullFace: null
    });
    this.castMeshes = [];
  }

  add({
    mesh,
    receive = true,
    cast = true,
    vertex = defaultVertex,
    fragment = defaultFragment,
    uniformProjection = 'shadowProjectionMatrix',
    uniformView = 'shadowViewMatrix',
    uniformTexture = 'tShadow'
  }) {
    // Add uniforms to existing program
    if (receive && !mesh.program.uniforms[uniformProjection]) {
      mesh.program.uniforms[uniformProjection] = {
        value: this.light.projectionMatrix
      };
      mesh.program.uniforms[uniformView] = {
        value: this.light.viewMatrix
      };
      mesh.program.uniforms[uniformTexture] = {
        value: this.target.texture
      };
    }

    if (!cast) return;
    this.castMeshes.push(mesh); // Store program for when switching between depth override

    mesh.colorProgram = mesh.program; // Check if depth program already attached

    if (mesh.depthProgram) return; // Use global depth override if nothing custom passed in

    if (vertex === defaultVertex && fragment === defaultFragment) {
      mesh.depthProgram = this.depthProgram;
      return;
    } // Create custom override program


    mesh.depthProgram = new _core_Program_js__WEBPACK_IMPORTED_MODULE_1__["Program"](gl, {
      vertex,
      fragment,
      cullFace: null
    });
  }

  render({
    scene
  }) {
    // For depth render, replace program with depth override.
    // Hide meshes not casting shadows.
    scene.traverse(node => {
      if (!node.draw) return;

      if (!!~this.castMeshes.indexOf(node)) {
        node.program = node.depthProgram;
      } else {
        if (node.visible) node.isForceVisibility = true;
        node.visible = false;
      }
    }); // Render the depth shadow map using the light as the camera

    this.gl.renderer.render({
      scene,
      camera: this.light,
      target: this.target
    }); // Then switch the program back to the normal one

    scene.traverse(node => {
      if (!node.draw) return;

      if (!!~this.castMeshes.indexOf(node)) {
        node.program = node.colorProgram;
      } else {
        if (node.isForceVisibility) node.visible = true;
      }
    });
  }

}
const defaultVertex =
/* glsl */
`
    attribute vec3 position;
    attribute vec2 uv;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;
const defaultFragment =
/* glsl */
`
    precision highp float;

    vec4 packRGBA (float v) {
        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);
        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;
        return pack;
    }

    void main() {
        gl_FragColor = packRGBA(gl_FragCoord.z);
    }
`;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTXTexture", function() { return KTXTexture; });
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
 // TODO: Support cubemaps
// Generate textures using https://github.com/TimvanScherpenzeel/texture-compressor

class KTXTexture extends _core_Texture_js__WEBPACK_IMPORTED_MODULE_0__["Texture"] {
  constructor(gl, {
    buffer,
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    anisotropy = 0
  } = {}) {
    super(gl, {
      generateMipmaps: false,
      wrapS,
      wrapT,
      anisotropy
    });
    if (buffer) return this.parseBuffer(buffer);
  }

  parseBuffer(buffer) {
    const ktx = new KhronosTextureContainer(buffer);
    ktx.mipmaps.isCompressedTexture = true; // Update texture

    this.image = ktx.mipmaps;
    this.internalFormat = ktx.glInternalFormat;
    this.minFilter = ktx.numberOfMipmapLevels > 1 ? this.gl.NEAREST_MIPMAP_LINEAR : this.gl.LINEAR; // TODO: support cube maps
    // ktx.numberOfFaces
  }

}
;

function KhronosTextureContainer(buffer) {
  const idCheck = [0xab, 0x4b, 0x54, 0x58, 0x20, 0x31, 0x31, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a];
  const id = new Uint8Array(buffer, 0, 12);

  for (let i = 0; i < id.length; i++) if (id[i] !== idCheck[i]) return console.error('File missing KTX identifier'); // TODO: Is this always 4? Tested: [android, macos]


  const size = Uint32Array.BYTES_PER_ELEMENT;
  const head = new DataView(buffer, 12, 13 * size);
  const littleEndian = head.getUint32(0, true) === 0x04030201;
  const glType = head.getUint32(1 * size, littleEndian);
  if (glType !== 0) return console.warn('only compressed formats currently supported');
  this.glInternalFormat = head.getUint32(4 * size, littleEndian);
  let width = head.getUint32(6 * size, littleEndian);
  let height = head.getUint32(7 * size, littleEndian);
  this.numberOfFaces = head.getUint32(10 * size, littleEndian);
  this.numberOfMipmapLevels = Math.max(1, head.getUint32(11 * size, littleEndian));
  const bytesOfKeyValueData = head.getUint32(12 * size, littleEndian);
  this.mipmaps = [];
  let offset = 12 + 13 * 4 + bytesOfKeyValueData;

  for (let level = 0; level < this.numberOfMipmapLevels; level++) {
    const levelSize = new Int32Array(buffer, offset, 1)[0]; // size per face, since not supporting array cubemaps

    offset += 4; // levelSize field

    for (let face = 0; face < this.numberOfFaces; face++) {
      const data = new Uint8Array(buffer, offset, levelSize);
      this.mipmaps.push({
        data,
        width,
        height
      });
      offset += levelSize;
      offset += 3 - (levelSize + 3) % 4; // add padding for odd sized image
    }

    width = width >> 1;
    height = height >> 1;
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return TextureLoader; });
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _KTXTexture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);

 // For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor

const cache = {};
const supportedExtensions = [];
class TextureLoader {
  static load(gl, {
    src,
    // string or object of extension:src key-values
    // {
    //     pvrtc: '...ktx',
    //     s3tc: '...ktx',
    //     etc: '...ktx',
    //     etc1: '...ktx',
    //     astc: '...ktx',
    //     webp: '...webp',
    //     jpg: '...jpg',
    //     png: '...png',
    // }
    // Only props relevant to KTXTexture
    wrapS = gl.CLAMP_TO_EDGE,
    wrapT = gl.CLAMP_TO_EDGE,
    anisotropy = 0,
    // For regular images
    format = gl.RGBA,
    internalFormat = format,
    generateMipmaps = true,
    minFilter = generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR,
    magFilter = gl.LINEAR,
    premultiplyAlpha = false,
    unpackAlignment = 4,
    flipY = true
  } = {}) {
    const support = this.getSupportedExtensions(gl);
    let ext = 'none'; // If src is string, determine which format from the extension

    if (typeof src === 'string') {
      ext = src.split('.').pop().split('?')[0].toLowerCase();
    } // If src is object, use supported extensions and provided list to choose best option
    // Get first supported match, so put in order of preference


    if (typeof src === 'object') {
      for (const prop in src) {
        if (support.includes(prop.toLowerCase())) {
          ext = prop.toLowerCase();
          src = src[prop];
          break;
        }
      }
    } // Stringify props


    const cacheID = src + wrapS + wrapT + anisotropy + format + internalFormat + generateMipmaps + minFilter + magFilter + premultiplyAlpha + unpackAlignment + flipY; // Check cache for existing texture

    if (cache[cacheID]) return cache[cacheID];
    let texture;

    switch (ext) {
      case 'ktx':
      case 'pvrtc':
      case 's3tc':
      case 'etc':
      case 'etc1':
      case 'astc':
        // Load compressed texture using KTX format
        texture = new _KTXTexture_js__WEBPACK_IMPORTED_MODULE_1__["KTXTexture"](gl, {
          src,
          wrapS,
          wrapT,
          anisotropy
        });
        texture.loaded = this.loadKTX(src, texture);
        break;

      case 'webp':
      case 'jpg':
      case 'jpeg':
      case 'png':
        texture = new _core_Texture_js__WEBPACK_IMPORTED_MODULE_0__["Texture"](gl, {
          wrapS,
          wrapT,
          anisotropy,
          format,
          internalFormat,
          generateMipmaps,
          minFilter,
          magFilter,
          premultiplyAlpha,
          unpackAlignment,
          flipY
        });
        texture.loaded = this.loadImage(gl, src, texture);
        break;

      default:
        console.warn('No supported format supplied');
        texture = new _core_Texture_js__WEBPACK_IMPORTED_MODULE_0__["Texture"](gl);
    }

    texture.ext = ext;
    cache[cacheID] = texture;
    return texture;
  }

  static getSupportedExtensions(gl) {
    if (supportedExtensions.length) return supportedExtensions;
    const extensions = {
      pvrtc: gl.renderer.getExtension('WEBGL_compressed_texture_pvrtc') || gl.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
      s3tc: gl.renderer.getExtension('WEBGL_compressed_texture_s3tc') || gl.renderer.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || gl.renderer.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'),
      etc: gl.renderer.getExtension('WEBGL_compressed_texture_etc'),
      etc1: gl.renderer.getExtension('WEBGL_compressed_texture_etc1'),
      astc: gl.renderer.getExtension('WEBGL_compressed_texture_astc')
    };

    for (const ext in extensions) if (extensions[ext]) supportedExtensions.push(ext); // Check for WebP support


    if (detectWebP) supportedExtensions.push('webp'); // Formats supported by all

    supportedExtensions.push('png', 'jpg');
    return supportedExtensions;
  }

  static loadKTX(src, texture) {
    return fetch(src).then(res => res.arrayBuffer()).then(buffer => texture.parseBuffer(buffer));
  }

  static loadImage(gl, src, texture) {
    return decodeImage(src).then(imgBmp => {
      // Catch non POT textures and update params to avoid errors
      if (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height)) {
        if (texture.generateMipmaps) texture.generateMipmaps = false;
        if (texture.minFilter === gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = gl.LINEAR;
        if (texture.wrapS === gl.REPEAT) texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;
      }

      texture.image = imgBmp; // For createImageBitmap, close once uploaded

      texture.onUpdate = () => {
        if (imgBmp.close) imgBmp.close();
        texture.onUpdate = null;
      };
    });
  }

}

function detectWebP() {
  return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

function powerOfTwo(value) {
  return Math.log2(value) % 1 === 0;
}

function decodeImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.src = src; // Only chrome's implementation of createImageBitmap is fully supported

    const isChrome = navigator.userAgent.toLowerCase().includes('chrome');

    if (!!window.createImageBitmap && isChrome) {
      img.onload = () => {
        createImageBitmap(img, {
          imageOrientation: 'flipY',
          premultiplyAlpha: 'none'
        }).then(imgBmp => {
          resolve(imgBmp);
        });
      };
    } else {
      img.onload = () => resolve(img);
    }
  });
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFLoader", function() { return GLTFLoader; });
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _core_Transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _GLTFAnimation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
/* harmony import */ var _NormalProgram_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);




 // Supports
// [x] Geometry
// [ ] Sparse support
// [x] Nodes and Hierarchy
// [ ] Morph Targets
// [ ] Skins
// [ ] Materials
// [ ] Textures
// [x] Animation
// [ ] Cameras
// [ ] Extensions
// TODO: Sparse accessor packing? For morph targets basically
// TODO: init accessor missing bufferView with 0s
// TODO: morph target animations

const TYPE_ARRAY = {
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
};
const TYPE_SIZE = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
};
const ATTRIBUTES = {
  POSITION: 'position',
  NORMAL: 'normal',
  TANGENT: 'tangent',
  TEXCOORD_0: 'uv',
  TEXCOORD_1: 'uv2',
  COLOR_0: 'color',
  WEIGHTS_0: 'skinWeight',
  JOINTS_0: 'skinIndex'
};
const TRANSFORMS = {
  translation: 'position',
  rotation: 'quaternion',
  scale: 'scale'
};
class GLTFLoader {
  static async load(gl, src) {
    const dir = src.split('/').slice(0, -1).join('/') + '/'; // load main description json

    const desc = await fetch(src).then(res => res.json());
    if (desc.asset === undefined || desc.asset.version[0] < 2) console.warn('Only GLTF >=2.0 supported. Attempting to parse.'); // Load buffers async

    const buffers = await this.loadBuffers(desc, dir); // Create gl buffers from bufferViews

    const bufferViews = this.parseBufferViews(gl, desc, buffers); // Create geometries for each mesh primitive

    const meshes = this.parseMeshes(gl, desc, bufferViews); // Create transforms, meshes and hierarchy

    const nodes = this.parseNodes(gl, desc, meshes); // Create animation handlers

    const animations = this.parseAnimations(gl, desc, nodes, bufferViews); // Get top level nodes for each scene

    const scenes = this.parseScenes(desc, nodes);
    const scene = scenes[desc.scene];
    return {
      json: desc,
      buffers,
      bufferViews,
      meshes,
      nodes,
      animations,
      scenes,
      scene
    };
  } // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085


  static resolveURI(uri, dir) {
    // Invalid URI
    if (typeof uri !== 'string' || uri === '') return ''; // Host Relative URI

    if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
      dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
    } // Absolute URI http://, https://, //


    if (/^(https?:)?\/\//i.test(uri)) return uri; // Data URI

    if (/^data:.*,.*$/i.test(uri)) return uri; // Blob URI

    if (/^blob:.*$/i.test(uri)) return uri; // Relative URI

    return dir + uri;
  }

  static async loadBuffers(desc, dir) {
    return await Promise.all(desc.buffers.map(buffer => {
      const uri = this.resolveURI(buffer.uri, dir);
      return fetch(uri).then(res => res.arrayBuffer());
    }));
  }

  static parseBufferViews(gl, desc, buffers) {
    // Clone to leave description pure
    const bufferViews = desc.bufferViews.map(o => Object.assign({}, o));
    desc.meshes.forEach(({
      primitives
    }) => {
      primitives.forEach(({
        attributes,
        indices
      }) => {
        // Flag bufferView as an attribute, so it knows to create a gl buffer
        for (let attr in attributes) bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;

        if (indices === undefined) return;
        bufferViews[desc.accessors[indices].bufferView].isAttribute = true; // Make sure indices bufferView have a target property for gl buffer binding

        bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
      });
    }); // Get componentType of each bufferView from the accessors

    desc.accessors.forEach(({
      bufferView: i,
      componentType
    }) => {
      bufferViews[i].componentType = componentType;
    }); // Push each bufferView to the GPU as a separate buffer

    bufferViews.forEach(({
      buffer: bufferIndex,
      // required
      byteOffset = 0,
      // optional
      byteLength,
      // required
      byteStride,
      // optional
      target = gl.ARRAY_BUFFER,
      // optional, added above for elements
      name,
      // optional
      extensions,
      // optional
      extras,
      // optional
      componentType,
      // required, added from accessor above
      isAttribute
    }, i) => {
      const TypeArray = TYPE_ARRAY[componentType];
      const elementBytes = TypeArray.BYTES_PER_ELEMENT;
      const data = new TypeArray(buffers[bufferIndex], byteOffset, byteLength / elementBytes);
      bufferViews[i].data = data; // Create gl buffers for the bufferView, pushing it to the GPU

      if (!isAttribute) return;
      const buffer = gl.createBuffer();
      gl.bindBuffer(target, buffer);
      gl.renderer.state.boundBuffer = buffer;
      gl.bufferData(target, data, gl.STATIC_DRAW);
      bufferViews[i].buffer = buffer;
    });
    return bufferViews;
  }

  static parseMeshes(gl, desc, bufferViews) {
    return desc.meshes.map(({
      primitives,
      // required
      weights,
      // optional
      name,
      // optional
      extensions,
      // optional
      extras // optional

    }) => {
      return {
        primitives: this.parsePrimitives(gl, primitives, desc, bufferViews),
        weights,
        name
      };
    });
  }

  static parsePrimitives(gl, primitives, desc, bufferViews) {
    return primitives.map(({
      attributes,
      // required
      indices,
      // optional
      material,
      // optional
      mode = 4,
      // optional
      targets,
      // optional
      extensions,
      // optional
      extras // optional

    }) => {
      const geometry = new _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"](gl); // Add each attribute found in primitive

      for (let attr in attributes) {
        geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
      } // Add index attribute if found


      if (indices !== undefined) geometry.addAttribute('index', this.parseAccessor(indices, desc, bufferViews)); // TODO: materials

      const program = new _NormalProgram_js__WEBPACK_IMPORTED_MODULE_4__["NormalProgram"](gl);
      return {
        geometry,
        program,
        mode
      };
    });
  }

  static parseAccessor(index, desc, bufferViews) {
    // TODO: init missing bufferView with 0s
    // TODO: support sparse
    const {
      bufferView: bufferViewIndex,
      // optional
      byteOffset = 0,
      // optional
      componentType,
      // required
      normalized = false,
      // optional
      count,
      // required
      type,
      // required
      min,
      // optional
      max,
      // optional
      sparse // optional
      // name, // optional
      // extensions, // optional
      // extras, // optional

    } = desc.accessors[index];
    const {
      data,
      // attached in parseBufferViews
      buffer,
      // replaced to be the actual GL buffer
      // byteOffset = 0, // applied in parseBufferViews
      // byteLength, // applied in parseBufferViews
      byteStride = 0,
      target // name,
      // extensions,
      // extras,

    } = bufferViews[bufferViewIndex];
    const size = TYPE_SIZE[type]; // Return attribute data

    return {
      data,
      // Optional. Used for computing bounds if no min/max
      size,
      type: componentType,
      normalized,
      buffer,
      stride: byteStride,
      offset: byteOffset,
      count,
      min,
      max
    };
  }

  static parseNodes(gl, desc, meshes) {
    const nodes = desc.nodes.map(({
      camera,
      children,
      skin,
      matrix,
      mesh: meshIndex,
      rotation,
      scale,
      translation,
      weights,
      name,
      extensions,
      extras
    }) => {
      const node = new _core_Transform_js__WEBPACK_IMPORTED_MODULE_1__["Transform"]();

      if (matrix) {
        node.matrix.copy(matrix);
        node.decompose();
      } else {
        if (rotation) node.quaternion.copy(rotation);
        if (scale) node.scale.copy(scale);
        if (translation) node.position.copy(translation);
      }

      if (meshIndex !== undefined) {
        meshes[meshIndex].primitives.forEach(({
          geometry,
          program,
          mode
        }) => {
          const mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_2__["Mesh"](gl, {
            geometry,
            program,
            mode
          });
          mesh.setParent(node);
        });
      }

      return node;
    }); // Set hierarchy now all nodes created

    desc.nodes.forEach(({
      children = []
    }, i) => {
      children.forEach(childIndex => {
        nodes[childIndex].setParent(nodes[i]);
      });
    });
    return nodes;
  }

  static parseAnimations(gl, desc, nodes, bufferViews) {
    if (!desc.animations) return null;
    return desc.animations.map(({
      channels,
      // required
      samplers,
      // required
      name // optional
      // extensions, // optional
      // extras,  // optional

    }) => {
      const data = channels.map(({
        sampler: samplerIndex,
        // required
        target // required
        // extensions, // optional
        // extras, // optional

      }) => {
        const {
          input: inputIndex,
          // required
          interpolation = 'LINEAR',
          output: outputIndex // required
          // extensions, // optional
          // extras, // optional

        } = samplers[samplerIndex];
        const {
          node: nodeIndex,
          // optional - TODO: when is it not included?
          path // required
          // extensions, // optional
          // extras, // optional

        } = target;
        const node = nodes[nodeIndex];
        const transform = TRANSFORMS[path];
        const timesAcc = this.parseAccessor(inputIndex, desc, bufferViews);
        const times = timesAcc.data.slice(timesAcc.offset / 4, timesAcc.count * timesAcc.size);
        const valuesAcc = this.parseAccessor(outputIndex, desc, bufferViews);
        const values = valuesAcc.data.slice(valuesAcc.offset / 4, valuesAcc.count * valuesAcc.size);
        return {
          node,
          transform,
          interpolation,
          times,
          values
        };
      });
      return {
        name,
        animation: new _GLTFAnimation_js__WEBPACK_IMPORTED_MODULE_3__["GLTFAnimation"](data)
      };
    });
  }

  static parseScenes(desc, nodes) {
    return desc.scenes.map(({
      nodes: nodesIndices = [],
      name,
      extensions,
      extras
    }) => {
      return nodesIndices.map(i => nodes[i]);
    });
  }

}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLTFAnimation", function() { return GLTFAnimation; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);


const tmpVec3A = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tmpVec3B = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tmpVec3C = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tmpVec3D = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
const tmpQuatA = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
const tmpQuatB = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
const tmpQuatC = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
const tmpQuatD = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_1__["Quat"]();
class GLTFAnimation {
  constructor(data, weight = 1) {
    this.data = data;
    this.elapsed = 0;
    this.weight = weight; // Set to false to not apply modulo to elapsed against duration

    this.loop = true; // Get duration from largest final time in all channels

    this.duration = data.reduce((a, {
      times
    }) => Math.max(a, times[times.length - 1]), 0);
  }

  update(totalWeight = 1, isSet) {
    const weight = isSet ? 1 : this.weight / totalWeight;
    const elapsed = this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration);
    this.data.forEach(({
      node,
      transform,
      interpolation,
      times,
      values
    }) => {
      // Get index of two time values elapsed is between
      const prevIndex = Math.max(1, times.findIndex(t => t > elapsed)) - 1;
      const nextIndex = prevIndex + 1; // Get linear blend/alpha between the two

      let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
      if (interpolation === 'STEP') alpha = 0;
      let prevVal = tmpVec3A;
      let prevTan = tmpVec3B;
      let nextTan = tmpVec3C;
      let nextVal = tmpVec3D;
      let size = 3;

      if (transform === 'quaternion') {
        prevVal = tmpQuatA;
        prevTan = tmpQuatB;
        nextTan = tmpQuatC;
        nextVal = tmpQuatD;
        size = 4;
      }

      if (interpolation === 'CUBICSPLINE') {
        // Get the prev and next values from the indices
        prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
        prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
        nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
        nextVal.fromArray(values, nextIndex * size * 3 + size * 1); // interpolate for final value

        prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
        if (size === 4) prevVal.normalize();
      } else {
        // Get the prev and next values from the indices
        prevVal.fromArray(values, prevIndex * size);
        nextVal.fromArray(values, nextIndex * size); // interpolate for final value

        if (size === 4) prevVal.slerp(nextVal, alpha);else prevVal.lerp(nextVal, alpha);
      } // interpolate between multiple possible animations


      if (size === 4) node[transform].slerp(prevVal, weight);else node[transform].lerp(prevVal, weight);
    });
  }

  cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
    const t2 = t * t;
    const t3 = t2 * t;
    const s2 = 3 * t2 - 2 * t3;
    const s3 = t3 - t2;
    const s0 = 1 - s2;
    const s1 = s3 - t2 + t;

    for (let i = 0; i < prevVal.length; i++) {
      prevVal[i] = s0 * prevVal[i] + s1 * ((1 - t) * prevTan[i]) + s2 * nextVal[i] + s3 * (t * nextTan[i]);
    }

    return prevVal;
  }

}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require('spritejs');

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer3D; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _helper_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _group3d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const defaultOption = {
  depth: true,
  alpha: true
};

const _orbitChecker = Symbol('orbit_checker');

const _orbitChecking = Symbol('orbit_checking');

const _utime = Symbol('utime');

const _shadow = Symbol('shadow');

const _directionalLight = Symbol('directionalLight');

const _pointLightPosition = Symbol('pointLightPosition');

const _pointLightColor = Symbol('pointLightColor');

const _ambientColor = Symbol('ambientColor');

const _targets = Symbol('targets');

const _post = Symbol('post');

const _renderOptions = Symbol('renderOptions');

const _root = Symbol('root');

const _camera = Symbol('camera');

const _sublayers = Symbol('sublayers');

const _orbit = Symbol('orbit');

class Layer3D extends spritejs__WEBPACK_IMPORTED_MODULE_0__["Layer"] {
  constructor(options = {}) {
    if (options.contextType === '2d') {
      throw new TypeError('Cannot create 3d layer in 2d context.');
    }

    if (!options.Renderer) {
      options = Object.assign({}, defaultOption, options);

      options.Renderer = function (canvas, opts) {
        opts = Object.assign({}, opts);
        const renderer = new ogl__WEBPACK_IMPORTED_MODULE_1__["Renderer"](_objectSpread({
          canvas
        }, opts)); // TODO: 支持粘连模式??

        renderer.globalTransformMatrix = [1, 0, 0, 1, 0, 0];

        renderer.setGlobalTransform = function (matrix) {};

        return renderer;
      };
    }

    super(options);
    this[_utime] = [];
    this[_targets] = [];
    this[_directionalLight] = options.directionalLight || [1, 0, 0, 0];
    this[_pointLightPosition] = options.pointLightPosition || [0, 0, 0];
    this[_pointLightColor] = new spritejs__WEBPACK_IMPORTED_MODULE_0__["Color"](options.pointLightColor || [0, 0, 0, 0]);
    this[_ambientColor] = new spritejs__WEBPACK_IMPORTED_MODULE_0__["Color"](options.ambientColor || [1, 1, 1, 0]);
    this[_renderOptions] = {
      update: true,
      sort: true,
      frustumCull: true,
      clear: undefined
    };
    const gl = this.renderer.gl;
    gl.clearColor(...this[_ambientColor]);

    if (options.post) {
      if (typeof options.post === 'boolean') options.post = {};
      this[_post] = new ogl__WEBPACK_IMPORTED_MODULE_1__["Post"](gl, options.post);
    }

    if (options.camera) {
      const camera = new _camera__WEBPACK_IMPORTED_MODULE_3__["default"](gl, options.camera);
      camera.connect(this, 0);
      this[_camera] = camera;
    } else {
      this[_camera] = {
        body: null
      };
    }

    this[_root] = new _group3d__WEBPACK_IMPORTED_MODULE_4__["default"]();

    this[_root].connect(this, 0);

    this[_sublayers] = [];
    this[_orbit] = false;
  }

  get body() {
    return this[_root] ? this[_root].body : null;
  }

  get camera() {
    if (this[_camera] && this[_camera].body) {
      return this[_camera];
    }

    return null;
  }

  get gl() {
    return this.renderer.gl;
  }

  get meshes() {
    const children = this.children;
    const ret = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.meshes && child.meshes.length) ret.push(...child.meshes);
    }

    return ret;
  }

  get post() {
    return this[_post];
  }

  get renderOptions() {
    return this[_renderOptions];
  }

  get root() {
    return this[_root];
  }

  get shadow() {
    return this[_shadow];
  }

  get sublayers() {
    return this[_sublayers];
  }

  get autoClear() {
    return this.renderer.autoClear;
  }

  set autoClear(value) {
    this.renderer.autoClear = value;
  }

  bindTarget(target, options = {}) {
    this[_targets].push({
      target,
      options
    });
  }

  bindTime(program, opts = {}) {
    program.timeline = this.timeline.fork(opts);

    this[_utime].push(program);

    this.forceUpdate();
  }
  /* {vertex, fragment, uniforms = {}} */


  createProgram(_ref = {}, {
    attributes: extraAttributes,
    uniforms: extraUniforms
  } = {}) {
    let {
      attributes,
      texture,
      uniforms
    } = _ref,
        options = _objectWithoutProperties(_ref, ["attributes", "texture", "uniforms"]);

    const gl = this.renderer.gl;

    if (uniforms) {
      options.uniforms = _objectSpread({}, uniforms);
    }

    const program = new ogl__WEBPACK_IMPORTED_MODULE_1__["Program"](gl, options);
    if (extraAttributes) program.extraAttribute = Object.assign({}, attributes, extraAttributes);
    program.uniforms.directionalLight = {
      value: this[_directionalLight]
    };
    program.uniforms.pointLightPosition = {
      value: this[_pointLightPosition]
    };
    program.uniforms.pointLightColor = {
      value: this[_pointLightColor]
    };
    program.uniforms.ambientColor = {
      value: this[_ambientColor]
    };
    if (texture) program.uniforms.tMap = {
      value: texture
    };
    if (extraUniforms) Object.assign(program.uniforms, extraUniforms);
    return program;
  }

  createSublayer(_ref2 = {}) {
    let {
      camera = null
    } = _ref2,
        attrs = _objectWithoutProperties(_ref2, ["camera"]);

    if (!camera && this.camera) camera = this.camera.cloneNode();
    const root = new _group3d__WEBPACK_IMPORTED_MODULE_4__["default"](attrs);
    root.camera = camera;
    return root;
  }

  createText(text, {
    font = '16px Helvetica,Arial,sans-serif',
    fillColor,
    strokeColor,
    strokeWidth = 1
  } = {}) {
    const textImage = spritejs__WEBPACK_IMPORTED_MODULE_0__["ENV"].createText(text, {
      font,
      fillColor,
      strokeColor,
      strokeWidth
    }).image;
    return this.createTexture({
      image: textImage,
      generateMipmaps: false,
      width: textImage.width,
      height: textImage.height
    });
  }

  createTexture(opts = {}) {
    const gl = this.renderer.gl;
    let src;

    function isImage(opts) {
      return typeof opts === 'string' || Array.isArray(opts) && typeof opts[0] === 'string';
    }

    if (isImage(opts)) {
      src = opts;
      opts = {};
    } else if (isImage(opts.image)) {
      src = opts.image;
      opts = _objectSpread({}, opts);
      delete opts.image;
    } else if (Array.isArray(opts)) {
      opts = {
        image: opts
      };
    }

    const texture = new ogl__WEBPACK_IMPORTED_MODULE_1__["Texture"](gl, opts);

    if (src) {
      let task;

      if (Array.isArray(src)) {
        task = this.loadImages(src);
      } else {
        task = this.loadImage(src);
      }

      task.then(res => {
        texture.image = res;
        this.forceUpdate();
      });
      return texture;
    }

    return texture;
  }

  createShadow({
    width = this.canvas.width,
    height = this.canvas.height,
    light = this[_camera]
  } = {}) {
    const gl = this.renderer.gl;
    return new _helper_shadow__WEBPACK_IMPORTED_MODULE_2__["default"](gl, {
      width,
      height,
      light: light.body
    });
  }
  /* override */


  dispatchPointerEvent(event) {
    function dispatchEvent(raycast, subject, mouse) {
      raycast.castMouse(subject.camera.body, mouse);
      const hits = raycast.intersectBounds(subject.meshes.filter(mesh => mesh.geometry.raycast !== 'none'));

      if (hits && hits.length) {
        let target;

        for (let i = 0; i < hits.length; i++) {
          const node = hits[i]._node;
          const pointerEvents = node.attributes.pointerEvents;

          if (pointerEvents !== 'none' && (node.isVisible || pointerEvents === 'all')) {
            target = node;
            break;
          }
        }

        if (target) {
          event.mouse = mouse;
          event.hit = target.body.hit;
          target.dispatchEvent(event);
          return true;
        }
      }
    }

    let mouse;
    const raycast = this.raycast;
    let ret = false;

    if (raycast) {
      const renderer = this.renderer;
      mouse = new ogl__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
      mouse.set(2.0 * (event.x / renderer.width) - 1.0, 2.0 * (1.0 - event.y / renderer.height) - 1.0);
      ret = dispatchEvent(raycast, this, mouse);
    }

    return ret || spritejs__WEBPACK_IMPORTED_MODULE_0__["Block"].prototype.dispatchPointerEvent.call(this, event);
  }

  async loadGLTF(src) {
    const gl = this.renderer.gl;
    const gltf = await ogl__WEBPACK_IMPORTED_MODULE_1__["GLTFLoader"].load(gl, src);
    gltf.scene.forEach(node => {
      node.traverse(_node => {
        let el;

        if (_node instanceof ogl__WEBPACK_IMPORTED_MODULE_1__["Mesh"]) {
          el = _mesh3d__WEBPACK_IMPORTED_MODULE_5__["default"].fromMesh(_node);
        } else {
          el = new _group3d__WEBPACK_IMPORTED_MODULE_4__["default"]();
          el.setBody(_node, false);
        }

        const parent = el.body.parent;

        if (parent) {
          const parentNode = parent._node;
          parentNode.appendChild(el);
        }
      });
      this.appendChild(node._node);
    });
    return gltf;
  }

  async loadImage(src) {
    const image = await spritejs__WEBPACK_IMPORTED_MODULE_0__["ENV"].loadImage(src);
    return image;
  }

  async loadImages(imgs) {
    const res = await Promise.all(imgs.map(src => spritejs__WEBPACK_IMPORTED_MODULE_0__["ENV"].loadImage(src, {
      useImageBitmap: false
    })));
    return res;
  }

  async loadModel(src) {
    const data = await (await fetch(src)).json();
    return data;
  }

  async loadShader({
    vertex,
    fragment
  }) {
    const data = await Promise.all([vertex && (await fetch(vertex)).text(), fragment && (await fetch(fragment)).text()]);
    return {
      vertex: data[0],
      fragment: data[1]
    };
  }

  removeOrbit(camera = this[_camera]) {
    if (camera.orbit) {
      camera.orbit.remove();
      delete camera.orbit;
    }
  }
  /* override */


  render({
    clear = true
  } = {}) {
    const root = this[_root];
    const camera = this[_camera];
    this.renderer.autoClear = clear;
    this.dispatchEvent({
      type: 'beforerender',
      detail: {
        camera: camera.body
      }
    });

    if (this[_targets].length) {
      this[_targets].forEach(({
        target,
        options
      }) => {
        target.renderBy(this, options);
      });
    }

    if (camera.orbit) {
      camera.orbit.update();
      camera.resyncState();
    }

    if (this[_shadow]) {
      this[_shadow].render({
        scene: root.body
      });
    }

    if (this[_sublayers].length) {
      this[_sublayers].forEach((sublayer, i) => {
        const camera = sublayer.camera;

        if (camera.orbit) {
          camera.orbit.update();
          camera.resyncState();
        }

        this.renderer.render(_objectSpread({
          scene: sublayer.body,
          camera: camera.body
        }, this[_renderOptions]));
        if (i === 0) this.renderer.autoClear = false;
      });
    }

    if (this[_post]) {
      this[_post].render(_objectSpread({
        scene: root.body,
        camera: camera.body
      }, this[_renderOptions]));
    } else {
      this.renderer.render(_objectSpread({
        scene: root.body,
        camera: camera.body
      }, this[_renderOptions]));
    }

    this._prepareRenderFinished();

    if (this[_utime].length) {
      this[_utime].forEach(program => {
        program.uniforms.uTime.value = program.timeline.currentTime * 0.001;
      });

      this.forceUpdate();
    }

    this.dispatchEvent({
      type: 'afterrender',
      detail: {
        camera: camera.body
      }
    });
  }

  renderTarget(target, options = {}) {
    return target.renderBy(this, options);
  }

  setLights(program, {
    directionalLight = this[_directionalLight],
    pointLightPosition = this[_pointLightPosition],
    pointLightColor = this[_pointLightColor],
    ambientColor = this[_ambientColor]
  } = {}) {
    program.uniforms.directionalLight.value = directionalLight;
    program.uniforms.pointLightPosition.value = pointLightPosition;
    program.uniforms.pointLightColor.value = new spritejs__WEBPACK_IMPORTED_MODULE_0__["Color"](pointLightColor);
    program.uniforms.ambientColor.value = new spritejs__WEBPACK_IMPORTED_MODULE_0__["Color"](ambientColor);
    this.forceUpdate();
  }

  setOrbit(options = {}) {
    if (!this[_orbitChecker]) {
      this[_orbitChecker] = [() => {
        this[_orbitChecking] = true;
      }, () => {
        this[_orbitChecking] = false;
      }, () => {
        if (this[_orbitChecking]) {
          this.forceUpdate();
        }
      }, () => {
        this.forceUpdate();
      }];
    }

    if (options == null) {
      // remove all
      if (this[_camera]) this.removeOrbit();

      if (this[_sublayers].length) {
        this[_sublayers].forEach(({
          camera
        }) => {
          if (camera) this.removeOrbit(camera);
        });
      }

      if (this[_orbit]) {
        this[_orbit] = 0;
        this.removeEventListener('mousedown', this[_orbitChecker][0]);
        this.removeEventListener('mouseup', this[_orbitChecker][1]);
        this.removeEventListener('mousemove', this[_orbitChecker][2]);
        this.removeEventListener('touchstart', this[_orbitChecker][3]);
        this.removeEventListener('touchend', this[_orbitChecker][3]);
        this.removeEventListener('touchmove', this[_orbitChecker][3]);
        this.removeEventListener('wheel', this[_orbitChecker][3], false);
      }

      return null;
    }

    const camera = options.camera || this[_camera];
    const target = options.target || [0, 0, 0];
    options.target = new ogl__WEBPACK_IMPORTED_MODULE_1__["Vec3"](...target);
    options.element = options.element || this.parent.container;
    const orbit = new ogl__WEBPACK_IMPORTED_MODULE_1__["Orbit"](camera.body, options);
    camera.orbit = orbit;

    if (!this[_orbit]) {
      this.addEventListener('mousedown', this[_orbitChecker][0]);
      this.addEventListener('mouseup', this[_orbitChecker][1]);
      this.addEventListener('mousemove', this[_orbitChecker][2]);
      this.addEventListener('touchstart', this[_orbitChecker][3]);
      this.addEventListener('touchend', this[_orbitChecker][3]);
      this.addEventListener('touchmove', this[_orbitChecker][3]);
      this.addEventListener('wheel', this[_orbitChecker][3], false);
    }

    this[_orbit]++;
    return orbit;
  }

  setRaycast(enable = true) {
    if (enable) {
      const gl = this.renderer.gl;
      this.raycast = new ogl__WEBPACK_IMPORTED_MODULE_1__["Raycast"](gl);
    } else {
      delete this.raycast;
    }
  }

  setRenderOptions(opts) {
    Object.assign(this[_renderOptions], opts);
  }
  /* override */


  setResolution({
    width,
    height
  }) {
    super.setResolution({
      width,
      height
    });
    const displayRatio = this.displayRatio;
    const renderer = this.renderer;
    this.renderer.dpr = displayRatio;
    renderer.width = width / displayRatio;
    renderer.height = height / displayRatio;
    const gl = renderer.gl;
    gl.canvas.width = width;
    gl.canvas.height = height;
    const camera = this.camera;

    if (camera && this.options.camera.preserveAspect !== false) {
      camera.attributes.aspect = width / height;
    }

    if (this[_sublayers] && this[_sublayers].length) {
      this[_sublayers].forEach(({
        camera
      }) => {
        if (camera && this.options.camera.preserveAspect !== false) {
          camera.attributes.aspect = width / height;
        }
      });
    }

    if (this[_post]) {
      this[_post].resize();
    }
  }

  setShadow(shadow) {
    this[_shadow] = shadow;
    this.forceUpdate();
  }

  setUniforms(program, uniforms = this.uniforms || {}) {
    if (!(program instanceof ogl__WEBPACK_IMPORTED_MODULE_1__["Program"])) {
      // override
      uniforms = program || {};
      program = null;
    }

    super.setUniforms(uniforms);

    if (program) {
      Object.entries(uniforms).forEach(([key, value]) => {
        if (value && value.value) {
          program.uniforms[key] = value;
        } else if (program.uniforms[key]) {
          program.uniforms[key].value = value;
        } else {
          program.uniforms[key] = {
            value
          };
        }
      });
    }

    this.forceUpdate();
  }

  traverse(callback) {
    return this[_root].traverse(callback);
  }

  unbindTime(program) {
    const idx = this[_utime].indexOf(program);

    if (idx >= 0) {
      this[_utime].splice(idx, 1);

      return true;
    }

    return false;
  }

  unbindTarget(target) {
    const idx = this[_targets].indexOf(target);

    if (idx >= 0) {
      this[_targets].splice(idx, 1);

      return true;
    }

    return false;
  }

}
Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Layer3D, 'layer3d');

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Shadow; });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 // https://github.com/oframe/ogl/blob/master/src/extras/Shadow.js

class Shadow extends ogl__WEBPACK_IMPORTED_MODULE_0__["Shadow"] {
  async add(node, opts = {}) {
    await node.model;
    opts.mesh = node.body;
    node.addEventListener('updatemesh', evt => {
      const oldMesh = evt.detail.oldMesh;
      this.castMeshes = this.castMeshes.filter(mesh => mesh !== oldMesh);
      this.add(node, opts);
    });
    super.add(opts);
  }

}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Camera; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _group3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _node3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52);
/* harmony import */ var _attribute_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const setAttribute = Symbol.for('spritejs_setAttribute');
const changedAttrs = Symbol.for('spritejs_changedAttrs');
class Camera extends _group3d__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(gl, _ref = {}) {
    let {
      fov = 45,
      near = 0.1,
      far = 100,
      aspect = 1,
      left,
      right,
      bottom,
      top
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["fov", "near", "far", "aspect", "left", "right", "bottom", "top"]);

    super({
      fov,
      near,
      far,
      aspect,
      left,
      right,
      bottom,
      top
    });
    this.groupBody = this.body;
    this.setBody(new ogl__WEBPACK_IMPORTED_MODULE_1__["Camera"](gl, {
      fov,
      near,
      far,
      aspect,
      left,
      right,
      bottom,
      top
    }), false);
    this.attributes[setAttribute]('mode', this.body.type);
    this.gl = gl;
    if (attrs) this.attr(attrs);
  }

  get projectionMatrix() {
    return this.body.projectionMatrix;
  }

  get projectionViewMatrix() {
    return this.body.projectionViewMatrix;
  }

  get viewMatrix() {
    return this.body.viewMatrix;
  }

  get worldPosition() {
    return this.body.worldPosition;
  }

  cloneNode(deep = false) {
    const attrs = this.attributes[changedAttrs];
    const node = new this.constructor(this.gl, attrs);

    if (deep) {
      this.children.forEach(child => {
        const childNode = child.cloneNode(deep);
        node.appendChild(childNode);
      });
    }

    return node;
  }

  frustumIntersects(node) {
    if (node.body) {
      return this.body.frustumIntersectsMesh(node.body);
    }

    return false;
  }

  frustumIntersectsSphere(center, radius) {
    if (center instanceof _node3d__WEBPACK_IMPORTED_MODULE_3__["default"] && center.body) {
      center = center.body.position;
    }

    return this.body.frustumIntersectsSphere(center, radius);
  }
  /* override */


  lookAt(target) {
    super.lookAt(target, true);
    return this;
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    const body = this.body;

    if (body) {
      const mode = this.attributes.mode;

      if (mode === 'perspective' && (key === 'near' || key === 'far' || key === 'fov' || key === 'aspect')) {
        const value = key === 'fov' ? newValue * (Math.PI / 180) : newValue;
        body.perspective({
          [key]: value
        });
      }

      if (mode === 'orthographic' && (key === 'left' || key === 'right' || key === 'bottom' || key === 'top' || key === 'zoom')) {
        // const {left, right, bottom, top} = this.attributes;
        // body.orthographic({left, right, bottom, top});
        body.orthographic({
          [key]: newValue
        });
      }

      if (key === 'mode') {
        if (newValue === 'perspective') body.perspective();else {
          const {
            left,
            right,
            bottom,
            top
          } = this.attributes;
          body.orthographic({
            left,
            right,
            bottom,
            top
          });
        }
      }
    }
  } // Project 3D coordinate to 2D point


  project(v) {
    this.body.project(v);
    return this;
  } // Unproject 2D point to 3D coordinate


  unproject(v) {
    this.body.unproject(v);
    return this;
  }

  updateFrustum() {
    this.body.updateFrustum();
    return this;
  }

}

_defineProperty(Camera, "Attr", _attribute_camera__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Camera, 'camera');

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group3d; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _node3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52);




const _zOrder = Symbol('zOrder');

const _children = Symbol('children');

class Group3d extends _node3d__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(attrs = {}) {
    super(attrs);
    this.setBody(new ogl__WEBPACK_IMPORTED_MODULE_1__["Transform"](), false);
    this[_children] = [];
    this[_zOrder] = 0;
  }
  /* override */
  // setBody(body) {
  //   if(!this.body) {
  //     super.setBody(body);
  //   } else {
  //     throw new Error('Cannot reset the body of group3d.');
  //   }
  // }


  get childNodes() {
    return this[_children];
  }

  get children() {
    return this[_children];
  }

  get meshes() {
    if (this.attributes.display === 'none') return [];
    const children = this.children;
    const ret = [];

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.meshes && child.meshes.length) ret.push(...child.meshes);
    }

    return ret;
  }

  append(...els) {
    return els.map(el => {
      return this.appendChild(el);
    });
  }

  appendChild(el) {
    el.remove();
    this.children.push(el);
    el.connect(this, this[_zOrder]++);
    return el;
  }
  /* override */


  cloneNode(deep = false) {
    const node = super.cloneNode();

    if (deep) {
      this[_children].forEach(child => {
        const childNode = child.cloneNode(deep);
        node.appendChild(childNode);
      });
    }

    return node;
  }

  getElementById(id) {
    return spritejs__WEBPACK_IMPORTED_MODULE_0__["Group"].prototype.querySelector.call(this, `#${id}`);
  }

  getElementsByClassName(className) {
    return spritejs__WEBPACK_IMPORTED_MODULE_0__["Group"].prototype.querySelectorAll.call(this, `.${className}`);
  }

  getElementsByName(name) {
    return spritejs__WEBPACK_IMPORTED_MODULE_0__["Group"].prototype.querySelectorAll.call(this, `[name="${name}"]`);
  }

  getElementsByTagName(tagName) {
    return spritejs__WEBPACK_IMPORTED_MODULE_0__["Group"].prototype.querySelectorAll.call(this, tagName);
  }

  insertBefore(el, ref) {
    if (ref == null) return this.appendChild(el);
    el.remove();

    const refIdx = this[_children].indexOf(ref);

    if (refIdx < 0) {
      throw new Error('Invalid reference node.');
    }

    const zOrder = ref.zOrder;

    for (let i = refIdx; i < this[_children].length; i++) {
      const order = this[_children][i].zOrder;
      const child = this[_children][i];
      delete child.zOrder;
      Object.defineProperty(child, 'zOrder', {
        value: order + 1,
        writable: false,
        configurable: true
      });
    }

    this[_children].splice(refIdx, 0, el);

    el.connect(this, zOrder);
    return el;
  }

  querySelector(selector) {
    return spritejs__WEBPACK_IMPORTED_MODULE_0__["Group"].prototype.querySelector.call(this, selector);
  }

  querySelectorAll(selector) {
    return spritejs__WEBPACK_IMPORTED_MODULE_0__["Group"].prototype.querySelectorAll.call(this, selector);
  }

  replaceChild(el, ref) {
    el.remove();

    const refIdx = this[_children].indexOf(ref);

    if (refIdx < 0) {
      throw new Error('Invalid reference node.');
    }

    this[_children][refIdx] = el;
    el.connect(this, ref.zOrder);
    ref.disconnect(this);
    return el;
  }

  removeAllChildren() {
    const children = this[_children];

    for (let i = children.length - 1; i >= 0; i--) {
      children[i].remove();
    }
  }

  removeChild(el) {
    const idx = this[_children].indexOf(el);

    if (idx >= 0) {
      this[_children].splice(idx, 1);

      el.disconnect(this);
      return el;
    }

    return null;
  }
  /* override */


  setResolution({
    width,
    height
  }) {
    super.setResolution({
      width,
      height
    });

    this[_children].forEach(child => {
      child.setResolution({
        width,
        height
      });
    });
  }

}
Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Group3d, 'group3d');

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node3d; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _attribute_node3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const _body = Symbol('body');

const changedAttrs = Symbol.for('spritejs_changedAttrs');
const setAttribute = Symbol.for('spritejs_setAttribute');

function updateRotation({
  attributes
}, {
  rotation
}) {
  const ops = [attributes[setAttribute]('rotateX', rotation.x * 180 / Math.PI), attributes[setAttribute]('rotateY', rotation.y * 180 / Math.PI), attributes[setAttribute]('rotateZ', rotation.z * 180 / Math.PI)];
  return ops.some(o => o);
}

class Node3d extends spritejs__WEBPACK_IMPORTED_MODULE_0__["Node"] {
  get body() {
    if (this[_body]) {
      return this[_body];
    }

    return null;
  }
  /* override */


  get isVisible() {
    if (this[_body]) {
      return this[_body].visible;
    }

    return false;
  }

  get localMatrix() {
    return this.matrix;
  }

  get matrix() {
    if (this[_body]) {
      return this[_body].matrix;
    }

    return null;
  }

  get mesh() {
    return this.body.draw ? this.body : null;
  }

  get meshes() {
    return [];
  } // the matrix with camera


  get modelViewMatrix() {
    if (this[_body]) {
      return this[_body].modelViewMatrix;
    }

    return null;
  } // normal transform matrix


  get normalMatrix() {
    if (this[_body]) {
      return this[_body].normalMatrix;
    }

    return null;
  }

  get renderMatrix() {
    return this.worldMatrix;
  }

  get worldMatrix() {
    if (this[_body]) {
      return this[_body].worldMatrix;
    }

    return null;
  }

  get zDepth() {
    if (this[_body]) {
      return this[_body].zDepth;
    }

    return 0;
  }

  get up() {
    if (this[_body]) {
      return this[_body].up;
    }

    return null;
  }

  set up(value) {
    if (this[_body]) {
      this[_body].up = value;
    }

    return null;
  }
  /* override */


  connect(parent, zOrder) {
    super.connect(parent, zOrder);

    if (this[_body]) {
      if (!this.camera) {
        const parentBody = parent.groupBody || parent.body;

        if (parentBody && parentBody !== this[_body]) {
          this[_body].setParent(parentBody);

          if (parent.groupBody && parent.groupBody.parent == null) {
            parent.groupBody.setParent(parent.body);
          }
        }
      } else if (parent.sublayers) {
        parent.sublayers.push(this);
      } else {
        throw new Error('Node3d with camera should only use as sublayers');
      }
    }
  }

  decompose() {
    const body = this[_body];

    if (body) {
      body.decompose();
      const needsUpdate = updateRotation(this, body);
      if (needsUpdate) this.forceUpdate();
    }
  }
  /* override */


  disconnect(parent) {
    super.disconnect(parent);

    if (this[_body]) {
      if (this.camera && parent.sublayers) {
        // remove sublayer from layer3d
        const idx = parent.sublayers.indexOf(this);

        if (idx >= 0) {
          parent.sublayers.splice(idx, 1);
        }
      }

      this[_body].setParent(null);

      const parentBody = parent.groupBody;

      if (parentBody && parentBody.children && parentBody.children.length <= 0) {
        parentBody.setParent(null);
      }
    }
  }

  dispose() {
    this.remove();
  }

  lookAt(target, invert = false) {
    const body = this[_body];

    if (body) {
      if (target instanceof Node3d) {
        target = target.body.position;
      }

      body.lookAt(target, invert);
      const needsUpdate = updateRotation(this, body);
      if (needsUpdate) this.forceUpdate();
    }
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    const body = this[_body];

    if (body) {
      if (key === 'x' || key === 'y' || key === 'z') {
        body.position[key] = newValue;
      }

      if (key === 'rotateX' || key === 'rotateY' || key === 'rotateZ') {
        const value = newValue * Math.PI / 180;
        body.rotation[key.toLowerCase().slice(-1)] = value;
      }

      if (key === 'scaleX' || key === 'scaleY' || key === 'scaleZ') {
        body.scale[key.toLowerCase().slice(-1)] = newValue;
      }

      if (key === 'raycast') {
        body.geometry.raycast = newValue;
      }

      if (key === 'display') {
        body.visible = newValue !== 'none' && this.attributes.visibility === 'visible';
      }

      if (key === 'visibility') {
        body.visible = newValue === 'visible' && this.attributes.display !== 'none';
      }

      if (key === 'rotateOrder') {
        body.rotation.reorder(newValue);
      }
    }
  }

  resyncState(forceUpdate = false) {
    // camera 的 orbit 或其他动作直接操作了 body，需要同步状态
    const body = this[_body];

    if (body) {
      const attributes = this.attributes;
      const ops = [updateRotation(this, body), attributes[setAttribute]('scaleX', body.scale.x), attributes[setAttribute]('scaleY', body.scale.y), attributes[setAttribute]('scaleZ', body.scale.z), attributes[setAttribute]('x', body.position.x), attributes[setAttribute]('y', body.position.y), attributes[setAttribute]('z', body.position.z)];

      if (forceUpdate && ops.some(o => o)) {
        this.forceUpdate();
      }
    }
  }

  rotate(deg, axis = [0, 1, 0]) {
    const body = this[_body];

    if (body) {
      const rad = Math.PI * deg / 180;
      body.matrix.rotate(rad, axis);
      body.matrix.getRotation(body.quaternion);
      body.rotation.fromQuaternion(body.quaternion);
      const needsUpdate = updateRotation(this, body);
      if (needsUpdate) this.forceUpdate();
    }
  }

  setBody(body, update = true) {
    const oldBody = this[_body];
    this[_body] = body;

    if (oldBody) {
      oldBody.setParent(null);
      delete oldBody._node;
    }

    if (this.parent && this.parent.body) {
      this[_body].setParent(this.parent.body);
    }

    if (update) {
      const _changedAttrs = Object.entries(this.attributes[changedAttrs]);

      for (let i = 0; i < _changedAttrs.length; i++) {
        const [key, value] = _changedAttrs[i];
        this.onPropertyChange(key, value, value);
      }

      if (_changedAttrs.length <= 0) this.forceUpdate();
    }

    body._node = this;

    if (this.groupBody && this.children && this.children.length > 0) {
      this.groupBody.setParent(body);
    }
  }

  transform(m) {
    const body = this[_body];

    if (body) {
      body.matrix.multiply(m);
      body.matrix.getRotation(body.quaternion);
      body.matrix.getTranslation(body.position);
      body.matrix.getScaling(body.scale);
      body.rotation.fromQuaternion(body.quaternion);
      this.resyncState();
    }
  }

  traverse(callback) {
    if (this[_body]) {
      this[_body].traverse(body => {
        if (body._node) callback(body._node);
      });
    }
  }

  updateMatrix() {
    if (this[_body]) {
      this[_body].updateMatrix();

      this.forceUpdate();
    }
  }

  updateMatrixWorld(force = false) {
    if (this[_body]) {
      this[_body].updateMatrixWorld();

      this.forceUpdate();
    }
  }

}

_defineProperty(Node3d, "Attr", _attribute_node3d__WEBPACK_IMPORTED_MODULE_1__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Node3d, 'node3d');

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node3dAttr; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);

const Attr = spritejs__WEBPACK_IMPORTED_MODULE_0__["Node"].Attr;
const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
const declareAlias = Symbol.for('spritejs_declareAlias');
class Node3dAttr extends Attr {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

      /* rotate */
      rotateOrder: 'YXZ',
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,

      /* scale */
      raycast: undefined,
      // 碰撞的形状，默认是立方体bounds，设为sphere可以检测球形
      visibility: 'visible'
    });
    this[declareAlias]('rotate', 'scale');
  }

  get z() {
    return this[getAttribute]('z');
  }

  set z(value) {
    this[setAttribute]('z', value);
  }

  get raycast() {
    return this[getAttribute]('raycast');
  }

  set raycast(value) {
    this[setAttribute]('raycast', value);
  }
  /* override */


  get pos() {
    return [this.x, this.y, this.z];
  }

  set pos(value) {
    if (!Array.isArray(value)) value = [value, value, value];
    this.x = value[0];
    this.y = value[1];
    this.z = value[2];
  }

  get rotateX() {
    return this[getAttribute]('rotateX');
  }

  set rotateX(value) {
    this[setAttribute]('rotateX', value);
  }

  get rotateY() {
    return this[getAttribute]('rotateY');
  }

  set rotateY(value) {
    this[setAttribute]('rotateY', value);
  }

  get rotateZ() {
    return this[getAttribute]('rotateZ');
  }

  set rotateZ(value) {
    this[setAttribute]('rotateZ', value);
  }
  /* override */


  get rotate() {
    return [this.rotateX, this.rotateY, this.rotateZ];
  }

  set rotate(value) {
    if (!Array.isArray(value)) value = [value, 0, 0];
    this.rotateX = value[0];
    this.rotateY = value[1];
    this.rotateZ = value[2];
  }

  get rotateOrder() {
    return this[getAttribute]('rotateOrder');
  }

  set rotateOrder(value) {
    this[setAttribute]('rotateOrder', value);
  }

  get scaleX() {
    return this[getAttribute]('scaleX');
  }

  set scaleX(value) {
    this[setAttribute]('scaleX', value);
  }

  get scaleY() {
    return this[getAttribute]('scaleY');
  }

  set scaleY(value) {
    this[setAttribute]('scaleY', value);
  }

  get scaleZ() {
    return this[getAttribute]('scaleZ');
  }

  set scaleZ(value) {
    this[setAttribute]('scaleZ', value);
  }
  /* override */


  get scale() {
    return [this.scaleX, this.scaleY, this.scaleZ];
  }

  set scale(value) {
    if (!Array.isArray(value)) value = [value, value, value];
    this.scaleX = value[0];
    this.scaleY = value[1];
    this.scaleZ = value[2];
  }

  get visibility() {
    return this[getAttribute]('visibility');
  }

  set visibility(value) {
    if (value !== 'visible' && value !== 'hidden') {
      throw new TypeError('Invalid visiblity value.');
    }

    this[setAttribute]('visibility', value);
  }

}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameraAttr; });
/* harmony import */ var _node3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class GameraAttr extends _node3d__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      near: 0.1,
      far: 100,
      fov: 45,
      aspect: 1,
      left: undefined,
      right: undefined,
      bottom: undefined,
      top: undefined,
      zoom: 1,
      mode: 'perspective' // perspective - 透视相机， orthographic - 正交投影相机

    });
  }

  get near() {
    return this[getAttribute]('near');
  }

  set near(value) {
    this[setAttribute]('near', value);
  }

  get far() {
    return this[getAttribute]('far');
  }

  set far(value) {
    this[setAttribute]('far', value);
  }

  get fov() {
    return this[getAttribute]('fov');
  }

  set fov(value) {
    this[setAttribute]('fov', value);
  }

  get aspect() {
    return this[getAttribute]('aspect');
  }

  set aspect(value) {
    this[setAttribute]('aspect', value);
  }

  get left() {
    return this[getAttribute]('left');
  }

  set left(value) {
    this[setAttribute]('left', value);
  }

  get right() {
    return this[getAttribute]('right');
  }

  set right(value) {
    this[setAttribute]('right', value);
  }

  get top() {
    return this[getAttribute]('top');
  }

  set top(value) {
    this[setAttribute]('top', value);
  }

  get bottom() {
    return this[getAttribute]('bottom');
  }

  set bottom(value) {
    this[setAttribute]('bottom', value);
  }

  get zoom() {
    return this[getAttribute]('zoom');
  }

  set zoom(value) {
    this[setAttribute]('zoom', value);
  }

  get mode() {
    return this[getAttribute]('mode');
  }

  set mode(value) {
    if (value && value !== 'perspective' && value !== 'orthographic') {
      throw new TypeError('Invalid camera mode.');
    }

    this[setAttribute]('mode', value);
  }

}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh3d; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _helper_geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _group3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51);
/* harmony import */ var _attribute_mesh3d__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const changedAttrs = Symbol.for('spritejs_changedAttrs');

const _program = Symbol('program');

const _geometry = Symbol('geometry');

const _model = Symbol('model');

const _beforeRender = Symbol('beforeRender');

const _afterRender = Symbol('afterRender');

const _updateMeshPromise = Symbol('updateMeshPromise');

function colorAttribute(node, geometry) {
  const updateColor = geometry.attributes.color;
  const positions = geometry.attributes.position.data;
  const len = positions.length / 3;
  const color = updateColor ? updateColor.data : new Float32Array(4 * len);
  const colors = node.attributes.colors;
  const colorLen = colors.length / 4;
  const colorDivisor = node.attributes.colorDivisor;

  for (let i = 0; i < len; i++) {
    // const color = colors
    const idx = Math.floor(i / colorDivisor) % colorLen;
    color[4 * i] = colors[idx * 4];
    color[4 * i + 1] = colors[idx * 4 + 1];
    color[4 * i + 2] = colors[idx * 4 + 2];
    color[4 * i + 3] = colors[idx * 4 + 3];
  }

  if (updateColor) updateColor.needsUpdate = true;
  return {
    size: 4,
    data: color
  };
}

function normalize(v) {
  const len = Math.hypot(...v);
  return [v[0] / len, v[1] / len, v[2] / len];
} // 两个向量的叉积就是这个向量的法向量


function getNormal(a, b, c) {
  const ab = [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const bc = [b[0] - c[0], b[1] - c[1], b[2] - c[2]];
  return normalize([ab[1] * bc[2] - ab[2] * bc[1], ab[0] * bc[2] - ab[2] * bc[0], ab[0] * bc[1] - ab[1] * bc[0]]);
}

class Mesh3d extends _group3d__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static fromMesh(mesh) {
    const program = mesh.program;
    const geometry = mesh.geometry;
    const model = mesh.geometry.attributes;
    const node = new Mesh3d(program);
    node[_geometry] = geometry;
    node[_model] = model;
    node.setBody(mesh);
    let listeners = node.getListeners('beforerender');

    if (listeners.length) {
      mesh.onBeforeRender(node[_beforeRender]);
    }

    listeners = node.getListeners('afterrender');

    if (listeners.length) {
      mesh.onAfterRender(node[_afterRender]);
    }

    return node;
  }

  constructor(program, _ref = {}) {
    let {
      model
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["model"]);

    if (program && !(program instanceof ogl__WEBPACK_IMPORTED_MODULE_1__["Program"])) {
      attrs = program;
      program = attrs.program;
    }

    if (!program) {
      throw new Error('No program specified!');
    }

    super(attrs);
    this.groupBody = this.body;
    this.setProgram(program);

    this[_beforeRender] = args => {
      this.dispatchEvent({
        type: 'beforerender',
        detail: args
      });
    };

    this[_afterRender] = args => {
      this.dispatchEvent({
        type: 'afterrender',
        detail: args
      });
    };

    if (model && typeof model.then === 'function') {
      this[_model] = model.then(res => {
        this[_model] = res;
        this.remesh();
      });
    } else if (!model) {
      this.remesh();
    } else {
      this.setGeometry(model);
    }
  }

  get geometry() {
    return this[_geometry];
  }
  /* override */


  get meshes() {
    const meshes = super.meshes;
    if (this.body.geometry && this.attributes.display !== 'none') meshes.unshift(this.body);
    return meshes;
  }

  get model() {
    return this[_model];
  }

  get program() {
    return this[_program];
  }

  _createMesh({
    geometry,
    mode,
    program
  }) {
    return new ogl__WEBPACK_IMPORTED_MODULE_1__["Mesh"](program.gl, {
      geometry,
      mode,
      program
    });
  }
  /* override */


  addEventListener(type, listener, options = {}) {
    super.addEventListener(type, listener, options);

    if (this.body.onBeforeRender && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');

      if (listeners.length === 1) {
        this.body.onBeforeRender(this[_beforeRender]);
      }
    } else if (this.body.onAfterRender && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');

      if (listeners.length === 1) {
        this.body.onAfterRender(this[_afterRender]);
      }
    }

    return this;
  }
  /* override */


  cloneNode(deep = false) {
    const attrs = this.attributes[changedAttrs];
    const model = this[_geometry].preserveBuffers ? this[_geometry] : this[_model];
    const cloned = new this.constructor(this[_program], _objectSpread({}, attrs, {
      model
    }));

    if (deep) {
      this.children.forEach(child => {
        const childNode = child.cloneNode(deep);
        cloned.appendChild(childNode);
      });
    }

    return cloned;
  }
  /* override */


  dispose() {
    const children = this.children;

    for (let i = children.length - 1; i >= 0; i--) {
      children[i].dispose();
    }

    const geometry = this[_geometry];

    if (geometry && !geometry.preserveBuffers) {
      geometry.remove();
      delete this[_geometry];
    }

    super.dispose();
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'colors' || key === 'colorDivisor') {
      if (newValue !== oldValue) {
        const program = this.program;

        if (program && program.extraAttribute.color) {
          const geometry = this.geometry;
          colorAttribute(this, geometry);
        }
      }
    }

    if (key === 'mode') {
      const program = this.program;

      if (program) {
        this.body.mode = program.gl[newValue];
      }
    }
  }

  remesh() {
    this.setGeometry();
  }
  /* override */


  removeAllListeners(type, options = {}) {
    super.removeAllListeners(type, options);

    if (this.body.onBeforeRender && type === 'beforerender') {
      const idx = this.body.beforeRenderCallbacks.indexOf(this[_beforeRender]);
      if (idx >= 0) this.body.beforeRenderCallbacks.splice(idx, 1);
    } else if (this.body.onAfterRender && type === 'afterrender') {
      const idx = this.body.afterRenderCallbacks.indexOf(this[_afterRender]);
      if (idx >= 0) this.body.afterRenderCallbacks.splice(idx, 1);
    }

    return this;
  }
  /* override */


  removeEventListener(type, listener, options = {}) {
    super.removeEventListener(type, listener, options);

    if (this.body.onBeforeRender && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');

      if (listeners.length === 0) {
        const idx = this.body.beforeRenderCallbacks.indexOf(this[_beforeRender]);
        if (idx >= 0) this.body.beforeRenderCallbacks.splice(idx, 1);
      }
    } else if (this.body.onAfterRender && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');

      if (listeners.length === 0) {
        const idx = this.body.afterRenderCallbacks.indexOf(this[_afterRender]);
        if (idx >= 0) this.body.afterRenderCallbacks.splice(idx, 1);
      }
    }

    return this;
  }

  setGeometry(model = this[_model]) {
    if (!model) return;
    const program = this[_program];
    const gl = program.gl;
    let geometry;

    if (model instanceof ogl__WEBPACK_IMPORTED_MODULE_1__["Geometry"]) {
      geometry = model;
    } else {
      geometry = new _helper_geometry__WEBPACK_IMPORTED_MODULE_2__["default"](gl, model, false);
    }

    if (!geometry.attributes.normal && program.attributeLocations.has('normal')) {
      const position = geometry.attributes.position.data;
      const len = geometry.attributes.position.data.length;
      const normal = new Float32Array(len);

      if (len % 9 === 0) {
        // 自动计算法向量
        for (let i = 0; i < len; i += 9) {
          const a = [position[i], position[i + 1], position[i + 2]],
                b = [position[i + 3], position[i + 4], position[i + 5]],
                c = [position[i + 6], position[i + 7], position[i + 8]];
          const norm = getNormal(a, b, c);
          normal.set([...norm, ...norm, ...norm], i);
        }
      } else if (len % 3 === 0) {
        for (let i = 0; i < len; i += 3) {
          normal.set([-1, 0, 0], i);
        }
      }

      geometry.addAttribute('normal', {
        size: 3,
        data: normal
      });
    }

    const extraAttrs = program.extraAttribute;

    if (extraAttrs) {
      Object.entries(extraAttrs).forEach(([key, setter]) => {
        if (!geometry.attributes[key]) {
          geometry.addAttribute(key, setter(this, geometry));
        }
      });
    }

    geometry.raycast = this.attributes.raycast;
    const oldGeometry = this[_geometry];

    if (oldGeometry && oldGeometry !== geometry && !oldGeometry.preserveBuffers) {
      oldGeometry.remove();
    }

    this[_geometry] = geometry; // this[_model] = geometry.attributes;

    this[_model] = model;
    const mode = this.attributes.mode;

    const mesh = this._createMesh({
      mode: gl[mode],
      geometry,
      program
    });

    this.setBody(mesh);
    let listeners = this.getListeners('beforerender');

    if (listeners.length) {
      mesh.onBeforeRender(this[_beforeRender]);
    }

    listeners = this.getListeners('afterrender');

    if (listeners.length) {
      mesh.onAfterRender(this[_afterRender]);
    }
  }

  setResolution({
    width,
    height
  }) {
    super.setResolution({
      width,
      height
    });
    const program = this.program;

    if (program && program.uniforms.uResolution) {
      program.uniforms.uResolution = {
        value: [width, height]
      };
    }

    if (program && program.uniforms.uDPR) {
      const dpr = this.layer ? this.layer.displayRatio : 1;
      program.uniforms.uDPR = {
        value: dpr
      };
    }
  }

  setProgram(program) {
    this[_program] = program;
    const gl = program.gl;
    program.extraAttribute = program.extraAttribute || {};

    if (program.attributeLocations.has('color') && !program.extraAttribute.color) {
      program.extraAttribute.color = colorAttribute;
    }

    if (gl.getUniformLocation(program.program, 'uShadow') && !program.uniforms.uShadow) {
      program.uniforms.uShadow = {
        value: 0.5
      };
    }

    if (gl.getUniformLocation(program.program, 'uResolution') && !program.uniforms.uResolution) {
      const {
        width,
        height
      } = this.getResolution();
      program.uniforms.uResolution = {
        value: [width, height]
      };
    }

    if (gl.getUniformLocation(program.program, 'uDPR') && !program.uniforms.uDPR) {
      const dpr = this.layer ? this.layer.displayRatio : 1;
      program.uniforms.uDPR = {
        value: dpr
      };
    }

    const geometry = this[_geometry];

    if (geometry) {
      const mode = this.attributes.mode;

      const mesh = this._createMesh({
        mode: gl[mode],
        geometry,
        program
      });

      this.setBody(mesh);
    }
  }

  transpose(order = 'zxy') {
    const geometry = this[_geometry];

    if (geometry) {
      geometry.transpose(order);
      this.forceUpdate();
    }
  }

  updateMesh() {
    if (this.program) {
      if (!this[_updateMeshPromise]) {
        this[_updateMeshPromise] = Promise.resolve().then(() => {
          delete this[_updateMeshPromise];
          const oldMesh = this.mesh;
          this.remesh();
          const newMesh = this.mesh;
          this.dispatchEvent({
            type: 'updatemesh',
            detail: {
              oldMesh,
              newMesh
            }
          });
        });
      }
    }
  }

}

_defineProperty(Mesh3d, "Attr", _attribute_mesh3d__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Mesh3d, 'mesh3d');

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Geometry; });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function parseData(data, size = 3) {
  let d = data.data || data;
  if (Array.isArray(d)) d = new Float32Array(d);
  const s = data.size || size;

  if (data.data) {
    data.data = d;
    data.size = s;
    return data;
  }

  return {
    size: s,
    data: d
  };
}

ogl__WEBPACK_IMPORTED_MODULE_0__["Geometry"].prototype.transpose = function (order = 'zxy') {
  const geometry = this;

  if (geometry) {
    order = [...order].map(c => {
      if (c === 'x' || c === 'X') return 0;
      if (c === 'y' || c === 'Y') return 1;
      return 2;
    });
    const position = geometry.attributes.position;
    const {
      size,
      data
    } = position;

    for (let i = 0; i < data.length; i += size) {
      const pos = [data[i], data[i + 1], data[i + 2]];

      for (let j = 0; j < 3; j++) {
        const idx = order[j] != null ? order[j] : j;
        data[i + j] = pos[idx];
      }
    }

    position.needsUpdate = true;
  }
};

class Geometry extends ogl__WEBPACK_IMPORTED_MODULE_0__["Geometry"] {
  constructor(gl, model, preserveBuffers = true) {
    const {
      position,
      uv,
      normal,
      index
    } = model,
          others = _objectWithoutProperties(model, ["position", "uv", "normal", "index"]);

    const attributes = {};
    if (position) attributes.position = parseData(position);
    if (uv) attributes.uv = parseData(uv, 2);

    if (normal) {
      attributes.normal = parseData(normal);
    }

    if (index) {
      let data = index.data || index;
      if (Array.isArray(data)) data = new Uint16Array(data);
      attributes.index = {
        data
      };
    }

    if (others) {
      let positionCount;
      const position = attributes.position;

      if (position) {
        positionCount = position.data.length / position.size;
      }

      Object.entries(others).forEach(([key, value]) => {
        let size = 3;

        if (!value.size) {
          const length = value.data ? value.data.length : value.length;
          if (length && positionCount) size = length / positionCount;
        }

        attributes[key] = parseData(value, size);
      });
    }

    super(gl, attributes); // prevent remove geometry before setGeometry

    this.preserveBuffers = preserveBuffers;
  }

}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh3dAttr; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);


const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class Mesh3dAttr extends _node3d__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      mode: 'TRIANGLES',
      // POINTS, LINES, LINE_LOOP,  LINE_STRIP, TRIANGLES
      colors: [0.5, 0.5, 0.5, 1],
      colorDivisor: 3,
      raycast: 'box' // box sphere none

    });
  }

  get colors() {
    return this[getAttribute]('colors');
  }

  set colors(value) {
    if (typeof value === 'string') {
      value = value.replace(/\s*,\s*/g, ',');
      let colors = value.split(/\s+/g);
      colors = colors.map(c => {
        return new spritejs__WEBPACK_IMPORTED_MODULE_0__["Color"](c);
      });
      value = colors.reduce((a, b) => [...a, ...b]);
    } else if (Array.isArray(value)) {
      if (typeof value[0] === 'string') {
        value = value.reduce((a, b) => {
          a.push(...new spritejs__WEBPACK_IMPORTED_MODULE_0__["Color"](b));
          return a;
        }, []);
      } else if (Array.isArray(value[0])) {
        value = value.reduce((a, b) => [...a, ...b]);
      }
    }

    this[setAttribute]('colors', value);
  }

  get colorDivisor() {
    return this[getAttribute]('colorDivisor');
  }

  set colorDivisor(value) {
    this[setAttribute]('colorDivisor', value);
  }

  get mode() {
    return this[getAttribute]('mode');
  }

  set mode(value) {
    if (typeof value === 'number' && value >= 0 && value < 7) {
      value = ['POINTS', 'LINES', 'LINE_LOOP', 'LINE_STRIP', 'TRIANGLES', 'TRIANGLE_STRIP', 'TRIANGLE_FAN'][value];
    }

    if (value && value !== 'TRIANGLES' && value !== 'POINTS' && value !== 'LINES' && value !== 'LINE_LOOP' && value !== 'LINE_STRIP' && value !== 'TRIANGLE_STRIP' && value !== 'TRIANGLE_FAN') {
      throw new TypeError('Invalid mode value.');
    }

    this[setAttribute]('mode', value);
  }

  get raycast() {
    return this[getAttribute]('raycast');
  }

  set raycast(value) {
    this[setAttribute]('raycast', value);
  }

}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skin; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const _rig = Symbol('rig');

const _animations = [];

function initAnimation(body, animationFrames) {
  const animation = body.addAnimation(animationFrames.data);
  const node = body._node;
  const elapsed = animationFrames.elapsed || 0;

  if (elapsed) {
    animation.elapsed = elapsed;
    body.update();
    node.forceUpdate();
  }

  Object.defineProperties(animationFrames, {
    animation: {
      get() {
        return animation;
      },

      enumerable: true
    },
    elapsed: {
      get() {
        return animation.elapsed;
      },

      set(value) {
        animation.elapsed = value;
        body.update();
        node.forceUpdate();
      },

      enumerable: true
    }
  });
  return animationFrames;
}

class Skin extends _mesh3d__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(program, _ref = {}) {
    let {
      model
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["model"]);

    super(program, _objectSpread({
      model
    }, attrs));
    this[_animations] = [];
  }

  get bones() {
    if (this[_rig]) {
      return this[_rig].bones;
    }

    return null;
  }
  /* override */


  _createMesh({
    geometry,
    program
  }) {
    const rig = this[_rig];
    return new ogl__WEBPACK_IMPORTED_MODULE_1__["Skin"](program.gl, {
      rig,
      geometry,
      program
    });
  }

  addAnimation(animationData) {
    const animationFrames = {
      data: animationData
    };
    const body = this.body;

    if (body.addAnimation) {
      initAnimation(body, animationFrames);
    }

    this[_animations].push(animationFrames);

    return animationFrames;
  }
  /* override */


  setGeometry(model = this.model) {
    const rig = model.rig;
    this[_rig] = rig;
    delete model.rig;
    super.setGeometry(model);
    model.rig = rig;

    if (model !== this.geometry) {
      this.geometry.rig = rig;
    }

    this[_animations].forEach(frames => {
      if (!frames.animation) {
        initAnimation(this.body, frames);
      }
    });
  }

}
Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Skin, 'skin');

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sphere; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _attribute_sphere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Sphere extends _mesh3d__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'radius' || key === 'widthSegments' || key === 'heightSegments' || key === 'phiStart' || key === 'phiLength' || key === 'thetaStart' || key === 'thetaLength') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      radius,
      widthSegments,
      heightSegments,
      phiStart,
      phiLength,
      thetaStart,
      thetaLength
    } = this.attributes;
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_1__["Sphere"](gl, {
      radius,
      widthSegments,
      heightSegments,
      phiStart,
      phiLength,
      thetaStart,
      thetaLength
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Sphere, "Attr", _attribute_sphere__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Sphere, 'sphere');

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphereAttr; });
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class SphereAttr extends _mesh3d__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      radius: 0.5,
      widthSegments: 32,
      heightSegments: 16,
      phiStart: 0,
      phiLength: Math.PI * 2,
      thetaStart: 0,
      thetaLength: Math.PI,
      raycast: 'sphere'
    });
  }

  get radius() {
    return this[getAttribute]('radius');
  }

  set radius(value) {
    this[setAttribute]('radius', value);
  }

  get widthSegments() {
    return this[getAttribute]('widthSegments');
  }

  set widthSegments(value) {
    this[setAttribute]('widthSegments', value);
  }

  get heightSegments() {
    return this[getAttribute]('heightSegments');
  }

  set heightSegments(value) {
    this[setAttribute]('heightSegments', value);
  }

  get phiStart() {
    return this[getAttribute]('phiStart');
  }

  set phiStart(value) {
    this[setAttribute]('phiStart', value);
  }

  get phiLength() {
    return this[getAttribute]('phiLength');
  }

  set phiLength(value) {
    this[setAttribute]('phiLength', value);
  }

  get thetaStart() {
    return this[getAttribute]('thetaStart');
  }

  set thetaStart(value) {
    this[setAttribute]('thetaStart', value);
  }

  get thetaLength() {
    return this[getAttribute]('thetaLength');
  }

  set thetaLength(value) {
    this[setAttribute]('thetaLength', value);
  }

}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cube; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _attribute_cube__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Cube extends _mesh3d__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'width' || key === 'height' || key === 'depth' || key === 'widthSegments' || key === 'heightSegments' || key === 'depthSegments') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    } = this.attributes;
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_1__["Box"](gl, {
      width,
      height,
      depth,
      widthSegments,
      heightSegments,
      depthSegments
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Cube, "Attr", _attribute_cube__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Cube, 'cube');

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CubeAttr; });
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class CubeAttr extends _mesh3d__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      width: 1,
      height: 1,
      depth: 1,

      /* size */
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,

      /* override */
      colorDivisor: 4
    });
  }

  get width() {
    return this[getAttribute]('width');
  }

  set width(value) {
    this[setAttribute]('width', value);
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', value);
  }

  get size() {
    return [this.width, this.height, this.depth];
  }

  set size(value) {
    if (!Array.isArray(value)) value = [value, value, value];
    this.width = value[0];
    this.height = value[1];
    this.depth = value[2];
  }

  get depth() {
    return this[getAttribute]('depth');
  }

  set depth(value) {
    this[setAttribute]('depth', value);
  }

  get widthSegments() {
    return this[getAttribute]('widthSegments');
  }

  set widthSegments(value) {
    this[setAttribute]('widthSegments', value);
  }

  get heightSegments() {
    return this[getAttribute]('heightSegments');
  }

  set heightSegments(value) {
    this[setAttribute]('heightSegments', value);
  }

  get depthSegments() {
    return this[getAttribute]('depthSegments');
  }

  set depthSegments(value) {
    this[setAttribute]('depthSegments', value);
  }

}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Curve; });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class Curve extends ogl__WEBPACK_IMPORTED_MODULE_0__["Curve"] {
  constructor({
    points,
    divisions,
    type
  } = {}) {
    if (Array.isArray(points) && points[0] && !(points[0] instanceof ogl__WEBPACK_IMPORTED_MODULE_0__["Vec3"])) {
      points = points.map(p => new ogl__WEBPACK_IMPORTED_MODULE_0__["Vec3"]().copy(p));
    }

    super({
      points,
      divisions,
      type
    });
  }

}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plane; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _attribute_plane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Plane extends _mesh3d__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'width' || key === 'height' || key === 'widthSegments' || key === 'heightSegments') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      width,
      height,
      widthSegments,
      heightSegments
    } = this.attributes;
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_1__["Plane"](gl, {
      width,
      height,
      widthSegments,
      heightSegments
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Plane, "Attr", _attribute_plane__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Plane, 'plane');

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaneAttr; });
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class PlaneAttr extends _mesh3d__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      width: 1,
      height: 1,
      widthSegments: 1,
      heightSegments: 1
    });
  }

  get width() {
    return this[getAttribute]('width');
  }

  set width(value) {
    this[setAttribute]('width', value);
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', value);
  }

  get widthSegments() {
    return this[getAttribute]('widthSegments');
  }

  set widthSegments(value) {
    this[setAttribute]('widthSegments', value);
  }

  get heightSegments() {
    return this[getAttribute]('heightSegments');
  }

  set heightSegments(value) {
    this[setAttribute]('heightSegments', value);
  }

}

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polyline3d; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _attribute_polyline3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Polyline3d extends _mesh3d__WEBPACK_IMPORTED_MODULE_1__["default"] {
  setProgram(program) {
    if (!program.uniforms.uThickness) {
      program.uniforms.uThickness = {
        value: 1
      };
    }

    if (!program.uniforms.uMiter) {
      program.uniforms.uMiter = {
        value: 1
      };
    }

    if (program.gl.getUniformLocation(program.program, 'uTotalLength') && !program.uniforms.uTotalLength) {
      program.uniforms.uTotalLength = {
        value: 0
      };
    }

    super.setProgram(program);
  }

  get points() {
    return this.attributes.points;
  }
  /* override */


  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'points') {
      if (newValue !== oldValue) {
        if (newValue.length === oldValue.length) {
          this.updateGeometry();
        } else {
          this.updateMesh();
        }
      }
    }
  }

  updateGeometry() {
    const points = this.attributes.points;
    const position = this.geometry.attributes.position.data;
    const prev = this.geometry.attributes.prev.data;
    const next = this.geometry.attributes.next.data;
    const seg = this.geometry.attributes.seg ? this.geometry.attributes.seg.data : null;
    let segLen = 0;

    for (let i = 0; i < points.length; i += 3) {
      const p = [points[i], points[i + 1], points[i + 2]];
      position.set(p, i * 2);
      position.set(p, i * 2 + 3);

      if (seg) {
        if (i === 0) seg.set([0, 0], 0);else {
          segLen += Math.hypot(points[i] - points[i - 3], points[i + 1] - points[i - 2], points[i + 2] - points[i - 1]);
          seg.set([segLen, segLen], i / 3 * 2);
        }
      }

      if (i === 0) {
        // If first point, calculate prev using the distance to 2nd point
        const p2 = [points[i] - points[i + 3] + points[i], points[i + 1] - points[i + 4] + points[i + 1], points[i + 2] - points[i + 5] + points[i + 2]];
        prev.set(p2, i * 2);
        prev.set(p2, i * 2 + 3);
      } else {
        next.set(p, (i - 3) * 2);
        next.set(p, (i - 3) * 2 + 3);
      }

      if (i >= points.length - 3) {
        // If last point, calculate next using distance to 2nd last point
        const p2 = [points[i] - points[i - 3] + points[i], points[i + 1] - points[i - 2] + points[i + 1], points[i + 2] - points[i - 1] + points[i + 2]];
        next.set(p2, i * 2);
        next.set(p2, i * 2 + 3);
      } else {
        prev.set(p, (i + 3) * 2);
        prev.set(p, (i + 3) * 2 + 3);
      }
    }

    if (this.program && this.program.uniforms.uTotalLength) {
      this.program.uniforms.uTotalLength = {
        value: segLen
      };
    }

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.prev.needsUpdate = true;
    this.geometry.attributes.next.needsUpdate = true;

    if (seg) {
      this.geometry.attributes.seg.needsUpdate = true;
    }
  }
  /* override */


  remesh() {
    const points = this.attributes.points;
    const count = points.length / 3;
    const position = new Float32Array(count * 3 * 2);
    const prev = new Float32Array(count * 3 * 2);
    const next = new Float32Array(count * 3 * 2);
    const side = new Float32Array(count * 2);
    const uv = new Float32Array(count * 2 * 2);
    const index = new Uint16Array((count - 1) * 3 * 2);
    const modle = {
      position,
      prev,
      next,
      side,
      uv,
      index
    };

    if (this.program && this.program.attributeLocations.has('seg')) {
      const seg = new Float32Array(count * 2);
      modle.seg = seg;
    } // Set static buffers


    for (let i = 0; i < count; i++) {
      side.set([-1, 1], i * 2);
      const v = i / (count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === count - 1) continue; // eslint-disable-line no-continue

      const ind = i * 2;
      index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
      index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
    }

    this.setGeometry(modle);
    this.updateGeometry();
  }

}

_defineProperty(Polyline3d, "Attr", _attribute_polyline3d__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Polyline3d, 'polyline3d');

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolylineAttr; });
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class PolylineAttr extends _mesh3d__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      points: [],
      raycast: 'none'
    });
  }

  get points() {
    return this[getAttribute]('points');
  }

  set points(value) {
    if (Array.isArray(value)) {
      value = value.reduce((a, b) => {
        if (Array.isArray(b)) {
          return [...a, ...b];
        }

        return [...a, b];
      }, []);
    } // if(value) { // 要去掉重复的点
    //   if(value.length % 3) throw new Error('Invalid points set');
    //   const points = [value[0], value[1], value[2]];
    //   for(let i = 3; i < value.length; i += 3) {
    //     if(value[i] !== value[i - 3] || value[i + 1] !== value[i - 2] || value[i + 2] !== value[i - 1]) {
    //       points.push(value[i], value[i + 1], value[i + 2]);
    //     }
    //   }
    //   value = points;
    // }


    this[setAttribute]('points', value);
  }

}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cylinder; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _attribute_cylinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Cylinder extends _mesh3d__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);

    if (key === 'radiusTop' || key === 'radiusBottom' || key === 'height' || key === 'radialSegments' || key === 'heightSegments' || key === 'openEnded' || key === 'thetaStart' || key === 'thetaLength') {
      if (newValue !== oldValue) {
        this.updateMesh();
      }
    }
  }
  /* override */


  remesh() {
    const gl = this.program.gl;
    const {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    } = this.attributes;
    const geometry = new ogl__WEBPACK_IMPORTED_MODULE_1__["Cylinder"](gl, {
      radiusTop,
      radiusBottom,
      height,
      radialSegments,
      heightSegments,
      openEnded,
      thetaStart,
      thetaLength
    });
    this.setGeometry(geometry);
  }

}

_defineProperty(Cylinder, "Attr", _attribute_cylinder__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(Cylinder, 'cylinder');

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CylinderAttr; });
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);

const setAttribute = Symbol.for('spritejs_setAttribute');
const getAttribute = Symbol.for('spritejs_getAttribute');
const setDefault = Symbol.for('spritejs_setAttributeDefault');
class CylinderAttr extends _mesh3d__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(subject) {
    super(subject);
    this[setDefault]({
      radiusTop: 0.5,
      radiusBottom: 0.5,

      /* radius */
      height: 1,
      radialSegments: 16,
      heightSegments: 1,
      openEnded: false,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    });
  }

  get radiusTop() {
    return this[getAttribute]('radiusTop');
  }

  set radiusTop(value) {
    this[setAttribute]('radiusTop', value);
  }

  get radiusBottom() {
    return this[getAttribute]('radiusBottom');
  }

  set radiusBottom(value) {
    this[setAttribute]('radiusBottom', value);
  }

  get radius() {
    return [this.radiusTop, this.radiusBottom];
  }

  set radius(value) {
    if (!Array.isArray(value)) value = [value, value];
    this.radiusTop = value[0];
    this.radiusBottom = value[1];
  }

  get height() {
    return this[getAttribute]('height');
  }

  set height(value) {
    this[setAttribute]('height', value);
  }

  get radialSegments() {
    return this[getAttribute]('radialSegments');
  }

  set radialSegments(value) {
    this[setAttribute]('radialSegments', value);
  }

  get heightSegments() {
    return this[getAttribute]('heightSegments');
  }

  set heightSegments(value) {
    this[setAttribute]('heightSegments', value);
  }

  get openEnded() {
    return this[getAttribute]('openEnded');
  }

  set openEnded(value) {
    this[setAttribute]('openEnded', value);
  }

  get thetaStart() {
    return this[getAttribute]('thetaStart');
  }

  set thetaStart(value) {
    this[setAttribute]('thetaStart', value);
  }

  get thetaLength() {
    return this[getAttribute]('thetaLength');
  }

  set thetaLength(value) {
    this[setAttribute]('thetaLength', value);
  }

}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderTarget; });
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _group3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const _target = Symbol('target');

const _buffer = Symbol('buffer');

class RenderTarget extends _group3d__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(gl, _ref = {}) {
    let {
      width = gl.canvas.width,
      height = gl.canvas.height,
      target = gl.FRAMEBUFFER,
      color = 1,
      // number of color attachments
      depth = true,
      stencil = false,
      depthTexture = false,
      // note - stencil breaks
      wrapS = gl.CLAMP_TO_EDGE,
      wrapT = gl.CLAMP_TO_EDGE,
      minFilter = gl.LINEAR,
      magFilter = minFilter,
      type = gl.UNSIGNED_BYTE,
      format = gl.RGBA,
      internalFormat = format,
      unpackAlignment,
      premultiplyAlpha,
      camera: cameraOptions,
      buffer = false
    } = _ref,
        attrs = _objectWithoutProperties(_ref, ["width", "height", "target", "color", "depth", "stencil", "depthTexture", "wrapS", "wrapT", "minFilter", "magFilter", "type", "format", "internalFormat", "unpackAlignment", "premultiplyAlpha", "camera", "buffer"]);

    super(attrs);
    const options = {
      width,
      height,
      target,
      color,
      depth,
      stencil,
      depthTexture,
      wrapS,
      wrapT,
      minFilter,
      magFilter,
      type,
      format,
      internalFormat,
      unpackAlignment,
      premultiplyAlpha
    };
    this.options = options;
    this[_target] = new ogl__WEBPACK_IMPORTED_MODULE_1__["RenderTarget"](gl, options);

    if (buffer) {
      this[_buffer] = new ogl__WEBPACK_IMPORTED_MODULE_1__["RenderTarget"](gl, this.options);
    }

    if (cameraOptions) {
      const camera = new _camera__WEBPACK_IMPORTED_MODULE_3__["default"](gl, cameraOptions);
      camera.connect(this, 0);
      this.camera = camera;
    }
  }

  get texture() {
    return this[_buffer] ? this[_buffer].texture : this[_target].texture;
  }

  renderBy(layer, _ref2 = {}) {
    let {
      root = this
    } = _ref2,
        options = _objectWithoutProperties(_ref2, ["root"]);

    const camera = this.camera ? this.camera.body : null;
    const target = this[_target];
    this.dispatchEvent({
      type: 'beforerender',
      detail: {
        scene: root,
        camera,
        renderer: layer
      }
    });
    layer.renderer.render(_objectSpread({
      scene: root.body,
      camera,
      target
    }, options));
    this.dispatchEvent({
      type: 'afterrender',
      detail: {
        scene: root,
        camera,
        renderer: layer
      }
    });
    return this[_target].texture;
  }

  swap() {
    if (this[_buffer] == null) {
      throw new Error('No buffer to swap. You must set buffer option to true when creating the renderTarget object.');
    }

    [this[_target], this[_buffer]] = [this[_buffer], this[_target]];
  }

}
Object(spritejs__WEBPACK_IMPORTED_MODULE_0__["registerNode"])(RenderTarget, 'rendertarget');

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextureLoader; });
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

class TextureLoader {
  static load(layer, opts) {
    const texture = ogl__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"].load(layer.gl, opts);

    if (texture && texture.loaded && texture.loaded.then) {
      // load loadKTX
      texture.loaded.then(() => {
        layer.forceUpdate();
      });
    } else if (texture && texture.then) {
      // load Image
      texture.then(() => {
        layer.forceUpdate();
      });
    }

    return texture;
  }

}

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NORMAL", function() { return NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NORMAL_GEOMETRY", function() { return NORMAL_GEOMETRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NORMAL_TEXTURE", function() { return NORMAL_TEXTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_CUBE", function() { return TEXTURE_CUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_WITH_SHADOW", function() { return TEXTURE_WITH_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOMETRY_WITH_TEXTURE", function() { return GEOMETRY_WITH_TEXTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOMETRY_WITH_SHADOW", function() { return GEOMETRY_WITH_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOMETRY_WITH_TEXTURE_AND_SHADOW", function() { return GEOMETRY_WITH_TEXTURE_AND_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POLYLINE", function() { return POLYLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASHLINE", function() { return DASHLINE; });
/* harmony import */ var _normal_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _normal_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony import */ var _geometry_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _geometry_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76);
/* harmony import */ var _texture_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77);
/* harmony import */ var _texture_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var _texture_cube_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79);
/* harmony import */ var _texture_cube_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80);
/* harmony import */ var _texture_with_shadow_frag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81);
/* harmony import */ var _texture_with_shadow_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82);
/* harmony import */ var _geometry_with_texture_frag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);
/* harmony import */ var _geometry_with_texture_vert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84);
/* harmony import */ var _geometry_with_shadow_frag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85);
/* harmony import */ var _geometry_with_shadow_vert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86);
/* harmony import */ var _geometry_with_texture_and_shadow_frag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87);
/* harmony import */ var _geometry_with_texture_and_shadow_vert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88);
/* harmony import */ var _polyline_frag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89);
/* harmony import */ var _polyline_vert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(90);
/* harmony import */ var _dashline_frag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91);
/* harmony import */ var _dashline_vert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(92);




















const NORMAL = {
  vertex: _normal_vert__WEBPACK_IMPORTED_MODULE_1__["default"],
  fragment: _normal_frag__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const NORMAL_GEOMETRY = {
  vertex: _geometry_vert__WEBPACK_IMPORTED_MODULE_3__["default"],
  fragment: _geometry_frag__WEBPACK_IMPORTED_MODULE_2__["default"]
};
const NORMAL_TEXTURE = {
  vertex: _texture_vert__WEBPACK_IMPORTED_MODULE_5__["default"],
  fragment: _texture_frag__WEBPACK_IMPORTED_MODULE_4__["default"]
};
const TEXTURE_CUBE = {
  vertex: _texture_cube_vert__WEBPACK_IMPORTED_MODULE_7__["default"],
  fragment: _texture_cube_frag__WEBPACK_IMPORTED_MODULE_6__["default"]
};
const TEXTURE_WITH_SHADOW = {
  vertex: _texture_with_shadow_vert__WEBPACK_IMPORTED_MODULE_9__["default"],
  fragment: _texture_with_shadow_frag__WEBPACK_IMPORTED_MODULE_8__["default"]
};
const GEOMETRY_WITH_TEXTURE = {
  vertex: _geometry_with_texture_vert__WEBPACK_IMPORTED_MODULE_11__["default"],
  fragment: _geometry_with_texture_frag__WEBPACK_IMPORTED_MODULE_10__["default"]
};
const GEOMETRY_WITH_SHADOW = {
  vertex: _geometry_with_shadow_vert__WEBPACK_IMPORTED_MODULE_13__["default"],
  fragment: _geometry_with_shadow_frag__WEBPACK_IMPORTED_MODULE_12__["default"]
};
const GEOMETRY_WITH_TEXTURE_AND_SHADOW = {
  vertex: _geometry_with_texture_and_shadow_vert__WEBPACK_IMPORTED_MODULE_15__["default"],
  fragment: _geometry_with_texture_and_shadow_frag__WEBPACK_IMPORTED_MODULE_14__["default"]
};
const POLYLINE = {
  vertex: _polyline_vert__WEBPACK_IMPORTED_MODULE_17__["default"],
  fragment: _polyline_frag__WEBPACK_IMPORTED_MODULE_16__["default"]
};
const DASHLINE = {
  vertex: _dashline_vert__WEBPACK_IMPORTED_MODULE_19__["default"],
  fragment: _dashline_frag__WEBPACK_IMPORTED_MODULE_18__["default"]
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    gl_FragColor.rgb = normalize(vNormal);\n    gl_FragColor.a = 1.0;\n}");

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat3 normalMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main() {\n    vNormal = normalize(normalMatrix * normal);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度\n\nvoid main() {\n  float light = dot(vNormal, normalize(directionalLight.xyz));\n  gl_FragColor.rgb = vColor.rgb + light * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  vColor = vec4(diffuse + ambient, color.a);\n  // vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = texture2D(tMap, vUv);\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec3 vDir;\n\nuniform vec4 directionalLight; //平行光\n\nuniform samplerCube tMap;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = textureCube(tMap, vDir);\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec3 vDir;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n  vDir = normalize(position);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tShadow;\nuniform float uShadow;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvarying vec4 vLightNDC; // 阴影\n\nfloat unpackRGBA (vec4 v) {\n    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  vec4 color = texture2D(tMap, vUv);\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  \n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in uShadow\n  float uShadowDept = mix(uShadow, 1.0, step(depth, occluder));\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb * uShadowDept + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying float fCos;\nvarying vec4 vLightNDC;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  vUv = uv;\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  // vColor = vec4(diffuse + ambient, color.a);\n  vColor = color;\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight;\n\nuniform sampler2D tShadow;\nuniform float uShadow;\n\nvarying vec4 vLightNDC;\n\nfloat unpackRGBA (vec4 v) {\n    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  float l = dot(vNormal, normalize(directionalLight.xyz));\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  \n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in uShadow\n  float uShadowDept = mix(uShadow, 1.0, step(depth, occluder));\n\n  gl_FragColor.rgb = vColor.rgb * uShadowDept + l * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}");

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec4 vLightNDC;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  vColor = vec4(diffuse + ambient, color.a);\n  // vColor = color;\n\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tShadow;\nuniform float uShadow;\n\nvarying vec2 vUv;\nvarying vec4 vLightNDC;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nfloat unpackRGBA (vec4 v) {\n  return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in uShadow\n  float uShadow = mix(uShadow, 1.0, step(depth, occluder));\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb * uShadow + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nvarying vec4 vLightNDC;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n\n  fCos = cos;\n\n  vColor = color;\n\n  vUv = uv;\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n\nvarying vec4 vColor;\n\nvoid main() {\n    gl_FragColor = vColor;\n}");

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute float side;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\nuniform float uMiter;\n\nvarying vec4 vColor;\n\nvec4 getPosition() {\n    mat4 mvp = projectionMatrix * modelViewMatrix;\n    vec4 current = mvp * vec4(position, 1);\n    vec4 nextPos = mvp * vec4(next, 1);\n    vec4 prevPos = mvp * vec4(prev, 1);\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n    vec2 currentScreen = current.xy / current.w * aspect;\n    vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n    vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n\n    vec2 dir1 = normalize(currentScreen - prevScreen);\n    vec2 dir2 = normalize(nextScreen - currentScreen);\n    vec2 dir = normalize(dir1 + dir2);\n\n    vec2 normal = vec2(-dir.y, dir.x);\n    normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n    normal /= aspect;\n    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n    float pixelWidth = current.w * pixelWidthRatio;\n    normal *= pixelWidth * uThickness;\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    gl_Position = getPosition();\n    vColor = color;\n}");

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\n\nuniform float uTotalLength;\nuniform float uDashLength;\nuniform float uDashOffset;\n\nvarying vec4 vColor;\nvarying vec2 vUv;\nvarying float fSeg;\n\nvoid main() {\n    float f = fract((uDashOffset + fSeg) / (2.0 * uDashLength));\n    f = 1.0 - step(0.5, f);\n    gl_FragColor = vColor * f;\n}");

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nattribute vec3 position;\nattribute vec3 next;\nattribute vec3 prev;\nattribute vec2 uv;\nattribute float side;\nattribute vec4 color;\nattribute float seg;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform vec2 uResolution;\nuniform float uDPR;\nuniform float uThickness;\nuniform float uMiter;\n\nvarying vec2 vUv;\nvarying vec4 vColor;\nvarying float fSeg;\n\nvec4 getPosition() {\n    mat4 mvp = projectionMatrix * modelViewMatrix;\n    vec4 current = mvp * vec4(position, 1);\n    vec4 nextPos = mvp * vec4(next, 1);\n    vec4 prevPos = mvp * vec4(prev, 1);\n    vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n    vec2 currentScreen = current.xy / current.w * aspect;\n    vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n    vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n\n    vec2 dir1 = normalize(currentScreen - prevScreen);\n    vec2 dir2 = normalize(nextScreen - currentScreen);\n    vec2 dir = normalize(dir1 + dir2);\n\n    vec2 normal = vec2(-dir.y, dir.x);\n    normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n    normal /= aspect;\n    float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n    float pixelWidth = current.w * pixelWidthRatio;\n    normal *= pixelWidth * uThickness;\n    current.xy -= normal * side;\n    return current;\n}\n\nvoid main() {\n    vUv = uv;\n    gl_Position = getPosition();\n    vColor = color;\n    fSeg = seg;\n}");

/***/ })
/******/ ]);


const _ext3d$Layer3D = ext3d['Layer3D'];
const _ext3d$Sphere = ext3d['Sphere'];
const _ext3d$Plane = ext3d['Plane'];
const _ext3d$Polyline3d = ext3d['Polyline3d'];
const _ext3d$Camera = ext3d['Camera'];
const _ext3d$Cube = ext3d['Cube'];
const _ext3d$Cylinder = ext3d['Cylinder'];
const _ext3d$Mesh3d = ext3d['Mesh3d'];
const _ext3d$Skin = ext3d['Skin'];
const _ext3d$Group3d = ext3d['Group3d'];
const _ext3d$RenderTarget = ext3d['RenderTarget'];
const _ext3d$Shadow = ext3d['Shadow'];
const _ext3d$TextureLoader = ext3d['TextureLoader'];
const _ext3d$Geometry = ext3d['Geometry'];
const _ext3d$Curve = ext3d['Curve'];
const _ext3d$shaders = ext3d['shaders'];
const _ext3d$Vec2 = ext3d['Vec2'];
const _ext3d$Vec3 = ext3d['Vec3'];
const _ext3d$Vec4 = ext3d['Vec4'];
const _ext3d$Mat3 = ext3d['Mat3'];
const _ext3d$Mat4 = ext3d['Mat4'];
const _ext3d$Quat = ext3d['Quat'];
const _ext3d$Euler = ext3d['Euler'];
const _ext3d$GPGPU = ext3d['GPGPU'];
const _ext3d$Raycast = ext3d['Raycast'];

export {
    _ext3d$Layer3D as Layer3D,
    _ext3d$Sphere as Sphere,
    _ext3d$Plane as Plane,
    _ext3d$Polyline3d as Polyline3d,
    _ext3d$Camera as Camera,
    _ext3d$Cube as Cube,
    _ext3d$Cylinder as Cylinder,
    _ext3d$Mesh3d as Mesh3d,
    _ext3d$Skin as Skin,
    _ext3d$Group3d as Group3d,
    _ext3d$RenderTarget as RenderTarget,
    _ext3d$Shadow as Shadow,
    _ext3d$TextureLoader as TextureLoader,
    _ext3d$Geometry as Geometry,
    _ext3d$Curve as Curve,
    _ext3d$shaders as shaders,
    _ext3d$Vec2 as Vec2,
    _ext3d$Vec3 as Vec3,
    _ext3d$Vec4 as Vec4,
    _ext3d$Mat3 as Mat3,
    _ext3d$Mat4 as Mat4,
    _ext3d$Quat as Quat,
    _ext3d$Euler as Euler,
    _ext3d$GPGPU as GPGPU,
    _ext3d$Raycast as Raycast
}