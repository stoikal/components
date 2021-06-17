function throttle(func, timeFrame) {
  let lastTime = 0;
  return function lambda() {
    const now = Date.now();
    if (now - lastTime >= timeFrame) {
      // eslint-disable-next-line prefer-rest-params
      func.apply(this, arguments);
      lastTime = now;
    }
  };
}
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
          height: 400px;
          margin: 50px auto;
          perspective: 800px
        }
        
        #card {
          position: relative;
          transform-style: preserve-3d;
          width: 100%;
          height: 100%;
          margin: 50px auto;
          perspective: -10px;
          user-select: none;
          background: white;
          transition: translate 0.8s, rotate 0.8s
        }

        #card:hover {

        }

        #overlay {
          position: absolute;
          top: 0;
          left: 0;
          background: black;
          opacity: 0.25;
          width: 100%;
          height: 100%;
        }

      </style>
      <div id="container">
        <div id="card">
          <slot></slot>
          <div id="overlay"></div>
        <div>
      </div>
    `;
  }

  connectedCallback() {
    this.$container = this._shadowRoot.getElementById('container');
    this.$card = this._shadowRoot.getElementById('card');
    this.$overlay = this._shadowRoot.getElementById('overlay');

    this.$container.addEventListener('mousemove', throttle(this._handleMouseMove.bind(this), 50));
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

    const light = ((100) / offsetHeight) * offsetY;

    this.$card.style.transform = `
      translateZ(50px)
      rotateY(${tiltY}deg)
      rotateX(${tiltX}deg)
    `;

    this.$overlay.style.opacity = light / 200;
  }

  _handleMouseLeave() {
    this.$card.style.transform = `
      translateZ(0px)
      rotateX(0deg)
      rotateY(0deg)
    `;

    this.$overlay.style.opacity = 0.25;
  }
}

customElements.define('floating-card', FloatingCard);
