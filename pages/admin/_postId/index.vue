<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit='onSubmitted'/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
// import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  async asyncData({$axios, params}) {
    try {
      const response = await $axios.$get(process.env.API_URL + '/post/' + params.postId + '.json')
       return {
        loadedPost: {
          ...response,
          id: params.postId }
      }
    } catch(err) {
      console.log(err)
    }
  },
   
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost', editedPost)
      .then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped>

.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>
