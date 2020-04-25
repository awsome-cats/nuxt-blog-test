// import axios from 'axios'

export const state = () => ({
  state: {
    loadedPosts: []
  }
})

export const mutations = {
  setPosts (state, posts) {
    state.loadedPosts = posts
  },
  addPost (state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    // find specific single data
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
    state.loadedPosts[postIndex] = editedPost
  } 
}

export const actions = {
  async nuxtServerInit ({commit} ,{app}) {
    try {
      const data = await app.$axios.$get(process.env.API_URL + '/post.json')
      const newPosts = []
      for(const key in data) {
        newPosts.push({...data[key], id: key})
      }
      commit('setPosts', newPosts)
    }
    catch(e){
     console.error(e)
   }
  },
  
  async newPost({ commit }, post) {
    try {
      const createdPost = {...post, updatedDate: new Date() }
      const data = await this.$axios.$post(process.env.API_URL + '/post.json', createdPost)
      commit('addPost', {...createdPost, id: data.name})
    } catch(e) {
      console.error(e)
    }
  },
  editPost(vuexContext, editedPost) {
    return this.$axios.$put(process.env.API_URL + '/post/' + editedPost.id + '.json', editedPost)
    .then(res => {
      vuexContext.commit('editPost', editedPost)
    })
      .catch(e => {
        console.log(e)
      })
  },
  setPosts ({commit}, post) {
    commit('setPosts', post)
  },
}

export const getters = {
  loadedPosts (state) {
    return state.loadedPosts
  }
}
