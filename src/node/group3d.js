import {registerNode, Group} from 'spritejs';
import {Transform} from 'ogl';
import Node3d from './node3d';

const _zOrder = Symbol('zOrder');
const _children = Symbol('children');

export default class Group3d extends Node3d {
  constructor(attrs = {}) {
    super(attrs);
    this.setBody(new Transform());
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
    if(this.attributes.display === 'none') return [];
    const children = this.children;
    const ret = [];
    for(let i = 0; i < children.length; i++) {
      const child = children[i];
      if(child.meshes && child.meshes.length) ret.push(...child.meshes);
    }
    return ret;
  }

  append(...els) {
    return els.map((el) => {
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
    if(deep) {
      this[_children].forEach((child) => {
        const childNode = child.cloneNode(deep);
        node.appendChild(childNode);
      });
    }
    return node;
  }

  getElementById(id) {
    return Group.prototype.querySelector.call(this, `#${id}`);
  }

  getElementsByClassName(className) {
    return Group.prototype.querySelectorAll.call(this, `.${className}`);
  }

  getElementsByName(name) {
    return Group.prototype.querySelectorAll.call(this, `[name="${name}"]`);
  }

  getElementsByTagName(tagName) {
    return Group.prototype.querySelectorAll.call(this, tagName);
  }

  insertBefore(el, ref) {
    if(ref == null) return this.appendChild(el);
    el.remove();
    const refIdx = this[_children].indexOf(ref);
    if(refIdx < 0) {
      throw new Error('Invalid reference node.');
    }
    const zOrder = ref.zOrder;
    for(let i = refIdx; i < this[_children].length; i++) {
      const order = this[_children][i].zOrder;
      const child = this[_children][i];
      delete child.zOrder;
      Object.defineProperty(child, 'zOrder', {
        value: order + 1,
        writable: false,
        configurable: true,
      });
    }
    this[_children].splice(refIdx, 0, el);
    el.connect(this, zOrder);
    return el;
  }

  querySelector(selector) {
    return Group.prototype.querySelector.call(this, selector);
  }

  querySelectorAll(selector) {
    return Group.prototype.querySelectorAll.call(this, selector);
  }

  replaceChild(el, ref) {
    el.remove();
    const refIdx = this[_children].indexOf(ref);
    if(refIdx < 0) {
      throw new Error('Invalid reference node.');
    }
    this[_children][refIdx] = el;
    el.connect(this, ref.zOrder);
    ref.disconnect(this);
    return el;
  }

  removeAllChildren() {
    const children = this[_children];
    for(let i = children.length - 1; i >= 0; i--) {
      children[i].remove();
    }
  }

  removeChild(el) {
    const idx = this[_children].indexOf(el);
    if(idx >= 0) {
      this[_children].splice(idx, 1);
      el.disconnect(this);
      return el;
    }
    return null;
  }

  /* override */
  setResolution({width, height}) {
    super.setResolution({width, height});
    this[_children].forEach((child) => {
      child.setResolution({width, height});
    });
  }
}

registerNode(Group3d, 'group3d');