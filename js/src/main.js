import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

const HTTP = axios.create({
  // headers: { 'X-CSRFToken': window.csrfToken }
  baseURL: process.env.NODE_ENV == "production" ? process.env.CONNECT_URL : ""
});

Vue.prototype.$axios = HTTP;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
