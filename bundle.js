(()=>{var t={66:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,t)})(t)}function r(t,e,n){return(r=i()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(s,t);var o,r,a,l,f=(o=s,r=i(),function(){var t,e=u(o);if(r){var i=u(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function s(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(t=f.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.innerHTML='\n      <style>\n        * {\n          box-sizing: border-box;\n        }\n\n        #container {\n          width: 300px;\n          height: 400px;\n          margin: 50px auto;\n          perspective: 800px\n        }\n        \n        #card {\n          position: relative;\n          transform-style: preserve-3d;\n          width: 100%;\n          height: 100%;\n          margin: 50px auto;\n          perspective: -10px;\n          user-select: none;\n          background: white;\n          transition: translate 0.8s, rotate 0.8s\n        }\n\n        #card:hover {\n\n        }\n\n        #overlay {\n          position: absolute;\n          top: 0;\n          left: 0;\n          background: black;\n          opacity: 0.25;\n          width: 100%;\n          height: 100%;\n        }\n\n      </style>\n      <div id="container">\n        <div id="card">\n          <slot></slot>\n          <div id="overlay"></div>\n        <div>\n      </div>\n    ',t}return a=s,(l=[{key:"connectedCallback",value:function(){var t,e;this.$container=this._shadowRoot.getElementById("container"),this.$card=this._shadowRoot.getElementById("card"),this.$overlay=this._shadowRoot.getElementById("overlay"),this.$container.addEventListener("mousemove",(t=this._handleMouseMove.bind(this),50,e=0,function(){var n=Date.now();n-e>=50&&(t.apply(this,arguments),e=n)})),this.$container.addEventListener("mouseleave",this._handleMouseLeave.bind(this))}},{key:"_handleMouseMove",value:function(t){var e=this.$container,n=e.offsetWidth,o=e.offsetHeight,r=e.offsetLeft,i=e.offsetTop,c=t.pageX,u=n/2,a=o/2,l=t.pageY-i,f=100/u*(c-r-u)*30/100,s=100/a*(l-a)*30/100*-1,p=100/o*l;this.$card.style.transform="\n      translateZ(10px)\n      rotateY(".concat(f,"deg)\n      rotateX(").concat(s,"deg)\n    "),this.$overlay.style.opacity=p/200}},{key:"_handleMouseLeave",value:function(){this.$card.style.transform="\n      translateZ(0px)\n      rotateX(0deg)\n      rotateY(0deg)\n    ",this.$overlay.style.opacity=.25}}])&&e(a.prototype,l),s}(o(HTMLElement));customElements.define("floating-card",a)},133:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,t)})(t)}function r(t,e,n){return(r=i()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(l,t);var o,r,a=(o=l,r=i(),function(){var t,e=u(o);if(r){var i=u(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function l(){return e(this,l),a.apply(this,arguments)}return l}(o(HTMLElement));customElements.define("resizeable-panel",a)},893:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,t)})(t)}function r(t,e,n){return(r=i()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=document.createElement("template");a.innerHTML='\n  <style>\n    .container {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      background-color: grey;\n      overflow: hidden;\n      padding: 8px 0;\n    }\n\n    ::slotted(resizeable-panel) {\n      flex: 1;\n      background-color: white;\n\n    }\n\n    ::slotted(.panel-resizer) {\n      width: 16px;\n      min-height: 48px;\n      cursor: ew-resize;\n      display: grid;\n      place-content: center;\n      user-select: none;\n    }\n\n    ::slotted(.resizer-symbol) {\n      background-color: black;\n      width: 4px;\n      height: 10px;\n    }\n  </style>\n\n  <div class="container">\n    <slot></slot>\n  </div>\n';var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(p,t);var o,r,l,f,s=(o=p,r=i(),function(){var t,e=u(o);if(r){var i=u(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.append(a.content.cloneNode(!0)),t._acceptedChildrenName="RESIZEABLE-PANEL",t}return l=p,(f=[{key:"_createMouseListener",value:function(t){var e=function(e){var n=t.previousElementSibling,o=t.nextElementSibling,r=n.getBoundingClientRect(),i=o.getBoundingClientRect(),c=t.getBoundingClientRect();n.style.flex="0 1 auto",n.style.width="".concat(e.pageX-c.width/2-r.left,"px"),o.style.flex="0 1 auto",o.style.width="".concat(i.right-c.width/2-e.pageX,"px")},n=function(){window.removeEventListener("mousemove",e)};return function(){window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}}},{key:"connectedCallback",value:function(){var t=this;this.$container=this._shadowRoot.querySelector(".container"),this.$children=Array.from(this.children),this.$children.forEach((function(e,n){if(n&&e.nodeName===t._acceptedChildrenName){var o=document.createElement("div");o.classList.add("panel-resizer"),o.addEventListener("mousedown",t._createMouseListener(o,n)),e.parentNode.insertBefore(o,e)}}))}}])&&e(l.prototype,f),p}(o(HTMLElement));customElements.define("resizeable-panels-container",l)},996:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function r(t){var e="function"==typeof Map?new Map:void 0;return(r=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return i(t,arguments,a(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,t)})(t)}function i(t,e,n){return(i=c()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(p,t);var r,i,l,f,s=(r=p,i=c(),function(){var t,e=a(r);if(i){var n=a(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return o(this,t)});function p(){return e(this,p),s.apply(this,arguments)}return l=p,(f=[{key:"title",get:function(){return this.getAttribute("title")},set:function(t){this.setAttribute("title",t)}}])&&n(l.prototype,f),p}(r(HTMLElement));customElements.define("tab-content",l)},782:()=>{function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e):n}function o(t){var e="function"==typeof Map?new Map:void 0;return(o=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return r(t,arguments,u(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,t)})(t)}function r(t,e,n){return(r=i()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&c(r,n.prototype),r}).apply(null,arguments)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=document.createElement("template");a.innerHTML='\n  <style>\n    .tab-title-container {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));\n    }\n\n    .tab-title {\n      height: 3em;\n      border: none;\n      border-bottom: 4px solid #bdbdbd;\n      background: transparent;\n      font-size: 1em;\n      cursor: pointer;\n    }\n\n    .tab-title:hover {\n      background: rgba(100, 100, 100, 0.2);\n    }\n\n    .tab-title.active {\n      font-weight: bold;\n      border-bottom: 4px solid black;\n    }\n\n    ::slotted(tab-content) {\n      display: none\n    }\n\n    ::slotted(tab-content.active) {\n      display: block\n    }\n\n  </style>\n\n  <div class="tab-title-container">\n  </div>\n  <slot></slot>\n\n';var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(y,t);var o,r,l,f,s,p=(o=y,r=i(),function(){var t,e=u(o);if(r){var i=u(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return n(this,t)});function y(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),(t=p.call(this))._shadowRoot=t.attachShadow({mode:"open"}),t._shadowRoot.append(a.content.cloneNode(!0)),t.$tabTitleContainer=t._shadowRoot.querySelector(".tab-title-container"),t.activeTab="0",t}return l=y,s=[{key:"observedAttributes",get:function(){return["active-tab"]}}],(f=[{key:"_createTab",value:function(t,e){var n=this,o=e.toString(),r=document.createElement("button");r.textContent=t.title||o,r.className="tab-title",r.addEventListener("click",(function(){n.activeTab=o})),t.setAttribute("index",o),o===this.activeTab&&(t.classList.add("active"),r.classList.add("active")),this.$tabTitleContainer.append(r)}},{key:"connectedCallback",value:function(){var t=this.querySelectorAll("tab-content");t.length&&Array.from(t).forEach(this._createTab.bind(this))}},{key:"activeTab",get:function(){return this.getAttribute("active-tab")},set:function(t){this.setAttribute("active-tab",t)}},{key:"attributeChangedCallback",value:function(t,e,n){"active-tab"===t&&this._toggleActiveTabClass(n)}},{key:"_toggleActiveTabClass",value:function(t){var e=this._shadowRoot.querySelectorAll(".tab-title"),n=this.querySelectorAll("tab-content");Array.from(n).forEach((function(n,o){n.getAttribute("index")===t?(n.classList.add("active"),e[o].classList.add("active")):(n.classList.remove("active"),e[o].classList.remove("active"))}))}}])&&e(l.prototype,f),s&&e(l,s),y}(o(HTMLElement));customElements.define("tabs-container",l)}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(893),n(133),n(782),n(996),n(66)})()})();
//# sourceMappingURL=bundle.js.map