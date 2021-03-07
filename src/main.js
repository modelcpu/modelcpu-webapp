// src/main.js

/**
 * This file is part of the ModelCPU web application.
 *
 * @license AGPL-3.0-or-later
 * @copyright Copyright © 2021 [ModelCPU](https://modelcpu.com).
 */

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";

import "./index.css";

import home from "./home";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...home.routes],
});

createApp(App).use(router).mount("#app");
