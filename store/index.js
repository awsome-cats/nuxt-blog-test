// import axios from 'axios'

export const state = () => ({
  state: {
    loadedPosts: [],
    token: null
  }
})

export const mutations = {
  setPosts (state, posts) {
    state.loadedPosts = posts
  },
  addPost (state, post) {
    state.loadedPosts.push(post)
  },
  editPost (state, editedPost) {
    // find specific single data
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
    state.loadedPosts[postIndex] = editedPost
  },
  setToken (state, token) {
    state.token = token
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { app }) {
    try {
      const data = await app.$axios.$get(process.env.API_URL + '/post.json')
      const newPosts = []
      for (const key in data) {
        newPosts.push({ ...data[key], id: key })
      }
      commit('setPosts', newPosts)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },

  async newPost (vuexContext, post) {
    try {
      const createdPost = { ...post, updatedDate: new Date() }
      const data = await this.$axios.$post(process.env.API_URL + '/post.json?auth=' + vuexContext.state.token, createdPost)
      vuexContext.commit('addPost', { ...createdPost, id: data.name })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }
  },
  editPost (vuexContext, editedPost) {
    return this.$axios.$put(process.env.API_URL + '/post/' + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
    // eslint-disable-next-line arrow-parens
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
  },
  setPosts ({ commit }, post) {
    commit('setPosts', post)
  },
  authenticateUser (vuexContext, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.FB_APIkey
    if (!authData.isLogin) {
      authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.FB_APIkey
    }
    return this.$axios.$post(authUrl, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then((result) => {
        vuexContext.commit('setToken', result.idToken)
        vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
      })
      // eslint-disable-next-line no-console
      .catch(e => console.log(e))
  },
  setLogoutTimer (vuexContext, duration) {
    setTimeout(() => {
      vuexContext.commit('clearToken')
    }, duration)
  },
  logout (vuexContext) {
    vuexContext.commit('clearToken')
  }
}

export const getters = {
  loadedPosts (state) {
    return state.loadedPosts
  },
  isAuthenticated (state) {
    return state.token != null
  }
}
