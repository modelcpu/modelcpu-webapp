// src/home/home.store.js

/**
 * This file is part of the ModelCPU web application.
 *
 * @license AGPL-3.0-or-later
 * @copyright Copyright © 2021 [ModelCPU](https://modelcpu.com).
 */

/*
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
*/

if (document) {
  // document.documentElement.classList.add('dark');
}

export default {
  namespaced: true,

  state: () => ({
    isDarkMode: true,
  }),

  // mutations: { ... },
  // actions: { ... },
  // getters: { ... }
};
