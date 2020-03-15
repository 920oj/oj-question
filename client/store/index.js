export const mutations = {
  SET_CSRF_TOKEN (state, csrfToken) {
    state.csrfToken = csrfToken
  }
}

export const actions = {
  nuxtServerInit ({commit}, { req }) { // 初回アクセス時にTokenをStoreに格納
    if (req.cookies) {
      commit('SET_CSRF_TOKEN', req.csrfToken())
    }
  },
}