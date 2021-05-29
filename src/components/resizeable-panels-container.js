const template = document.createElement('template');
template.innerHTML = `
  <style>
    .container {
      display: flex;
      background-color: grey;
    }

    resizeable-panel {
      flex: 1;
      background-color: red;
    }

    .resizer {
      width: 48px;
      min-height: 48px;
      cursor: ew-resize;
      background-color: white;
    }

  </style>

  <div class="container">
  </div>
`;

// function throttle (callback, limit) {
//   var waiting = false;                      // Initially, we're not waiting
//   return function () {                      // We return a throttled function
//       if (!waiting) {                       // If we're not waiting
//           callback.apply(this, arguments);  // Execute users function
//           waiting = true;                   // Prevent future invocations
//           setTimeout(function () {          // After a period of time
//               waiting = false;              // And allow future invocations
//           }, limit);
//       }
//   }
// }

class ResizeablePanelsContainer extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.append(template.content.cloneNode(true));

    this._acceptedChildrenName = 'RESIZEABLE-PANEL';
  }

  // eslint-disable-next-line class-methods-use-this
  _createMouseListener($resizer, index) {
    const resize = (event) => {
      const $left = this.$panels[index - 1];
      const $right = this.$panels[index];

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
    this.$panels = Array
      .from(this.children)
      .filter((elmt) => elmt.nodeName === this._acceptedChildrenName);

    const containerTemplateColumns = [];

    this.$panels.forEach((panel, index) => {
      if (index) {
        const $resizer = document.createElement('div');
        $resizer.classList.add('resizer');
        $resizer.addEventListener('mousedown', this._createMouseListener($resizer, index));
        containerTemplateColumns.push('minmax(0, max-content)');
        this.$container.appendChild($resizer);
      }
      containerTemplateColumns.push('minmax(0, 1fr)');
      this.$container.appendChild(panel);
    });
  }
}

customElements.define('resizeable-panels-container', ResizeablePanelsContainer);
