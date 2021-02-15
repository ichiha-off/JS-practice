export const nodeOps = {
  qs(selector, scope) {
    return (scope || document).querySelector(selector);
  },
  create(type) {
    return document.createElement(type);
  },
  setAttr(target, key, value) {
    target.setAttribute(key, value);
  },
  append(parent, target) {
    parent.appendChild(target);
  },
  content(target, value) {
    target.textContent = value;
  },
  on(target, eventType, callback) {
    target.addEventListener(eventType, () => {
      callback();
    });
  }
}