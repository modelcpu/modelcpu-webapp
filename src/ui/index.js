// src/ui/index.js

/**
 * This file is part of the ModelCPU web application.
 *
 * @license AGPL-3.0-or-later
 * @copyright Copyright © 2021 [ModelCPU](https://modelcpu.com).
 */

import DefaultPage from '../layouts/DefaultPage.vue';
import Panel from './components/Panel.vue';

import './index.css';

export default (app) => {
  app.component('DefaultPage', DefaultPage);
  app.component('Panel', Panel);
};
