<template>
  <div>
    <div class="posts-page">
      <h1>This is posts page</h1>
    </div>
    <section class="post-list">
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
  .posts-page {
    display:flex;
    justify-content: center;
    align-items: center;
  }

  .post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>
