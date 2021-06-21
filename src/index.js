import 'regenerator-runtime/runtime';

import './components/resizeable-panels-container';
import './components/resizeable-panel';
import './components/tabs-container';
import './components/tab-content';
import './components/floating-card';

import routes from './router/routes';

import Router from './router';

const router = new Router(
  document.querySelector('main'),
  routes,
);

router.init();
