(()=>{var t={66:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var r,o,u,l,s=(r=f,o=i(),function(){var t,e=c(r);if(o){var i=c(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.innerHTML='\n      <style>\n        * {\n          box-sizing: border-box;\n        }\n\n        #container {\n          width: 300px;\n          height: 400px;\n          margin: 50px auto;\n          perspective: 800px\n        }\n        \n        #card {\n          position: relative;\n          transform-style: preserve-3d;\n          width: 100%;\n          height: 100%;\n          margin: 50px auto;\n          perspective: -10px;\n          user-select: none;\n          background: white;\n          transition: translate 0.8s, rotate 0.8s\n        }\n\n        #card:hover {\n\n        }\n\n        #overlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          background: black;\n          opacity: 0.25;\n          width: 100%;\n          height: 100%;\n        }\n\n      </style>\n      <div id="container">\n        <div id="card">\n          <slot></slot>\n          <div id="overlay"></div>\n        <div>\n      </div>\n    ',t}return u=f,(l=[{key:"connectedCallback",value:function(){var t,e;this.$container=this._shadowRoot.getElementById("container"),this.$card=this._shadowRoot.getElementById("card"),this.$overlay=this._shadowRoot.getElementById("overlay"),this.$container.addEventListener("mousemove",(t=this._handleMouseMove.bind(this),50,e=0,function(){var n=Date.now();n-e>=50&&(t.apply(this,arguments),e=n)})),this.$container.addEventListener("mouseleave",this._handleMouseLeave.bind(this))}},{key:"_handleMouseMove",value:function(t){var e=this.$container,n=e.offsetWidth,r=e.offsetHeight,o=e.offsetLeft,i=e.offsetTop,a=t.pageX,c=n/2,u=r/2,l=t.pageY-i,s=100/c*(a-o-c)*30/100,f=100/u*(l-u)*30/100*-1,p=100/r*l;this.$card.style.transform="\n      translateZ(50px)\n      rotateY(".concat(s,"deg)\n      rotateX(").concat(f,"deg)\n    "),this.$overlay.style.opacity=p/200}},{key:"_handleMouseLeave",value:function(){this.$card.style.transform="\n      translateZ(0px)\n      rotateX(0deg)\n      rotateY(0deg)\n    ",this.$overlay.style.opacity=.25}}])&&e(u.prototype,l),f}(r(HTMLElement));customElements.define("floating-card",u)},408:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return a(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,t)})(t)}function a(t,e,n){return(a=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&u(o,n.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(p,t);var n,i,a,s,f=(n=p,i=c(),function(){var t,e=l(n);if(i){var r=l(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return o(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.innerHTML='\n      <style>\n        * {\n          box-sizing: border-box;\n        }\n\n        .container {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n\n        .panel {\n          display: none;\n          position: absolute;\n          bottom: 10px;\n          right: 10px\n        }\n\n        canvas {\n          cursor: pointer;\n          box-sizing: border-box;\n          border: 1px solid #000000;\n          border: none;\n          background: #e8f5e9;\n        }\n        \n        button {\n          min-width: 44px;\n          min-height: 44px;\n          user-select: none;\n        }\n\n      </style>\n      <div class="container">\n        <canvas>\n          Your browser does not support HTML5 canvas.\n        </canvas>\n        <div class="panel">\n          <button type="button" class="clear">clear</button>\n          <button type="button" class="pause">pause</button>\n          <button type="button" class="play">play</button>\n          <button type="button" class="step">step</button>\n        </div>\n      </div>\n    ',t.canvas=t._shadowRoot.querySelector("canvas"),t.panel=t._shadowRoot.querySelector(".panel"),t.clearBtn=t._shadowRoot.querySelector(".clear"),t.pauseBtn=t._shadowRoot.querySelector(".pause"),t.playBtn=t._shadowRoot.querySelector(".play"),t.stepBtn=t._shadowRoot.querySelector(".step"),t.ctx=t.canvas.getContext("2d"),t.colors=["#FFFF82","#ffff82","#d6d472","#b7b466","#0F0326","#451a34","#7d3242","#bd4e52","#e65f5c"],t.colors=["#ffffff","#e0dee3","#c1bdc6","#9f9aa8","#0F0326","#451a34","#7d3242","#bd4e52","#e65f5c"],t.colors=["#ffffff","#ffffff","#e8f5e9","#c8e6c9","#2e7d32","#2e7d32","#2e7d32","#2e7d32","#ffa500"],t.gridColor="white",t.cellSize=10,t.delay=150,t.initialPercentageAlive=15,t}return a=p,(s=[{key:"connectedCallback",value:function(){var t=this.parentElement.getBoundingClientRect(),e=t.width,n=t.height;this.canvas.width=e,this.canvas.height=n,this.width=e,this.height=n,this.numCols=Math.floor(e/this.cellSize),this.numRows=Math.floor(n/this.cellSize),this.offsetX=Math.floor(e%this.cellSize/2),this.offsetY=Math.floor(n%this.cellSize/2),this.clearBtn.addEventListener("click",this.clear.bind(this)),this.pauseBtn.addEventListener("click",this.pause.bind(this)),this.playBtn.addEventListener("click",this.start.bind(this)),this.stepBtn.addEventListener("click",this.step.bind(this)),this.canvas.addEventListener("click",this.handleCanvasClick.bind(this)),this.init()}},{key:"randomize",value:function(){for(var t=[],e=0;e<this.numCols;e+=1){for(var n=[],r=0;r<this.numRows;r+=1)n.push(2*Number(Math.random()<this.initialPercentageAlive/100));t.push(n)}this.snapshot=t}},{key:"draw",value:function(){var t=this;this.ctx.strokeStyle=this.gridColor,this.snapshot.forEach((function(e,n){e.forEach((function(e,r){t.prevSnapshot&&t.prevSnapshot[n]&&t.prevSnapshot[n][r]===e||(t.ctx.beginPath(),t.ctx.fillStyle=t.colors[4*e],t.ctx.rect(t.offsetX+n*t.cellSize,t.offsetY+r*t.cellSize,t.cellSize,t.cellSize),t.ctx.closePath(),t.ctx.fill(),t.ctx.stroke())}))}))}},{key:"getNeighborsCoordinates",value:function(t){var e=t.x,n=t.y;return{nw:{x:e-1,y:n-1},n:{x:e,y:n-1},ne:{x:e+1,y:n-1},w:{x:e-1,y:n},e:{x:e+1,y:n},sw:{x:e-1,y:n+1},s:{x:e,y:n+1},se:{x:e+1,y:n+1}}}},{key:"calculateNextState",value:function(t,e){var n=t>=1?1:t,r=n?n-.25:0;return t>=1&&(2===e||3===e)&&(r=t>1?t-.25:1),n<1&&3===e&&(r=2),r}},{key:"next",value:function(){var t=this;this.prevSnapshot=this.snapshot,this.snapshot=this.snapshot.map((function(e,n,r){return e.map((function(e,o){var i=t.getNeighborsCoordinates({x:n,y:o}),a=0;return Object.values(i).forEach((function(t){var e=t.x,n=t.y,o=r[e];o&&o[n]>=1&&(a+=1)})),t.calculateNextState(e,a)}))}))}},{key:"step",value:function(){this.pause(),this.next(),this.draw()}},{key:"loop",value:function(){var t=this;this.next(),this.draw(),this.timer=setTimeout((function(){window.requestAnimationFrame(t.loop.bind(t))}),this.delay)}},{key:"start",value:function(){this.pause(),window.requestAnimationFrame(this.loop.bind(this))}},{key:"pause",value:function(){clearTimeout(this.timer)}},{key:"clear",value:function(){this.pause(),this.prevSnapshot=this.snapshot,this.snapshot=this.snapshot.map((function(t){return t.map((function(){return 0}))})),this.draw()}},{key:"handleCanvasClick",value:function(t){this.pause(),this.panel.style.display="block";var n=this.getBoundingClientRect(),r=n.left,o=n.top,i=t.clientX-r,a=t.clientY-o,c=Math.floor((i-this.offsetX)/this.cellSize),u=Math.floor((a-this.offsetY)/this.cellSize);this.prevSnapshot=e(this.snapshot.map((function(t){return e(t)}))),this.snapshot[c][u]=Number(!Math.floor(this.snapshot[c][u])),this.draw()}},{key:"init",value:function(){this.randomize(),this.draw(),this.start()}}])&&r(a.prototype,s),p}(i(HTMLElement));customElements.define("game-of-life",s)},133:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(l,t);var r,o,u=(r=l,o=i(),function(){var t,e=c(r);if(o){var i=c(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function l(){return e(this,l),u.apply(this,arguments)}return l}(r(HTMLElement));customElements.define("resizeable-panel",u)},893:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=document.createElement("template");u.innerHTML='\n  <style>\n    .container {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      background-color: grey;\n      overflow: hidden;\n      padding: 8px 0;\n    }\n\n    ::slotted(resizeable-panel) {\n      flex: 1;\n      background-color: white;\n\n    }\n\n    ::slotted(.panel-resizer) {\n      width: 16px;\n      min-height: 48px;\n      cursor: ew-resize;\n      display: grid;\n      place-content: center;\n      user-select: none;\n    }\n\n    ::slotted(.resizer-symbol) {\n      background-color: black;\n      width: 4px;\n      height: 10px;\n    }\n  </style>\n\n  <div class="container">\n    <slot></slot>\n  </div>\n';var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(p,t);var r,o,l,s,f=(r=p,o=i(),function(){var t,e=c(r);if(o){var i=c(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=f.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.append(u.content.cloneNode(!0)),t._acceptedChildrenName="RESIZEABLE-PANEL",t}return l=p,(s=[{key:"_createMouseListener",value:function(t){var e=function(e){var n=t.previousElementSibling,r=t.nextElementSibling,o=n.getBoundingClientRect(),i=r.getBoundingClientRect(),a=t.getBoundingClientRect();n.style.flex="0 1 auto",n.style.width="".concat(e.pageX-a.width/2-o.left,"px"),r.style.flex="0 1 auto",r.style.width="".concat(i.right-a.width/2-e.pageX,"px")},n=function(){window.removeEventListener("mousemove",e)};return function(){window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}}},{key:"connectedCallback",value:function(){var t=this;this.$container=this._shadowRoot.querySelector(".container"),this.$children=Array.from(this.children),this.$children.forEach((function(e,n){if(n&&e.nodeName===t._acceptedChildrenName){var r=document.createElement("div");r.classList.add("panel-resizer"),r.addEventListener("mousedown",t._createMouseListener(r,n)),e.parentNode.insertBefore(r,e)}}))}}])&&e(l.prototype,s),p}(r(HTMLElement));customElements.define("resizeable-panels-container",l)},996:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,u(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function i(t,e,n){return(i=a()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&c(o,n.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(p,t);var o,i,l,s,f=(o=p,i=a(),function(){var t,e=u(o);if(i){var n=u(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return r(this,t)});function p(){return e(this,p),f.apply(this,arguments)}return l=p,(s=[{key:"title",get:function(){return this.getAttribute("title")},set:function(t){this.setAttribute("title",t)}}])&&n(l.prototype,s),p}(o(HTMLElement));customElements.define("tab-content",l)},782:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return o(t,arguments,c(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)})(t)}function o(t,e,n){return(o=i()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=document.createElement("template");u.innerHTML='\n  <style>\n    .tab-title-container {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n    }\n\n    .tab-title {\n      height: 3em;\n      border: none;\n      border-bottom: 4px solid #bdbdbd;\n      background: transparent;\n      font-size: 1em;\n      cursor: pointer;\n    }\n\n    .tab-title:hover {\n      background: rgba(100, 100, 100, 0.2);\n    }\n\n    .tab-title.active {\n      font-weight: bold;\n      border-bottom: 4px solid black;\n    }\n\n    ::slotted(tab-content) {\n      display: none\n    }\n\n    ::slotted(tab-content.active) {\n      display: block\n    }\n\n  </style>\n\n  <div class="tab-title-container">\n  </div>\n  <slot></slot>\n\n';var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(h,t);var r,o,l,s,f,p=(r=h,o=i(),function(){var t,e=c(r);if(o){var i=c(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function h(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(t=p.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.append(u.content.cloneNode(!0)),t.$tabTitleContainer=t._shadowRoot.querySelector(".tab-title-container"),t.activeTab="0",t}return l=h,f=[{key:"observedAttributes",get:function(){return["active-tab"]}}],(s=[{key:"_createTab",value:function(t,e){var n=this,r=e.toString(),o=document.createElement("button");o.textContent=t.title||r,o.className="tab-title",o.addEventListener("click",(function(){n.activeTab=r})),t.setAttribute("index",r),r===this.activeTab&&(t.classList.add("active"),o.classList.add("active")),this.$tabTitleContainer.append(o)}},{key:"connectedCallback",value:function(){var t=this.querySelectorAll("tab-content");t.length&&Array.from(t).forEach(this._createTab.bind(this))}},{key:"activeTab",get:function(){return this.getAttribute("active-tab")},set:function(t){this.setAttribute("active-tab",t)}},{key:"attributeChangedCallback",value:function(t,e,n){"active-tab"===t&&this._toggleActiveTabClass(n)}},{key:"_toggleActiveTabClass",value:function(t){var e=this._shadowRoot.querySelectorAll(".tab-title"),n=this.querySelectorAll("tab-content");Array.from(n).forEach((function(n,r){n.getAttribute("index")===t?(n.classList.add("active"),e[r].classList.add("active")):(n.classList.remove("active"),e[r].classList.remove("active"))}))}}])&&e(l.prototype,s),f&&e(l,f),h}(r(HTMLElement));customElements.define("tabs-container",l)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?y:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=y,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function b(){}function m(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==n&&r.call(x,i)&&(g=x);var S=m.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return b.prototype=S.constructor=m,m.constructor=b,b.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(S),u(S,c,"Generator"),S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}(()=>{"use strict";n(666),n(893),n(133),n(782),n(996),n(66),n(408);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(e,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=r.validate,i=void 0===o?function(){return!0}:o,a=r.resolver,c=n.length,u=e,l=0;l<c;l+=1){if("object"!==t(u)||!i(u)){u=void 0;break}var s,f=n[l],p=l===c-1;u=p&&a&&(null===(s=u[f])||void 0===s?void 0:s[a])||u[f]}return u}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$rootEl=e,this._routes=n}var n,a,c,u;return n=t,(a=[{key:"_renderPage",value:(c=regeneratorRuntime.mark((function t(n){var o,i,a,c,u,l,s,f,p,h,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=/^#(\/[^#/?]+\/?)+(\?([^#/?])*)?$/,i=new URL(n),a=i.hash,o.test(a)){t.next=4;break}return t.abrupt("return");case 4:c=a.split("?"),v=2,u=function(t){if(Array.isArray(t))return t}(d=c)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){c=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(d,v)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(d,v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=u[0],s=u[1],f=l.replace(/(#\/)|(\/$)/g,""),p=f.split("/"),h={query:s},y=e(this._routes,p,{resolver:"index"});try{this.$rootEl.innerHTML=((null==y?void 0:y.render)||this._routes._404.render)(h)}catch(t){this.$rootEl.innerHTML=this._routes._error.render(h)}case 10:case"end":return t.stop()}var d,v}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=c.apply(t,e);function a(t){o(i,n,r,a,u,"next",t)}function u(t){o(i,n,r,a,u,"throw",t)}a(void 0)}))},function(t){return u.apply(this,arguments)})},{key:"init",value:function(){var t=this;window.addEventListener("hashchange",(function(e){var n=e.newURL;t._renderPage(n)})),this._renderPage(window.location.href)}}])&&i(n.prototype,a),t}())(document.querySelector("main"),{favorites:{render:function(){return"<h1>hello favorites</h1>"}},_404:{render:function(){return"<h1>not found</h1>"}},_error:{render:function(){return"<h1>error</h1>"}},"floating-card":{render:function(){return"<floating-card>hello world</floating-card>"}},"resizeable-panels":{render:function(){return'\n    <resizeable-panels-container>\n        <resizeable-panel>\n          <textarea class="panel-content">Panel 1\n          </textarea>\n        </resizeable-panel>\n        <resizeable-panel>\n          <div class="panel-content">\n            Panel 2\n          </div>\n        </resizeable-panel>\n        <resizeable-panel>\n          <div class="panel-content">\n            Panel 3\n          </div>\n        </resizeable-panel>\n      </resizeable-panels-container>'}},"tabs-container":{render:function(){return'\n    <tabs-container>\n      <tab-content>\n        <div class="panel-content">ohayo</div>\n      </tab-content>\n      <tab-content>\n        <div class="panel-content">hola</div>\n      </tab-content>\n    </tabs-container>'}},dev:{render:function(){return"<custom-element>custom element</custom-element>"}},gol:{render:function(){return'\n      <div style="height: 100vh">\n        <game-of-life></game-of-life>\n      </div>\n    '}}}).init()})()})();
//# sourceMappingURL=bundle.js.map