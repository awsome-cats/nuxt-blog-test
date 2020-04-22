<template>
  <div>
    <section class="post-list">
      <post-preview
        id="1"
        :is-admin="isAdmin"
        title="Hellothere"
        preview-text="This is my first post!"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvixY4QGmYFbPhkU4UiZmFHyOfPibTEPvk3pZxy2u7AYtfDTO5&usqp=CAU"
      />
      <post-preview
        id="2"
        :is-admin="isAdmin"
        title="自動化とZoom"
        preview-text="自動化のすすめ"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvixY4QGmYFbPhkU4UiZmFHyOfPibTEPvk3pZxy2u7AYtfDTO5&usqp=CAU"
      />
      <post-preview
        id="3"
        :is-admin="isAdmin"
        title="パンデミック"
        preview-text="パンデミックが変えたこと"
        thumbnail="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvixY4QGmYFbPhkU4UiZmFHyOfPibTEPvk3pZxy2u7AYtfDTO5&usqp=CAU"
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
