export const mutations = {
  SET_CSRF_TOKEN (state, csrfToken) {
    state.csrfToken = csrfToken
    console.log('csrtTokenをStoreに格納しました')
  }
}

export const actions = {
  nuxtServerInit ({commit}, { req }) {
    console.log('nuxtServerInitの処理')
    if (req.cookies) {
      console.log('cookieが入っていたときの処理')
      commit('SET_CSRF_TOKEN', req.csrfToken())
    }
  },
}