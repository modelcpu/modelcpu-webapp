// src/home/index.js

/**
 * This file is part of the ModelCPU web application.
 *
 * @license AGPL-3.0-or-later
 * @copyright Copyright © 2021 [ModelCPU](https://modelcpu.com).
 */

import HomePage from './HomePage.vue';
import store from './home.store';

export default (app, { routes, modules }) => {
  modules.home = store;
  routes.push({ path: '/', component: HomePage });
};
