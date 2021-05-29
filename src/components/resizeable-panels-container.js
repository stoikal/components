const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      background-color: grey;
      overflow: hidden;
      padding: 8px 0;
    }

    ::slotted(resizeable-panel) {
      flex: 1;
      background-color: white;

    }

    ::slotted(.panel-resizer) {
      width: 16px;
      min-height: 48px;
      cursor: ew-resize;
      display: grid;
      place-content: center;
      user-select: none;
    }

    ::slotted(.resizer-symbol) {
      background-color: black;
      width: 4px;
      height: 10px;
    }
  </style>

  <div class="container">
    <slot></slot>
  </div>
`;

class ResizeablePanelsContainer extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.append(template.content.cloneNode(true));

    this._acceptedChildrenName = 'RESIZEABLE-PANEL';
  }

  // eslint-disable-next-line class-methods-use-this
  _createMouseListener($resizer) {
    const resize = (event) => {
      const $left = $resizer.previousElementSibling;
      const $right = $resizer.nextElementSibling;

      const left = $left.getBoundingClientRect();
      const right = $right.getBoundingClientRect();
      const resizer = $resizer.getBoundingClientRect();

      $left.style.flex = '0 1 auto';
      $left.style.width = `${event.pageX - (resizer.width / 2) - left.left}px`;
      $right.style.flex = '0 1 auto';
      $right.style.width = `${right.right - (resizer.width / 2) - event.pageX}px`;
    };

    const stopResize = () => {
      window.removeEventListener('mousemove', resize);
    };

    return () => {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    };
  }

  connectedCallback() {
    this.$container = this._shadowRoot.querySelector('.container');
    this.$children = Array.from(this.children);

    this.$children.forEach(($child, index) => {
      if (index && $child.nodeName === this._acceptedChildrenName) {
        const $resizer = document.createElement('div');
        $resizer.classList.add('panel-resizer');
        $resizer.addEventListener('mousedown', this._createMouseListener($resizer, index));

        $child.parentNode.insertBefore($resizer, $child);
      }
    });
  }
}

customElements.define('resizeable-panels-container', ResizeablePanelsContainer);
