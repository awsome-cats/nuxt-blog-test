<template>
  <div>
    <section class="post-list">
      <post-preview
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :is-admin="isAdmin"
        :title="post.title"
        :preview-text="post.previewText"
        :thumbnail="post.thumbnail"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
