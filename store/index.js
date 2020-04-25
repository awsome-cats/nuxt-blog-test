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
  }
}

export const actions = {
  async nuxtServerInit ({commit} ,{app}) {
    try {
      const data = await app.$axios.$get(process.env.API_URL + '/post.json')
      const newArray = []
      for(const key in data) {
        newArray.push({...data[key], id: key})
      }
      commit('setPosts', newArray)
    }
    catch(e){
     console.error(e)
   }
  },
  setPosts (vuexContext, post) {
    vuexContext.commit('setPosts', post)
  },
  async newPost({ commit }, post) {
    try {
      const createdPost = {...post, updatedDate: new Date() }
      const data = await this.$axios.$post(process.env.API_URL + '/post.json', createdPost)
      commit('addPost', {...createdPost, id: data.name})
    } catch(e) {
      console.error(e)
    }
    
    
      
  
  }
}

export const getters = {
  loadedPosts (state) {
    return state.loadedPosts
  }
}
