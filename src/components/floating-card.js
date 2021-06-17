class FloatingCard extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    // this._shadowRoot.append(template.content.cloneNode(true));

    this._shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
        }

        #container {
          width: 300px;
          height: 300px;
          margin: 50px auto;
          background: black;
          perspective: 800px
        }
        
        #card {
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
          border: 2px dotted red;
          margin: 50px auto;
          perspective: -10px;
          user-select: none;
          background: white;
          transition: translate 0.8s, rotate 0.8s
        }

        #card:hover {
          border: 1px solid blue;
        }
      </style>
      <div id="container">
        <div id="card">
          <slot></slot>
        <div>
      </div>
    `;
  }

  connectedCallback() {
    this.$container = this._shadowRoot.getElementById('container');
    this.$card = this._shadowRoot.getElementById('card');

    this.$container.addEventListener('mousemove', this._handleMouseMove.bind(this));
    this.$container.addEventListener('mouseleave', this._handleMouseLeave.bind(this));
  }

  _handleMouseMove(event) {
    const {
      offsetWidth, offsetHeight, offsetLeft, offsetTop,
    } = this.$container;
    const {
      pageX, pageY,
    } = event;

    const center = {
      x: (offsetWidth) / 2,
      y: (offsetHeight) / 2,
    };

    const offsetX = pageX - offsetLeft;
    const offsetY = pageY - offsetTop;

    const percentageX = (100 / center.x) * (offsetX - center.x);
    const percentageY = (100 / center.y) * (offsetY - center.y);

    const maxDegree = 30;
    const tiltY = ((maxDegree * percentageX) / 100);
    const tiltX = ((maxDegree * percentageY) / 100) * -1;

    this.$card.style.transform = `
      translateZ(10px)
      rotateY(${tiltY}deg)
      rotateX(${tiltX}deg)
    `;
  }

  _handleMouseLeave() {
    this.$card.style.transform = `
      translateZ(0px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  }
}

customElements.define('floating-card', FloatingCard);
