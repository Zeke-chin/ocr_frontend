import Vue from 'vue';

// 完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, Upload, Image, Dialog } from 'element-ui';

// 进入router
import router from './router';


import App from './App.vue';


Vue.config.productionTip = false

// 完整引入
// Vue.use(ElementUI);

// 按需引入
Vue.use(Button);
Vue.use(Row);
Vue.use(Upload);
Vue.use(Image);
Vue.use(Dialog)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});