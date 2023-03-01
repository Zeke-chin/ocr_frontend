import { make } from 'vuex-pathify'

const state = {
    imgData: {},
    file: {}
}

const mutations = {
    ...make.mutations(state),
}

const actions = {
    ...make.actions(state),
}

const getters = {
    ...make.getters(state),
    // 根据 Token 判断用户是否登陆
    getImgData (state) {
        return state.imgData
    },
    getImgFile (state) {
      return state.file
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
