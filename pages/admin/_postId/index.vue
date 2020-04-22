<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Mark',
        title: '私の投稿',
        content: 'あなたは素敵なリモートワーク',
        thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyVHRLlDbRXRr5-N62PlJJmDmqZgiZqq3fjBFnPNCMtwcryulT&usqp=CAU'
      }
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
