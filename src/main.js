import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU'
Vue.use(ElementUI, {size: 'small', locale});
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#root');
