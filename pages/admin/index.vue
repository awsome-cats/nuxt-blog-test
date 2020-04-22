<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">
        Create Post
      </app-button>
    </section>

    <!---- 投稿された記事の表示 --->
    <section class="existing-posts">
      <h1>Existing Posts</h1>
    </section>
    <!---- 投稿された記事の表示 end--->
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
export default {
  layout: 'admin',
  components: {
    AppButton
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}
.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

</style>
