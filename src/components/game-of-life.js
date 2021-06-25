class GameOfLife extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
        }

        .container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .panel {
          display: none;
          position: absolute;
          bottom: 10px;
          right: 10px
        }

        canvas {
          cursor: pointer;
          box-sizing: border-box;
          border: 1px solid #000000;
          border: none;
          background: #e8f5e9;
        }
        
        button {
          min-width: 44px;
          min-height: 44px;
        }

      </style>
      <div class="container">
        <canvas>
          Your browser does not support HTML5 canvas.
        </canvas>
        <div class="panel">
          <button type="button" class="clear">clear</button>
          <button type="button" class="pause">pause</button>
          <button type="button" class="play">play</button>
          <button type="button" class="step">step</button>
        </div>
      </div>
    `;

    this.canvas = this._shadowRoot.querySelector('canvas');
    this.clearBtn = this._shadowRoot.querySelector('.clear');
    this.pauseBtn = this._shadowRoot.querySelector('.pause');
    this.playBtn = this._shadowRoot.querySelector('.play');
    this.stepBtn = this._shadowRoot.querySelector('.step');
    this.ctx = this.canvas.getContext('2d');

    this.colors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#BFDBF7', '#053C5E', '#650D1B'];
    this.colors = ['#ffffff', '#ffffff', '#e8f5e9', '#c8e6c9', '#2e7d32', 'orange'];
    this.colors = ['#FFFF82', '#ffff82', '#d6d472', '#b7b466', '#0F0326', '#E65F5C'];
    this.gridColor = 'white';
    this.cellSize = 10;
    this.delay = 100;
    this.initialPercentageAlive = 15;
  }

  connectedCallback() {
    const { width, height } = this.parentElement.getBoundingClientRect();
    this.canvas.width = width;
    this.canvas.height = height;

    this.width = width;
    this.height = height;

    this.numCols = Math.floor(width / this.cellSize);
    this.numRows = Math.floor(height / this.cellSize);

    this.offsetX = Math.floor((width % this.cellSize) / 2);
    this.offsetY = Math.floor((height % this.cellSize) / 2);

    this.clearBtn.addEventListener('click', this.clear.bind(this));
    this.pauseBtn.addEventListener('click', this.pause.bind(this));
    this.playBtn.addEventListener('click', this.start.bind(this));
    this.stepBtn.addEventListener('click', this.step.bind(this));

    this.canvas.addEventListener('click', this.handleCanvasClick.bind(this));

    this.init();
  }

  randomize() {
    const temp = [];
    for (let x = 0; x < this.numCols; x += 1) {
      const colArr = [];
      for (let y = 0; y < this.numRows; y += 1) {
        colArr.push(Number(Math.random() < this.initialPercentageAlive / 100));
      }
      temp.push(colArr);
    }
    this.snapshot = temp;
  }

  draw() {
    this.snapshot.forEach((col, x) => {
      col.forEach((cell, y) => {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.colors[cell * 4];
        this.ctx.strokeStyle = this.gridColor;
        this.ctx.rect(
          this.offsetX + x * this.cellSize,
          this.offsetY + y * this.cellSize,
          this.cellSize,
          this.cellSize,
        );
        this.ctx.closePath();

        this.ctx.fill();
        this.ctx.stroke();
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getNeighborsCoordinates({ x, y }) {
    return {
      nw: { x: x - 1, y: y - 1 },
      n: { x, y: y - 1 },
      ne: { x: x + 1, y: y - 1 },
      w: { x: x - 1, y },
      e: { x: x + 1, y },
      sw: { x: x - 1, y: y + 1 },
      s: { x, y: y + 1 },
      se: { x: x + 1, y: y + 1 },
    };
  }

  // eslint-disable-next-line class-methods-use-this
  calculateNextState(prevState, numNeighbors) {
    const currentState = prevState >= 1 ? 1 : prevState;
    let nextState = currentState ? currentState - 0.25 : 0;

    if (currentState >= 1 && (numNeighbors === 2 || numNeighbors === 3)) {
      nextState = 1;
    }

    if (currentState < 1 && numNeighbors === 3) {
      nextState = 1.25;
    }

    return nextState;
  }

  next() {
    this.snapshot = this.snapshot.map((col, x, colArr) => (
      col.map((cell, y) => {
        const neighborsCoordinates = this.getNeighborsCoordinates({ x, y });
        let neighbors = 0;

        // console.log(x, y, neighborsCoordinates);

        Object.values(neighborsCoordinates).forEach(({ x: nX, y: nY }) => {
          const nCol = colArr[nX];
          if (nCol) {
            if (nCol[nY] >= 1) {
              neighbors += 1;
            }
          }
        });

        return this.calculateNextState(cell, neighbors);
      })
    ));
  }

  step() {
    this.pause();
    this.next();
    this.draw();
  }

  loop() {
    this.next();
    this.draw();

    this.timer = setTimeout(() => {
      window.requestAnimationFrame(this.loop.bind(this));
    }, this.delay);
  }

  start() {
    this.pause();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  pause() {
    clearTimeout(this.timer);
  }

  clear() {
    this.pause();
    this.snapshot = this.snapshot.map((col) => (
      col.map(() => 0)
    ));
    this.draw();
  }

  handleCanvasClick(e) {
    this.pause();
    const { left, top } = this.getBoundingClientRect();
    const { clientX, clientY } = e;

    const mouseX = clientX - left;
    const mouseY = clientY - top;

    const col = Math.floor((mouseX - this.offsetX) / this.cellSize);
    const row = Math.floor((mouseY - this.offsetY) / this.cellSize);

    this.snapshot[col][row] = Number(!(Math.floor(this.snapshot[col][row])));
    this.draw();
  }

  init() {
    this.randomize();
    this.draw();

    this.start();
  }
}

customElements.define('game-of-life', GameOfLife);