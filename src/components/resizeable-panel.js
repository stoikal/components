const template = document.createElement('template');
template.innerHTML = `
  <slot></slot>
`;

class ResizeablePanel extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.append(template.content.cloneNode(true));
  }
}

customElements.define('resizeable-panel', ResizeablePanel);
