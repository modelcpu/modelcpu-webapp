// src/main.js

/**
 * This file is part of the ModelCPU web application.
 *
 * @license AGPL-3.0-or-later
 * @copyright Copyright © 2021 [ModelCPU](https://modelcpu.com).
 */

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createStore } from 'vuex';

import home from './home';
import ui from './ui';

const routes = [];
const modules = {};
const context = { routes, modules };

createApp(App)
  // Core elements.
  .use(ui, context)

  // Application elements.
  .use(home, context)

  // Create the router and Vuex store *after* application elements have
  // populated routes and store modules.
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes,
    })
  )
  .use(createStore({ modules }))
  .mount('#app');
