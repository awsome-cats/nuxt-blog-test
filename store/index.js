export const state = () => ({
  state: {
    loadedPosts: []
  }
})

export const mutations = {
  setPosts (state, posts) {
    state.loadedPosts = posts
  }
}

export const actions = {
  nuxtServerInit (vuexContext, context) {
    return new Promise((resolve, reject) => {
      vuexContext.commit('setPosts', [
        {
          id: '1',
          title: '投稿1',
          previewText: '初投稿',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBbWvbtIKXHQpA8MZT146AQRLtVjrje5fQQjSij_UeudjJ2SvX&usqp=CAU'
        },
        {
          id: '2',
          title: '投稿2',
          previewText: '投稿2',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdz4yUO9vj48xRq2fqjel_XbaHo4lW-bFXgQ-eMIcG6WTEDWca&usqp=CAU'
        }, {
          id: '3',
          title: '投稿3',
          previewText: '投稿3',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqniWF-fNSWMNTjvW2s8Axuc7LjxOVX8fp7xBCteJvXd4_tlco&usqp=CAU'
        },
        {
          id: '4',
          title: '投稿4',
          previewText: '投稿4',
          thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTie-RNPNuofgrhFrHS83JqX7Kv8zYM7cWeueX77AAff9gMRMib&usqp=CAU'
        }
      ])
      // event.preventDefault()
      resolve()
    })
      // eslint-disable-next-line no-console
      .catch(e => console.log(e))
  },
  setPosts (vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  }
}

export const getters = {
  loadedPosts (state) {
    return state.loadedPosts
  }
}
