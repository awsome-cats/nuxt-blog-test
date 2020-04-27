<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">
        ブログを作成する
      </app-button>
      <app-button @click="onLogout">
        ログアウト
      </app-button>
    </section>
    <!---- 投稿された記事の表示 --->
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList is-admin :posts="loadedPosts" />
    </section>
    <!---- 投稿された記事の表示 end--->
  </div>
</template>

<script>

export default {
  layout: 'admin',
  middleware: 'auth',
  computed: {
    loadedPosts () {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
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
