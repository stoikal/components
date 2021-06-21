import traverseObject from '../utils/traverseObject';

export default class Router {
  constructor(rootEl, routes) {
    this.$rootEl = rootEl;
    this._routes = routes;
  }

  async _renderPage(urlStr) {
    const pattern = /^#(\/[^#/?]+\/?)+(\?([^#/?])*)?$/;
    const { hash } = new URL(urlStr);

    if (!pattern.test(hash)) return;

    const [pathStr, query] = hash.split('?');
    const fullPath = pathStr.replace(/(#\/)|(\/$)/g, '');
    const paths = fullPath.split('/');

    const bag = {
      query,
    };

    console.log(paths, this._routes);
    const pageContent = traverseObject(this._routes, paths, { resolver: 'index' });
    try {
      this.$rootEl.innerHTML = (pageContent || this._routes._404).render(bag);
    } catch {
      this.$rootEl.innerHTML = this._routes._error.render(bag);
    }
  }

  init() {
    window.addEventListener('hashchange', ({ newURL }) => {
      this._renderPage(newURL);
    });

    this._renderPage(window.location.href);
  }
}
