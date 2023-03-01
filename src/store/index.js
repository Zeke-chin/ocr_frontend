import Vue from 'vue'
import Vuex from 'vuex'
import { pathify } from '../config/vuexPlugins'

import ImgData from './modules/img'

Vue.use(Vuex)

Vue.config.devtools = true

export default new Vuex.Store({
  modules: {
    ImgData,
  },
  plugins: [pathify.plugin],
})
