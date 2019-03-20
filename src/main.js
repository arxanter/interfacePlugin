import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Vue-resize
import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'


library.add(fas, far, fab);
Vue.component('icon', FontAwesomeIcon);

Vue.use(ElementUI, {size: 'mini', locale});
Vue.use(VueResize);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#root');
