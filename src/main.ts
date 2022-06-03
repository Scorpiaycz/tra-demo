import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import store from "@/plugins/vuex";
import "@/plugins/highlight";
import DatetimePicker from "vuetify-datetime-picker";
import axios from 'axios'

axios.defaults.baseURL = 'https://5000-scorpiaycz-trademo-pmhmzbkua3d.ws-us46.gitpod.io/anki'

axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false;

Vue.use(DatetimePicker);

new Vue({
  vuetify,
  router,
  store,
  render(h) { return h(App); },
}).$mount("#app");
