import {registerNode} from 'spritejs';
import {Program, Mesh, Geometry} from 'ogl';
import Group3d from './group3d';
import Mesh3dAttr from '../attribute/mesh3d';

const changedAttrs = Symbol.for('spritejs_changedAttrs');

const _program = Symbol('program');
const _geometry = Symbol('geometry');
const _model = Symbol('model');

const _beforeRender = Symbol('beforeRender');
const _afterRender = Symbol('afterRender');

function colorAttribute(node, geometry) {
  const updateColor = geometry.attributes.color;

  const positions = geometry.attributes.position.data;
  const len = positions.length / 3;

  const color = updateColor ? updateColor.data : new Float32Array(4 * len);
  const colors = node.attributes.colors;
  const colorLen = colors.length / 4;
  const colorDivisor = node.attributes.colorDivisor;

  for(let i = 0; i < len; i++) {
    // const color = colors
    const idx = Math.floor(i / colorDivisor) % colorLen;
    color[4 * i] = colors[idx * 4];
    color[4 * i + 1] = colors[idx * 4 + 1];
    color[4 * i + 2] = colors[idx * 4 + 2];
    color[4 * i + 3] = colors[idx * 4 + 3];
  }

  if(updateColor) updateColor.needsUpdate = true;

  return {size: 4, data: color};
}

export default class Mesh3d extends Group3d {
  static Attr = Mesh3dAttr;

  constructor(program, {model, ...attrs} = {}) {
    if(program && !(program instanceof Program)) {
      attrs = program;
      program = attrs.program;
    }
    if(!program) {
      throw new Error('No program specified!');
    }

    super(attrs);
    this.groupBody = this.body;

    this.setProgram(program);

    this[_beforeRender] = (args) => {
      this.dispatchEvent({type: 'beforerender', detail: args});
    };
    this[_afterRender] = (args) => {
      this.dispatchEvent({type: 'afterrender', detail: args});
    };

    if(model && typeof model.then === 'function') {
      this[_model] = model.then((res) => {
        this[_model] = res;
        this.remesh();
      });
    } else if(!model) {
      this.remesh();
    } else {
      this.setGeometry(model);
    }
  }

  /* override */
  cloneNode(deep = false) {
    const attrs = this.attributes[changedAttrs];
    const cloned = new this.constructor(this[_program], {...attrs, model: this[_geometry]});
    if(deep) {
      this.children.forEach((child) => {
        const childNode = child.cloneNode(deep);
        cloned.appendChild(childNode);
      });
    }
    return cloned;
  }

  get model() {
    return this[_model];
  }

  get program() {
    return this[_program];
  }

  get geometry() {
    return this[_geometry];
  }

  get meshes() {
    const meshes = super.meshes;
    if(this.body.geometry) meshes.unshift(this.body);
    return meshes;
  }

  setProgram(program) {
    this[_program] = program;
    const gl = program.gl;

    program.extraAttribute = program.extraAttribute || {};
    if(program.attributeLocations.has('color') && !program.extraAttribute.color) {
      program.extraAttribute.color = colorAttribute;
    }

    const geometry = this[_geometry];
    if(geometry) {
      const mode = this.attributes.mode;
      const mesh = new Mesh(program.gl, {mode: gl[mode], geometry, program});
      this.setBody(mesh);
    }
  }

  setGeometry(model = this[_model]) {
    if(!model) return;
    function parseData(data, size = 3) {
      let d = data.data || data;
      if(Array.isArray(d)) d = new Float32Array(d);
      const s = data.size || size;
      if(data.data) {
        data.data = d;
        data.size = s;
        return data;
      }
      return {size: s, data: d};
    }
    const program = this[_program];
    const gl = program.gl;
    let geometry;
    if(model instanceof Geometry) {
      geometry = model;
    } else {
      let {position, uv, normal, index, ...others} = model;
      const geometryData = {};
      if(position) geometryData.position = parseData(position);
      if(uv) geometryData.uv = parseData(uv, 2);
      if(!normal) {
        const len = position.length;
        normal = new Float32Array(len);
        for(let i = 0; i < len; i += 3) {
          normal.set([-1, 0, 0], i);
        }
        geometryData.normal = {size: 3, data: normal};
      } else {
        geometryData.normal = parseData(normal);
      }
      if(index) {
        let data = index.data || index;
        if(Array.isArray(data)) data = new Uint16Array(data);
        geometryData.index = {data};
      }
      if(others) {
        let positionCount;
        const position = geometryData.position;
        if(position) {
          positionCount = position.data.length / position.size;
        }
        Object.entries(others).forEach(([key, value]) => {
          let size = 3;
          if(!value.size) {
            const length = value.data ? value.data.length : value.length;
            if(length && positionCount) size = length / positionCount;
          }
          geometryData[key] = parseData(value, size);
        });
      }
      geometry = new Geometry(gl, geometryData);
    }
    const extraAttrs = program.extraAttribute;
    if(extraAttrs) {
      Object.entries(extraAttrs).forEach(([key, setter]) => {
        if(!geometry.attributes[key]) {
          geometry.addAttribute(key, setter(this, geometry));
        }
      });
    }
    this[_geometry] = geometry;
    this[_model] = geometry.attributes;
    const mode = this.attributes.mode;
    const mesh = new Mesh(gl, {mode: gl[mode], geometry, program});
    this.setBody(mesh);
    let listeners = this.getListeners('beforerender');
    if(listeners.length) {
      mesh.onBeforeRender(this[_beforeRender]);
    }
    listeners = this.getListeners('afterrender');
    if(listeners.length) {
      mesh.onAfterRender(this[_afterRender]);
    }
  }

  /* override */
  addEventListener(type, listener, options = {}) {
    super.addEventListener(type, listener, options);
    if(this.body.onBeforeRender && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');
      if(listeners.length === 1) {
        this.body.onBeforeRender(this[_beforeRender]);
      }
    } else if(this.body.onAfterRender && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');
      if(listeners.length === 1) {
        this.body.onAfterRender(this[_afterRender]);
      }
    }
    return this;
  }

  /* override */
  removeAllListeners(type, options = {}) {
    super.removeAllListeners(type, options);
    if(this.body.onBeforeRender && type === 'beforerender') {
      const idx = this.body.beforeRenderCallbacks.indexOf(this[_beforeRender]);
      if(idx >= 0) this.body.beforeRenderCallbacks.splice(idx, 1);
    } else if(this.body.onAfterRender && type === 'afterrender') {
      const idx = this.body.afterRenderCallbacks.indexOf(this[_afterRender]);
      if(idx >= 0) this.body.afterRenderCallbacks.splice(idx, 1);
    }
    return this;
  }

  /* override */
  removeEventListener(type, listener, options = {}) {
    super.removeEventListener(type, listener, options);
    if(this.body.onBeforeRender && type === 'beforerender') {
      const listeners = this.getListeners('beforerender');
      if(listeners.length === 0) {
        const idx = this.body.beforeRenderCallbacks.indexOf(this[_beforeRender]);
        if(idx >= 0) this.body.beforeRenderCallbacks.splice(idx, 1);
      }
    } else if(this.body.onAfterRender && type === 'afterrender') {
      const listeners = this.getListeners('afterrender');
      if(listeners.length === 0) {
        const idx = this.body.afterRenderCallbacks.indexOf(this[_afterRender]);
        if(idx >= 0) this.body.afterRenderCallbacks.splice(idx, 1);
      }
    }
    return this;
  }

  remesh() {
    this.setGeometry();
  }

  /* override */
  updateMesh() {
    if(this.program) {
      const oldMesh = this.mesh;
      this.remesh();
      const newMesh = this.mesh;
      this.dispatchEvent({type: 'updatemesh', detail: {oldMesh, newMesh}});
    }
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'colors' || key === 'colorDivisor') {
      if(newValue !== oldValue) {
        const program = this.program;
        if(program && program.extraAttribute.color) {
          const geometry = this.geometry;
          colorAttribute(this, geometry);
        }
      }
    }
    if(key === 'mode') {
      const program = this.program;
      if(program) {
        this.body.mode = program.gl[newValue];
      }
    }
  }
}

registerNode(Mesh3d, 'mesh3d');