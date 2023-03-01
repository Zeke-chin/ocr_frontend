import pathify from 'vuex-pathify'
import VuexPersist from 'vuex-persist'

pathify.options.mapping = 'simple'
pathify.options.deep = true

const persist = new VuexPersist({
  // 仅对 vuex 中 session 模块进行本地存储
  modules: [],
})

export { pathify, persist }
