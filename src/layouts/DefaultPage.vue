<template>
  <PageHeader />
  <div
    class="px-1 md:px-0 bg-bgcolor-300 text-bgcolor-800 dark:bg-bgcolor-700 dark:text-bgcolor-300"
  >
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
  <PageFooter />
</template>

<script>
import { watch } from 'vue';

import PageHeader from './PageHeader.vue';
import PageFooter from './PageFooter.vue';

const titlePrefix = 'Model CPU • ';
const defaultTitle = 'Model CPU';

export default {
  components: { PageHeader, PageFooter },
  props: {
    // Title for <head>.
    title: {
      type: String,
      default: null,
    },
  },

  watch: {
    title(value) {
      if (document) {
        document.title = value ? `${titlePrefix}${value}` : defaultTitle;
      }
    },
  },
};
</script>
