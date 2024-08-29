import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";
import "tailwindcss/tailwind.css"
Vue.config.productionTip = false


Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
