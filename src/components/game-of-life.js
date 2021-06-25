class GameOfLife extends HTMLElement {
  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
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
          position: absolute;
          bottom: 10px;
          right: 10px
        }

        canvas {
          border: 1px solid #000000;
        }
      
      </style>
      <div class="container">
        <canvas>
          Your browser does not support HTML5 canvas.
        </canvas>
        <div class="panel"> 
          <button type="button" class="step">step</button>
        </div>
      </div>
    `;

    this.canvas = this.shadowRoot.querySelector('canvas');
    this.stepBtn = this.shadowRoot.querySelector('.step');
    this.ctx = this.canvas.getContext('2d');

    this.colors = ['#ffffff', '#ffffff', '#e8f5e9', '#c8e6c9', '#2e7d32'];
    this.cellSize = 10;
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

    this.stepBtn.addEventListener('click', this.next.bind(this));

    this.init();
  }

  randomize() {
    const temp = [];
    for (let x = 0; x < this.numCols; x += 1) {
      const colArr = [];
      for (let y = 0; y < this.numRows; y += 1) {
        colArr.push(Math.round(Math.random() - 0.3));
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
        // eslint-disable-next-line prefer-destructuring
        this.ctx.strokeStyle = 'white';
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
  calculateNextState(currentState, numNeighbors) {
    let nextState = currentState ? currentState - 0.25 : 0;
    if (!!Math.floor(currentState) && (numNeighbors === 2 || numNeighbors === 3)) {
      nextState = 1;
    }

    if (!Math.floor(currentState) && numNeighbors === 3) {
      nextState = 1;
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
            if (nCol[nY] === 1) {
              neighbors += 1;
            }
          }
        });

        return this.calculateNextState(cell, neighbors);
      })
    ));

    this.draw();
  }

  init() {
    this.randomize();
    this.draw();

    setInterval(() => {
      this.next();
    }, 200);
  }
}

customElements.define('game-of-life', GameOfLife);
