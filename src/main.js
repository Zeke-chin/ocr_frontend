import Vue from "vue";

// 完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Row, Upload, Image, Dialog, Input, Select, Option } from "element-ui";
import JsonViewer from 'vue-json-viewer';
import 'vue-json-viewer/style.css'

// 进入router
import router from "./router";

// 引入代码高亮组件
import Highlight from './utils/highlight'; // 这里是你项目highlight.js所在路径
Vue.use(Highlight);


import App from "./App.vue";

Vue.config.productionTip = false;

// 完整引入
// Vue.use(ElementUI);

// 按需引入
Vue.use(Button);
Vue.use(JsonViewer);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Row);
Vue.use(Upload);
Vue.use(Image);
Vue.use(Dialog);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
