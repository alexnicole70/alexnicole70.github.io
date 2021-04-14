import { configure } from "@storybook/vue";

import Vue from "vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueCarousel from "vue-carousel";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCarousel);

// every file with .stories.js ext are loaded
const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => {
    req(filename);
  });
}

configure(loadStories, module);
