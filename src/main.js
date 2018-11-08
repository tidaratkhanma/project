import Vue from "vue";
import App from "./App";
import router from "./router/index";

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
