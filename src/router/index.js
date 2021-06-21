export default class Router {
  constructor(rootEl, routes) {
    this.$rootEl = rootEl;
    this._routes = routes;
  }

  async _renderPage(urlStr) {
    // before escaped: ^#(/[^#/\?]+)+(\?([^\?])+)?$
    const pattern = /\^#\(\/\[\^\/\\\?#\]\+\)\+\(\\\?\(\[\^\\\?\]\)\+\)\?\$/;
    const { hash } = new URL(urlStr);

    if (!pattern.test(hash)) return;

    const pageContent = '<h1>hello world</h1>';

    this.$rootEl.innerHTML = pageContent;
  }

  init() {
    window.addEventListener('hashchange', ({ newURL }) => {
      this._renderPage(newURL);
    });

    this._renderPage(window.location.href);
  }
}
